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
            "Build E-Commerce Portal place orders, add to cart and wishlist, ask queries and complaints, etc. using MongoDB to store data.",
            "APIs for payment gateway integration (Stripe, Razorpay, and PayPal) for user transaction while placing order.",
            "Designed APIs using Node.js and Express.js and tested using Postman."
        ],
        stack: ["node", "express", "mongodb", "postman"],
    },
    {
        title: "Content Managment System (Admin Dashboard)",
        website: "",
        github: "",
        image: CMSDashboard,
        body: [
            "Build admin dashboard to manage inventory, orders, storefront, setting, complaints, reports, analysis etc. using MongoDB to store data.",
            "Integrated Payment Gateways, Authentication APIs, Currency rate APIs, and many more.",
            "Designed APIs using Node.js and Express.js and tested using Postman."
        ],
        stack: ["node", "express", "mongodb", "postman"],
    },
    {
        title: "Microsoft Teams Clone",
        website: "https://teams-microsoft-ms.herokuapp.com/",
        github: "https://github.com/EkjotKaur/Microsoft.Teams",
        image: MSTeams,
        body: [
            "Used webRTC library simple-peer to add group and one-one video call functionality, audio-video toggle.",
            "Included chatting feature using socket.io for personal and group.",
            "A user can join using a code or create new team. User can also leave a team.",
            "Can be used for collectively managing notes in Team.",
        ],
        stack: ["react", "node", "express", "mongodb", "socket", "webrtc"],
    },
    {
        title: "Raunkh (Donation Website)",
        website: "",
        github: "https://github.com/EkjotKaur/Raunak-Backend",
        image: Raunkh,
        body: [
            "Razorpay integration for donations and general event information.",
            " An admin area with login and session store to display details of the donations from MongoDB.",
        ],
        stack: ["react", "node", "express", "mongodb", "socket"],
    },
    {
        title: "Presence (Attendance Recorder)",
        website: "https://code-her-things-presence.herokuapp.com",
        github: "https://github.com/EkjotKaur/Attendance-Planner",
        image: Presence,
        body: [
            "This attendance management system is simple and user friendly. It has great features which make strenuous tasks hassle-free, like calculating attendance of every student. Blending modern and traditional methods and to encourage customers to go paperless is the highlight of this website. Especially made with an Indian teacher perspective in mind, it is best suited for Indian teachers.",
            "Performed CRUD operation using REST APIs to develop the functionalities",
        ],
        stack: ["node", "express", "mongodb", "ejs", "bootstrap", "css"],
    },
    {
        title: "ZeroKata (Tic Tac Toe Game)",
        website: "https://zerokata.herokuapp.com/",
        github: "https://github.com/EkjotKaur/ZeroKata",
        image: ZeroKata,
        body: [
            "Zero Kata also known as Tic Tac Toe is a popular, two player game. It requires strategy, tactics and observation to win the game. One of the player marks Xs and other 0s. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.",
            "It is developed using Node.js, Express.js on the backend and React on the frontend. Room is created using Web Socket (socket.io)."
        ],
        stack: ["react", "node", "express", "socket", "css", "bootstrap"],
    },
    {
        title: "2048 Game",
        website: "https://ekjotkaur.github.io/2048",
        github: "https://github.com/EkjotKaur/2048",
        image: Game2048,
        body: [
            "2048 is a single player sliding tiles puzzle. The objective of this game is to create '2048'. It is based to combining two tiles of same number which gives double the number. This game has both easy and hard levels and instructions with graphics.",
            "Its created using JavaScript, jQuery for logical part and and HTML/CSS to give such attractive looks to the game. It fully responsive website. It could be played using keys arrows on or touch swipe as per the device."
        ],
        stack: ["javascript", "html", "css"],
    },
];

export default projectsData;
