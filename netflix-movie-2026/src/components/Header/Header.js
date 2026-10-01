// import React from "react";

// import "./Header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const Header = () => {
//   return (
//     <div className="header_outer_container">
//       <div className="header_container">
//         <div className="header_left">
//           <ul>
//             <li>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
//                 alt="Netflix Logo"
//               />
//             </li>

//             <li>Home</li>
//             <li>TV Shows</li>
//             <li>Movies</li>
//             <li>New & Popular</li>
//             <li>My List</li>
//             <li>Browse by Languages</li>
//           </ul>
//         </div>
//         <div className="header_right">
//           <ul>
//             <li>
//               <SearchIcon />
//             </li>
//             <li>
//               <NotificationsActiveIcon />
//             </li>
//             <li>
//               <AccountBoxIcon />
//             </li>
//             <li>
//               <ArrowDropDownIcon />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header_outer_container ${show ? "nav__black" : ""}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li className="logo_container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                className="header_logo"
              />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li className="icon_item">
              <SearchIcon />
            </li>
            <li className="icon_item">
              <NotificationsActiveIcon />
            </li>
            <li className="icon_item profile_item">
              <AccountBoxIcon />
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;