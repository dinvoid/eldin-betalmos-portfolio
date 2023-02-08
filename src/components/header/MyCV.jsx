import React from 'react'
import CV  from '../../assets/eldincv.docx'
const MyCV = () => {
  return (
    <div className="cv">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default MyCV