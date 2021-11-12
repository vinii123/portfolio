import Navbar from "../components/Navbar"
import Details from "../components/Details"
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

//https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
// https://www.youtube.com/watch?v=B1sXeodBLj4
// https://www.youtube.com/watch?v=B1sXeodBLj4
// https://www.youtube.com/watch?v=9P8mASSREYM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=6
// https://www.youtube.com/watch?v=TVQgSKaGQ20


const index = ({posts}) => {
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "1djjbko7",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
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