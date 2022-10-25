import React from "react"

import Jobs from "./Jobs"

export default function Candidates({currentCandidate, jobs, loggedIn, onApply}) {
    return (
        <div>
            <h2>Blah.....Create an account to apply</h2>
        <Jobs
        currentCandidate={currentCandidate}
        jobs={jobs}
        loggedIn={loggedIn}
        onApply={onApply} />
        </div>
    )
}