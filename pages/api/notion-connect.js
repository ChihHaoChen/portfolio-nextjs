import { Client }  from "@notionhq/client"

const notionHandler = async (req, res) => {

  const notionClient = new Client({
    auth: `${process.env.NOTION_KEY}`
  })
  const topPageId = `${process.env.NOTION_TOP_PAGE_ID}`

  let projectPagesIds = []
  let postPagesIds = []

  console.log('Attempt to Connect')
  if (req.method === 'GET') {
    try {
      const response = await notionClient.blocks.children.list({ block_id: topPageId });
      console.log('What is the current response =>', response)
      response.results.map(children => { 
        if (children.has_children)  {
          if (children.child_page.title === 'Projects') {
            console.log('ProjectsIds => ', children.id)
            projectPagesIds.push(children.id)
          }
          if (children.child_page.title === 'Posts') {
            console.log('PostsIds => ', children.id)
            postPagesIds.push(children.id)
            
          } 
        }
      })
      const returnObj = JSON.stringify({ projectPagesIds, postPagesIds })
      res.status(200).send(returnObj)

    } catch (err) {
      res.status(500).json({ message: `Could not connect to Notion API due to ${err}.` })

      return
    }
  }
}

export default notionHandler

