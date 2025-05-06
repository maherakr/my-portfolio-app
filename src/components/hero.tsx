import React from "react";

export default function Hero() {

    return (
<div className="hero min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
  <div className="hero-content text-center flex flex-col items-center">
    <div className="max-w-xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">
         Hi, I'm Maher Akremi
      </h1>
      <p className="text-xl md:text-2xl font-medium leading-relaxed text-base-content mb-6">
        I'm passionate about embedded systems and capable of building full-stack websites and desktop applications.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="/files/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
    </div>
  </div>
</div>
    )
}