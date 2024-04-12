import React from 'react'
import './About.css'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'

const About = () => {
    return (
        <div className='about'>
            <span className='mlsa-program'>The MLSA Program</span>
            <div className='program-content'>
                <span className='what questions'><ul><li><h3>What is the MLSA Program?</h3></li></ul>
                    <p>
                        The Microsoft Learn Student Ambassador program is an initiative by Microsoft that
                        empowers students to become technology leaders and advocates on their campuses. Student
                        Ambassadors receive training and resources from Microsoft to enhance their technical skills and knowledge.
                        They then engage with their peers, sharing insights and organizing events to promote Microsoft technologies,
                        such as Azure and Microsoft 365, within their academic communities. The program aims to create a network of
                        student leaders who can inspire and educate others about the latest technology trends and Microsoft products.
                    </p>

                </span>
                <span className='who questions'><ul><li><h3>Who can join the MLSA Program?</h3></li></ul>
                    <p>

                        The Microsoft Learn Student Ambassador program is open to university and college students 
                        who are passionate about technology and have a strong desire to share their knowledge with 
                        their peers. Applicants should have good communication skills, an interest in Microsoft technologies, 
                        and a commitment to organizing and participating in events within their academic communities. The 
                        program is designed for students who want to develop leadership skills, enhance their technical 
                        expertise, and contribute to building a vibrant technology community on their campuses.

                    </p>

                </span>
                <span className='why questions'><ul><li><h3>What are the benefits of the MLSA Program?</h3></li></ul>
                    <ul id='why-points'>
                        <li>Career Opportunities: Access to Microsoft events, conferences, and networking opportunities that 
                            can open doors to potential internships and job opportunities.</li>
                        <li>Recognition: Receive recognition as a Microsoft Learn Student Ambassador, which can be valuable on 
                            resumes and LinkedIn profiles.</li>
                        <li>
                        Free Microsoft Resources: Access to free Microsoft software, services, and cloud credits to support personal and project development.
                        </li>
                        <li>
                        Support and Mentorship: Receive guidance and mentorship from Microsoft professionals to help navigate your academic and career journey.
                        </li>
                    </ul>


                </span>
                <div className='mlsa-program-link'>
                <span className='why questions'><ul><li><h3>Events held by Microsoft</h3></li></ul></span>
                        <img src={about1} alt="events held by microsoft"/>
                        <img src={about2} alt="events held by microsoft"/>
                    </div>
            <a className="learn-more" href="https://mvp.microsoft.com/studentambassadors" target="_blank">Learn More</a>
            </div>
        </div>
    )
}

export default About
