import ProjectItem from './project-item'
import classes from './posts-grid.module.css'

const PostsGrid = (props) => {
  const { posts } = props

  return (
    <ul className={classes.grid}>
      {
        posts.map(post => 
          <ProjectItem 
            key={post.slug}
            post={post} 
          />
        )
      }
    </ul>
  )
}


export default PostsGrid