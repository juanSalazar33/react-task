import React from 'react';
import './errorShow.css';

function ErrorShow(){
    return(
        <section className="errorText">
          <h2>An error occurred when connecting to the API</h2>
          <p>
             Please try these steps and reload the page:
          </p>
          <ul>
              <li>Verify that your apache and mysql server are turned on</li>
              <li>Check if the backend application is on, run <strong>php artisam serve</strong></li>
          </ul>
        </section>

    )
}

export {ErrorShow}