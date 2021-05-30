import PostsGrid from '../posts/posts-grid'
import styled from 'styled-components'
import { Web } from '@styled-icons/material-twotone/Web'
import { Apple } from '@styled-icons/boxicons-logos/Apple'
import { Apps } from '@styled-icons/remix-fill/Apps'


const FeaturedPosts = ({ posts }) => {
  return (
    <SectionWrapper>
      <StyledTitle>Projects</StyledTitle>
      <StyledTagGroupDiv>
        <StyledTagContainer>
          <IconWrapper>
            <StyledAppsIcon className="icon" />
            <Ring src="/images/icons/icon-ring.svg" />
          </IconWrapper>
          <StyledTag>
            ALL
          </StyledTag>
        </StyledTagContainer>
        <StyledTagContainer>
          <IconWrapper>
            <StyledWebIcon className="icon" />
            <Ring src="/images/icons/icon-ring.svg" />
          </IconWrapper>
          <StyledTag>
            WEB
          </StyledTag>
        </StyledTagContainer>
        <StyledTagContainer>
          <IconWrapper>
            <StyledAppleIcon className="icon" />
            <Ring src="/images/icons/icon-ring.svg" />
          </IconWrapper>
          <StyledTag>
            MOBILE
          </StyledTag>
        </StyledTagContainer>
      </StyledTagGroupDiv>
      <PostsGrid 
        posts={posts}
      />
    </SectionWrapper>
  )
}


export default FeaturedPosts


const SectionWrapper =  styled.section`
  width: 85%;
  max-width: 80rem;
  margin: 0 auto;
  /* background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%); */
  display: grid;
  gap: 1rem;
`

const StyledTitle = styled.h2`
  font-size: var(--size-8);
  color: var(--color-grey-800);
  text-align: start;
  
  @media (min-width: 768px) {
    font-size: var(--size-10);
  }
`

const StyledTagGroupDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%; 
  justify-content: space-between;
  gap: 20px;
  
`

const StyledTagContainer = styled.div`
  width: 30rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 4px;
  gap: 20px;
  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover {
    /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5); */

    transform: translateY(-3px);

    .icon {
      transform: scale(1.1);
    }
  }
`

const StyledTag = styled.h3`
  font-size: var(--size-6);
  color: var(--color-grey-700);
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
  ${StyledTagContainer}:hover & {
    transform: scale(1.2);
    filter: hue-rotate(10deg);
  }
`

const StyledWebIcon = styled(Web)`
  color: cyan;
`

const StyledAppleIcon = styled(Apple)`
  color: cyan;
`

const StyledAppsIcon = styled(Apps)`
  color: cyan;
`

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${StyledTagContainer}:hover & {
    transform: rotate(30deg) scale(1.1) translate(1px, 1px);
  }
`
