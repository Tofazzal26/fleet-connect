"use client";
import BannerStyle from "./BannerStyle/BannerStyle.module.css";

const Banner: React.FC = () => {
  return (
    <div>
      <div className="relative md:w-full md:h-[93vh] h-[400px] text-white bg-cover bg-no-repeat bg-center bg-[url('/slider1.png')]">
        <div className="inset-0 bg-gray-900 absolute opacity-50 "></div>
        <div>
          <div className="flex justify-center items-center flex-col  translate-y-[100px] md:translate-y-[270px]">
            <h2 className="text-[19px]">Grow Up Your Lifestyle</h2>
            <h2 className="md:text-[80px] text-[40px] md:w-[800px] text-center leading-[45px] md:leading-[75px] md:mt-4 mt-2 px-4 md:px-0">
              Quality Car Rental In The Town, Cheap
            </h2>
            <div className="flex items-center gap-2 md:mt-8 mt-4">
              <button
                className={`text-[18px] border-2 ${BannerStyle.bannerStyle} px-8 py-2 md:px-10 md:py-3`}
              >
                View Details
              </button>
              <button
                className={`bg-[#fee100] text-[18px] ${BannerStyle.bannerStyleBtn} border-none px-[25px] md:px-[36px] py-[10px] md:py-[14px] text-black`}
              >
                Booking Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
