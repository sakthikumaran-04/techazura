import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ScheduleCard({title,place,description,startTime,endtime}) {
  return (
    <div className="flex gap-4 pt-0 pb-0 px-3">
            <p className="text-center">{startTime} <br /> to <br /> {endtime}</p>
            <div className="flex flex-col items-center">
                <div className="bg-blue-500 p-2 rounded-full z-10"><div className="p-1 bg-white rounded-full"/></div>
                <div className="w-[6px] h-full py-2 bg-slate-300 -translate-y-0.5 rounded-b-md"/>
            </div>
            <div className="max-w-[700px] flex flex-col gap-2">
                <p className="lg:text-lg font-semibold">{title}</p>
                <p className="flex gap-3 items-center max-md:text-sm"><FontAwesomeIcon icon={faLocationDot} className="text-blue-500" /><span>{place}</span></p>
                <p className="text-slate-600 max-md:text-sm pb-5">{description}</p>
            </div>
        </div>
  )
}
export default ScheduleCard