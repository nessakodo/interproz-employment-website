import React from "react"
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'flowbite-react'


export default function Candidates() {

    const history = useHistory();

    function onOpportunitiesClick() {
        history.push('/opportunities')
        }
        function onInterviewClick() {
            history.push('/interview')
        }
    
        function onResumeClick() {
            history.push('/resume')
        }
    
        function onOpportunitiesClick() {
            history.push('/opportunities')
        }
    
        function onAboutClick() {
            history.push('/about')
            }

    return (
        <>


   
        

               
                <div class="bg-join bg-cover bg-no-repeat bg-center">
                <header class="h-screen">
                    <h1 class="pt-16 pl-8 pb-3 text-8xl text-gray-800">Join Our Team </h1>

        <p className="font-normal text-gray-700 dark:text-gray-800 pt-4 pl-8 pr-96 pb-8 mr-96 text-xl"> <span class="italic">
        Connect with clients in need of your language expertise, utilize your language skills and make a real impact, and level up your career today.
        </span> </p>

      

        <div class="grid grid-cols-[repeat(auto-fit,_50%)] w-screen justify-center col-span-2 justify-center justify-self-center pr-6 pl-2">


       
                <div class="max-w-full m-4 p-6 rounded-lg shadow-md bg-gray-100">
                        <h5 class="mb-2 text-3xl tracking-tight text-gray-700">Submit Your Resume</h5>
                    <p class="font-normal text-gray-700 text-lg mb-4">Expand your interpreting opportunities by submitting your resume today.</p>
                    <Button type="button" onClick={onResumeClick} class="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-50 ">
                            <span  style={{ fontSize: "16px"}}>Sumbit Your Resume &nbsp;</span>
                        <svg class="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                    </Button>
                </div>
                <div class="max-w-full m-4 p-6 rounded-lg shadow-md bg-gray-100">
                        <h5 class="mb-2 text-3xl tracking-tight text-gray-700">Schedule an Interview</h5>
                    <p class="font-normal text-gray-700 text-lg mb-4">Connect with clients in need of your language expertise and join our team today.</p>
                    <Button type="button"  onClick={onInterviewClick} class="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-50 ">
                            <span  style={{ fontSize: "16px"}}>Schedule an Interview &nbsp;</span>
                        <svg class="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                    </Button>
                </div>
                <div class="max-w-full m-4 p-6 rounded-lg shadow-md bg-gray-100">
                        <h5 class="mb-2 text-3xl tracking-tight text-gray-700">Job Opportunities</h5>
                    <p class="font-normal text-gray-700 text-lg mb-4">Explore the job opportunities available for qualified candidates at Interproz.</p>
                    <Button type="button" onClick={onOpportunitiesClick} class="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-50 ">
                            <span  style={{ fontSize: "16px"}}>Explore Opportunities &nbsp;</span>
                        <svg class="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg>
                    </Button>
                </div>
                <div class="max-w-full m-4 p-6 rounded-lg shadow-md bg-gray-100">
                        <h5 class="mb-2 text-3xl tracking-tight text-gray-700">About Us</h5>
                    <p class="font-normal text-gray-700 text-lg mb-4">Learn why Interproz is the best choice for professional interpreting services.</p>
                    <Button type="button" onClick={onAboutClick} class="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-50 ">
                            <span  style={{ fontSize: "16px"}}>Discover Our Mission &nbsp;</span>
                            <svg class="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </Button>
                </div>
            </div>     
                            </header>
                            </div>
                            
        
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        
        </>
    )
}




