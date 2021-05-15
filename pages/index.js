import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedProjects from '../components/home-page/featured-projects'
import { getFeaturedPosts } from '../lib/posts-util'


const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to Chih-Hao's Portfolio</title>
        <meta 
          name='description'
          content='I post about my projects, and mobile and web development.'
        />
      </Head>
      <Hero />
      <FeaturedProjects 
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