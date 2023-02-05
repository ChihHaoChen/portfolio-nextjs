import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { fadeInUp, routeFade, stagger } from '../animations'

import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../types'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState('All')
  const [showDetail, setShowDetail] = useState<null | Number>(null)

  const handlerFilterCategory = (category: Category | 'All') => {
    if (category === 'All') {
      setProjects(projectsData)
      setActive(category)
      return
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    )
    setProjects(newArray)
    setActive(category)
  }

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Chih-Hao | Web/Mobile App Developer</title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, key) => (
          <motion.div
            key={key}
            className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-black-200 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard
              project={project}
              key={project.name}
              setShowDetail={setShowDetail}
              showDetail={showDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
