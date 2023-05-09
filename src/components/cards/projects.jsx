import styles from '../styles/styles.module.css'
import img1 from '../../img/placeholder.jpg'
import img2 from '../../img/apple.jpg'
import img3 from '../../img/pear.png'

function Projects(){
    return(
        <div className={styles.projectcontainer}>
            <div className={styles.projectheadercard}>
                <h2 className={styles.projectheadercardtext}>Mine Prosjekter</h2>
            </div>
            <div className={styles.projectcontainer2}>
                <div className={styles.projectcard}>
                        <h2 className={styles.projectcardtitle}>Prosjekt 1</h2>
                            <div className={styles.projectcardtextandimagecontainer}>
                                <img className={styles.projectcardimage} src={img1}/>
                                <h2 className={styles.projectcardtext}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
                            </div>
                        <a className={styles.projectcardlink}>www.example-link.com</a>
                </div>
                    <div className={styles.projectcard}>
                        <h2 className={styles.projectcardtitle}>Prosjekt 1</h2>
                            <div className={styles.projectcardtextandimagecontainer}>
                                <img className={styles.projectcardimage} src={img2}/>
                                <h2 className={styles.projectcardtext}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
                            </div>
                        <a className={styles.projectcardlink}>www.example-link.com</a>
                    </div>
                        <div className={styles.projectcard}>
                            <h2 className={styles.projectcardtitle}>Prosjekt 1</h2>
                                        <div className={styles.projectcardtextandimagecontainer}>
                                            <img className={styles.projectcardimage} src={img3}/>
                                            <h2 className={styles.projectcardtext}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
                                        </div>
                                    <a className={styles.projectcardlink}>www.example-link.com</a>
                </div>
            </div>
        </div>
    )
}

export default Projects