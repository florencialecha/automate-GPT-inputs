import React from 'react'
import Select from 'react-select'
import { projects } from '../utils/projectsData'
import { technologies } from '../utils/techonologiesData'

const SetOfInputs = () => {
  return (
    <div>
        <fieldset>
        <legend>Set project</legend>
            <Select
                options={projects}   
            />
        </fieldset>
        <fieldset>
        <legend>Select technologies</legend>
        <Select
            isMulti={technologies} 
            options={technologies} 
        />
        </fieldset>
    </div>
  )
}

export default SetOfInputs
