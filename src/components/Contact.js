import React from 'react'
import './Contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp, faDiscord, faMicrosoft } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-info'><h4>Microsoft Ambassador</h4>
                <p>Chaitanya Pullagura</p></div>
            <div className='contact-info'><h4>Phone</h4>
                <a href='tel:+919440368831'>+919440368831</a></div>
            <div className='contact-info'><h4>Email</h4>
                <a href='mailto:Chaitanya.Pullagura@studentambassadors.com'>Chaitanya.Pullagura@studentambassadors.com</a></div>
            <div className='contact-info'><h4>LinkedIn</h4>
                <a target='_blank' href="https://www.linkedin.com/in/chaitanyapullagura/" >Chaitanya Pullagura</a></div>
            <div className='contact-info icon-content-2'>
                <a className='brand-icon-2' href="" target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
                <a className='brand-icon-2'  href="" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a className='brand-icon-2' href="" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    )
}

export default Contact
