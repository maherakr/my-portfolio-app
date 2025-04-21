import React from "react";

export default function Experience() {

    return (
        <section id="experience" className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

            <div className="space-y-6">

                <div className="card bg-base-200 shadow-md">
                    <div className="card-body">
                        <h3 className="card-title text-xl">Volunteer Full-Stack Developer</h3>
                        <p className="text-sm text-gray-500">Local Non-Profit • April 2024 – Present</p>
                        <p className="mt-2">
                            <ul className="list-disc pl-5">                                
                                <li>Developed both backend (C# API and database management) and frontend (ASP.NET web UI)</li>
                                <li>Co-developed a web-based quiz tool for companies to assess employee ethics and anti-corruption awareness</li>
                                <li>Designed a user-friendly interface for quiz creation and survey analytics</li>
                                <li>Collaborated in a team environment using Git for version control and workflow management</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
