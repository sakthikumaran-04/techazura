import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <footer className="bg-blue-500 pt-5 max-md:text-sm">
        <p className="text-center text-white">
  <p>© 2025 TechAzura. All rights reserved.</p> <p className="py-1"> Designed with ❤️ by HICET</p>
</p>
<p className="text-center text-white mt-1">
  Connect with us:  
  <a href="https://www.instagram.com/techazura_2k25/" target="_blank" className="text-white"> <FontAwesomeIcon icon={faInstagram}/></a> |  
  <a href="https://github.com/sakthikumaran-04/techazura" className="text-white"> <FontAwesomeIcon icon={faGithub}/></a>
</p>
<p className="text-center text-white mt-2 pb-5">
  Have questions? Contact us at  
  <a href="mailto:techazura.dev@gmail.com" className="text-white hover:underline text-nowrap underline">  <FontAwesomeIcon icon={faEnvelope}/> techazura.dev@gmail.com</a>
</p>
<p className="py-2 text-center text-slate-50 bg-blue-600 font-semibold">Thanks For Scrolling</p>
    </footer>
  )
}
export default Footer