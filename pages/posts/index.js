import Head from 'next/head'

import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'



const AllPostsPage = (props) => {
  const { posts } = props

  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta 
          name='descritpion'
          content='A list of all development-related posts and tutorials.'
        />
      </Head>
      <AllPosts posts={posts}/>
    </>
  )
}


export const getStaticProps = () => {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage