import React from 'react'
import lateralImg from "../images/Fotopersonal.jpg"

export default function AboutMe() {
    return (
        <div className="personal-information" id="myInfo">
            <h1 className="title-acerca-mi neon1">Acerca de mí</h1>
            <div className="academic-formation">
                <img src={lateralImg} alt="Imagen lateral" className="lateral-img"/>
                <div className="academic-formation-text"> 
                    <h2 className="neon1">Fernado Martinez Martinez</h2>
                    <div className="space"></div>
                    <p>Actualmente cursando el quinto semestre en las Escuela Superior de
                        Cómputo (ESCOM) en la que ingresé en el año 2019.
                        Estudiante también del CECyT 9 Juan de Dios Bátiz Paredes en la carrera de 
                        programación durante el año 2016 al 2019.</p>
                    <div className="space"></div>
                    <p>A lo largo de mi trayectoria escolar he trabajado con distintas tecnologías,
                        desarollado proyectos y utlizando lenguajes como Java, C, Python; 
                        gestores de Base de Datos como MySQL y SQLServer; dominando
                        tecnologías web como HTML, Jasvascript, CSS y React. Manteniendo siempre 
                        calidad en el desarrollo y un excelente trabajo en equipo.</p>
                    <div className="space"></div>
                    <div className="download-cv">Descargar CV</div>                 
                </div>
            </div>

        <div className="Go-down2">
            <i className="fas fa-caret-down"></i>
        </div>
        </div>
    )
}
