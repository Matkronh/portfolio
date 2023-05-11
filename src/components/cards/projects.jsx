import styles from '../styles/styles.module.css'
import img1 from '../../img/placeholder.jpg'
import img2 from '../../img/apple.jpg'
import img3 from '../../img/pear.png'

function Projects(props){
    return(
        <div className={styles.projectcontainer}>
            <div className={styles.projectheadercard}>
                <h2 className={styles.projectheadercardtext}>{props.projecttitle}</h2>
            </div>
            <div className={styles.projectcontainer2}>
                <div className={styles.projectcard}>
                        <h2 className={styles.projectcardtitle}>{props.project1title}</h2>
                            <div className={styles.projectcardtextandimagecontainer}>
                                <img className={styles.projectcardimage} src={img1}/>
                                <h2 className={styles.projectcardtext}>{props.project1text}</h2>
                            </div>
                        <a className={styles.projectcardlink}>{props.project1link}</a>
                </div>
                    <div className={styles.projectcard}>
                        <h2 className={styles.projectcardtitle}>{props.project2title}</h2>
                            <div className={styles.projectcardtextandimagecontainer}>
                                <img className={styles.projectcardimage} src={img2}/>
                                <h2 className={styles.projectcardtext}>{props.project2text}</h2>
                            </div>
                        <a className={styles.projectcardlink}>{props.project2link}</a>
                    </div>
                        <div className={styles.projectcard}>
                            <h2 className={styles.projectcardtitle}>{props.project3title}</h2>
                                        <div className={styles.projectcardtextandimagecontainer}>
                                            <img className={styles.projectcardimage} src={img3}/>
                                            <h2 className={styles.projectcardtext}>{props.project3text}</h2>
                                        </div>
                                    <a className={styles.projectcardlink}>{props.project3link}</a>
                </div>
            </div>
        </div>
    )
}

export default Projects