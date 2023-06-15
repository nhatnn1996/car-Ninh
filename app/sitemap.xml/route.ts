import axiosCms from '@/services/api/cms';

const PUBLIC_URL = process.env.PUBLIC_URL || 'https://qnsport.vn';
function generateSiteMap(posts: any, products: any, uniform : any) {
  const uniformStr = uniform
    .map(({ slug }: any) => `<url> <loc>${`${PUBLIC_URL}/ao-da-bong/${slug}`}</loc> </url>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       ${posts
         .map(({ slug }: any) => {
           return `
         <url>
             <loc>${`${PUBLIC_URL}/bai-viet/${slug}`}</loc>
         </url>
       `;
         })
         .join('')}

         ${products
           .map(({ slug }: any) => {
             return `
            <url>
                <loc>${`${PUBLIC_URL}/giay-da-bong/${slug}`}</loc>
            </url>
          `;
           })
           .join('')}
        
           ${uniformStr}
     </urlset>
   `;
}
export async function GET() {
  const posts = await axiosCms('/blog');
  const product = await axiosCms('/product');
  const uniform :any = await axiosCms('/uniform');

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts.data, product.data, uniform?.data || []);
  return new Response(sitemap);
}
