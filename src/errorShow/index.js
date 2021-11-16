import React from 'react';
import './errorShow.css';

function ErrorShow(){
    return(
        <section>
          <h2>Se presento un error al conectar con el API</h2>
          <p>
              porfavor intente estos pasos y recargue la pagina:
          </p>
          <ul>
              <li>Verfique que su servidor de apache y de mysql se encuentren encendidos</li>
              <li>Verifique si la aplicación de backend esta enecendida correr comando <strong>php artisam serve</strong></li>
          </ul>
        </section>

    )
}

export {ErrorShow}