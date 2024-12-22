"use client";

const FrequentlyQuestions: React.FC = () => {
  return (
    <div className="bg-[#f3f7fb]">
      <div className="container mx-auto">
        <div className="py-10">
          <div>
            <h2 className="text-[26px] lg:text-[40px] text-center mb-6 lg:mb-14">
              Frequently Asked Questions for FleetConnect Service
            </h2>
          </div>
          <div className="space-y-2">
            <div className="collapse bg-white collapse-plus">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title text-xl font-medium ">
                What types of vehicles are available in your fleet?
              </div>
              <div className="collapse-content">
                <p>
                  Our fleet at RPC Limo includes a variety of luxury vehicles
                  such as stretch limousines for grand entrances, spacious SUV
                  limos for larger groups, and elegant sedans for a more
                  intimate experience. Each vehicle is regularly inspected and
                  maintained to ensure safety and comfort.
                </p>
              </div>
            </div>
            <div className="collapse bg-white collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                Are your chauffeurs experienced?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, each RPC Limo chauffeur is a highly trained professional.
                  They are licensed, undergo thorough background checks, and
                  possess extensive knowledge of the New York area to ensure a
                  smooth and efficient ride.
                </p>
              </div>
            </div>
            <div className="collapse bg-white collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                What amenities can I expect in a RPC Limo?
              </div>
              <div className="collapse-content">
                <p>
                  Our limousines offer an array of luxurious amenities including
                  plush leather seating, advanced multimedia entertainment
                  systems, climate control, privacy partitions, and
                  complimentary refreshments. The available features may vary
                  depending on the chosen vehicle.
                </p>
              </div>
            </div>
            <div className="collapse bg-white collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                What is the minimum age requirement to rent a limo?
              </div>
              <div className="collapse-content">
                <p>
                  The primary person renting the limo must be at least 21 years
                  old. We require a valid ID for verification and compliance
                  with our rental policies.
                </p>
              </div>
            </div>
            <div className="collapse bg-white collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                What if I encounter a problem during my service?
              </div>
              <div className="collapse-content">
                <p>
                  In the unlikely event of a problem, RPC Limo provides 24/7
                  customer support and roadside assistance to resolve any issues
                  promptly and ensure your travel remains uninterrupted.
                </p>
              </div>
            </div>
            <div className="collapse bg-white collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                Can I modify or cancel my reservation?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we offer flexible reservation policies. You can modify or
                  cancel your booking according to the terms outlined in your
                  rental agreement, which are designed for your convenience.
                </p>
              </div>
            </div>
            <div className="collapse bg-white collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                How does RPC Limo ensure passenger safety during the ride?
              </div>
              <div className="collapse-content">
                <p>
                  Safety is our utmost concern. Apart from professional
                  chauffeurs and well-maintained vehicles, we adhere to strict
                  safety protocols and regularly update our practices to meet
                  the highest standards of the limousine service industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestions;
