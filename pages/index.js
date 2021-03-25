import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [githubImage, setGithubImage] = React.useState("/social/github.png")
  const [linkedInImage, setLinkedInImage] = React.useState("/social/li.png")

  return (
    <div className={styles.container}>
      <Head>
        <title>Chase Myers</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </Head>

    
      <main className={styles.main}>
        <div className="columns">
          <div style={{marginRight: '1em'}}>
          <Link href="https://github.com/Xwaffle1/">
            <img style={{cursor: "pointer"}} onMouseOver={(_=>{
              setGithubImage("/social/github-hover.png")
            })} 
            onMouseOut={(_=>{
              setGithubImage("/social/github.png")
            })} id="social-gh" className="image is-24x24" src={githubImage} />
          </Link>
          </div>
          <Link  href="https://www.linkedin.com/in/chase-myers-56a394152/">
            <img style={{cursor: "pointer"}} onMouseOver={(_=>{
              setLinkedInImage("/social/li-hover.png")
            })} 
            onMouseOut={(_=>{
              setLinkedInImage("/social/li.png")
            })} id="social-li" className="image is-24x24" src={linkedInImage} />
          </Link>
        </div>

        <figure className="image content-is-vcentered" style={{justifyContent: 'center'}}>
          <img  border="5px" style={{borderColor: "#cf934e", width: "256px", height: "256px"}} className="is-rounded" src="/social/me.jpg" />
        </figure>



        <h1 className={styles.title}> Hi! I'm Chase </h1>
        <h2 className={styles.sectionheader}>Work Experience</h2>
        <div>
          <div className="columns content-is-vcentered jobentry" style={{marginBottom: 0}}>
            <div className="column job-company">
              <div className="icon-text content-is-vcentered">
                <span className="icon has-text-success">
                  <i className="fas fa-cog fa-spin"></i>
                </span>
                <span><h3>Level Data Inc.</h3></span>
              </div>
            </div>
            <div className="column">
              <h5 className="job-date">December 2018 {"-"}</h5>
            </div>          
          </div>
          <h4 className="job-title">Software Engineer II</h4>
          <div className = "content job-points">
            <ul>
              <li>Maintained library with thousands of scheduled jobs depending on it.</li>
              <li>Assisted data integration for school districts around the world with ‘connectors’ (E.T.L)</li>
              <li>Designed and implemented an error monitoring web portal to save workers 100+ hours a year.</li>
              <li>Created new integration hooks to be used to obtain data from a variety of different source locations including using Rest APIs, executable files, and web scraping.</li>
            </ul>
          </div>
        </div>

        <div style={{marginTop: '3em'}}>
          <div className="columns content-is-vcentered jobentry" style={{marginBottom: 0}}>
            <div className="column job-company">
              <div className="icon-text content-is-vcentered">
                <span className="icon has-text-info">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span><h3>Journey Gaming</h3></span>
              </div>
            </div>
            <div className="column">
              <h5 className="job-date">February 2016 {"-"} December 2018</h5>
            </div>          
          </div>
          <h4 className="job-title">Software Developer</h4>
          <div className = "content job-points">
            <ul>
              <li>3+ years of experience of using Java</li>
              <li>Supported a network with 100+ active users</li>
              <li>Implemented ideas into our codebase brought to attention from users and staff</li>
            </ul>
          </div>
        </div>

        <div style={{marginTop: '3em'}}>
          <div className="columns content-is-vcentered jobentry" style={{marginBottom: 0}}>
            <div className="column job-company">
              <div className="icon-text content-is-vcentered">
                <span className="icon has-text-info">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span><h3>Counter Craft</h3></span>
              </div>
            </div>
            <div className="column">
              <h5 className="job-date">December 2017 {"-"} March 2018</h5>
            </div>          
          </div>
          <h4 className="job-title">Software Engineer</h4>
          <div className = "content job-points">
            <ul>
              <li>Facilitated a large amount of Cloud, Server and Client interaction using Netty</li>
              <li>Acquired a larger grasp of OpenGL using the Java library</li>
            </ul>
          </div>
        </div>

        <div style={{marginTop: '3em'}}>
          <div className="columns content-is-vcentered jobentry" style={{marginBottom: 0}}>
            <div className="column job-company">
              <div className="icon-text content-is-vcentered">
                <span className="icon has-text-info">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span><h3>Dungeon Realms</h3></span>
              </div>
            </div>
            <div className="column">
              <h5 className="job-date">September 2015 {"-"} February 2016</h5>
            </div>          
          </div>
          <h4 className="job-title">Software Developer</h4>
          <div className = "content job-points">
            <ul>
              <li>Refactored and rewrote the existing codebase using Java to be maintainable and efficient.</li>
              <li>Used MongoDB and SQL to seek an effective database system for the network's large influx of queries.</li>
            </ul>
          </div>
        </div>

        <h2 className={styles.sectionheader}>Projects</h2>
        <p>Examining the tips and tricks used to make Stripe's website design a notch above the rest.</p>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
