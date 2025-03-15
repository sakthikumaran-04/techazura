import { useState } from "react"
import { day1Schedule, day2Schedule } from "../contents/contents";
import ScheduleCard from "./ScheduleCard";

function Schedule() {
    const [day, setDay] = useState(0);
  return (
    <section className="flex flex-col items-center justify-center pb-12 transition-all duration-300 pt-12" id="schedule">
        <h2 className="text-2xl font-bold py-5 text-center">Schedule</h2>
        <div className="grid grid-cols-2 max-w-[900px] w-full px-2">
            <button className={`flex flex-col items-center justify-center rounded-md transition-colors duration-250 ease-in-out ${!day? " bg-blue-500 py-2 text-white":""}`} onClick={()=>setDay(0)}>
                <span>Day 1</span>
                <span>(03 April)</span>
            </button>
            <button className={`flex flex-col items-center justify-center rounded-md transition-colors duration-250 ease-in-out ${day? " bg-blue-500 py-2 text-white":""}`} onClick={()=>setDay(1)}>
                <span>Day 2</span>
                <span>(04 April)</span>
            </button>
        </div>
        <div className="py-3"/>
        <div>
        {
            !day ? day1Schedule.map((item)=>(
                <ScheduleCard title={item.title} description={item.description} place={item.place} startTime={item.startTime} endtime={item.endTime}/>
            )) : ""
        }
        </div>
        <div>
        {
            day ? day2Schedule.map((item)=>(
                <ScheduleCard title={item.title} description={item.description} place={item.place} startTime={item.startTime} endtime={item.endTime}/>
            )):""
        }
        </div>
    </section>
  )
}
export default Schedule