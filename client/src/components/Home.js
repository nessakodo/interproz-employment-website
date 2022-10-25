import React from 'react';
import homepage_pic from '../assets/homepage_pic.jpg'


export default function Home () {

    return (
        <div>
            <img src={homepage_pic} alt="Picture Courtesy of Tiger Lily on Pexels"/>
                <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
                    <div class="p-20 text-2xl text-black bg-gray-300 bg-opacity-50">
                        EXCEL PERSONNEL <br /> We specialize in Administration, Forklift, Packaging, Quality Control, Shipping & Receiving and Warehouse talent. <br />Begin your search <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div> 
                </header>
        </div>
    
    )

};


