export const getProductsQuery = () => {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=deep`
  url = `${url}`

  return url
}