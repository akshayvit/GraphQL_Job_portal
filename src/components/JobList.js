import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getJobs } from '../graphql/queries';

 

function JobItem({ job }) {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>
          {title}
        </Link>
      </div>
    </li>
  );
}

 function JobList({ jobs }) {
  
  const [jobst,setJobs]=useState([]);
  useEffect(()=>{
    getJobs().then(setJobs)
  },[]);
 // useEffect(()=>{setInterval(()=>{setJob(jobdata[Math.random()*2]);},4000)},[job])
  return (
    <>
    <ul className="box">
      {jobst.map((job) => (
        <JobItem key={job.id} job={job}/>
      ))}
    </ul>
    </>
  );
}

export default JobList;
