import React from "react"
import Jobs from "./Jobs"

export default function Candidates({currentCandidate, jobs, loggedIn, onApply}) {
    return (
        <div>
        <h1>EXCEL PERSONNEL</h1>
        <br /> 
        <h1>Level up your career <br /> We pride ourselves in getting to know you, giving you personalized attention, clear communication, and honest accountability. We work with thousands of associates every year, and we know what is important to you and how to get things done so you may succeed</h1>

        <Jobs
        currentCandidate={currentCandidate}
        jobs={jobs}
        loggedIn={loggedIn}
        onApply={onApply} />
        </div>
    )
}




