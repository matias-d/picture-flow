import { SavesSection } from "../../components/Root/LandingPage/SavesSection.jsx";
import { EndSection } from "../../components/Root/LandingPage/EndSection.jsx";
import { HowItWork } from "../../components/Root/LandingPage/HowItWork.jsx";
import { Hero } from "../../components/Root/LandingPage/Hero.jsx";



export function LandingPage() {


  return (
    <section className="w-full flex flex-col justify-center items-center pt-20 overflow-hidden">
       
       <Hero />

       <HowItWork />

       <SavesSection />
       
       <EndSection />

    </section>

  )
}
