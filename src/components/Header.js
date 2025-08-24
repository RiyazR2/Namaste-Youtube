// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleMenu } from "../utils/appSlice";
// import Menu_Logo from "../utils/Images/Menu_Logo.png";
// import Youtube_Logo from "../utils/Images/Youtube_Logo.png";
// import { YOUTUBE_SEARCH_API } from "../utils/constants";
// import { cacheResults } from "../utils/searchSlice";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const searchCache = useSelector((store) => store.search);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchCache[searchQuery]) {
//         setSuggestions(searchCache[searchQuery]);
//       } else {
//         getSearchSuggestion();
//       }
//     }, 200);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchQuery]);

//   const getSearchSuggestion = async () => {
//     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//     const json = await data.json();
//     setSuggestions(json[1]);

//     dispatch(
//       cacheResults({
//         [searchQuery]: json[1],
//       })
//     );
//   };

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchQuery(suggestion);
//     setShowSuggestions(false);
//   };

//   const handleSearchClick = () => {
//     // alert("Will Work on it");
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
//             onFocus={() => setShowSuggestions(true)}
//             onBlur={() => setShowSuggestions(false)}
//           />
//           <button
//             className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
//             onClick={handleSearchClick}
//           >
//             🔍
//           </button>
//         </div>
//         {showSuggestions && (
//           <div className="absolute bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100 cursor-pointer z-50">
//             <ul>
//               {suggestions.map((s) => (
//                 <li
//                   key={s}
//                   className="py-2 px-3 shadow-sm hover:bg-gray-100"
//                   onMouseDown={() => handleSuggestionClick(s)}
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

import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Menu_Logo from "../utils/Images/Menu_Logo.png";
import Youtube_Logo from "../utils/Images/Youtube_Logo.png";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSuggestion = useCallback(async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }, [searchQuery, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, getSearchSuggestion]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleSearchClick = async () => {
    // alert("Will Work on it");
    const data2 = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        searchQuery +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data2.json();
    console.log(json);
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
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
            onClick={handleSearchClick}
          >
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100 cursor-pointer z-50">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                  onMouseDown={() => handleSuggestionClick(s)}
                >
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
