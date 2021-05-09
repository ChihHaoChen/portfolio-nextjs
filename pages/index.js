import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'


const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to Chih-Hao's Portfolio</title>
        <meta 
          name='description'
          content='I post about mobile and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts 
        posts={props.posts}
      />
    </>
  )
}


export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage