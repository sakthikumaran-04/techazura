import { faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <footer className="bg-blue-500 py-10">
        <p className="text-center text-white">
  © 2025 TechAzura. All rights reserved. | Designed with ❤️ by HICET  
</p>
<p className="text-center text-white mt-2">
  Connect with us:  
  <a href="#" className="text-white"> <FontAwesomeIcon icon={faInstagram}/></a> |  
  <a href="#" className="text-white"> <FontAwesomeIcon icon={faLinkedin}/></a> |  
  <a href="#" className="text-white"> <FontAwesomeIcon icon={faXTwitter}/></a>
</p>
<p className="text-center text-white mt-2">
  Have questions? Contact us at  
  <a href="mailto:info@techazura.com" className="text-white hover:underline">  <FontAwesomeIcon icon={faEnvelope}/> info@techazura.com</a>
</p>
    </footer>
  )
}
export default Footer