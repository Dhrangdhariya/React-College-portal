import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import loc from '../../assets/location-icon.png'
import w_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a7bb67a-8ec4-44d9-b936-4c8fc173f566");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam autem odio eum ab praesentium, expedita voluptate a laboriosam modi consectetur. Explicabo aspernatur fugit sunt minus iusto minima distinctio accusamus facilis.</p>
        <ul>
          <li><img src={mail} alt="" />Contact@Sohamgajjar.dev</li>
          <li><img src={phone} alt="" />+1 7334248974</li>
          <li><img src={loc} alt="" />45 street, Golden road, Cambridge <br />MA 85422, US</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label >Your name</label>
          <input type="text" name="name" placeholder='Enter your name' required />
          <label >Phone number</label>
          <input type="tel" name="phone" placeholder='Enter phone number' required />
          <label >Write your messages here</label>
          <textarea name="msg" rows="6" placeholder='Enter your msg' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={w_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
