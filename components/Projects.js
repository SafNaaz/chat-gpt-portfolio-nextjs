import React from 'react';
import Project from './Project';

export default function Projects() {
    const projects = [
        {
            title: 'Employment Insurance',
            location: 'Missouri, USA',
            duration: '2 years',
            tech: 'Angular, Spring boot, Redis, IBM DB2',
            summary: 'Migrate legacy Monolithic application to Microservices.',
        },
        {
            title: 'E-commerce Website',
            location: 'Washington DC, USA',
            duration: '2 years',
            tech: 'Angular, Node.js, Redis',
            summary: 'Built authentication service for a telecom e-commerce website.',
        },
        {
            title: 'E-commerce Website',
            location: 'Bengaluru, India',
            duration: '6 years',
            tech: 'Java, Spring, Hibernate',
            summary: 'Developed an shop website for a telecom client to purchase phone, plans etc.',
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
