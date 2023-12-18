import React from 'react'
import MenuBar from '../component/MenuBar'
import QuestionBlock from '../component/QuestionBlock'
import TopSection from '../component/TopSection'
import FooterDesktop from '../component/FooterDesktop'

import FooterMobile from '../component/FooterMobile'

const RightBlock = () => {
  return (
    <div>
      <MenuBar/>
      <TopSection/>
      <QuestionBlock/>
      <FooterDesktop/>
      <FooterMobile/>
    </div>
  )
}

export default RightBlock
