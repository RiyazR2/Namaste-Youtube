// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addMessage } from "../utils/chatSlice";
// import { generateRandomName, makeRandomMessage } from "../utils/helper";
// import ChatMessage from "./ChatMessage";

// const LiveChat = () => {
//   const [liveMessage, setLiveMessage] = useState("");
//   const dispatch = useDispatch();

//   const chatMessages = useSelector((store) => store.chat.messages);

//   useEffect(() => {
//     const i = setInterval(() => {
//       // API Polling

//       dispatch(
//         addMessage({
//           name: generateRandomName(),
//           message: makeRandomMessage() + "🚀",
//         })
//       );
//     }, 1000);

//     return () => clearInterval(i);
//   }, []);

//   return (
//     <>
//       <div className="w-auto h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
//         <div>
//           {
//             // Disclaimer: Don't use indexes as keys
//             chatMessages.map((c, i) => (
//               <ChatMessage key={i} name={c.name} message={c.message} />
//             ))
//           }
//         </div>
//       </div>

//       <form
//         className="w-full p-1 ml-2 border border-black flex"
//         onSubmit={(e) => {
//           e.preventDefault();

//           dispatch(
//             addMessage({
//               name: "Riyaz Pathan",
//               message: liveMessage,
//             })
//           );

//           // to clear input after send
//           setLiveMessage("");
//         }}
//       >
//         <input
//           className="px-2 w-[320px] border border-black "
//           type="text"
//           value={liveMessage}
//           onChange={(e) => {
//             setLiveMessage(e.target.value);
//           }}
//         />
//         <button className="px-2 mx-1 bg-green-100">Send</button>
//       </form>
//     </>
//   );
// };
// export default LiveChat;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage() + "🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="w-auto h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-full p-1 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Riyaz Pathan",
              message: liveMessage,
            })
          );

          // to clear input after send
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-[320px] border border-black "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-1 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
