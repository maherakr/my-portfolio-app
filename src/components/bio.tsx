import React from "react";

export default function Bio() {

    return (
        <section id="bio" className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Bio</h2>

            <div className="space-y-6">

                <div className="card bg-base-200 ">
                    <div className="card-body">
                        <ul className="list-disc list-image-[url('/check.svg')] pl-5 mt-2 text-base/8">
                            <li>Recent graduate in Computer Engineering Technology – Computing Science from Algonquin College (August 2024)</li>
                            <li>Skilled in full-stack development</li>
                            <li>Experienced with databases including PostgreSQL, SQLite, and Azure</li>
                            <li>Built projects like a Solar System visualizer and an Expiry Date Tracker mobile app</li>
                            <li>Volunteer developer at CCEAC, co-creating a quiz platform to assess corporate ethics</li>
                            <li>Strong foundation in Agile development, object-oriented design, and real-world problem solving</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}