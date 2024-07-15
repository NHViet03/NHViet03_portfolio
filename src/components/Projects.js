import React, { useState, useEffect, useRef } from "react";
import Project1 from "../images/project_1.png";
import Project2 from "../images/project_2.png";
import Project3 from "../images/project_3.png";
import Project4 from "../images/project_4.png";
import Project5 from "../images/project_5.png";
import Project6 from "../images/project_6.png";
import Project7 from "../images/project_7.png";
import Project8 from "../images/project_8.png";


import ProjectModal from "./ProjectModal";

const projects = [
  {
    name: "Web Social Network with Link Prediction Model",
    image: Project1,
    link: "https://github.com/NHViet03/Web_Social_Network_with_Link_Prediction",
    members: 2,
    desc: "Developed a social network web application with CRUD for posts and users, real-time notifications, messaging, calling, follower suggestions using graph theory & link prediction algorithms, and an admin dashboard for content management",
    technologies:
      "React, Redux, Bootstrap, NodeJS, ExpressJS, Socket.IO, MongoDB, FastAPI, NetworkX",
    date: "Oct 2023 - May 2024",
  },
  {
    name: "Big Data MapReduce K-nearest Neighbor",
    image: Project6,
    link: "https://github.com/NHViet03/IS405_BigData_MapReduce_KNN",
    members: 1,
    desc: "A MapReduce-Based k-Nearest Neighbor Approach for Big Data Classification on Apache Spark",
    technologies:
      "Apache Spark, PySpark, MapReduce, Jupyter Notebook",
    date: "Apr 2024 - May 2024",
  },
  {
    name: "Cryptocurrency Price Prediction",
    image: Project7,
    link: "https://drive.google.com/file/d/1LdI9EwqBY5b2bg2WTFXLSTxWRU0cknXX/view",
    members: 5,
    desc: "This project aims to predict the closing prices of three cryptocurrencies—Bitcoin (BTC), Ethereum (ETH), and Litecoin (LTC)—for the next 30, 60, and 90 days, using data from March 1, 2019, to June 1, 2024. My main role: ARIMA Model, Multi-layer Perceptron (MLP)",
    technologies: "Python (NumPy, Pandas, Tensorflow, etc), Latex, Jupyter Notebook",
    date: "Feb 2024 - May 2024",
  },
  {
    name: "Predict The Likelihood of Customers Subscribing To Term Deposits",
    image: Project8,
    link: "https://github.com/NHViet03/IS252_DataMining_KNN_PLA",
    members: 1,
    desc: "Implementing 2 basic classification algorithms: K-Nearest Neighbor (KNN) and Perceptron Learning Algorithm (PLA) to predict the likelihood of customers subscribing to term deposits. The process from manual calculation based on mathematical formulas to utilizing libraries.",
    technologies: "Python (NumPy, Pandas, Matplotlib, Scikit-learn, etc), Jupyter Notebook",
    date: "Feb 2024 - May 2024",
    width:"100%",
    headerSize:'30px',
    descSize:'16px'
  },
  {
    name: "Web Airline Ticket Management",
    image: Project2,
    link: "https://github.com/hoangphucseiza/SE104_AirlineTicketManage",
    members: 5,
    desc: "Developed a comprehensive airline ticket management system with a dashboard, CRUD operations for airports, flight schedules, flight search, booking management, tracking, and reporting with statistical charts.",
    technologies: "React, Bootstrap, ASP.NET Web API, SQL Server",
    date: "Feb 2024 - May 2024",
  },
  {
    name: "Mobile App Social Network",
    image: Project3,
    link: "https://github.com/NHViet03/Mobile-App_Social_Network",
    members: 2,
    desc: "Developed a mobile social network app featuring CRUD operations for posts and users, real-time notifications, messaging, and active status indicators.",
    technologies:
      "React Native, React, Expo Router, Redux, TailwindCSS, NodeJS, ExpressJS, Socket.IO, MongoDB",
    date: "Nov 2023 - Jan 2024",
  },
  {
    name: "Web eCommerce",
    image: Project4,
    link: "https://github.com/NHViet03/IS220_Web_eCommerce",
    members: 5,
    date: "Sep 2023 - Dec 2023",
    desc: "Development of an e-commerce website for technology products, featuring user login/registration, product categories, product details, personal information management, order status tracking, and an admin dashboard for product management, order management, order status management, and customer support.",
    technologies: "React, Redux, Bootstrap, ASP.NET Web API, SQL Server",
  },
  {
    name: "Desktop App Restaurant Management System",
    image: Project5,
    link: "https://github.com/NHViet03/Java_Project_RestaurantMS",
    members: 1,
    date: "May 2023 - Jun 2023",
    desc: "A Desktop App for managing restaurant operations with user roles for customers, cashiers, warehouse managers, and administrators. Functions include table booking, order handling, payment confirmation, inventory management, and comprehensive data analytics.",
    technologies: "Java Core, Java Swing, Oracle",
  },
];

const Projects = () => {
  const [animationDelayMax, setAnimationDelayMax] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  const [projectModal, setProjectModal] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: "0.1",
      }
    );
    observer.observe(ref.current);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const projectsList = document.querySelectorAll(".projects_list_item");
      projectsList.forEach((project, index) => {
        project.classList.add("fadeInUp");
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const animationEffect = () => {
      if (window.innerWidth <= 1024) {
        setAnimationDelayMax(2);
      } else if (window.innerWidth <= 768) {
        setAnimationDelayMax(1);
      } else {
        setAnimationDelayMax(3);
      }
    };

    window.addEventListener("resize", animationEffect);

    return () => {
      window.removeEventListener("resize", animationEffect);
    };
  }, []);

  const setProject = (project) => {
    setIsModalOpen(true);
    setProjectModal(project);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProjectModal({});
  };

  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="container">
        <div ref={ref} className="row projects_list">
          {projects.map((project, index) => (
            <div className="col">
              <div
                className="projects_list_item"
                style={{
                  animationDelay: `${
                    ((index % animationDelayMax) * 200 + 300) / 1000
                  }s`,
                }}
                onClick={() => setProject(project)}
              >
                <div className="projects_list_item_img">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project_list_item_info">
                  <span>Members: {project.members}</span>
                  <span>{project.date}</span>
                </div>
                <h5> {project.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <ProjectModal project={projectModal} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Projects;
