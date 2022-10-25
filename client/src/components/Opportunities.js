import React from 'react';
import { useEffect, useState } from 'react';


export default function Opportunities () {

    const [jobs, setJobs] = useState([])

    useEffect( () => {
        fetch(`http://localhost:3000/jobs`)
        .then((res) => res.json())
        .then((jobs) => setJobs(jobs.jobs))
    }, [])

    return (
        <div>
            This is the opportunities page. 
        </div>
    )

};