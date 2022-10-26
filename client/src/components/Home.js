import React from 'react';
import { Card, Button } from 'flowbite-react';


export default function Home () {

    return (
        <>
        <div class="bg-hero bg-cover bg-no-repeat">
                <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
                    <div class="p-20 text-7xl text-black bg-gray-300 bg-opacity-50 ml-0 mr-10">
                        EXCEL PERSONNEL <br /> 
                        <div class="text-2xl">
                            We specialize in Administration, Forklift, Packaging, Quality Control, Shipping & Receiving and Warehouse talent. 
                            <div class="text-3xl">
                                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> 
                            </div>
                        </div>
                    </div> 
                </header>

                <Card class="bg-gray-200 ml-0 mr-96 h-96 w-96 ">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                            <Button>
                                Read more
                                <svg
                                className="ml-2 -mr-1 h-4 w-4"
                                fill="yellow-700"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                    </Card>

                    <Card class="bg-gray-100 mr-0 ml-96 h-96 w-96">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                            <Button>
                                Read more
                                <svg
                                className="ml-2 -mr-1 h-4 w-4"
                                fill="bg-slate-600"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                    </Card>
        </div>





    </>
    )

};

