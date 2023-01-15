import { FunctionComponent } from 'react'
import {
  AiFillGithub,
  AiFillProject,
  AiOutlineDoubleRight,
} from 'react-icons/ai'
import { FiAward } from 'react-icons/fi'
import Image from 'next/image'

import { fadeInUp, stagger } from '../animations'
import { motion } from 'framer-motion'

import { MdClose } from 'react-icons/md'
import { Project } from '../types'

const ProjectCard: FunctionComponent<{
  project: Project
  showDetail: null | Number
  setShowDetail: (id: Number | null) => void
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    summary,
    github_url,
    tech_stack,
    id,
  },
  setShowDetail,
  showDetail,
}) => {
  return (
    <>
      <Image
        width="300"
        height="150"
        src={image_path}
        layout="responsive"
        alt={name}
        onClick={() => setShowDetail(id)}
        className="overflow-hidden rounded-md cursor-pointer"
        quality={10}
        placeholder="blur"
        blurDataURL={`/_next/image?url=${image_path}&w=16&q=1`}
      />

      <p className="my-2 text-center">{name}</p>
      {/* //step 1 */}

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-full p-2 text-black bg-gray-100 rounded-md md:p-10 dark:bg-black-100 dark:text-gray-100 md:grid-cols-2 gap-x-12">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="overflow-hidden border-4 border-gray-100 rounded-md"
              variants={fadeInUp}
            >
              <Image
                src={image_path}
                alt={name}
                className="overflow-hidden"
                layout="responsive"
                width={320}
                height={180}
                placeholder="blur"
                blurDataURL={`/_next/image?url=${image_path}&w=16&q=1`}
              />
              {/* <img src={image_path} alt={name} /> */}
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              {github_url !== 'na' && (
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500 "
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
              )}
              {deployed_url !== 'na' && (
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500 hover:text-blue-500"
                >
                  <FiAward className="cursor-pointer text-orange hover:text-blue-500" />{' '}
                  <span className="hover:text-blue-500">Project</span>
                </a>
              )}
            </motion.div>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl "
            >
              {name}
            </motion.h2>
            {description.map((snippet, key) => (
              <motion.h3
                variants={fadeInUp}
                className="my-3 text-base font-medium"
                key={key}
              >
                {snippet}
              </motion.h3>
            ))}
            <motion.div>
              <h6 className="mt-5 semi-bold">Summary</h6>
            </motion.div>
            {summary.map((item, key) => (
              <motion.div
                variants={fadeInUp}
                className="flex items-center mt-5 space-x-2 text-sm tracking-wider flex-start"
                key={key}
              >
                <AiOutlineDoubleRight />
                <span>{item}</span>
              </motion.div>
            ))}
            <motion.div>
              <h6 className="mt-5 semi-bold">TECH STACK</h6>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {tech_stack.map((value, i) => (
                <span
                  key={i}
                  className="p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-black-500"
                >
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-black-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
  )
}

export default ProjectCard
