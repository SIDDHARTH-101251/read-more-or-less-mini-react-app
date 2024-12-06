// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  MainHeading,
  MainPara,
  Image,
  HiddenPara,
  ReadMoreandLessButton,
} from './styledComponents'

const ReadMore = () => {
  const [readMore, setReadMore] = useState({more: 170})
  const text =
    'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'
  const slicedText = text.slice(0, readMore.more)
  const onClickReadMoreButton = () => {
    setReadMore(prevState => ({
      ...prevState, // Preserve existing state properties
      more: prevState.more === 170 ? text.length : 170, // Update 'more'
    }))
  }
  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <MainPara>Hooks are a new addition to React</MainPara>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <HiddenPara>{slicedText}</HiddenPara>
      <ReadMoreandLessButton type="button" onClick={onClickReadMoreButton}>
        {readMore.more === 170 ? 'Read More' : 'Read Less'}
      </ReadMoreandLessButton>
    </MainContainer>
  )
}

export default ReadMore
