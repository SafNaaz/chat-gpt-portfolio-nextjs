import React from 'react';

export default function Header() {
  return (
    <header className="bg-dark py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-light">My Portfolio</h1>
          <nav className="nav">
            <a className="nav-link text-light" href="#projects">Projects</a>
            <a className="nav-link text-light" href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
