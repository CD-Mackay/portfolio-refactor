import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Introduction() {
  return (
    <div id="info-wrapper">
    <div id="about-info">
        <h2>Connor Mackay</h2>
        <h4>Toronto Web Developer</h4> 
        <ul class="contact-info">
          <li>
            <a href="https://www.linkedin.com/in/connor-mackay-800992bb/" target="blank">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} style={{color: "white"}} />
            </a>
          </li>
          <li>
            <a href="https://github.com/CD-Mackay" target="blank">
              <FontAwesomeIcon icon={["fab", "github-alt"]} style={{color: "white"}} />
            </a>
          </li>

          <li>
            <a href="mailto: connor.mackay@gmail.com">
              <FontAwesomeIcon icon={["fa", "envelope"]} style={{color: "white"}} />
            </a>
          </li>
          <li>
            <a href="tel: 647-393-4507">
              <FontAwesomeIcon icon={["fa", "phone"]} style={{color: "white"}} />
            </a>
          </li>
        </ul> 
      </div>
      </div>
  )
}