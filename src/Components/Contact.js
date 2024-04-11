import Window from './Images/WindowSill.jpg'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.name) {
      formIsValid = false;
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      formIsValid = false;
      errors.email = 'Email is required';
    }

    if (!formData.message) {
      formIsValid = false;
      errors.message = 'Message is required';
    }
   console.log(formIsValid)
    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm('service_f51xyhp', 'template_l1i5pta', e.target, 'ATtn1deBhV3vWzT70')
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        }, (error) => {
          console.log(error.text);
          alert('An error occurred. Please try again later.');
        });
    }
  };
    return (
      <>
    <div className='Contact'>

     
      <div className='Contact-Img-Wrap'>
        <img className='Contact-Img' src={Window}></img>
      </div>
      <div className='Contact-Form'>
      <div class='Contact-Carousel'>CONTACT ME</div>

      <form className="Email-Form" onSubmit={handleSubmit}>
      <div className='CTA-Wrapper'>
              <div class="Form-Outline">
                <label class="form-label" for="formControlLg">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="formControlLg"
                  className="form-control form-control-lg"
                  name="name"
                  value={formData.name} 
                  onChange={handleChange} />
              </div>
              <span className='Error'>{errors.name}</span>
              </div>


              <div className='CTA-Wrapper'>
              <div class="Form-Outline">
                <label class="form-label" for="formControlDefault">
                  EMAIL ADDRESS
                </label>
                <input
                  type="text"
                  id="formControlDefault"
                  className="form-control"
                  name="email"
                  value={formData.email} 
                  onChange={handleChange} />
              </div>
              <span className='Error'>{errors.email}</span>
              </div>

<div className='CTA-Wrapper'>
              <div class="Form-Outline">
                <label class="form-label" for="textArea">
                  YOUR MESSAGE
                </label>
                <textarea
                  type="text"
                  id="formControlSm"
                  className="form-control form-control-sm"
                  rows="4"
                  name="message"
                  value={formData.message} 
                  onChange={handleChange} />
              </div>
              <span className='Error'>{errors.message}</span>
              </div>

              <div className="button-wrapper">
                <input className="Form-Btn" type="submit" value="SEND" />
              </div>
            </form>
      </div>
    </div>
      </>
    )
  }
  
  export default Contact;
  