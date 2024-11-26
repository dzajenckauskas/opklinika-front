import { getProductsQuery } from "@/app/products/getProductsQuery";
import { ProductsType } from "@/app/products/productTypes";
import axios from "axios";
import { GetServerSideProps } from "next";

type Props = {
    products: ProductsType;
}

function generateSiteMap({ products }: Props) {
    console.log(products.meta, "products");

    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

   <url>
   <loc>${`${process.env.NEXT_PUBLIC_URL}`}</loc>
   <lastmod>${new Date().toISOString()}</lastmod>
  </url>

   <url>
   <loc>${`${process.env.NEXT_PUBLIC_URL}/paslaugu-kainorastis`}</loc>
   <lastmod>${new Date().toISOString()}</lastmod>
  </url>

   <url>
   <loc>${`${process.env.NEXT_PUBLIC_URL}/ortopedijos-technikos-katalogas/1`}</loc>
   <lastmod>${new Date().toISOString()}</lastmod>
  </url>
   <url>
   <loc>${`${process.env.NEXT_PUBLIC_URL}/ortopedijos-technikos-katalogas/2`}</loc>
   <lastmod>${new Date().toISOString()}</lastmod>
  </url>
   <url>
   <loc>${`${process.env.NEXT_PUBLIC_URL}/ortopedijos-technikos-katalogas/3`}</loc>
   <lastmod>${new Date().toISOString()}</lastmod>
  </url>

  
  ${products.data?.map((eo) => {
        return `<url>
          <loc>${`${process.env.NEXT_PUBLIC_URL}/ortopedijos-technika/${eo.attributes?.slug}`}</loc>
          <lastmod>${eo?.attributes?.updatedAt?.toString()}</lastmod>
         </url>`;
    }).join('')}
   

   </urlset>
   `;
}



// ${blogPosts.data?.map((post) => {
//     return `<url>
//        <loc>${`${process.env.NEXT_PUBLIC_URL}/naujienos/${post.attributes?.slug}`}</loc>
//        <lastmod>${post?.attributes?.updatedAt?.toString()}</lastmod>
//       </url>`;
// }).join('')}
function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {


    // export async function getStaticPaths() {
    //     const pages = await axios.get(getProductsQuery())
    //     const paths = pages.data.data?.map((page: ProductType) => ({
    //         params: { slug: page?.attributes.slug },
    //     }))

    //     return {
    //         paths,
    //         fallback: false,
    //     }
    // }


    // export const getStaticProps = async (context: any) => {
    //     const slug = context.params?.slug
    //     const data = await axios.get(getProductQuery(slug))
    //     return {
    //         props: {
    //             product: data.data.data[0],
    //         }
    //     }
    // }

    // const recommendations = (await getItems('recommendations', 'populate=deep')) ?? null
    // const objects = (await getItems('objects', '&pagination[limit]=100')) ?? null
    // const blogPosts = (await getItems('blog-posts')) ?? null
    // const homePage = (await getPage('home-page')) ?? null
    const productsResponse = await axios.get(getProductsQuery())
    const products = productsResponse.data
    const sitemap = generateSiteMap({ products });

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };

}

// MySQLConnector.init();

// const pagesPromise = PagesService.getAllPages()
// const postsPromise = PostsService.getAllPosts()
// const productsPromise = ProductsService.getAllProducts()
// const categoriesPromise = CategoriesService.getAllCategories()

// const [
//     posts,
//     pages
//     , products, categories
// ] =
//     await Promise.all([
//         postsPromise,
//         pagesPromise,
//         productsPromise,
//         categoriesPromise
//     ])

// MySQLConnector.end();
// const sitemap = generateSiteMap(pages, posts, products, categories);

// res.setHeader('Content-Type', 'text/xml');
// // we send the XML to the browser
// res.write(sitemap);
// res.end();

// }

export default SiteMap