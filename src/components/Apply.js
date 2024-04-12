import React from 'react'
import './Apply.css'

const Apply = () => {
  return (
    <div className='apply-content'>
        <div className='apply-box-1'>
            <div className='application-page'>Application Process</div>
            <div className='apply-line'></div>
        </div>
        <div className='apply-box-2'>
            <div className='p'>
                <span>Selection Process</span>
                <ul>
                <li>Fill out our google form, we will assign teams based on the skill set. You can choose your preferred team.</li>
                <li>Candidates will be shortlisted based on the form and we will hold an offline interview</li>
                <li>We might have a skill testing game or small tasks to qualify further</li>
                </ul>
                <br/>
                <span>Selection Criteria</span>
                <ul>
                <li>We are open to newbies and our first criteria is enthusiasm and genuine interest.</li>
                <li>Having past experience and knowledge is helpful but it is not the sole criteria</li>
                <li>We want a diverse team with members from all years and as many streams as possible</li>
                </ul>
                </div>
                <a href="https://forms.office.com/r/hTET2nU5QB" target="_blank" className='application-button'>Apply Now</a>
        </div>
      
    </div>
  )
}

export default Apply
