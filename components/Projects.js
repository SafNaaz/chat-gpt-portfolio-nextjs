import React from 'react';
import Project from './Project';

export default function Projects() {
    const projects = [
        {
            title: 'E-commerce Website',
            location: 'New York, USA',
            duration: '6 months',
            tech: 'React, Redux, Node.js, MongoDB',
            summary: 'Built a full-stack e-commerce website with user authentication, product management, and payment integration.',
        },
        {
            title: 'Social Media App',
            location: 'San Francisco, USA',
            duration: '4 months',
            tech: 'Angular, Firebase',
            summary: 'Developed a social media app with real-time messaging and post sharing functionality.',
        },
        // Add more projects as needed
    ];

    return (
        <div>
            <section id="projects" className="mt-5">
                <h2 className="mb-4">My Projects</h2>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        location={project.location}
                        duration={project.duration}
                        tech={project.tech}
                        summary={project.summary}
                    />
                ))}
            </section>
        </div>
    );
}
