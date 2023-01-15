import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from 'next'
import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

import { services } from '../data'
import ServiceCard from '../components/ServiceCard'
import { fadeInUp, routeFade, stagger } from '../animations'

const landing = ({ BASE_URL }) => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Chih-Hao | Web/Mobile App Developer</title>
      </Head>

      <h5 className="my-3 text-base font-medium">
        I am currently a full-stack developer working on web/mobile
        apps, and passionate about using technologies to build
        inspirational services.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          What I offer
        </h6>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {services.map((service, key) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1"
              key={key}
              variants={fadeInUp}
            >
              <ServiceCard service={service} key={key} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default landing

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const BASE_URL = process.env.VERCEL_URL;
//   // const res = await fetch(`${BASE_URL}api/services`);
//   // const data = await res.json();
//   return { props: { BASE_URL: BASE_URL } };
// };

// export const getStaticProps = async (context: GetStaticProps) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }
