import React from 'react'
import Title from './Title'
import SetOfInputs from './SetOfInputs'
import GenerateInputBtn from './GenerateInputBtn'

const HomePage = () => {

  return (
    <div>
      <Title/>
      <form>
        <SetOfInputs/>
        <GenerateInputBtn/>
      </form>
    </div>
  )
}

export default HomePage
