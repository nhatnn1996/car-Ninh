import axios from 'axios';
// import XMLParser from 'react-xml-parser';

const EXTERNAL_DATA_URL = process.env.PUBLIC_URL;

function generateSiteMap(posts: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${posts
       .map(({ slug }: any) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/giay-da-bong/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

async function SiteMap() {
  // const posts = await axios
    // .get('/product?fields=slug,sort=-date_created')
    // .catch((error) => console.log(error));
  // const DOMParse = new XMLParser();
  // We generate the XML sitemap with the posts data
  // const sitemap = generateSiteMap(posts?.data);
  // const xmlDoc = DOMParse.parseFromString(sitemap, 'text/xml');
  return null;
}

export default SiteMap;
