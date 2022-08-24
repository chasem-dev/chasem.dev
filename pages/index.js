import Head from 'next/head'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [githubImage, setGithubImage] = React.useState("/social/github.png")
  const [linkedInImage, setLinkedInImage] = React.useState("/social/li.png")
  const [mailImage, setMailImage] = React.useState("/social/email.png")

  const client_id = "4c3e9cfbc7cf49298f6bd036de876195"
  const client_secret = "cb8c26499bef4a26baa915728085b73e"
  const refresh_token = "AQDwIEQhn7RVlz-tGKbRoqef-vAqlYog9YPbE7qxHObvIUO1tokYvjDHkhqA0gShcnKXgQ7nTOVLHJXv9sa9fsGGFhSz27QAyPiWR07pCEBhg529PIXTSL5JRovDIFAvV1o"

  const [spotifyData, setSpotifyData] = useState()
  const [spotifyArtist, setSpotifyArtist] = useState("")
  const [spotifySong, setSpotifySong] = useState("Not Currently Listening")

  useEffect(()=>{

    fetchAccessToken().then((access_token)=>{

      console.log("REFRESHED: ")
      console.log(access_token)

      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`
      }
      }).then(response => {
        if(response.status === 200){
          return response.json()
        }else{
          return {}
        }
      }).then(data=>{      
        console.log(data)
        if(data){
          if (data && data.is_playing === true){
            setSpotifyData(data)
            setSpotifySong(data.item.name)
            if(data.item.artists.length > 0){
              const artist = data.item.artists[0].name
              setSpotifyArtist(artist)
            }        
          }else{
            if(data.error && data.error.message === "The access token expired"){

            }
          }
        }
      })
    })
  }, [])

  function fetchAccessToken(){
    return fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) 
      },
      body: new URLSearchParams({
        'grant_type': 'refresh_token',
        'refresh_token': refresh_token,
        'json': true
      })
    }).then(response=> response.json()).then(json=>{
      console.log(json)
      if(json.access_token){
        var access_token = json.access_token;
        console.log(access_token)
        return access_token
      }
    })
  }

  function Spotify(){
    const uri = spotifyData.item?.type
    const id = spotifyData.item?.id
    return (
      <div className='columns is-vcentered'>
        <div className='column is-narrow is-vcentered m-0'>
          <img width={"40px"} src="/social/spotify.png" />
        </div>
        <div className='column is-narrow'>
        <span style={{fontWeight: "bold"}}>Listening Now</span>
        </div>
        <iframe src={`https://open.spotify.com/embed/${uri}/${id}`} style={{border: "solid 1px black"}} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

      </div>
    )
  }

  
  function NoSpotify(){
    return (
      <div className='columns is-vcentered'>
        <div className='column is-narrow is-vcentered m-0'>
          <img width={"40px"} src="/social/spotify.png" />
        </div>
        <div className='column is-narrow bold'>
          <span style={{fontWeight: "bold"}}>Not Listening.</span>{" "} <span>Try checking between 8AM-5PM :^)</span>
        </div>
      </div>
    )
  }

  function ProjectListing({title, link, imageUrl, description}){

    const [active, setActive] = useState(false)

    return (
      <div>
        <div>
          <Link href={link}>
            <a>
              <h3>{title}<span style={{marginLeft: '.25em'}} className="icon"><i className="fas fa-xs fa-external-link-alt"></i></span></h3>              
            </a>
          </Link>
          <img onClick={(e)=> setActive(true)} className="hover is-clickable" src={imageUrl} border="5px" style={{borderColor: "#cf934e", width: "550px", height: "350px"} } />
        </div>
        <div class={`modal ${active === true ? "is-active" : ""}`} >
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">{title}</p>
              <button onClick={(e)=> setActive(false)} class="delete" aria-label="close"></button>
            </header>
            <section>
              <img className="hover" src={imageUrl} style={{width: "100%`", minHeight: "350px"}} />
            </section>
            <section class="modal-card-body">
              <p className="text">
                {description}
              </p>
            </section>
            <footer class="modal-card-foot" style={{width: "100%"}}>
              <Link href={link}><button class="button is-primary is-pulled-left" style={{float: "left"}}>View Site</button></Link>
            </footer>
          </div>
        </div>
      </div>
    )
  }

  function Projects() {
    return (
      <div>
        <h2 id="projects" className={styles.sectionheader}>🔨 Projects</h2>
        <div className="columns is-variable is-0-tablet is-3-desktop">
            <div className="column is-vcentered">
              <ProjectListing title="Inventories.gg"
                              link="https://inventories.chasem.dev/"
                              imageUrl="/project/inventories.png"
                              description="Inventories.gg has been the most complete and feature full project I've worked on since gaining as much experience in React. It is a Minecraft inventory viewer for any server who wants to display their players inventories for others to see.
                                    Technlogies include Material-UI, MongoDB, React and NextJS. Authentication is using OAuth handled by Clerk.dev"
              />
            </div>          
            <div className="column is-vcentered">
              <ProjectListing title="Godot Kart"
                              link="https://www.youtube.com/watch?v=5Zc2x79yEBA"
                              imageUrl="/project/godot.png"
                              description="Godot Kart is a Mario Kart inspired multiplayer Kart racing game built using the Godot Engine. After discovering someone made a single player demo of the game, I took lead on building the multiplayer behind the game which includes all client interpolation,
                      a master game server browser, and the game servers."
              />
            </div>
        </div>
        <div className="columns is-variable is-0-tablet is-3-desktop">
          <div className="column is-vcentered">
            <ProjectListing title="Hashmap.me"
                              link="https://hashmap.me/"
                              imageUrl="/project/hashmap.png"
                              description="Hashmap.me was my implementation of simplifying the ability to persist data between restarts for an application. Anytime a developer wants to begin a project they will begin by storing data into their applications memory. 
                    This aims to allow developers to simply upload thier cache through HTTP and then on startup pull that cache back down."
            />
          </div>
          <div className="column">
              <ProjectListing title="Chasebin"
                                link="https://chasebin.vercel.app/"
                                imageUrl="/project/chasebin.png"
                                description="Chasebin is a simple project to help boost my familiarity with NextJS and React. It is a code formatter that can generate links that are parseable client side only. 
                    The code snippet gets converted to Bytes using LZMA and then converts each byte to BASE64 and
                    appends this to the URL, along with the selected language formatting selected."
              />          
          </div>
        </div>
      </div>
    )
  }

  function WorkExperience(){
    return (
      <div>
        <h2 id="experience" className={styles.sectionheader}>💼 Work Experience</h2>
        <div>
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
                Indeed.com
              </h3>
            </div>
            <div className="column">
              <h5 className="job-date">Aug 2022 {"->"} Present</h5>
            </div>          
          </div>
          <h4 className="job-title">Software Engineer - Indeed Recruiter Extension</h4>
          <div className = "content job-points">
            <ul>
              <li>💙😊</li>
            </ul>
          </div>
        </div>

        <div style={{marginTop: '3em'}} >
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
                Level Data Inc.
              </h3>
            </div>
            <div className="column">
              <h5 className="job-date">Apr 2021 {"->"} Aug 2022</h5>
            </div>          
          </div>
          <h4 className="job-title">Software Engineer II</h4>
          <div className = "content job-points">
            <ul>
              <li>Pioneered a data validation platform for k-12 school districts to keep data clean for state reporting.</li>
              <li>Containerized webpack bundle, backend API, and batch processing jobs using Docker, and JFrog artifactory.</li>
              <li>Researched, configured, and deployed Keycloak authentication to Kuberenetes.</li>
              <li>Incorporated multi-tenant authentication and authorization using Keycloak and Express routes on within NodeJS.</li>
              <li>Built Role Base Access Control within the platform, allowing district admins to delegate permissions as needed.</li>
              <li>Configured and setup automated deployments (CI/CD) using SnakeCI and automatic publishing of new versions.</li>
            </ul>
          </div>
        </div>

        <div>
          <div style={{marginTop: '3em'}} />
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
                  Level Data Inc.
                </h3>
              </div>
              <div className="column">
                <h5 className="job-date">Dec 2018 {"->"} Apr 2021</h5>
              </div>          
            </div>
            <h4 className="job-title">Integrations Engineer</h4>
            <div className = "content job-points">
              <ul>
                <li>Maintained library with thousands of scheduled jobs depending on it.</li>
                <li>Assisted data integration for school districts around the world with ‘connectors’ (E.T.L)</li>
                <li>Worked closely with school representatives and maintained project deadlines.</li>
                <li>Designed and implemented an error monitoring web portal using SpringBoot to save workers 100+ hours.</li>
                <li>Created new integrations to obtain data from a variety of different source locations including using Rest APIs, executable files, and web scraping.</li>
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
      </div>
    )
  }

  function MainContent() {
    return (
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
        <img style={{cursor: "pointer", margin: 0, marginRight: '1em', maxWidth:'24px', display: 'inline-block'}} onMouseOver={(_=>{
        setLinkedInImage("/social/li-hover.png")
        })} 
        onMouseOut={(_=>{
        setLinkedInImage("/social/li.png")
        })} id="social-li" className="image is-24x24" src={linkedInImage} />
      </Link>
    </span>
    <span>
      <Link href="mailto:me@chasem.dev">
        <img style={{cursor: "pointer", margin: 0, maxWidth:'24px', display: 'inline-block'}} onMouseOver={(_=>{
        setMailImage("/social/email-hover.png")
        })} 
        onMouseOut={(_=>{
        setMailImage("/social/email.png")
        })} id="social-mail" className="image is-24x24" src={mailImage} />
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
              </span> 
            </a>

            {/* <a href="#resume" className="column is-4 nav icon-text">Download Resume <span><i class="fas fa-file-export fa-sm"></i></span></a> */}
          </div>            
        </div>        
      </div>



      <h1 className={styles.title}> Hi! I'm Chase </h1>

      <div style={{minWidth: "320px", maxWidth: "52%", textAlign: "center", alignSelf: "center", border: "solid 1px black", borderRadius: "1rem", padding: "1rem"}}>
        An outgoing and experienced <span style={{fontWeight: "bold"}}>Software Engineer</span> with hard work effort, great companionship, and is eager to hear about your opportunities.
      </div>
      <hr />


      <h2 id="experience" className={styles.sectionheader}>🎓Education</h2>
      <div style={{marginLeft: "1rem"}}>
        <h4 style={{fontWeight: "bold", fontSize: "20px"}}>Bachelors of Science</h4>          

        <div style={{marginLeft: "1rem"}} className="columns">
          <div className="column">
            <p><span style={{fontWeight: "bold"}}>Computer Science</span>, <span style={{fontStyle: "it"}}>Western Michigan University</span></p>
          </div>
          <div className="column">
              <h5 className="job-date">December 2019</h5>
          </div>          
        </div>
      </div>
      <hr />
      
      <WorkExperience />
      <hr />
      <Projects />
    </main>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Chase Myers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent />
      <footer className={styles.footer} style={{textAlign: "left"}}>
        {spotifyData && <Spotify />}
        {!spotifyData && <NoSpotify />}
      </footer>
    </div>
  )
}
