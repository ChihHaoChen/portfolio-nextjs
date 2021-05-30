import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedProjects from '../components/home-page/featured-projects'
import { getFeaturedPosts } from '../lib/posts-util'

const loadNotionData = async () => {
  
  const response = await fetch(`${process.env.URL}` + `/api/notion-connect`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('Get response =>', response)
  const data = await response.json()
  console.log('Get response =>', data)
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!')
  }  
}

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


export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts()
  try {
    await loadNotionData()
  } catch (err) {
    console.log({ message: `Could not connect to Notion API frim index.page due to ${err}.`})
  }
  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage