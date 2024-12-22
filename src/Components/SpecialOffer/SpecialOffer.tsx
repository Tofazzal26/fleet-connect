import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const SpecialOffer = () => {
  return (
    <div className="my-10">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col items-center gap-4">
          <div className="bg-[#e9f2ff] rounded-[15px] flex-1">
            <div className="lg:px-[70px] px-[30px] py-[30px] lg:py-[70px]">
              <div>
                <h2 className="text-[20px] lg:text-[30px] text-black lg:w-[200px]">
                  Are You Looking For a Car ?
                </h2>
                <p className="lg:w-[400px] mt-4 lg:mb-6">
                  We are committed to providing our customers with exceptional
                  service.
                </p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center bg-[#fee100] px-6 text-black py-4 gap-1 rounded-[15px]">
                    Get Started{" "}
                    <ArrowUpRight size={20} className="text-gray-700" />
                  </button>
                  <Image src="/car.svg" height={110} width={110} alt="car" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ffe9f3] rounded-[15px] flex-1">
            <div className="lg:px-[70px] px-[30px] py-[30px] lg:py-[70px]">
              <div>
                <h2 className="text-[20px] lg:text-[30px] text-black lg:w-[200px]">
                  Do You Want to Sell a Car ?
                </h2>
                <p className="lg:w-[400px] mt-4 mb-2 lg:mb-6">
                  We are committed to providing our customers with exceptional
                  service.
                </p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center bg-black px-6 text-white py-4 gap-1 rounded-[15px]">
                    Get Started <ArrowUpRight size={20} />
                  </button>
                  <Image src="/car2.svg" height={110} width={110} alt="car" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
