const social = {
  "linkedin": "https://www.linkedin.com/in/cruz-james/",
  "github": "https://github.com/jamesc2000",
  "website": ""
}

let resumeData = {
    "name": "James Laurence Cruz",
    "role": "Frontend Developer",
    "linkedinId": social.linkedin,
    "roleDescription": "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
    "socialLinks":[
        {
          "name":"linkedin",
          "url": social.linkedin,
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url": social.github,
          "className":"fa fa-github"
        },
      ],
    "aboutme":"I am currently a student of Pamantasan ng Lungsod ng Maynila (PLM), and aspiring to be a software developer in the future. As of now, I currently do freelance work, and work on my personal projects to further enhance my skills as a developer.",
    "address":"Philippines",
    "website": social.website,
    "education":[
      {
        "UniversityName":"Pamantasan ng Lungsod ng Maynila",
        "UniversityAlt": "(University of the City of Manila)",
        "specialization":"Bachelor of Science Major in Computer Engineering",
        "MonthOfPassing":"May",
        "YearOfPassing":"2022",
      },
      {
        "UniversityName":"Lyceum of the Philippines University - Cavite",
        "specialization":"Academic Track - STEM",
        "MonthOfPassing":"May",
        "YearOfPassing":"2019",
        "Achievements":"With Honors"
      }
    ],
    // "work":[
    //   {
    //     "CompanyName":"Some Company",
    //     "specialization":"Some specialization",
    //     "MonthOfLeaving":"Jan",
    //     "YearOfLeaving":"2018",
    //     "Achievements":"Some Achievements"
    //   },
    // ],
    "skillsDescription":"Your skills here",
    "skills":[
      {
        "skillname":"HTML5"
      },
      {
        "skillname":"CSS"
      },
      {
        "skillname":"Reactjs"
      }
    ],
    "portfolio":[
      {
        "name":"project1",
        "description":"mobileapp",
        "imgurl":"images/portfolio/phone.jpg"
      },
      {
        "name":"project2",
        "description":"mobileapp",
        "imgurl":"images/portfolio/project.jpg"
      },
      {
        "name":"project3",
        "description":"mobileapp",  
        "imgurl":"images/portfolio/project2.png"
      },
      {
        "name":"project4",
        "description":"mobileapp",
        "imgurl":"images/portfolio/phone.jpg"
      }
    ],
    "testimonials":[
      {
        "description":"This is a sample testimonial",
        "name":"Some technical guy"
      },
      {
        "description":"This is a sample testimonial",
        "name":"Some technical guy"
      }
    ]
  }
  
  export default resumeData