import { whyJoinUsContent } from "../contents/contents"

function WhyJoinUs() {
  return (
    <section className="flex flex-col items-center justify-center pt-4">
    <h2 className="text-2xl font-bold py-5">Why Join TechAzura '25?</h2>
            <div className="max-w-[850px] flex flex-col gap-3 px-4 max-md:text-sm">
                {
                    whyJoinUsContent.map((item)=>(
                        <p>{item}</p>
                    ))
                }
            </div>
    </section>
  )
}
export default WhyJoinUs