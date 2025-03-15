import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import heroImg from "../assets/hero.png"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faPhone, faTicket } from "@fortawesome/free-solid-svg-icons"
import CountdownTimer from "./CountDown"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="hero min-h-screen grid grid-cols-2 max-md:grid-cols-1 max-md:grid-flow-dense place-items-center">
        <div className="flex flex-col max-md:gap-1 gap-3 md:pl-10 max-sm:px-2">
            <h2 className="text-5xl max-sm:text-3xl font-bold">TechAzura'25</h2>
            <p>
                <div className="flex gap-4 max-sm:gap-2 max-sm:flex-col">
                    <p className="font-bold flex items-center gap-2"><FontAwesomeIcon icon={faCalendarDays} className="text-blue-600"/><span>03 - 04 April</span></p>
                    <p className="font-bold flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} className="text-blue-600" /><span>Hindusthan College Of Engineering And Technology</span></p>
                </div>
            </p>
            <p className="text-md text-slate-600 max-md:text-sm">Experience the perfect blend of technology and creativity at TechAzura '25! From workshops, and quizzes to meme creation, short films, and gaming battles, there’s something for everyone. Showcase your skills, take on challenges, and claim victory!</p>
            <div className="flex gap-1 flex-wrap">
                <Link to={"/get-ticket"} className="bg-blue-500 text-white max-sm:w-full py-2 px-6 rounded-md flex items-center justify-center gap-3 max-sm:text-sm text-nowrap"><span>Get Tickets </span><FontAwesomeIcon icon={faTicket} className="text-white" /></Link>
                <Link to={"/coordinators"} className="border bg-blue-100 border-blue-600 max-sm:w-full text-blue-500 py-2 px-6 rounded-md flex items-center justify-center gap-3 max-sm:text-sm text-nowrap"><span className="flex gap-2 items-center justify-center"><FontAwesomeIcon icon={faPhone} className="text-blue-600" />Contact Coordinators </span></Link>
            </div>
            <CountdownTimer />
            <p className="text-center mt-5">"Meet you on the Event! ❤️" - Event Coordinators</p>
        </div>
        <img src={heroImg} className="w-[500px] max-md:order-first" alt="side hero image" />
    </section>
  )
}
export default Hero