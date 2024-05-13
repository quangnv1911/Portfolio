import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProjectPopup from "../../components/ProjectPopup";
function Project() {
  const [categoryState, setCategoryState] = useState(0);
  //Giá trị category tương ứng:
  // 1: Web
  // 2: App
  // 3: Game
  const categoryList = [
    {
      id: 0,
      name: "All",
    },
    {

      id: 1,
      name: "web"
    },
    {
      id: 2,
      name: "App",
    },
    {
      id: 3,
      name: "Game",
    }
  ];

  const projectList = [
    {
      id: 1,
      name: "Web",
      category: 1,
      createTime: 2023,
      language: ["html"],
      description: "This is the description",
      teamSize: 3,
      demoLink: "Demo link",
      gitLink: "Git link",
      image: ["/img/projects/portfolio/portfolio_1.png", "/img/projects/portfolio/portfolio_2.png", "/img/projects/portfolio/portfolio_3.png", "/img/projects/portfolio/portfolio_4.png"],
      frontEnd: ["html"],
      backEnd: ["java", ".net"],
      otherTech: [],

    },
    {
      id: 2,
      name: "App",
      category: 2,
      createTime: 2023,
      language: ["html"],
      description: "This is the description",
      teamSize: 3,
      demoLink: "Demo link",
      gitLink: "Git link",
      image: ["/img/projects/portfolio/portfolio_1.png", "/img/projects/portfolio/portfolio_2.png", "/img/projects/portfolio/portfolio_3.png", "/img/projects/portfolio/portfolio_4.png"],
      frontEnd: ["html"],
      backEnd: ["java", ".net"],
      otherTech: [],

    },
    {
      id: 3,
      name: "Game",
      category: 3,
      createTime: 2023,
      language: ["html"],
      description: "This is the description",
      teamSize: 3,
      demoLink: "Demo link",
      gitLink: "Git link",
      image: ["/img/projects/portfolio/portfolio_1.png", "/img/projects/portfolio/portfolio_2.png", "/img/projects/portfolio/portfolio_3.png", "/img/projects/portfolio/portfolio_4.png"],
      frontEnd: ["html"],
      backEnd: ["java", ".net"],
      otherTech: [],

    },
    {
      id: 4,
      name: "Game",
      category: 3,
      createTime: 2023,
      language: ["html"],
      description: "This is the description",
      teamSize: 3,
      demoLink: "Demo link",
      gitLink: "Git link",
      image: ["/img/projects/portfolio/portfolio_1.png", "/img/projects/portfolio/portfolio_2.png", "/img/projects/portfolio/portfolio_3.png", "/img/projects/portfolio/portfolio_4.png"],
      frontEnd: ["html"],
      backEnd: ["java", ".net"],
      otherTech: [],

    },
  ];

  const isCurrentCategory = (categoryId) => {
    return categoryId === categoryState;
  }

  const handleProjectClick = (projectId) => {

  }

  return (
    <div className="w-4/5 m-auto">
      <header className="relative flex justify-center items-center pt-[75px]">
        <h1 className="uppercase font-title text-[56px] font-black">
          my
          <span className="text-[#ffb400]"> project</span>
        </h1>
        <span className="uppercase font-blur-title
         text-[hsla(0,0%,100%,.07)] text-[110px]
          font-extrabold tracking-wide
          absolute">my project</span>
      </header>
      <div className="body mt-[40px]">
        <div className="project-filter mb-[15px]">
          <ul className="flex justify-center">
            {categoryList.map((category, index) => {
              return <li key={category.id}
                className={`${isCurrentCategory(category.id) ? "bg-[#ffb400]" : "bg-[#2b2a2a]"}
             mx-[15px] px-[12px] py-[8px]
             rounded-xl border-solid
              text-[16px] uppercase cursor-pointer`}
                onClick={() => { setCategoryState(category.id) }}>
                {category.name}
              </li>
            })}
          </ul>
        </div>

        <div className="project-table py-[50px]">
          <ul className="flex flex-wrap">
            {projectList.map((project, index) => {
              if (project.category === categoryState || categoryState === 0)
                return (<li key={project.id}
                  className="w-[calc(33.33333%-30px)]
              mx-[15px] my-[15px] relative group">
                  <Popup trigger={<button className="button">
                    <div className="relative flex ">
                      <img src={project.image[0]} alt={`This is the ${project.name}`}
                        className="rounded-[5px]
                  "/>
                    </div>
                    <h3 className="absolute top-[50%] left-[50%]
                 bg-[#ffb400]
                 translate-x-[-50%] translate-y-[-50%]
                 h-full w-full rounded-[5px]
                 flex justify-center items-center 
                 text-[#fff] text-[18px] uppercase font-medium leading-5
                 opacity-0 group-hover:opacity-100
                 transition duration-500 ease delay-0
                 ">
                      <span className="translate-y-[-20px] group-hover:translate-y-0 transition duration-500 ease delay-0">{project.name}</span></h3>
                  </button>} modal>
                    <ProjectPopup project = {project}/>
                  </Popup>
                </li>)
              else {
                return null
              }
            })}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Project;