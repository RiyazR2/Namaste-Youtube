import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Menu_Logo from "../utils/Images/Menu_Logo.png";
import Youtube_Logo from "../utils/Images/Youtube_Logo.png";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={Menu_Logo}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="youtube-logo" src={Youtube_Logo} />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2  rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="   bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;

//////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { toggleMenu } from "../utils/appSlice";
// import Menu_Logo from "../utils/Images/Menu_Logo.png";
// import Youtube_Logo from "../utils/Images/Youtube_Logo.png";
// import { url } from "../utils/constants";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     if (searchQuery) {
//       const timer = setTimeout(() => getSearchSuggestion(), 200);
//       return () => {
//         clearTimeout(timer);
//       };
//     } else {
//       setSuggestions([]);
//     }
//   }, [searchQuery]);

//   const getSearchSuggestion = async () => {
//     const searchUrl = `${url}${searchQuery}`;
//     console.log("Fetching from URL:", searchUrl); // Log the full URL

//     try {
//       const response = await fetch(searchUrl);
//       if (!response.ok) {
//         console.error(
//           "Network response was not ok:",
//           response.status,
//           response.statusText
//         );
//         throw new Error(
//           `Network response was not ok: ${response.status} ${response.statusText}`
//         );
//       }
//       const json = await response.json();
//       setSuggestions(Array.isArray(json[1]) ? json[1] : []); // Ensure json[1] is an array
//     } catch (error) {
//       console.error("Failed to fetch search suggestions:", error);
//       setSuggestions([]); // Set to an empty array on error
//     }
//   };

//   const dispatch = useDispatch();

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };

//   return (
//     <div className="grid grid-flow-col p-5 m-2 shadow-lg">
//       <div className="flex col-span-1">
//         <img
//           onClick={() => toggleMenuHandler()}
//           className="h-8 cursor-pointer"
//           alt="menu"
//           src={Menu_Logo}
//         />
//         <a href="/">
//           <img className="h-8 mx-2" alt="youtube-logo" src={Youtube_Logo} />
//         </a>
//       </div>
//       <div className="col-span-10 px-10">
//         <div>
//           <input
//             className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
//             🔍
//           </button>
//         </div>
//         {suggestions.length > 0 && (
//           <div className="bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
//             <ul>
//               {suggestions.map((s, index) => (
//                 <li
//                   key={index}
//                   className="py-2 px-3 shadow-sm hover:bg-gray-100"
//                 >
//                   🔍 {s}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       <div className="col-span-1">
//         <img
//           className="h-8"
//           alt="user"
//           src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;
