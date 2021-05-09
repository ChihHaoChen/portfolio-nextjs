import Head from 'next/head'

import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostFiles } from '../../lib/posts-util'

const PostDetailPage = (props) => {
  const { post } = props

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta 
          name='description'
          content={post.excerpt}
        />
      </Head>
      <PostContent post={post} />
    </>
  )
}


export const getStaticProps = (context) => {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 1200
  }
}


export const getStaticPaths = () => {

  const postFilenames = getPostFiles()

  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false
  }
}

export default PostDetailPage