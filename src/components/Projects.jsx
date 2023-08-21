import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Double-Vertical Slider",
    url: "https://doubleverticlesliderbyshivangeenagar.netlify.app/",
    image: "projects/DoubleSlider.png",
    description: "Vanilla Javascript, HTML, CSS",
  },
  {
    title: "Live Drums",
    url: "https://livedrumsbyshivangeenagar.netlify.app//",
    image: "projects/Live-DrumsImage.png",
    description: "Vanilla Javacsript, HTML, CSS",
  },
  {
    title: "Animal Kingdom",
    url: "https://github.com/ShivangeeNagar/AnimalKingdomGame_UnityProject",
    image: "projects/AnimalKingdom.png",
    description: "Unity, C#",
  },
  {
    title: "Rock-Paper-Scissor",
    url: "https://rockpaperscissorsgamebyshivangeenagar.netlify.app/",
    image: "projects/Rock_Paper_Scissor.png",
    description: "Javascript, HTML, CSS",
  },
  {
    title: "Web-Chat Application",
    url: "https://webchatapplicationbyshivangeenagar.netlify.app/",
    image: "projects/Web-ChatApp.png",
    description: "ReactJS, Javascript, HTML, CSS, Bootstrap, ChatEngine.io",
  },
  {
    title: "VR Game Room",
    url: "https://github.com/ShivangeeNagar/VRGameRoom",
    image: "projects/VRgameRoom.png",
    description: "Unity, C++, C and C# , Meta Quest 2",
  },
  {
    title: "Expense-Tracker Web App",
    url: "https://github.com/ShivangeeNagar/Expense-Tracker-Web-App",
    image: "projects/ExpenseTracker.png",
    description: "MERN Stack, ReactJS, NodeJS, MongoDB, Node mailer, JWT, Google OAuth API",
  },
  {
    title: "Go-Army App",
    url: "https://github.com/ShivangeeNagar/Go_Army_App",
    image: "projects/GoArmy.png",
    description: "Java Swing, DB4O object Database ",
  },
  {
    title: "Truck and Obstacles",
    url: "https://github.com/ShivangeeNagar/UnityProjectGame_Truck-TheObstacles",
    image: "projects/TruckGame.png",
    description: "Unity, C# Programming",
  },
  {
    title: "Live User Filter",
    url: "https://liveuserfilterbyshivangeenagar.netlify.app/",
    image: "projects/LiveUserFilter.png",
    description: "Javascript, HTML, CSS",
  },
  {
  title: "3D Study Room",
  url: "https://github.com/ShivangeeNagar/3DStudyRoom",
  image: "projects/3DStudyRoom.png",
  description: "Blender, 3D Modelling",
},
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[4.5, 4.0]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[4.1, 2.3, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.2}
      />
      <Text
        maxWidth={10}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.24}
        position={[-1,1.8, 0]}
      >
        {project.title}
      </Text>
      <Text
        maxWidth={3}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-2, -1.1, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 -4.4}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 5.0,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 10,
            rotateZ: currentProject === index ? 0 : -0.05 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};