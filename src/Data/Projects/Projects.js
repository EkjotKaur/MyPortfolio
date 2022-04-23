import MSTeams from "../../assets/images/project/msTeams/Home Page.png";
import CMSPortal from "../../assets/images/project/CMS/Home-2.png";
import CMSDashboard from "../../assets/images/project/CMS/Dashboard.png";
import Raunkh from "../../assets/images/project/Raunkh/Raunkh.png";
import Presence from "../../assets/images/project/Presence/SS-2.png";
import ZeroKata from "../../assets/images/project/ZeroKata/Game Page.png";
import Game2048 from "../../assets/images/project/2048/SS-1.png";

const projectsData = [
    {
        title: "Content Managment System (E-Commerce Portal)",
        website: "",
        github: "",
        image: CMSPortal,
        body: [
            "Used webRTC library simple-peer to add group and one-one video call functionality, audio-video toggle. Included chatting feature using socket.io and Teams for managing collective notes.",
        ],
        stack: ["node", "express", "mongodb", "postman"],
    },
    {
        title: "Content Managment System (Admin Dashboard)",
        website: "",
        github: "",
        image: CMSDashboard,
        body: [
            "Used webRTC library simple-peer to add group and one-one video call functionality, audio-video toggle. Included chatting feature using socket.io and Teams for managing collective notes.",
        ],
        stack: ["node", "express", "mongodb", "postman"],
    },
    {
        title: "Microsoft Teams Clone",
        website: "",
        github: "",
        image: MSTeams,
        body: [
            "Used webRTC library simple-peer to add group and one-one video call functionality, audio-video toggle.",
            " Included chatting feature using socket.io and Teams for managing collective notes.",
        ],
        stack: ["react", "node", "express", "mongodb", "socket", "webrtc"],
    },
    {
        title: "Raunkh (Donation Website)",
        website: "",
        github: "",
        image: Raunkh,
        body: [
            "Razorpay integration for donations and general event information.",
            " An admin area with login and session store to display details of the donations from MongoDB.",
        ],
        stack: ["react", "node", "express", "mongodb", "socket"],
    },
    {
        title: "Presence (Attendance Recorder)",
        website: "",
        github: "",
        image: Presence,
        body: [
            "Created a app for teachers to record, maintain, calculate and download attendance of students.",
            "Performed CRUD operation using REST APIs to develop the functionalities",
        ],
        stack: ["node", "express", "mongodb", "ejs", "bootstrap", "css"],
    },
    {
        title: "ZeroKata (Tic Tac Toe Game)",
        website: "",
        github: "",
        image: ZeroKata,
        body: [
            "Used webRTC library simple-peer to add group and one-one video call functionality, audio-video toggle. Included chatting feature using socket.io and Teams for managing collective notes.",
        ],
        stack: ["react", "node", "express", "socket", "css", "bootstrap"],
    },
    {
        title: "2048 Game",
        website: "",
        github: "",
        image: Game2048,
        body: [
            "Used webRTC library simple-peer to add group and one-one video call functionality, audio-video toggle. Included chatting feature using socket.io and Teams for managing collective notes.",
        ],
        stack: ["javascript", "html", "css"],
    },
];

export default projectsData;
