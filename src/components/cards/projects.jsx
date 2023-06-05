import styles from '../styles/styles.module.css'


function Projects(props){
    return(
            <div className={styles.projectcontainer2}>
                <div className={styles.projectcard}>
                        <h2 className={styles.projectcardtitle}>{props.project1title}</h2>
                            <div className={styles.projectcardtextandimagecontainer}>
                                <img className={styles.projectcardimage} src={props.img}/>
                                <h2 className={styles.projectcardtext}>{props.project1text}</h2>
                            </div>
                        <a href={props.project1link} target="_blank" rel="noopener noreferrer" className={styles.projectcardlink}>{props.project1link}</a>
                </div>
            </div>
    )
}

export default Projects