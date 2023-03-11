export const getServicesQuery = () => {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=deep`
  url = `${url}`

  return url
}