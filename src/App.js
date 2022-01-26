import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async() => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchJobs()
  }, [])

  if(isLoading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    )
  }

  const {id, title, dates, duties, company} = jobs[value]

  return (
    <section className='section'>

      {/* HEADER */}

      <div className="title">
        <h3>experience</h3>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">

        {/* BUTTON CONTAINER */}

        <div className="btn-container">
          {jobs.map((job, index)=>{
            return (
              <button key={job.id} className={`job-btn ${index === value && 'active-btn'}`} onClick={()=>setValue(index)}>{job.company}</button>
            )
          })}
        </div>

          {/* JOB INFORMATION */}

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index)=>{
              return (
                <div key={index} className="class-desc">
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
        </article>
      </div>
    </section>
  )
}

export default App;