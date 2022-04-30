var express = require("express");
var router = express.Router();

// const courses = [{name:"Web Development", url:"/"},
//                  {name:"Machine Learning", url:"/"},
//                  {name:"Android App Development", url:"/"},
//                  {name:"Cyber Security", url:"/"}];

const courses = [
  {
    name: " Machine Learning",
    imgUrl: "../../assets/eduford_img/machineLearning.jpg",
    price: 200,
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
  },
  {
    name: "Web Development",
    imgUrl: "../../assets/eduford_img/webDevelopment.jpg",
    price: 200,
    description:
      " Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    name: " Android App Development",
    imgUrl: "../../assets/eduford_img/android.jpg",
    price: 200,
    description:
      "Android software development is the process by which applications are created for devices running the Android operating system ",
  },
  {
    name: "Cyber Security",
    imgUrl: "../../assets/eduford_img/cyberSecurity.jpg",
    price: 200,
    description:
      "Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.",
  },
];

router.get("/", (req, res) => {
  var query = (req.query["q"] || "").toLowerCase();
  if (query) {
    return res.status(200).json(courses);
  }
  return res.status(200).json(courses);
});

module.exports = router;
