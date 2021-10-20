import React from "react";
import folleto from "../images/beale.png";

export default function AcercaCrypto() {
  return (
    <div className="acerca-crypto">
      <h1>Una historia de Criptografía</h1>

      <h2>La cifra Beale</h2>
      <div className="acerca-contenido">
        <div className="acerca-text">
          <p>
            Todo se remonta en EE.UU, en enero del año 1822 cuando un misterioso
            vaquero, Thomas J. Beale deposita en un hotel de Lynchburg,
            Virginia, un cofre cerrado. Meses más tarde el dueño del hotel,
            Robert Morriss recibe una carta de Beale expresándole que diez años
            más tarde recibiría una carta con instrucciones para abrir el cofre
            y de como leer su contenido.
          </p>
          <p>
            Sin embargo, Morris nunca recibió la carta y no fue hasta que en
            1845 decidió abrir el cofre, hallando una nota en inglés y tres
            páginas de texto cifrado constituidos por una multitud de números de
            uno, dos o tres dígitos. Estos folios son conocidos como primera,
            segunda y tercera cifra Beale y, según la nota, contenían
            respectivamente la ubicación de un tesoro, su descripción y una
            lista de personas a los que tenía que hacérselos llegar.
          </p>
          <p>
            Tras casi 20 años de intentos fallidos, Morriss contó los hechos a
            un amigo, de identidad desconocida, quién tras otros 20 años logró
            descifrar la segunda hoja (la que describía la fortuna), para ello
            descubrió que la clave de descifrado se encontraba en la
            “Declaración de Independencia de los EE UU”. Recordando que los
            cifrados Beale están constituidos por números, y numerando las 1322
            palabras de que consta la Declaración, para hallar la letra basta
            con contar hasta llegar a la palabra cuyo número coincide con aquel
            y extraer su primera letra que será la buscada.
          </p>
          <p>
            Finalmente, tras varios intentos en vano para descubrir su posición
            geográfica, en 1885, publicó, manteniendo el anonimato, un folleto
            de 23 páginas que narraba los sucesos desde la primera llegada a
            Virginia de Beale.
          </p>
          <p>
            Desde aquél 1885 han sido multitud los criptógrafos, profesionales y
            aficionados, que han tratando de quebrar los enigmáticos folios
            primero y tercero. Aunque se puede pensar que los cifrados primero y
            tercero son una impostura (y así lo creen muchos estudiosos) otros
            indicios científicos (basados en análisis de frecuencias y la
            aleatoriedad de ambos textos) apuntan a la veracidad de la historia
            contada. Lamentablemente búsquedas similares con otros documentos no
            han tenido éxito, aunque pudiera ser que Beale hubiese efectuado un
            doble cifrado transformando dos veces el texto hasta ahora secreto y
            quizá nunca se sepa la verdad de lo que hoy es una leyenda, la del
            cifrado Beale.
          </p>

          <p>
            <ul>
              <li>
                Simon Singh. (1999). "Los códigos secretos". New York. Doubleday
              </li>
              <li>
                Garnacho Arturo. (2009). "Historias y leyendas de la escritura
                secreta". (19/10/2021). Reccuperado de:
                https://hugepdf.com/download/historiasleyendas-escritura-secreta-v3-publicado_pdf
              </li>
            </ul>
          </p>
          
        </div>
        <div className="imagen-container">
          <img src={folleto} alt="Folleto" />
          <p>Folleto publicado en 1885 con la historia de la cifra Beale</p>
        </div>
      </div>
    </div>
  );
}
