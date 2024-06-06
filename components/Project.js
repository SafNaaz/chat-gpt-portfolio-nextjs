import React from 'react';

export default function Project({ title, location, duration, tech, summary }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{location}</h6>
        <p className="card-text">Duration: {duration}</p>
        <p className="card-text">Technologies: {tech}</p>
        <p className="card-text">{summary}</p>
      </div>
    </div>
  );
}
