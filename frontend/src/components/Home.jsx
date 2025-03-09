import Hero from "./Hero";
import About from "./About";
import WhyJoinUs from "./WhyJoinUs";
import Events from "./Events";
import Schedule from "./Schedule";
import Perks from "./Perks";

function Home() {
  return (
    <main>
        <Hero />
        <About />
        <WhyJoinUs />
        <Events />
        <Schedule />
        <Perks />
    </main>
  )
}
export default Home