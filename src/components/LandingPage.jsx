import styles from './styles/styles.module.css'
import './styles/styles.module.css'
import Skills from './cards/skills'
import Utdanning from './cards/utdanning'
import Erfaring from './cards/erfaring'
import Projects from './cards/projects'
import Referanse from './cards/referanse'
import Ommeg from './cards/ommeg'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Parallax } from 'react-parallax';
import { useState } from 'react';
import parall1 from "../img/test11.png"
import parall2 from "../img/codebgimg.jpg"

function BottomHalf(){

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const [state, setState] = useState(false)
    const toggle = ()  =>  {setState(!state)}
    
    return(
        <div>
            <Particles
                    id="tsparticles"
                    init={particlesInit}

                    options={{
                        "fullScreen": {
                            "enable": true,
                            "zIndex": 1
                        },
                        "particles": {
                            "number": {
                                "value": 40,
                                "density": {
                                    "enable": false,
                                    "value_area": 1300
                                }
                            },
                            "color": {
                                "value": "#fff"
                            },
                            "shape": {
                                "type": "circle",
                                "options": {
                                    "sides": 2
                                }
                            },
                            "opacity": {
                                "value": 0.8,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 1,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "rotate": {
                                "value": 0,
                                "random": true,
                                "direction": "clockwise",
                                "animation": {
                                    "enable": true,
                                    "speed": 5,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 300,
                                "color": "#fff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 1.5,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": ["grab"]
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "bubble"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true,
                        "background": {
                            "color": "#1c1c1c",
                            "image": "",
                            "position": "50% 50%",
                            "repeat": "no-repeat",
                            "size": "cover"
                        }
                    }}
                    />
            <span className={styles.anchor} id='topsection'></span>
                <div>
                    <Parallax blur={0} bgImage={parall1} bgImageAlt="heavenly delusion" bgClassName={styles.parallax1} strength={-10000}>
                        <div className={styles.intro}>
                            <div className={styles.hero}>
                                <h2 className={styles.namestyle}>Mats Kronheim</h2>
                            </div>
                        </div>
                        <div className={styles.switch}>
                            <input id="language-toggle" onChange={toggle} className={`${styles.check_toggle} + ${styles.check_toggle_round_flat}`} type="checkbox"/>
                            <label htmlFor="language-toggle"></label>
                            <span className={styles.on}>NOR</span>
                            <span className={styles.off}>EN</span>
                        </div>
            <div className={styles.sectionheight}/>
                    <div className={styles.sectionheight}>
                        <h2 className={styles.transitiontext}>My Portfolio</h2>
                    </div>
                <div className={styles.sectionheight}/>
            </Parallax>
        </div>
            <div className={styles.container}>
                        <div className={styles.sectionheight}>
                            <Skills />                        
                        </div>
                <div className={styles.transition}/>
                        <div className={styles.parallaximg}>
                            <Parallax blur={3} bgImage={parall2} bgImageAlt="code snippet" bgClassName={styles.parallaximg} strength={-400}>
                                <div className={styles.sectionheight2}>
                                    <Utdanning
                                    education={state ? "Min Utdanning" : "My Education"}
                                    edu1={state ? "1. Sandsli VGS - Hotel and Resturant" : "1. Sandsli VGS - Hotell- og resturantfag"}
                                    edu2={state ? "2. Krokeide VGS - IKT-Servicefag VG2": "2. Krokeide VGS - IKT-Service VG2"}
                                    edu3={state ? "3. LINK A2G Åsane - Påbygging til generell studiekompetanse VG3" : "LINK A2G Åsane - University Admission Certification VG3"}
                                    edu4={state ? "4. Kodehode AMO Kurs" : "4. Kodehode AMO Bootcamp"}
                                    />
                                    <Erfaring 
                                    experience={state ? "Min Erfaring" : "My Experience"}
                                    exp1={state ? "1. Binders IKT avdeling - IKT medarbeider" : "1. Binders IKT department - IKT employee"}
                                    exp2={state ? "2. ISS AS - Hjelpearbeider" : "2. ISS AS - Auxiliary worker"}
                                    exp3={state ? "3. Sharecat Solutions - Junior Konsultant" : "3. Sharecat Solutions - Junior Consultant"}
                                    />
                                    <Referanse 
                                    reference={state ? "Mine Referanser" : "My References"}
                                    ref1={state ? "Referanse 1" : "Reference 1"}
                                    ref2={state ? "Referanse 2" : "Reference 2"}
                                    ref3={state ? "Referanse 3" : "Reference 3"}
                                    ref4={state ? "Referanse 4" : "Reference 4"}
                                    />
                                </div>
                            </Parallax>
                        </div>


                <div className={styles.transition}/>
                        <div className={styles.sectionheight}>
                            <Projects 
                            projecttitle={state ? "Mine Prosjekter" : "My Projects"}
                            project1title={state ? "Prosjekt 1" : "Project 1"}
                            project1text={state ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing"}
                            project1link={"www.example-link.com"}
                            project2title={state ? "Prosjekt 2" : "Project 2"}
                            project2text={state ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing"}
                            project2link={"www.example-link.com"}
                            project3title={state ? "Prosjekt 3" : "Project 3"}
                            project3text={state ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing"}
                            project3link={"www.example-link.com"}
                            />
                        </div>
                            <div className={styles.transition}/>
                                <div className={styles.sectionheight}>
                                    <Ommeg
                                        aboutmetitle={state ? "Om Meg" : "About Me"}
                                        para1={state ? "Jeg heter Mats og jeg er 33 år ung. Jeg elsker å programmere, designe og bruke kreativiteten min til å skape, om det er gjennom html, css eller js- til syvende og sist skal alt flettes sammen og det er noe med den følelsen når alt klikker sammen jeg rett og slett ikke får nok av. Når jeg får på meg headsettet, utestenger alle distraksjoner og kommer inn i sonen så føler jeg at det begynner å krible i fingrene og det er rett opp i syvende gir." : "My name is Mats and I am 33 years young. I love programming, designing and using my creativity to create, wether it's through html, css or js- at the end of the day everything has to be interconnected and it's something about the feeling when everything clicks I just can't get enough of. When I get my headset on, shut out the distractions and get into the zone I feel my hands tingling and it's straight into seventh gear."}
                                        para2={state ? "Jeg liker foruten å bruke fritiden min til bl.a spill og level design i ulike arenaer, har vært innom Unity der jeg selv-lærte meg en del c#, men mesteparten av tiden de siste årene har jeg brukt i Source SDK der jeg har designet og bygget opp spill leveler; noe som hjalp meg veldig når jeg begynte med Javascript siden det gikk veldig mye i logikk, I/O, parenting, class & id i Source SDK og." : "Coding aside, I like to devote my free time to game and level design in a variety of different arenas such as Unity where I self taught myself a lot of c# and published a simple game on the playstore but the majority of my time over the last years has gone into Source SDK where I have designed and built up game maps which has been a valuable resource for me when I started with Javascript since it touches on many similar topics such as Logic, I/O, parenting, classes & ID's."}
                                        para3={state ? "Denne fritidshobbyen min har uten tvil gjort meg til en bedre utvikler med timesvis av feilsøking, tilbakemeldinger og hardt arbeid." : "This hobby of mine has without doubt made me a better developer with hours of troubleshooting, feedback and hard work."}
                                    />
                                </div>

        </div>
    </div>
    )   
}


export default BottomHalf