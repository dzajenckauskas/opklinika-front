export const getProductQuery = (id: number) => {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}?populate=deep`
  return url
}