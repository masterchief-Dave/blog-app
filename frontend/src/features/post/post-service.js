const createPost = async (postData, token) => {
  const response = await fetch(`/api/v1/posts`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })

  const data = await response.json()
  return data
}

const getAllPosts = async () => {
  const response = await fetch(`/api/v1/posts`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })

  console.log(response)

  const data = await response.json()
  return data
}

const getPost = async (id) => {
  const response = await fetch(`/api/v1/posts/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })

  const data = await response.json()
  return data
}

export const authService = {
  createPost,
  getAllPosts,
  getPost
}
