import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Overlay from "../components/overlay.jsx";
import resume from "../assets/resume.pdf";

function Home() {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [msg, setMsg] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: [
        `I am a <span class="text-red-500">Software Engineer.</span>`,
        `I am a <span class="text-red-500">DevOps Engineer.</span>`,
        `I am an <span class="text-red-500">AWS Engineer.</span>`,
      ],
      typeSpeed: 30,
      backSpeed: 25,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    const scrollHandler = () => {
      setScrolled(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);

    const width = window.innerWidth;

    return () => {
      typedInstance.current.destroy();
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    console.log(window.scrollY);
  };

  return (
    <div onScroll={scrollHandler} className="overflow-x-hidden">
      {/* Overlay */}
      {/* {if(window < )} */}
      <Overlay scrollValue={scrolled} />

      {/* landing page */}
      <div
       className="lander bg-[url('/coverImg.png')] bg-cover bg-center w-[100vw] h-screen"
        id="lander"
      >
        <div className="mainLanderContainer w-full h-screen bg-[rgba(0,0,0,0.5)] z-10 flex flex-col justify-center items-center">
          <h1 className="text-3xl px-10 md:text-[5rem]  font-bold text-white h-[78%] flex justify-center items-center">
            <span ref={typedElement}></span>
          </h1>
          <h3 className="absoulte bottom-[3rem] w-full lg:text-left lg:px-[25%] text-xl text-center">
            Hello, I’m <span className="text-red-500">Mohammed Owais Khan</span>
          </h3>
          <h3 className="w-full lg:text-left lg:px-[25%] text-xl text-center">
            A Software Engineer based in Hyderabad.
          </h3>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="mainContainer py-10 w-[100vw] bg-black">
        <div className="internalContainer w-full  flex flex-col justify-center items-center">
          <h1 className="my-[2rem]">About Me</h1>
          <div className="internalContainer2 flex flex-col lg:flex-row lg:px-40 justify-center items-center">
            <img
              src="/src/assets/cropped_out_transparent.png"
              alt="crop"
              className="w-80 object-cover"
            />
            <div className="flex flex-col h-full justify-between p-10">
              <p>
                Hello! I’m Mohammed Owais Khan. A DevOps Engineer from India,
                Hyderabad. I have rich experience in AWS, DevOps, Linux and much
                more.. I love to talk with you about our unique.
              </p>
              <div className="details flex lg:flex-row flex-col lg:items-center items-left my-10">
                <div className="detailsleft lg:w-1/2">
                  <p>
                    <span>Age: </span> 21
                  </p>
                  <p>
                    <span>Freelance: </span> Available
                  </p>
                  <p>
                    <span>Phone: </span> +91 760 102 6730
                  </p>
                </div>
                <div className="detailsright lg:w-1/2">
                  <p>
                    <span>Country: </span> India
                  </p>
                  <p>
                    <span>City: </span> Hyderabad
                  </p>
                  <p>
                    <span>E-Mail: </span> mohammadowaiskhan84@gmail.com
                  </p>
                </div>
              </div>
              <a
                className="w-full lg:w-1/3 z-10 bg-gray-800 text-center p-2 rounded cursor-pointer hover:border"
                href={resume}
                download="resume.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div
        id="experience"
        className="w-screen bg-[rgba(0,0,0,0.5)] py-30 md:px-50 flex flex-col justify-center items-center lg:block"
      >
        <h1 className="text-red-500 text-3xl my-10">Experience</h1>
        <div className="company my-10 lg:w-1/2 px-15 lg:px-0">
          <p>Software Engineer Intern</p>
          <p className="text-gray-500 mb-5">
            Triad Techno Services. • August 2023 - September 2023
          </p>
          <ul className="list-disc pl-5 text-gray-500">
            <li>
              Learned the basics of Python and the Django framework, building
              beginner-friendly websites with Django and SQL.
            </li>
            <li>
              Gained hands-on experience in web development by working with
              front-end and back-end technologies.
            </li>
            <li>
              Developed a solid understanding of database management and
              implemented SQL for dunamic data-driven sites.
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div
        id="skills"
        className="w-screen p-40 lg:flex justify-around items-center flex-wrap"
      >
        <div className="skill flex flex-col items-center my-5 lg:my-0 w-[20%]">
          <i className="fa-brands fa-aws text-5xl my-5"></i>
          <p>AWS</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-cloud-arrow-up text-5xl my-5"></i>
          <p>DevOps</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-brands fa-linux text-5xl my-5"></i>
          <p>Linux</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-brands fa-python text-5xl my-5"></i>
          <p>Python</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-brands fa-github text-5xl my-5"></i>
          <p>Git/Github</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-brands fa-jenkins text-5xl my-5"></i>
          <p>Jenkins</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-cloud-arrow-up text-5xl my-5"></i>
          <p>OWASP</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-chart-diagram text-5xl my-5"></i>
          <p>SonarQube</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-cloud-arrow-up text-5xl my-5"></i>
          <p>Trivy</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i class="fa-solid fa-arrows-turn-to-dots text-5xl my-5"></i>
          <p>Nexus</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-brands fa-docker text-5xl my-5"></i>
          <p>Docker</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-cloud-arrow-up text-5xl my-5"></i>
          <p>Kubernetes</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-cloud-arrow-up text-5xl my-5"></i>
          <p>Terraform</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-cloud-arrow-up text-5xl my-5"></i>
          <p>Ansible</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-cloud-arrow-up text-5xl my-5"></i>
          <p>Grafana</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-cloud-arrow-up text-5xl my-5"></i>
          <p>Prometheus</p>
        </div>
        <div className="skill flex flex-col items-center lg:my-10 w-[20%]">
          <i className="fa-solid fa-cloud-arrow-up text-5xl my-5"></i>
          <p>ArgoCD</p>
        </div>
      </div>

      {/* Projects Sections */}
      <div
        id="projects"
        className="w-screen min-h-screen bg-black flex flex-col justify-center items-center py-12"
      >
        <h1 className="text-4xl text-red-600 mb-10">Projects</h1>

        <div className="project flex flex-col md:flex-row justify-center items-center w-full max-w-6xl px-4 gap-10 m-10">
          {/* Image */}
          <div className="img w-full md:w-1/2">
            <img
              src="/src/assets/projImg2.jpg"
              alt="snapshot"
              className="w-full border border-gray-500 rounded-lg"
            />
          </div>

          {/* Project content */}
          <a
            href="https://github.com/Owais84"
            className="w-full md:w-1/2 z-10"
            target="_blank"
          >
            <div className="projectContent w-full border border-gray-700 p-6 text-white rounded-lg">
              <p className="text-lg text-gray-400 mb-2">Featured Project</p>
              <p className="text-xl font-semibold mb-2">
                DevSecOps MERN Stack Deployment on AWS
              </p>
              <p className="text-lg text-gray-400 mb-5">2025</p>
              <ul className="list-disc pl-5 space-y-3 text-gray-500">
                <li>
                  Automated infrastructure deployment using Terraform, reducing
                  setup time by 50%
                </li>{" "}
                <li>
                  Containerized the MERN stack app with Docker, reducing image
                  size by 30% via multi-stage builds
                </li>{" "}
                <li>
                  Enhanced CI/CD pipelines through the integration of Helm and
                  Jenkins, achieving a 40% reduction in release cycle time,
                  resulting in faster feature deployment and improved overall
                  development efficiency
                </li>{" "}
                <li>
                  Integrated SonarQube and Trivy in Jenkins for pre-deployment
                  security scans, fixing 40+ code issues and 15+
                  vulnerabilities.
                </li>{" "}
                <li>
                  Set up Prometheus and Grafana dashboards, improving incident
                  resolution time by 35%.
                </li>{" "}
                <li>
                  Improved log management with AWS CloudWatch, increasing
                  debugging efficiency by 30%.
                </li>{" "}
                <li>
                  Configured Jenkins webhooks for automatic pipeline triggers on
                  code commits, reducing manual intervention and improving
                  development agility by 30%.
                </li>
                <li>
                  Orchestrated SMTP email alerts in Jenkins for build/deployment
                  notifications, cutting notification delays by 40% and speeding
                  up resolution of critical issues in production cycles.
                </li>
              </ul>
              <p className="mt-10 text-gray-500 text-lg">
                Tools: Terraform, AWS (VPC, EC2, EKS), Jenkins, Docker, SonarQube, Prometheus
              </p>
            </div>
          </a>
        </div>
        <div className="project flex flex-col md:flex-row justify-center items-center w-full max-w-6xl px-4 gap-10 m-10">
          {/* Image */}
          <div className="img w-full md:w-1/2">
            <img
              src="/src/assets/projImg1.jpg"
              alt="snapshot"
              className="w-full border border-gray-500 rounded-lg"
            />
          </div>

          {/* Project content */}
          <a
            href="https://turfcircuit.onrender.com/"
            className="w-full md:w-1/2 z-10"
            target="_blank"
          >
            <div className="projectContent w-full border border-gray-700 p-6 text-white rounded-lg">
              <p className="text-lg text-gray-400 mb-2">Featured Project</p>
              <p className="text-xl font-semibold mb-2">
                Highly Available Web Architecture on AWS
              </p>
              <p className="text-lg text-gray-400 mb-5">2025</p>
              <ul className="list-disc pl-5 space-y-3 text-gray-500">
                <li>
                  Deployed a Multi-tier, highly available web application on AWS
                  using VPC with public and private subnets across multiple
                  availability zones for 99.9% fault tolerance.
                </li>
                <li>
                  Leveraged Route 53 for DNS routing and an Application Load
                  Balancer (ALB) to distribute traffic across EC2 instances,
                  reducing latency by 20%.
                </li>
                <li>
                  Set up NAT Gateway and Internet Gateway for secure subnet
                  communication.
                </li>
                <li>
                  Managed Amazon RDS for MySQL database in private subnets,
                  forsecure and scalable data storage.
                </li>
                <li>
                  Automated deployment of Apache, PHP, and phpMyAdmin on EC2
                  instances using shell scripts for zerodowntime updates.
                </li>
                <li>
                  Enforced security best practices by using a Bastion Host (Jump
                  Server) for SSH access and restricting database access to
                  reduce attack surface by 40%.
                </li>
                <li>
                  Configured AWS ALB target groups with session stickiness,
                  enhancing user experience and retention by 20%.
                </li>
                <li>
                  Slashing infrastructure costs by 25% using AWS Free Tier and
                  right-sizing resources.
                </li>
              </ul>
              <p className="mt-10 text-gray-500 text-lg">
                Tools: AWS (VPC, ALB, RDS), PHP, Apache, MySQL
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* contactSection  */}
      <div
        id="contact"
        className="w-screen min-h-screen bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl text-red-600 mb-10">Drop a Message</h1>

        <div className="form flex flex-col md:flex-row w-full max-w-6xl px-4 m-10">
          {/* Image */}
          <div id="form" className="w-full z-10">
            <form
              action="https://formspree.io/f/xvgarlao"
              method="post"
              autoComplete="off"
            >
              <div id="name" className="w-full">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-b w-full my-5 px-3 outline-0 py-3"
                  placeholder="Name"
                  value={name}
                  onChange={() => setName(e.target.value)}
                />
              </div>
              <div id="email" className="w-full">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border-b w-full my-5 px-3 outline-none py-3"
                  placeholder="Email"
                  value={email}
                  onChange={() => setEmail(e.target.value)}
                />
              </div>
              <div id="msg" className="w-full">
                <textarea
                  name="msg"
                  id="msg"
                  placeholder="Enter a message:"
                  className="border-b w-full my-5 px-3 resize-none outline-none py-3"
                  rows={7}
                  value={msg}
                  onChange={() => setMsg(e.target.value)}
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.447501728277!2d78.42289735118365!3d17.39441271243443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971c34e3008d%3A0x107d0340a3789796!2lgehdipatnam%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1744555218014!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-screen h-[50vh]"
      ></iframe>
    </div>
  );
}

export default Home;
