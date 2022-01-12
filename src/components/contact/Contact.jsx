import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lf4wx0h', 'template_svnqhcp', formRef.current, 'user_G9jztMkF9ADP9ZrsIK3vJ')
        .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contactez Moi</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            07.02.20.62.55
                        </div>
                        <div className="c-info-item">
                        <img src={email} alt="" className="c-icon" />
                            khaled59rbx@gmail.com
                        </div>
                        <div className="c-info-item">
                        <img src={address} alt="" className="c-icon" />
                            Roubaix, Hauts-de-France, France
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nom" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Sujet" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} placeholder="Message" name="message" rows="5"></textarea>
                        <button>Envoyer</button>
                        {done && <p className="c-text">Merci ! </p>}
                    </form>
                </div>
                </div>
        </div>
    )
}

export default Contact
