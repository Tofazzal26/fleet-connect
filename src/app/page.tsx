import Banner from "@/Components/Banner/Banner";
import OurSatisfiedClients from "@/Components/OurSatisfiedClients/OurSatisfiedClients";
import QuickPriceCheck from "@/Components/QuickPriceCheck/QuickPriceCheck";

export default function Home() {
  return (
    <div>
      <Banner />
      <QuickPriceCheck />
      <OurSatisfiedClients />
    </div>
  );
}
