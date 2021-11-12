import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react"
import styles from "../../styles/post.module.css"
import Navbar from "../../components/Navbar"


export const Post = ({body, title, image}) => {
    const [imageUrl, setImageUrl] = useState("")

    useEffect( () => {
       const imgBuilder = imageUrlBuilder({
           projectId: "1djjbko7",
           dataset: "production"
       });
       setImageUrl(imgBuilder.image(image));
    }, [image]);

    return (
      <div>
          <Navbar />
          <div className={styles.main}>
              <h1 className={styles.title}>{title}</h1>
              {imageUrl && <img className={styles.mainImage} src={imageUrl}/>}
              <div className={styles.body}>
                <BlockContent blocks={body}/>
              </div>
          </div>
      </div>    
    )
}


export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug;
    if(!pageSlug){
        return{
             notFound: true
        }
    }
    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
    const url = `https://1djjbko7.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then(res => res.json());
    const post = result.result[0]
    if(!post) {
        return{
            notFound: true
       } 
    } else {
        return{
            props: {
                body: post.body,
                title: post.title,
                image: post.mainImage
            }
        }
    }

}

export default Post;