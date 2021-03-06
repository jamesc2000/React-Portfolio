const social = {
    "linkedin": "https://www.linkedin.com/in/cruz-james/",
    "github": "https://github.com/jamesc2000",
    "website": "https://jamesc2000.github.io/React-Portfolio/"
}

let resumeData = {
    name: "James Laurence Cruz",
    role: "Frontend Developer",
    profilepic: `${process.env.PUBLIC_URL}/images/profilepic.jpg`,
    linkedinId: "https://www.linkedin.com/in/cruz-james/",
    roleDescription:
        "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
    socialLinks: [
        {
            name: "linkedin",
            url: social.linkedin,
            className: "fa fa-linkedin"
        },
        {
            name: "github",
            url: social.github,
            className: "fa fa-github"
        }
    ],
    aboutme:
        "I am currently a student of Pamantasan ng Lungsod ng Maynila (PLM), and aspiring to be a software developer in the future. As of now, I currently do freelance work, and work on my personal projects to further enhance my skills as a developer.",
    address: "Philippines",
    website: social.website,
    education: [
        {
            UniversityName: "Pamantasan ng Lungsod ng Maynila",
            UniversityAlt: "(University of the City of Manila)",
            specialization: "Bachelor of Science Major in Computer Engineering",
            MonthOfPassing: "May",
            YearOfPassing: "2022"
        },
        {
            UniversityName: "Lyceum of the Philippines University - Cavite",
            specialization: "Academic Track - STEM",
            MonthOfPassing: "May",
            YearOfPassing: "2019",
            Achievements: "With Honors"
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
        "name":"Rock Paper Scissors",
        "desc":"A simple rock paper scissors app built with plain bootstrap for the frontend and express.js and WebSockets for the backend",
        "imgurl":`${process.env.PUBLIC_URL}/images/portfolio/rockpaperscissors.png`,
        "demo": "http://rockpaperscissors-server-app.herokuapp.com/",
        "source": "https://github.com/jamesc2000/rockpaperscissors"
      },
      {
        "name":"csnotehub.com",
        "desc":"A tutorial website for those interested in programming. Built with React and Gatsby, responsive, and fast.",
        "imgurl": `${process.env.PUBLIC_URL}/images/portfolio/csnotehub.png`,
        "demo": "https://csnotehub.com",
        "source": "https://github.com/jamesc2000/csnotehub"
      }
    ],
};

export default resumeData;
