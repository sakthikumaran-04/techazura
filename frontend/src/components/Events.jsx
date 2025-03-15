import { eventsContent } from "../contents/contents"
import EventCard from "./EventCard"

function Events() {
  return (
    <section id="events" className="lg:flex flex-col items-center">
        <h2 className="text-2xl font-bold py-5 text-center lg:pt-16 pt-8">Explore the Events!</h2>
        <p className="text-center max-md:text-sm pb-4">Pay &#8377; 200 and participate 1 Technical and 1 Non-Technical Event!</p>
        <div className="px-5">
          <h2 className="font-bold text-lg text-center py-2">Technical Events :</h2>
          <div className="flex gap-4 overflow-x-scroll overflow-y-hidden">
          {
            eventsContent.map((item,i)=>(
                item.type=="technical" && <EventCard title={item.title} description={item.description} image={item.image} id={i+1}/>
            ))
         }
          </div>
          
        </div>
        <div className="px-5">
          <h2 className="font-bold text-lg text-center pt-12 pb-3">Non-Technical Events :</h2>
          <div className="flex gap-4 overflow-x-scroll overflow-y-hidden">
          {
            eventsContent.map((item,i)=>(
                item.type=="non-technical" && <EventCard title={item.title} description={item.description} image={item.image} id={i+1}/>
            ))
         }
          </div>
          
        </div>
    </section>
  )
}
export default Events