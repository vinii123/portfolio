import Navbar from "../components/Navbar"
import Details from "../components/Details"
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

const index = ({posts}) => {
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts?.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "1djjbko7",
        dataset: "production",
      });

      setMappedPosts(
        posts?.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.image).width().height(450),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);    
  return(
    <>
      <Navbar />
      <Details  mappedPosts={mappedPosts}/>
    </>
  )
}

export default index;

export const getServerSideProps = async (pageContext) => {
  
  const query = encodeURIComponent('*[ _type == "author" ]');
  const url = `https://1djjbko7.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};