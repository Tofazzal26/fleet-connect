"use client";

import { Check } from "lucide-react";

const QuickPriceCheck: React.FC = () => {
  return (
    <div>
      <div className=" bg-[#f3f7fb] py-10">
        <div className="container mx-auto">
          <div>
            <h2 className="text-[26px] lg:text-[40px] text-center mb-6 lg:mb-14">
              Quick Price Check
            </h2>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            <div className=" bg-white relative">
              <div className="px-8 py-6">
                <h2 className="text-[24px] mt-2">Hourly Rate</h2>
                <p className="md:w-[220px] mt-2">Start from $60</p>
              </div>
              <div className="absolute top-[-20px] left-[30px] bg-[#fee100] text-black rounded-full p-2">
                <Check size={20} strokeWidth={4} />
              </div>
            </div>
            <div className=" bg-white relative">
              <div className="px-8 py-6">
                <h2 className="text-[24px] mt-2">LGA AIRPORT</h2>
                <p className="md:w-[220px] mt-2">Start from $80.00</p>
              </div>
              <div className="absolute top-[-20px] left-[30px] bg-[#fee100] text-black rounded-full p-2">
                <Check size={20} strokeWidth={4} />
              </div>
            </div>
            <div className=" bg-white relative">
              <div className="px-8 py-6">
                <h2 className="text-[24px] mt-2">JFK AIRPORT</h2>
                <p className="md:w-[220px] mt-2">Start from $90.00</p>
              </div>
              <div className="absolute top-[-20px] left-[30px] bg-[#fee100] text-black rounded-full p-2">
                <Check size={20} strokeWidth={4} />
              </div>
            </div>
            <div className=" bg-white relative">
              <div className="px-8 py-6">
                <h2 className="text-[24px] mt-2">EWR AIRPORT</h2>
                <p className="md:w-[220px] mt-2">Start from $100.00</p>
              </div>
              <div className="absolute top-[-20px] left-[30px] bg-[#fee100] text-black rounded-full p-2">
                <Check size={20} strokeWidth={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPriceCheck;