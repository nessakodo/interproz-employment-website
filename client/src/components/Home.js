
import React from 'react';
import homepage_pic from '../assets/homepage_pic.jpg'
import { Card } from 'flowbite-react'


export default function Home () {

    return (
    <>
        {/* <div style={{ backgroundImage: `url(${homepage_pic})`, backgroundRepeat:"no-repeat", backgroundSize: "cover", height: 700 }}><br /><br /><br /><br /><br />
            <p1>Excel Personnel</p1> <br /> <br />
            <p2> We specialize in Administration, <br />Forklift, Packaging, Quality Control, <br />Shipping & Receiving and Warehouse talent.</p2>
        </div> */}
        
        <div class="max-w-full bg-white rounded-lg border border-navyish shadow-md">
        
            <Card href="/candidates">
            <img src={homepage_pic} alt="Picture Courtesy of Tiger Lily on Pexels"/>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    EXCEL PERSONNEL
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    We specialize in Administration, Forklift, Packaging, Quality Control, Shipping & Receiving and Warehouse talent.
                </p>
                <p className="font-normal  text-gray-900 dark:text-white">
                    Start your search <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </p>
            </Card>
        </div>

    </>

    
    )

};