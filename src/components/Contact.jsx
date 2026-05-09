
import "./Contact.css";
import React , {useState} from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
const [formData, setformData] = useState({
  name: "",
  email: "",
  message: ""
})
const [errors, seterrors] = useState({

})

const handlechange = (e)=>{
  setformData({
    ...formData,[e.target.name]: e.target.value
  })
  seterrors({...errors,
    [e.target.name]: "" 
  })
}


   
const handleSubmit = (e)=>{
  const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
e.preventDefault()

let newErrors = {}

if(formData.name === ""){
 newErrors.name = "Name is required"

}


if(formData.email === ""){
newErrors.email = "Email is required"

}

else if(!emailpattern.test(formData.email)){
  newErrors.email = "Enter a valid email"
  
}

if(formData.message === ""){
  newErrors.message = "Message is required"
}
seterrors(newErrors)



if(Object.keys(newErrors).length === 0){

  emailjs.send(
    "service_6cjyd8e",
    "template_u73vlxr",
    {
      name: formData.name,
      email: formData.email,
      message: formData.message
    },
    "psqELKAWxq4KOiuWA"
  )
  .then(() => {
    alert("Message sent successfully!");

    setformData({
      name: "",
      email: "",
      message: ""
    });
  })
  .catch((error) => {
    console.log("EmailJS Error:", error); // Check browser console!
  alert("Failed: " + error.text);
    
  });

}

}

  return (
    <div>
      <div  className="parent-container">
        <div className="form-content">
          <div id="contact" className="intro-info">               
            <h1 id="sec1">Lets connect & build together!</h1>
            <h3 id="sec2">Fill the form to contact!</h3>
          </div>{" "}
          {/* intro info div */}
          
        </div>{" "}
        {/* form-content */}
        <div className="login-page">
          <h2 id="contact-info">Name</h2>
          <input name="name" value={formData.name} onChange={handlechange} id="name2" type="text" placeholder="Enter your name" />
          {errors.name && <p id= "error">{errors.name}</p>}
          <h2 id="contact-info">Email</h2>
          <input name="email" value={formData.email} onChange={handlechange} id="email" type="text" placeholder="Enter Your email" />  
           {errors.email && <p id= "error">{errors.email}</p>} 
          <h2 id="contact-info">your message</h2>
          <div className="message-parent">
            <input name="message"  value={formData.message} onChange={handlechange} id="message" type="text" placeholder="Enter your message" /> 
            {errors.message && <p id= "error">{errors.message}</p> }
            <button onClick={handleSubmit} id="shoot">Shoot!</button>
          </div>{" "}
          {/* message parent div */}
          <div className="seperation-2"></div>
        </div>{" "}
        {/* login page div */}
      </div>{" "}
      {/* parent-container */}
    </div> // default div
  );
};

export default Contact;
