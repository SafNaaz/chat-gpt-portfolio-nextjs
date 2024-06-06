import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className="bg-light min-vh-100">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My awesome portfolio built with Bootstrap and Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Head>

      <Header />

      <main className="container py-5">
        <section id="hero" className="text-center">
          <h1 className="display-4">Hi, I&#39;m Safnas</h1>
          <p className="lead">Full Stack Developer specializing in Angular, React, Node, Java, and Spring Boot</p>
        </section>

        <Projects />

        <section id="contact" className="mt-5">
          <h2 className="mb-4">Contact Me</h2>
          <p>Email: iamsafnas@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/safnas/" className="text-decoration-none">safnas</a></p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
