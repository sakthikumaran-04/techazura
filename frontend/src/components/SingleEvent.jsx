import { useParams } from "react-router-dom"
import { eventsContent } from "../contents/contents";
import { useEffect } from "react";
import { durationImg, eventImg, mobileImg, startsatImg, venueImg, whatsappImg } from "../helpers/image";

function SingleEvent() {
    const {id} = useParams();
    const data = eventsContent[id-1];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);    
  return (
    <section className="min-h-screen px-12 max-md:px-5">
        <div className="flex gap-8 pt-32 justify-center items-center max-lg:flex-col max-lg:pt-10">
            <img src={data.image} className="w-[600px] h-[350px] rounded-md lg:self-start max-lg:h-auto" alt={data.title} />
            <div className="">
                <div>
                    <h3 className="text-2xl">{data.title}</h3>
                    <p className="text-slate-600">{data.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 place-items-center py-5">
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={eventImg} className="w-[30px]" alt="" />
                        <p className="flex flex-col"><span>Date</span><span className="text-slate-600">04 April</span></p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={venueImg} className="w-[30px]" alt="" />
                        <p className="flex flex-col"><span>Venue</span><span className="text-slate-600">{data.venue}</span></p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={durationImg} className="w-[30px]" alt="" />
                        <p className="flex flex-col"><span>Duration</span><span className="text-slate-600">{data.duration}</span></p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={whatsappImg} className="w-[30px]" alt="" />
                        <p className="flex flex-col"><span>Whatsapp</span><span className="text-blue-500">Join</span></p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={mobileImg} className="w-[30px]" alt="" />
                        <p className="flex flex-col"><span>Coordinator</span><span className="text-slate-600">{data.mobile}</span></p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={startsatImg} className="w-[30px]" alt="" />
                        <p className="flex flex-col"><span>Starts At</span><span className="text-slate-600">{data.startsAt}</span></p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-[25px]">🥇</span>
                        <span>Price</span>
                        <span className="text-slate-600">{data.title.includes("Workshop") ? "-" : <span>&#8377; 2000</span>}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-[25px]">🥈</span>
                        <span>Price</span>
                        <span className="text-slate-600">{data.title.includes("Workshop") ? "-" : <span>&#8377; 1500</span>}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-[25px]">🥉</span>
                        <span>Price</span>
                        <span className="text-slate-600">{data.title.includes("Workshop") ? "-" : <span>&#8377; 1000</span>}</span>
                    </div>
                </div>
            </div>

        </div>
        <p className="text-lg pt-3">Description:</p>
        <p className="text-slate-600">{data.longDescription}</p>
        <p className="text-lg pt-3">Task:</p>
        <div className="pb-12">
            {
                data.tasks.map((item)=>(
                    <p  className="text-slate-600">✔️ {item}</p>
                ))
            }
        </div>
    </section>
  )
}
export default SingleEvent