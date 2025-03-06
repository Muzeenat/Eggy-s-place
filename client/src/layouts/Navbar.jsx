import React from "react";
import navLogo from "../assets/nav-logo.svg";
import locationImg from "../assets/Location-img.svg";
import dropdownImg from "../assets/drop-down-img.svg";
import { Link } from "react-router-dom";
import cartImg from "../assets/Cart-img.svg";
import loginIcon from "../assets/Login-icon.svg";
// import { LocationDropDownFN } from "../utils/DropDown";

const Navbar = () => {
  return (
    <>
      <header className=' bg-[#100101]'>
    <nav className='wrapper flex justify-between items-center '>
        <div className='flex gap-4 items-center'>
            <img src={navLogo} alt="nav-logo" className='w-full h-auto' />
            <img src={locationImg} alt="location-img" className='w-full h-auto' />
            <h4 className='text-[#F0F0F0] text-[20px] font-[500] hidden md:block'>location</h4>
            {/* <div>
              <LocationDropDownFN/>
            </div> */}
            <img src={dropdownImg} alt="dropdown-img" className='w-6 h-6' />
        </div>
        <div>
            <form>
                <input type="text" placeholder='Search' className='hidden lg:block w-[300px] h-[56px] rounded-[32px] outline-none bg-[#F0F0F0] placeholder:text-[#100101] ps-[30px] border font-[400] text-[20px]' />
            </form>
        </div>
        <div className='flex gap-4 items-center'>
            <h2 className='font-[500] text-[20px] text-[#FBFBFB] hidden lg:block'>All Products</h2>
            <ul className='flex gap-4'>
                <li className="flex items-center h-[56px] py-[15px] px-[20px] bg-[#B67B0F] rounded-[32px]">
                    <img src={cartImg} alt="cart-img" />
                    <Link className="px-2 text-[#FBFBFB] font-[500] text-[20px]"> 
                        <span className="hidden md:inline-block">Cart</span> 30 
                    </Link>
                </li>
                <li className='flex items-center w-[56px] md:w-[124px] h-[56px] py-[15px] px-[20px] bg-[#F0F0F0] rounded-[32px]'>
                    <img src={loginIcon} alt="login-icon" />
                    <Link className='ps-2 text-[#100101] font-[500] text-[20px] hidden md:inline'> login </Link>
                </li>
            </ul>
        </div>
    </nav>
</header>
    </>
  );
};

export default Navbar;
