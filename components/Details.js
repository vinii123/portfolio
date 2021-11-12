import BlockContent from "@sanity/block-content-to-react";
import styles from "../styles/details.module.css"



const Details = (props) => {
    return(
        <div className={styles.main}>
            {props.mappedPosts.length ? (
            props.mappedPosts.map((p, index) => (
              <div key={index} >
                    <h1 className={styles.headingDetails}>Hi, I am</h1>
                    <h1 className={styles.headingDetails}>{p.name}</h1>
                    <div className={styles.BlockContent}>
                       <BlockContent blocks={p.bio} />
                     </div>
                    <img src={p.mainImage} alt="Picture of the author" className={styles.imageDetails}/>
              </div>
            ))
          ) : (
            <>No author Yet</>    
          )}
     
        </div>
    )
}


export default Details 