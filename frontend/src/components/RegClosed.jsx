import { faPhone, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function RegClosed() {
  return (
    <main className="max-w-lg min-h-[calc(100vh-100px)]  max-sm:mx-3 mx-auto text-center max-md:text-sm flex items-center justify-center">
        <div className=" bg-white p-6 shadow-md rounded-lg  md:my-32">
            <FontAwesomeIcon icon={faXmark} className="text-white bg-red-500 p-5 text-5xl rounded-full h-[50px] w-[50px] my-2"/>
            <h2 className="text-2xl py-2">Registration Closed!</h2>
            <p className="text-slate-700">Thank you for your interest in our symposium! Online registrations are now closed. But don’t worry—you can still <span className="font-bold">register on the spot at our college campus</span>.</p>
            <p className="text-slate-700">Visit the registration desk to grab your spot and join the excitement!</p>
            <p className="text-slate-700">For any queries, feel free to reach out to the event coordinators. <br /> See you at the symposium! 🚀</p>
            <Link to={"/coordinators"} className="border bg-blue-100 border-blue-600 max-sm:w-full text-blue-500 py-2 px-6 rounded-md flex items-center justify-center gap-3 max-sm:text-sm text-nowrap mt-2"><span className="flex gap-2 items-center justify-center"><FontAwesomeIcon icon={faPhone} className="text-blue-600" />Contact Coordinators </span></Link>
        </div>
    </main>
  )
}
export default RegClosed