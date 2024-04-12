import React from 'react'
import './Benefits.css'

const Benefits = () => {
    const array=[
        {"class":"developer", "title":"Azure Credits","info":"Get free $100 Azure credits as a lucky winner in events or as an official microsoft student ambassador!"},
        {"class":"designers", "title":"Microsoft Networking","info":"Get a chance to network with the leading industry experts"},
        {"class":"developer", "title":"Visual Studio Enterprise Edition","info":"Get free Visual Studio enterprise and Github Enterprise as an official microsoft student ambassador "},
        {"class":"designers", "title":"Figma Courses","info":"Microsoft Provides with free UI/UX Templates and courses on figma"},
        {"class":"gamers", "title":"Imagine Cup Guidance","info":" Imagine Cup is one of the biggest startup driven hackathon for young enteprenerrs, lets get your startup accelerated!"},
        {"class":"business", "title":"Founders Hub","info":"Accelerate your startup with Founders Hub"},
        {"class":"gamers", "title":"Microsoft Badges","info":"We will encourage you to participate in events held by MLSAs and to use the microsoft learn platform to gain microsoft badges and polish your resume "},
        {"class":"business", "title":"Network With Engineers","info":"Find the right team for your project."},
        {"class":"developer", "title":"Linkedin Learning","info":"Get free access to Linkedin Learning courses as an ambassador or as an event winner!"},
        {"class":"designers", "title":"Product Feedback Loops","info":"Opportunity to participate in product feedback loops with microsoft"},
        {"class":"developer", "title":"Microsoft Certification","info":"Ambassadors get a chance to earn the certificate vouchers, and we as a community spread the knowledge to pass the exams"},
        {"class":"designers", "title":"Free AI tools","info":"Get Access to free generative AI tools to go all creative!"},
        {"class":"gamers", "title":"XBOX free pass","info":"Microsoft events provide 3 month free passes to event winners!"},
        {"class":"business", "title":"Microsoft 365","info":"Get free Microsoft 365 on turning an official microsoft student ambassador."},
        {"class":"gamers", "title":"Swags Swags and Swags","info":"For all the microsoft fans out there!"},
        {"class":"business", "title":"Enterpreneur support","info":"Get the best guidance and support "},

    ]

    const array1=[
      {"class":"developer", "title":"Azure Credits","info":"Get free $100 Azure credits as a lucky winner in events or as an official microsoft student ambassador!"},
      {"class":"designers", "title":"Microsoft Networking","info":"Get a chance to network with the leading industry experts"},
      {"class":"gamers", "title":"Imagine Cup Guidance","info":" Imagine Cup is one of the biggest startup driven hackathon for young enteprenerrs, lets get your startup accelerated!"},
      {"class":"business", "title":"Founders Hub","info":"Accelerate your startup with Founders Hub"},
      {"class":"developer", "title":"Visual Studio Enterprise Edition","info":"Get free Visual Studio enterprise and Github Enterprise as an official microsoft student ambassador "},
      {"class":"designers", "title":"Figma Courses","info":"Microsoft Provides with free UI/UX Templates and courses on figma"},
      {"class":"gamers", "title":"Microsoft Badges","info":"We will encourage you to participate in events held by MLSAs and to use the microsoft learn platform to gain microsoft badges and polish your resume "},
      {"class":"business", "title":"Network With Engineers","info":"Find the right team for your project."},
      {"class":"developer", "title":"Linkedin Learning","info":"Get free access to Linkedin Learning courses as an ambassador or as an event winner!"},
      {"class":"designers", "title":"Product Feedback Loops","info":"Opportunity to participate in product feedback loops with microsoft"},
      {"class":"gamers", "title":"XBOX free pass","info":"Microsoft events provide 3 month free passes to event winners!"},
      {"class":"business", "title":"Microsoft 365","info":"Get free Microsoft 365 on turning an official microsoft student ambassador."},
      {"class":"developer", "title":"Microsoft Certification","info":"Ambassadors get a chance to earn the certificate vouchers, and we as a community spread the knowledge to pass the exams"},
      {"class":"designers", "title":"Free AI tools","info":"Get Access to free generative AI tools to go all creative!"},
      {"class":"gamers", "title":"Swags Swags and Swags","info":"For all the microsoft fans out there!"},
      {"class":"business", "title":"Enterpreneur support","info":"Get the best guidance and support "},

  ]
  const isMobile=window.innerWidth<=768;

  return (
    <div className='benefits'>
      <div className='benefit-header'>What do we get?</div>
      <div className='benefit-box'>
        {   
            (isMobile?array1:array).map((item,index)=>(
                <div key={index} className={`benefit-card ${item.class}`}>
                    <h1>{item.title}</h1>
                    <p>{item.info}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Benefits
