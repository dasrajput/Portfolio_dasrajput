const portfolio = [
    {
        id: 0,
        projectName: "MedBuddy",
        url: "https://github.com/dasrajput/MedBuddy",
        image: "projects/erp.png",
        projectDetail: "MedBuddy is a mobile application designed to help users manage their meal schedules and medication reminders efficiently. This app provides features for meal time tracking, medication reminders (via manual entry and OCR scanning), and profile management, all integrated with Firebase for real-time data storage.",
        technologiesUsed: [
            {
                tech: "ReactNative"
            },
            {
                tech: "expo"
            },
            {
                tech: "Firebase"
            },
            {
                tech: "Python Flask"
            },
            {
                tech: "Machine Learning"
            }
        ]
    },
    {
        id: 0,
        projectName: "Football Analysis",
        url: "https://github.com/dasrajput/Football_analysis",
        image: "projects/absco.png",
        projectDetail: "This project leverages AI to analyze football match videos, offering insights into player performance and team strategies. It features a GUI built with Tkinter for Windows and includes an installer created using Inno Setup. Key functionalities include object detection (YOLO), player tracking (SORT/DeepSORT), and camera movement estimation. Metrics",
        technologiesUsed: [
            {
                tech: "pytorch"
            },
            {
                tech: "Machine Learning"
            },
            {
                tech: "tkinter"
            },
        ]
    },
    {
        id: 0,
        projectName: "Whatsapp Automate",
        url: "https://github.com/dasrajput/whatsapp-automate",
        image: "projects/jmm.png",
        projectDetail: "This is a Python application with a GUI that allows you to schedule and send WhatsApp messages. It utilizes the Twilio API for sending messages.",
        technologiesUsed: [
            {
                tech: "PyQt6"
            },
            {
                tech: "Twilio API"
            },
            {
                tech: "Python"
            },
        ]
    },
    {
        id: 0,
        projectName: "GoTravel",
        url: "https://github.com/dasrajput/GoTravel-ReactNative-App",
        image: "projects/alsn.png",
        projectDetail: "Hotel Booking App Using React-Native ,Tailwind-css ,Google_places, RapidApi.",
        technologiesUsed: [
            {
                tech: "React-Native"
            },
            {
                tech: "Google_places"
            },
            {
                tech: "RapidApi"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "QR scanner",
        url: "https://github.com/dasrajput/QR_Scanner",
        image: "projects/firmsanad.png",
        projectDetail: "React-Native-Expo based QR-Scanner Application.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Portfolio Website",
        url: "https://github.com/dasrajput/Portfolio_dssrajput",
        image: "projects/fateh.png",
        projectDetail: "This repository showcases my work as a MERN Stack Developer, Open Source Contributor, and Tech Blogger. Here, you will find various projects that highlight my skills and experience in web development.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            
            {
                tech: "MailJS"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Vercel"
            },
        ]
    }
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
