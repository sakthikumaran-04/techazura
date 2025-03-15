import { aboutContent } from "../contents/contents"

function About() {
  return (
    <section className="flex flex-col items-center justify-center pb-12" id="about">
        <h2 className="text-2xl font-bold py-5">About TechAzura '25</h2>
        <div className="max-w-[850px] flex flex-col gap-3 px-4 max-md:text-sm">
            {
                aboutContent.map((item)=>(
                    <p>{item}</p>
                ))
            }
        </div>
    </section>
  )
}
export default About