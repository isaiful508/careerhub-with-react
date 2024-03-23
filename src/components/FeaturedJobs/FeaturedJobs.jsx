import { useEffect, useState } from 'react';
import '../Font-Family/Font-Family.css'
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    //this is not best way to load show alll data
    const [dataLength, setDataLength] = useState(4);

useEffect(( ) =>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data));
}, [])

    return (
        <div>
            <div className='text-center'>
        <h2 className="text-5xl manrope-800">Featured Jobs:{jobs.length}</h2>
        <p className='manrope-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0,dataLength).map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button
                onClick={() => setDataLength(jobs.length)}
                 className="btn btn-primary" >See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;