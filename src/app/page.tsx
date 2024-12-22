import Banner from "@/Components/Banner/Banner";
import FrequentlyQuestions from "@/Components/FrequentlyQuestions/FrequentlyQuestions";
import LatestBlog from "@/Components/LatestBlog/LatestBlog";
import OurSatisfiedClients from "@/Components/OurSatisfiedClients/OurSatisfiedClients";
import QuickPriceCheck from "@/Components/QuickPriceCheck/QuickPriceCheck";
import SpecialOffer from "@/Components/SpecialOffer/SpecialOffer";

export default function Home() {
  return (
    <div>
      <Banner />
      <QuickPriceCheck />
      <OurSatisfiedClients />
      <FrequentlyQuestions />
      <SpecialOffer />
      <LatestBlog />
    </div>
  );
}
