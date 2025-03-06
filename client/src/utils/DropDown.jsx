// import { useState } from "react";
// import dropdownImg from "../assets/drop-down-img.svg";
// import arrowUp from "../assets/arrow-up.svg"

// export const LocationDropDownFN = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   function toggleDropdown() {
//     isClicked ? setIsClicked(false);
//   };

//   return (
//     <div className="relative inline-block">
//       {/* Image that triggers dropdown */}
//       <img
//         src={dropdownImg}
//         alt="Dropdown"
//         onClick={toggleDropdown}
//         className="cursor-pointer"
//       />

//       {/* Dropdown menu */}
//       {isOpen && (
//         <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded">
//           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delta</li>
//           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Lagos</li>
//           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Abuja</li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DropdownImage;