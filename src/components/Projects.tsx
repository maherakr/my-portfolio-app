import React from "react";
import ImageModal from "./imageModal";
import { title } from "process";

export default function Projects() {
    const toolsList = [
        //0
        {
            title: "C#",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
        },
        //1
        {
            title: ".NET",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
        },
        //2
        {
            title: "R",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg"
        },
        //3
        {
            title: "C++",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        },
        //4
        {
            title: "Java",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        },
        //5
        {
            title: "Node.js",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        //6
        {
            title: "Amazon RDS (SQL)",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        },
        //7
        {
            title: "Azure SQL",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
        },
        //8
        {
            title: "Android Studio",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
        },
        //9
        {
            title: "JavaScript",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        //10
        {
            title: "TypeScript",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        },
        //11
        {
            title: "Next.js",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        },
        //12
        {
            title: "React",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        //13
        {
            title: "Tailwind CSS",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        },
        //14
        {
            title: "Git",
            avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        }
    ];

    const projectList = [
        {
            title: "CCEAC Quiz maker",
            describtion: "The online quiz platform can be used to quiz writers to write new quizzes, and to generate quizzes from preexisting quizzes and questions in a database",
            image: "/images/cceacWebsite.jpg",
            link: "https://cceacquiz.azurewebsites.net/",
            tools: [toolsList[0], toolsList[1], toolsList[7], toolsList[14]],

        },
        {
            title: "Planetary Position Tracker",
            describtion: "Interactive app to visualize daily planetary positions over time using real orbital data",
            image: "/images/planetaryPositionTrackerSite.jpg",
            link: "https://maherakr-shiny.shinyapps.io/PlanetaryPositionTracker/",
            tools: [toolsList[2], toolsList[3], toolsList[14]],
        },
        {
            title: "Expiry Date Tracker App",
            describtion: "A shared product tracking app that uses barcode scanning and UPC APIs. Users can add items to a group dashboard and get notified before they expire.",
            image: "/images/ExpiryDateTrackerAppScreenshot.jpg",
            link: "",
            tools: [toolsList[9], toolsList[5], toolsList[4], toolsList[8], toolsList[6], toolsList[14]]
        },
        {
            title: "Portfolio Website",
            describtion: "My personal portfolio site — Where I showcase my projects, pretend to be organized and beg for job offers. Built to look better than my sleep schadual and where bugs occasionally evolve into features",
            image: "/images/portfolioSiteLight.jpg",
            link: "",
            tools: [toolsList[10], toolsList[11], toolsList[12], toolsList[13], toolsList[14]]
        },

    ]



    return (
        <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

            <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-screen-xl">
                    {projectList.map((project, index) => (
                        <div key={index} className="card bg-base-100 bg-base-200 ">
                            
                                <figure className="relative">

                                    <img
                                        src={project.image}
                                        alt="screenshot"
                                        className="w-full h-full object-cover scale-125"
                                    />
                                    <ImageModal image={project.image} modalId={"modal_" + index} />
                                </figure>

                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p>{project.describtion}</p>
                                <div className="card-actions justify-end">
                                    {index === 2 ? (
                                        <button className="btn">
                                            <span className="loading loading-spinner"></span>
                                            In progress
                                        </button>
                                    ) : <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        View Project
                                    </a>
                                    }


                                </div>

                                <div className="card-actions overflow-visible">
                                    <div className="avatar-group -space-x-6 hover:space-x-4 flex flex-wrap overflow-visible">
                                        {project.tools.map((tool, toolIndex) => (
                                            <span
                                                key={toolIndex} className="tooltip" data-tip={tool.title} >
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={tool.avatar} className="bg-white" />
                                                    </div>
                                                </div>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </div>

        </section>
    );
}
