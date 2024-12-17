import Career from "./career/page";
import Gallary from "./gallary/page";
import HomePage from "./home/page";
import NewRelease from "./newrelease/page";
import ProdHouse from "./prodhouse/page";


export default function Home() {
  return (
    <>
      <HomePage />
      <ProdHouse />
      <Gallary />
      <NewRelease />
      <Career />
    </>
  );
}
