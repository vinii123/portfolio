import Navber from "../components/Navbar"
import AboutME from "../components/AboutMe"



const about = (body, title, image) => {
  // console.log(body, title, image)
  return(
    <div>
        <Navber />
        <AboutME />
    </div>
  )
}


// export const getServerSideProps = async (pageContext) => {
//   const pageSlug = pageContext.query.slug;
//   console.log(pageSlug)
//   if(!pageSlug){
//     return{
//       notFound: true
//     }
//   }
//     const query = encodeURIComponent(`*[ _type == "post" && slug.current == "about" ]`);
//     const url = `https://1djjbko7.api.sanity.io/v1/data/query/production?query=${query}`;
//     const result = await fetch(url).then(res => res.json());
//     const post = result.result[0]
//     if(!post) {
//         return{
//             notFound: true
//        } 
//     } else {
//         return{
//             props: {
//               body: post.body,
//               title: post.title,
//               image: post.mainImage
//             }
//         }
//     }
// }

export default about