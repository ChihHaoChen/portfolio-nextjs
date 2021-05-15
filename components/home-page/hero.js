import Image from 'next/image'
import styled from 'styled-components'
import { BodyIntro, H1 } from '../styles/TextStyles'


const Hero = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <StyledImage 
          src='/images/site/CH_images.jpg' 
          alt='An image showing myself'
          width={300}
          height={300}
        />
      </ContentWrapper>
      <StyledIntro>Hi, I'm Chih-Hao</StyledIntro>
      <StyledDescription>
        I build and post about Web/Mobile apps.
      </StyledDescription>
    </SectionWrapper>
  )
}

export default Hero


const SectionWrapper = styled.section`
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    var(--color-grey-900),
    var(--color-grey-800)
  );
  padding: var(--size-8) 0;
`

const ContentWrapper = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--color-grey-700);
  margin: auto;
`

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
`

const StyledIntro = styled(H1)`
  color: var(--color-grey-300);
`

const StyledDescription = styled(BodyIntro)`
  color: var(--color-grey-200);
`