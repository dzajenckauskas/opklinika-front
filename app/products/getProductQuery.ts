export const getProductQuery = (slug: string | string[] | undefined) => {
  // let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}?populate=deep`
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[slug][$eq]=${slug}&populate=deep`
  return url
}