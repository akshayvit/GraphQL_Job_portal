import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getJob } from '../graphql/queries';

function JobDetail() {
  const { jobId } = useParams();
  console.log(jobId);
  const [job,setJob]=useState([]);
  useEffect(()=>{
    getJob(jobId).then(setJob);

  },[jobId]);
  console.log(JSON.stringify(job));
  return (
    <div>
      <h1 className="title">
        {job.title}
      </h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.id}`}>
          {job.title}
        </Link>
      </h2>
      <div className="box">
        {job.description}
      </div>
    </div>
  );
}

export default JobDetail;
