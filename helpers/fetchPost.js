import matter from 'gray-matter'

export const fetchPosts = async () => {
  const posts = await fetch('https://portfolioblog.s3-ap-northeast-1.amazonaws.com/posts/getting-started-with-nextjs.md')

  return posts
}


export const getAllPosts = () => {
  const posts = fetchPosts()

  const allPosts = posts.then(res => console.log('Decode text =>', res.text()))

  return allPosts
}