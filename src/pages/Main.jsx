import React from "react";
import me from "../images/me-transparent.png";
import TypeWriterEffect from "react-typewriter-effect";

export default function Main() {
  return (
    <div className="about-me">
        <div className="presentation">
            {/* <div className="circles"></div> */}
            <div className="text-presentation">
                <div className="text-writing">
                    <TypeWriterEffect textStyle={{fontFamily: "Rubik", color: "#3F72AF", fontWeight: 300, fontSize: "3em"}}
                        startDelay={500}
                        cursorColor="#3F3D56"
                        multiText={["Cryptography", "Web personal", "¡Hola!"]}
                        multiTextDelay={3000}
                        typeSpeed={150}
                        multiTextLoop={true}
                    />
                </div>
                <div className="static-text-presentation">
                    {/* <h4>!Hola! Mi nombre es</h4> */}
                    <h1>Fernando Martinez Martinez</h1>
                    <h3>Estudiante de ESCOM</h3>
                    <div className="download-key">Descargar llave pública</div>
                </div>
            </div>

            <img src={me} alt="Foto personal" className="me-photo"></img>

        </div>

        <div className="redes-container">
            <div className="contacto-text">
                Infromación de contacto
            </div>
            <div className="redes">
                <div><i className="fas fa-envelope"></i><p>fer_f@outlook.com</p></div>
                <div><i className="fab fa-whatsapp"></i><p>+52-5565122061</p></div>
                <div><i className="fas fa-envelope"></i><p>fermtz54744@gmail.com</p></div>
            </div>
        </div>
        
        <div className="Go-down">
            <i className="fas fa-caret-down"></i>
        </div>
    </div>
  );
}
