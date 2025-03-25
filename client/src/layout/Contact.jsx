import ExternalForm from '../components/ExternalForms/ExternalForm'


import '../assets/styles/contact.css'

function Contact() {

  return(

    <div className="container noise-bg">
      <div className="grid-container">
        <div className="contact-info-container">
          <h1>Contactanos</h1>
          <h1 className="hover-y">Ahora!</h1>
        </div>
        <div className="form-container">
          <ExternalForm/>
        </div>
      </div>
    </div>
  );

}


export default Contact;