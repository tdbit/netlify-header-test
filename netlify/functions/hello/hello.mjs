export default async (req, context) => {
  
  const { method, url, params, headers } = req;

  return Response.json({method, url, headers, params })
}

export const config = {
  path: '/api/hello/:name'
}