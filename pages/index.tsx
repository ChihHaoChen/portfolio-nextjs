import { GetServerSidePropsContext, GetStaticProps } from 'next'
import React from 'react'
import { services } from "../data";
import ServiceCard from '../components/ServiceCard'

const landing = () => {

  // console.log('Client Side =>', services)

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 text-base font-medium">
        I am currently working as a full-stack developer. I have 2+ years of experience in Web Development.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 " style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {
            services.map((service, key) => (
              <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 ">
                <ServiceCard service={service} key={key}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default landing


// export const getServerSideProps = async (context: GetServerSidePropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('server side => ', data)
//   return {
//     props: {
//       services: data.services
//     }
//   }
//}


// export const getStaticProps = async (context: GetStaticProps) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }