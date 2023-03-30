export const getCategoriesQuery = () => {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=*`
  url = `${url}`

  return url
}