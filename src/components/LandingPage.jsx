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
/* import TranImg from "../img/pagediv.svg"; */
/* import img3 from "./src/img/test5.png" */
import parall1 from "../img/test11.png"
import parall2 from "../img/codebgimg.jpg"

function BottomHalf(){

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
      
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
                    <Parallax blur={0} bgImage={parall1} bgImageAlt="heavenly delusion" bgClassName={styles.parallax1} strength={-15000}>
                        <div className={styles.intro}>
                            <div className={styles.hero}>
                                <h2 className={styles.namestyle}>Mats Kronheim</h2>
                            </div>
                        </div>
            {/* <div className={styles.navbar}>
                <div className={styles.navbaritem}><br/><a href="#skillssection" className={styles.navbaritemtext}>Skills</a></div>
                <div className={styles.navbaritem}><br/><a href="#sec" className={styles.navbaritemtext}>Utdanning, Erfaring og Referanser</a></div>
                <div className={styles.navbaritem}><br/><a href="#erfaringsection" className={styles.navbaritemtext}>Erfaring</a></div>
                <div className={styles.navbaritem}><br/><a href="#portfoliosection" className={styles.navbaritemtext}>Portfolio</a></div>
                <div className={styles.navbaritem}><br/><a href="#referansesection" className={styles.navbaritemtext}>Referanse</a></div>
                <div className={styles.navbaritem}><br/><a href="#ommegsection" className={styles.navbaritemtext}>OmMeg</a></div>
            </div > */}
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
                                    <Utdanning />
                                    <Erfaring />
                                    <Referanse />
                                </div>
                            </Parallax>
                        </div>


                <div className={styles.transition}/>
                        <div className={styles.sectionheight}>
                            <Projects />
                        </div>
                            <div className={styles.sectionheight}>
                                <h1>hi</h1>
                            </div>
                            <div className={styles.sectionheight}>
                            <Ommeg />
                        </div>

        </div>
    </div>
    )   
}


export default BottomHalf