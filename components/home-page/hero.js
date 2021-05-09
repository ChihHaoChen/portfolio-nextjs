import Image from 'next/image'

import classes from './hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src='/images/site/CH_images.jpg' 
          alt='An image showing myself'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Chih-Hao</h1>
      <p>
        I blog about mobile app development.
      </p>
    </section>
  )
}

export default Hero