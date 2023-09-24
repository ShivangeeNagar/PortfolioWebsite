import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />

      <div className="flex flex-col md:flex-row w-full mt-8 md:mt-16 justify-between">
      <div className="w-full md:w-1/3">
        <SkillsSection />
      </div>
      <div className="flex w-full md:w-2/3">
      <div className="w-full md:w-1/2 md:ml-auto md:order-first">
        <ExperienceSection />
      </div>
      </div>
    </div>
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};


const AboutSection = (props) => {
  const { setSection } = props;

  return (
    <Section mobileTop>
      <div style={{ marginLeft: "-1%" }}>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mt-8 md:mt-0">
          Hi, I'm
          <br />
          <span className="bg-white px-1 italic">Shivangee Nagar</span>
        </h1>
        <motion.p
          className="text-lg text-gray-600 mt-4"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          A passionate and creative Software Developer,
          <br />who strongly believes that development is truly
          <br />a way to contribute back to society and make
          <br />human life simpler.
        </motion.p>
        <div>
          <motion.button
              onClick={() => {
                // Replace the URL below with the actual URL you want to navigate to
                window.location.href = 'https://drive.google.com/file/d/1eoA3PyIh3b9OiagsIJ_kKV91xXqI5zue/view?usp=sharing';
              }}
            className={`bg-indigo-600 text-white py-4 px-8
            rounded-lg font-bold text-lg mt-4 md:mt-16`}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 2,
            }}
          >
            View my Resume
          </motion.button>
          
          <div className="media-icons flex items-center gap-3 mt-6">
            <a href="https://github.com/ShivangeeNagar">
              <i className="fab fa-github" style={{ color: "#000" }}></i>
            </a>
            <a href="https://www.linkedin.com/in/shivangee-nagar-4b5018166/">
              <i className="fab fa-linkedin" style={{ color: "#0077B5" }}></i>
            </a>
            <a href="https://www.instagram.com/cosmicperspective__/">
              <i className="fab fa-instagram" style={{ color: "#E4405F" }}></i>
            </a>
            <a href="mailto:nagar.sh@northeastern.com" style={{ color: "#FF5733" }}>
              📨
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
};

const skills = [
  {
    title: "Frontend (Vanilla JS, ReactJS, jQuery, Threejs, React Three Fiber, BackBonejs, Torso, HTML, CSS)",
    level: 90,
  },
  {
    title: "Backend (Java, Nodejs, Spring MVC, Spring Boot, Hibernate, Java Swing)",
    level: 70,
  },
  {
    title: "VR/ 3D-Game Development (Unity, C#, C++, Blender for 3D Modelling)",
    level: 80,
  },
  {
    title: "AWS Services(S3, CloudFront, ECS, Elastic Loader Balancer, CloudWatch, Firelens) & Database Systems (MongoDB/ MySQL/ MS SQL server/ Redis)",
    level: 70,
  },
];

const SkillsSection = () => {
  return (
    
    <Section>
      <div style={{ marginLeft: "8%"}}>
      <motion.div className="w-full space-x-15" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white items-center">Skills</h2>
        <div className="mt-8 space-y-9">
          {skills.map((skill, index) => (
            <div className="flex flex-col break-words" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      </div>
    </Section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Siemens Ltd",
      title: "Automation Engineer Internship",
      year: "May 2017 - July 2017",
      address: "Goa, India",
    },
    {
      company: "Siemens Ltd",
      title: "Software Developer",
      year: "July 2018 - August 2021",
      address: "Mumbai, India",
    }, 
    {
      company: "Vecna Robotics",
      title: "Full-Stack Software Developer Coop",
      year: "May 2022 - December 2022",
      address: "Boston, MA, USA",
    },
    {
      company: "Northeastern University",
      title: "Research Assistant (VR Developer)",
      year: "January 2023 - August 2023",
      address: "Boston, MA, USA",
    },
  ];

  return (
    <Section>
      <motion.div className="w-full absolute" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Experience</h2>
        <div className="mt-8 space-y-5">
          {experiences.map((experience, index) => (
            <div className="md:w-2/3 md:pl-0" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {experience.company}
              </motion.h3>
              <p className="text-gray-100"> {experience.title}</p>
              <p className="text-gray-100">{experience.year}</p>
              <p className="text-gray-100">{experience.address}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mayzgjbd");
  return (
    <Section >
      <div style={{ backgroundColor: "white", padding: "1rem", borderRadius: "8px", marginTop: "-2rem", width: "383px", textAlign: "center", marginLeft: "3rem"}}>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me
      </h2>
      </div>
      <div style={{ marginLeft: "3rem"}}>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-gray-900 text-center">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label for="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
      </div>
    </Section>
  );
};
