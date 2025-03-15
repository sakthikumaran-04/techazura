import { useEffect, useRef, useState } from "react";
import toast from 'react-hot-toast';
import { paymentQR } from "../helpers/image";
import { eventsContent } from "../contents/contents";
import { v4 as uuid } from "uuid";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    transactionId: "",
    screenshot: null,
    technicalEvent: "none",
    nonTechnicalEvent: "none"
  });
  const [loading, setLoading] = useState(false);
  
  const fileInputRef = useRef(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, screenshot: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.phone || !formData.college || !formData.transactionId || !formData.screenshot){
      toast.error("Please Fill All Fields.");
      return;
    }
    if(formData.technicalEvent == "none"){
      toast.error("Please Select a Technical Event.");
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("college", formData.college);
    formDataToSend.append("transactionId", formData.transactionId);
    formDataToSend.append("screenshot", formData.screenshot);
    formDataToSend.append("technicalEvent", formData.technicalEvent);
    formDataToSend.append("nonTechnicalEvent", formData.nonTechnicalEvent);
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/createTicket`, {
        method: "POST",
        body: formDataToSend, 
      });
  
      if(response.ok){
        const data = await response.json();
        setFormData({
          name: "",
          email: "",
          phone: "",
          college: "",
          transactionId: "",
          screenshot: null,
          technicalEvent:"none",
          nonTechnicalEvent: "none"
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = ""; 
        }

        console.log(data);
        toast.success("You'll receive your ticket via email soon!", { duration: 5000 });
        toast.success("🎟 Ticket Requested Successfully!");
      } else {
        const data = await response.json();
        toast.error(data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-lg bg-white p-6 shadow-md rounded-lg lg:my-32 my-12 max-sm:mx-3 mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">🎟️ Secure Your Spot</h2>
      <p className="text-center pb-4">Pay &#8377; 200 for 1 Technical and 1 Non-Technical Event</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        <input type="text" name="college" placeholder="College Name" value={formData.college} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        <img src={paymentQR} className="rounded" alt="payment qr code" />
        <a
    href="upi://pay?pa=triloch14@okaxis&pn=TechAzura&am=200&cu=INR"
    className="bg-blue-500 lg:hidden rounded-md text-center text-white w-full px-4 py-2 font-semibold mt-2 block"
  >
    Pay with UPI
  </a>
        <input type="text" name="transactionId" placeholder="Transaction Id" value={formData.transactionId} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        <label htmlFor="screenshot" className="">Payment Screenshot :</label>
        <input
          type="file"
          name="screenshot"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef} // Assign ref to file input
          className="w-full p-2 mt-2 border border-gray-300 rounded"
          placeholder="screenshot"
        />
        <label htmlFor="technicalEvent">Select a Technical Event :</label>
        <select name="technicalEvent" id="technicalEvent" value={formData.technicalEvent} className="w-full p-2 mt-2 border border-gray-300 rounded" onChange={handleChange}>
          <option value="none">None</option>
          {
            eventsContent.map((item)=>(
               item.type == "technical" ? <option value={item.title} key={uuid()}>{item.title}</option> : " " 
            ))
          }
        </select>
        <label htmlFor="nonTechnicalEvent">Select a Non-Technical Event :</label>
        <select name="nonTechnicalEvent" id="nonTechnicalEvent" value={formData.nonTechnicalEvent} className="w-full p-2 mt-2 border border-gray-300 rounded" onChange={handleChange}>
          <option value="none">None</option>
          {
            eventsContent.map((item)=>(
               item.type == "non-technical" ? <option value={item.title} key={uuid()}>{item.title}</option> : " " 
            ))
          }
        </select>
        <button type="submit" className="w-full font-semibold bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}>
          {loading ? "Loading..." : "Request Ticket"}
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
