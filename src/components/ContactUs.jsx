import { useState } from "react";

const parseFormData = async (formData) => {
  const resultObj = {};

  return new Promise((resolve, reject) => {
    if (!formData) {
      reject('No data given');
    }

    formData.forEach((val, key) => {
      resultObj[key] = val;
    });

    setTimeout(() => {
      resolve(resultObj);
    }, 3000);
  });
};

const SubmitBtn = ({ disable }) => {
  return (
    <button type="submit" className="submit-button" disabled={disable}>
      Send Message
    </button>
  );
}

const ContactUs = () => {
  const [disable, setDisable] = useState(false);

  async function onSubmit(e) {
    setDisable(true);
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = await parseFormData(formData);
    setDisable(false);
    console.log(data);
    alert('Thank you for contacting us!');
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>
          
          <SubmitBtn disable={disable} />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;