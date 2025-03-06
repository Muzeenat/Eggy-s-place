import React from "react";

const Hero = () => {
  return (
    <>
      <main className="bg-[url(https://res.cloudinary.com/duyzextss/image/upload/v1741088450/Hero-img_s4mihu.svg)] h-[300px] bg-cover bg-center w-full lg:h-[600px] flex justify-center items-center">
        {/* section for hero context */}
        <section className="w-[420px] lg:w-[844px] gap-[25px] lg:gap-[84px] flex flex-col items-center justify-center">
          {/* div for first context */}
          <div className="text-center text-white ">
            <h2 className=" font-[500] text-[56px] leading-[80%] lg:leading-[100%] tracking-[7%] py-[43px]">
              The
              <span className="font-Rammetto text-[#B67B0F] lg:text-[56px]  font-[400]">
                ZING
              </span>{" "}
              in every bite{" "}
            </h2>
            <p className="text-[23px] lg:text-[28px] text-[#FBFBFB] leading-[100%]">
              Savor the flavor! Explore our delicious menu and order now for a
              taste sensation!
            </p>
          </div>

          {/* div for buttons  */}
          <div className=" flex flex-row gap-[12px]">
            <button className="bg-[#B67B0F] rounded-[31px] px-[40px] lg:px-[56px] lg:py-[15px] text-[15px] lg:text-[20px] font-[500] leading-[100%] text-[#FFFFFF]">
              Order Now!
            </button>
            <button className="bg-[#FBFBFB] rounded-[32px] py-[15px] px-[15px] lg:px-[20px] text-[15px] lg:text-[20px] font-[500] leading-[100%] text-[#100101]">
              View Menu
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;

{
  /* <div className=' absolute text-center h-screen flex items-center justify-center '>

<h1 className='text-white relative'>The <span className='text-[#B67B0F] font-[500] text-[20px] font-rammetto'>ZING</span> in every bite</h1>
<p className='text-white '>Savor the flavor! Explore our delicious menu and order now for a taste sensation!</p>
    </div> */
}
