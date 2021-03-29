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
        {/* <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script> */}
        {/* <script defer src="@fortawsome\fontawesome-free/js/all.js" /> */}
      </Head>

    
      <main className={styles.main}>
        <div className="">
            <span>
            <Link href="https://github.com/Xwaffle1/">
              <img style={{cursor: "pointer", marginRight: '1em', maxWidth:'24px', display: 'inline-block'}} onMouseOver={(_=>{
                setGithubImage("/social/github-hover.png")
              })} 
              onMouseOut={(_=>{
                setGithubImage("/social/github.png")
              })} id="social-gh" className="image is-24x24" src={githubImage} />
            </Link>
            </span>
            <span>

            <Link  href="https://www.linkedin.com/in/chase-myers-56a394152/">
              <img style={{cursor: "pointer", margin: 0, maxWidth:'24px', display: 'inline-block'}} onMouseOver={(_=>{
                setLinkedInImage("/social/li-hover.png")
              })} 
              onMouseOut={(_=>{
                setLinkedInImage("/social/li.png")
              })} id="social-li" className="image is-24x24" src={linkedInImage} />
            </Link>
            </span>
        </div>

        <div className="columns">
          <div className="column">            
          </div>
          <div className="column">
            <figure className="image content-is-vcentered" style={{justifyContent: 'center'}}>
              <img  border="5px" style={{borderColor: "#cf934e", width: "256px", height: "256px"}} className="is-rounded" src="/social/me.jpg" />
            </figure>
          </div>
          <div className="column navbar">
            <div className="columns is-vcentered">
              <a href="#experience" className="column is-4 nav">Work Experience</a> 
              <a href="#projects" className="column is-4 nav">Projects</a>
              <a href="Chase - Resume.pdf" className="column is-4 nav" style={{minWidth: '160px'}} download>
                <span className="icon-text content-is-vcentered" style={{justifyContent: 'center'}}>
                  Download Resume
                  <span className="icon has-text-success">
                    <i className="fas fa-file-export fa-sm"></i>                  
                  </span>                  
                </span> 
              </a>

              {/* <a href="#resume" className="column is-4 nav icon-text">Download Resume <span><i class="fas fa-file-export fa-sm"></i></span></a> */}
            </div>            
          </div>        
        </div>



        <h1 className={styles.title}> Hi! I'm Chase </h1>
        <h2 id="experience" className={styles.sectionheader}>Work Experience</h2>
        <div>
        <div style={{marginTop: '0px'}}></div>
          <div className="columns content-is-vcentered jobentry is-gapless" style={{marginBottom: 0}}>
            <div className="column is-1" style={{maxWidth: '30px', width: '30px'}}>
              <span className="icon-text content-is-vcentered">
                <span className="icon has-text-success">
                 <i className="fas fa-cog fa-spin"></i>                  
                </span>                  
              </span>  
            </div>
            <div className="column job-company">
              <h3>            
                Level Data Inc.
              </h3>
            </div>
            <div className="column">
              <h5 className="job-date">Dec 2018 {"->"}</h5>
            </div>          
          </div>
          <h4 className="job-title">Software Developer</h4>
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
          <div className="columns content-is-vcentered jobentry is-gapless" style={{marginBottom: 0}}>
            <div className="column is-1" style={{maxWidth: '30px', width: '30px'}}>
            <span className="icon-text content-is-vcentered">
                <span className="icon has-text-info">
                  <i className="fas fa-check-circle"  ></i>
                </span>                  
              </span>  
            </div>
            <div className="column job-company">
              <h3>            
                JourneyGaming
              </h3>
            </div>
            <div className="column">
              <h5 className="job-date">Feb 2016 {"-"} Dec 2018</h5>
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
          <div className="columns content-is-vcentered jobentry is-gapless" style={{marginBottom: 0}}>
            <div className="column is-1" style={{maxWidth: '30px', width: '30px'}}>
            <span className="icon-text content-is-vcentered">
                <span className="icon has-text-info">
                  <i className="fas fa-check-circle"  ></i>
                </span>                  
              </span>  
            </div>
            <div className="column job-company">
              <h3>            
                CounterCraft
              </h3>
            </div>
            <div className="column">
              <h5 className="job-date">Dec 2017 {"-"} Mar 2018</h5>
            </div>          
          </div>
          <h4 className="job-title">Software Developer</h4>
          <div className = "content job-points">
            <ul>
            <li>Facilitated a large amount of Cloud, Server and Client interaction using Netty</li>
              <li>Acquired a larger grasp of OpenGL using the Java library</li>
            </ul>
          </div>
        </div>




        <div style={{marginTop: '3em'}}>
          <div className="columns content-is-vcentered jobentry is-gapless" style={{marginBottom: 0}}>
            <div className="column is-1" style={{maxWidth: '30px', width: '30px'}}>
            <span className="icon-text content-is-vcentered">
                <span className="icon has-text-info">
                  <i className="fas fa-check-circle"  ></i>
                </span>                  
              </span>  
            </div>
            <div className="column job-company">
              <h3>            
                  DungeonRealms
              </h3>
            </div>
            <div className="column">
              <h5 className="job-date">Sep 2015 {"-"} Feb 2016</h5>
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

        <hr />
        <h2 id="projects" className={styles.sectionheader}>Projects</h2>
        <div className="columns is-variable is-0-tablet is-3-desktop">
            <div className="column">
              <Link href="https://www.godotkart.com/">
                <a>
                  <h3>Chasebin<span style={{marginLeft: '.25em'}} className="icon"><i className="fas fa-xs fa-external-link-alt"></i></span></h3>              
                </a>
              </Link>
              <div className="wrapper">
                <img className="hover" src="/project/chasebin.png" border="5px" style={{borderColor: "#cf934e", width: "550px", height: "350px"} } />
                <Link href="https://chasebin.vercel.app/">
                  <p className="text">
                    Chasebin is a simple project to help boost my familiarity with NextJS and React. It is a code formatter that can generate links that are parseable client side only. 
                    The code snippet gets converted to Bytes using LZMA and then converts each byte to BASE64 and
                    appends this to the URL, along with the selected language formatting selected.
                  </p>
                </Link>
              </div>
            </div>
            <div className="column is-vcentered">
              <Link href="https://www.godotkart.com/">
                <a>
                  <h3>Godot Kart<span style={{marginLeft: '.25em'}} className="icon"><i className="fas fa-xs fa-external-link-alt"></i></span></h3>              
                </a>
              </Link>
              <div className="wrapper content-is-vcentered"  style={{verticalAlign: 'middle', display: 'inline-block'}}>
                <img className="hover" src="/project/godot.png" border="5px" style={{borderColor: "#cf934e", width: "550px", height: "350px"} } />
                <Link href="https://www.godotkart.com/" style={{verticalAlign: 'middle', display: 'inline-block'}}>
                  <p className="text">
                    Godot Kart is a Mario Kart inspired multiplayer Kart racing game built using the Godot Engine. After discovering someone made a single player demo of the game, I took lead on building the multiplayer behind the game which includes all client interpolation,
                    a master game server browser, and the game servers.
                  </p>
                </Link>
              </div>
            </div>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
