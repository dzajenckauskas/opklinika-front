export const getProductsQuery = () => {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=deep&pagination[limit]=1000`
  url = `${url}`

  return url
}