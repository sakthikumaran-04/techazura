// import { perksContent } from "../contents/contents"

import { faAddressCard } from "@fortawesome/free-regular-svg-icons"
import { faIndianRupeeSign, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Perks() {
  return (
    <section className="pb-12 bg-blue-500 text-slate-50 mt-12">
        <h2 className="text-2xl font-bold py-5 text-center">What's included?</h2>
        <div className="flex items-center justify-center gap-12 max-sm:gap-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <FontAwesomeIcon className="bg-slate-50 text-blue-500 p-5 text-2xl min-h-[50px] w-[50px] rounded-full" icon={faAddressCard} />
            <p className="font-bold text-md">Certificates</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <FontAwesomeIcon className="bg-slate-50 text-blue-500 p-5 text-2xl min-h-[50px] w-[50px]  rounded-full" icon={faUtensils} />
            <p className="font-bold text-md">Lunch</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <FontAwesomeIcon className="bg-slate-50 text-blue-500 p-5 text-2xl min-h-[50px] w-[50px]  rounded-full" icon={faIndianRupeeSign} />
            <p className="font-bold text-md">Prices</p>
          </div>

        </div>
    </section>
  )
}
export default Perks