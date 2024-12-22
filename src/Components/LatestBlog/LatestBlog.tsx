import LatestStyle from "./LatestStyle/LatestStyle.module.css";

const LatestBlog = () => {
  return (
    <div>
      <div className="bg-[#f3f7fb]">
        <div className="container mx-auto">
          <div className="py-10">
            <div>
              <h2 className="text-[26px] lg:text-[40px] text-center">
                Latest Blog Posts
              </h2>
              <p className="mx-auto text-center lg:w-[700px] text-gray-600 lg:mb-14 mb-6">
                Car blogs cover essential tips for maintaining your engine, the
                growing popularity of electric vehicles, must-have accessories
                for comfortable road trips, and ways to improve fuel efficiency
                for cost-effective driving.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1">
              <div className="relative lg:p-0 p-2">
                <figure
                  className={`${LatestStyle.imageParent} lg:w-[450px] rounded-lg`}
                >
                  <img
                    src="/blog1.jpg"
                    alt="Shoes"
                    className={`rounded-xl ${LatestStyle.ImageAnimation} h-[300px]`}
                  />
                </figure>
                <div className="hidden lg:block">
                  <button className="bg-white rounded-full absolute z-10 px-4 py-[6px] top-5 left-5 hover:transition-all hover:text-[#e7b98c] cursor-pointer">
                    Sound
                  </button>
                </div>

                <div>
                  <div>
                    <h2 className="flex items-center gap-4 text-[17px] text-gray-600 mt-4 mb-2 ">
                      <span className="hover:transition-all hover:text-[#e7b98c] cursor-pointer">
                        {" "}
                        Admin
                      </span>{" "}
                      <span>November 22, 20024</span>{" "}
                    </h2>
                  </div>
                  <h2 className="text-[22px] font-semibold hover:transition-all hover:text-[#e7b98c] cursor-pointer">
                    2024 BMW ALPINA XB7 with exclusive details extraordinary{" "}
                  </h2>
                </div>
              </div>
              <div className="relative lg:p-0 p-2">
                <figure
                  className={`${LatestStyle.imageParent} lg:w-[450px] rounded-lg`}
                >
                  <img
                    src="/blog2.jpg"
                    alt="Shoes"
                    className={`rounded-xl ${LatestStyle.ImageAnimation} h-[300px]`}
                  />
                </figure>
                <div className="hidden lg:block">
                  <button className="bg-white rounded-full absolute z-10 px-4 py-[6px] top-5 left-5 hover:transition-all hover:text-[#e7b98c] cursor-pointer">
                    Accessories
                  </button>
                </div>

                <div>
                  <div>
                    <h2 className="flex items-center gap-4 text-[17px] text-gray-600 mt-4 mb-2 ">
                      <span className="hover:transition-all hover:text-[#e7b98c] cursor-pointer">
                        {" "}
                        Admin
                      </span>{" "}
                      <span>December 26, 2024</span>{" "}
                    </h2>
                  </div>
                  <h2 className="text-[22px] font-semibold hover:transition-all hover:text-[#e7b98c] cursor-pointer">
                    BMW X6 M50i is designed to exceed your sportiest.
                  </h2>
                </div>
              </div>
              <div className="relative lg:p-0 p-2">
                <figure
                  className={`${LatestStyle.imageParent} lg:w-[450px] rounded-lg`}
                >
                  <img
                    src="/blog3.jpg"
                    alt="Shoes"
                    className={`rounded-xl ${LatestStyle.ImageAnimation} h-[300px]`}
                  />
                </figure>
                <div className="hidden lg:block">
                  <button className="bg-white rounded-full absolute z-10 px-4 py-[6px] top-5 left-5 hover:transition-all hover:text-[#e7b98c] cursor-pointer">
                    Exterior
                  </button>
                </div>

                <div>
                  <div>
                    <h2 className="flex items-center gap-4 text-[17px] text-gray-600 mt-4 mb-2 ">
                      <span className="hover:transition-all hover:text-[#e7b98c] cursor-pointer">
                        {" "}
                        Admin
                      </span>{" "}
                      <span>March 16, 2024</span>{" "}
                    </h2>
                  </div>
                  <h2 className="text-[22px] font-semibold hover:transition-all hover:text-[#e7b98c] cursor-pointer">
                    BMW X5 Gold 2024 Sport Review: Light on Sport
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
