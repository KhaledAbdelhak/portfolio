import './about.css';
import webSite from "../../img/web.jpg"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img className="about-img" src={webSite} alt="" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">A propos de moi</h1>
                <p className="about-desc">
                    J'ai effectué une formation développeur web de 6 mois durant laquelle j'ai acquis de bonnes bases solides en HTML, CSS, PHP, MySql, JS tout en respectant les bonnes pratiques.
                    Puis durant 1 mois je me suis spécialiser en React/Redux.
                </p>
            </div>
        </div>
    )
}

export default About
