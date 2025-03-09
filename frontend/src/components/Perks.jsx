import { perksContent } from "../contents/contents"

function Perks() {
  return (
    <section className="pb-12">
        <h2 className="text-2xl font-bold py-5 text-center">What's included?</h2>
        <div className="text-center flex flex-col items-center justify-center gap-2 px-4">
            {
                perksContent.map((item)=>(
                    <p>{item}</p>
                ))
            }
        </div>
    </section>
  )
}
export default Perks