import React from "react";

export default function Projects() {

    const projectList = [
        {
        title: "CCEAC Quiz maker",
        describtion: "The online quiz platform can be used to quiz writers to write new quizzes, and to generate quizzes from preexisting quizzes and questions in a database",
        image: "",
        link: "https://cceacquiz.azurewebsites.net/"
    },
    {
        title: "Planetary Position Tracker",
        describtion: "Interactive app to visualize daily planetary positions over time using real orbital data",
        image: "",
        link: "https://maherakr-shiny.shinyapps.io/PlanetaryPositionTracker/"
    },
    {
        title: "Expiry Date Tracker App",
        describtion: "A shared product tracking app that uses barcode scanning and UPC APIs. Users can add items to a group dashboard and get notified before they expire.",
        image: "",
        link: ""
    },
    {
        title: "Portfolio Website",
        describtion: "My personal portfolio site — Where I showcase my projects, pretend to be organized and beg for job offers. Built to look better than my sleep schadual and where bugs occasionally evolve into features",
        image: "",
        link: ""
    },

]

    return (
        <section id="experience" className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>


            <div className="grid grid-cols-2">
                {projectList.map((project, index) => (
                <div>
                    <div key= {index} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.describtion}</p>
                            <div className="card-actions justify-end">
                            <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Project
                </a>
                            </div>
                        </div>
                    </div>
                </div>
               
                ))}
            </div>

        </section>
    );
}
