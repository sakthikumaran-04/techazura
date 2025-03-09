import { eventsContent } from "../contents/contents"
import EventCard from "./EventCard"

function Events() {
  return (
    <section id="events">
        <h2 className="text-2xl font-bold py-5 text-center pt-16">Explore the Events!</h2>
        <p className="text-center pb-4">Bonus: Just pay &#8377; 200 and participate 1 Technical and 1 Non-Technical Event!</p>
        <div className="flex flex-wrap gap-5 items-center justify-center">
         {
            eventsContent.map((item,i)=>(
                <EventCard title={item.title} description={item.description} image={item.image} id={i+1}/>
            ))
         }   
        </div>
    </section>
  )
}
export default Events