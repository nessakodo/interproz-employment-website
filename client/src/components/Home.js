import React from 'react';
import { useHistory } from 'react-router-dom'


import { Card, Button } from 'flowbite-react';
import wholefoods from '../assets/logos/wholefoods.png';
import ball from '../assets/logos/ball.png';
import fresca from '../assets/logos/fresca.png';
import coors from '../assets/logos/coors.png';
import cardinal from '../assets/logos/cardinal.png';
import acme from '../assets/logos/acme.png';
import aspen from '../assets/logos/aspen.png';
import bigo from '../assets/logos/bigo.png';
import bmc from '../assets/logos/bmc.png';
import brownss from '../assets/logos/brownss.png';
import cintas from '../assets/logos/cintas.png';
import dmco from '../assets/logos/dmco.png';
import empire from '../assets/logos/empire.png';
import forterra from '../assets/logos/forterra.png';
import jepp from '../assets/logos/jepp.png';
import liva from '../assets/logos/liva.png';
import metal from '../assets/logos/metal.png';
import napa from '../assets/logos/napa.png';
import sorin from '../assets/logos/sorin.png';
import sund from '../assets/logos/sund.png';
import tms from '../assets/logos/tms.png';
import trelle from '../assets/logos/trelle.png';
import uec from '../assets/logos/uec.png';


export default function Home () {

    const history = useHistory();

    function onInterviewClick() {
        history.push('/interview')
    }


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
        </div>

        <div class="grid-container">
            <div class="grid-child1">
                        <Card class="bg-gray-200 ml-0 h-80 ">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Candidates
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-800">
                                    Excel Personnel has been providing expert recruiting services in Denver, CO for over three decades. We work with thousands of associates every year, and we know what is important to you and how to get things done so you may succeed.
                                </p>
                                <Button type="button" class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52">
                                        Read more
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </Button>
                            </Card>
                    </div>

            <div class="grid-child2">
                    <Card class="bg-gray-100 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Clients
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                            We know staffing. Use our 30+ years of Denver recruiting and staffing services to your benefit. We are devoutly committed to developing a strong understanding of our clients’ business to continue providing each client with customized solutions to your talent needs.
                        </p>
                            <Button type="button" class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52">
                                Read more
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Button>
                    </Card>
                </div>
        </div>

                <section>
                    <div>
                        <h1><span class="highlight-container"><span class="highlight">Companies who chose us</span></span></h1> 
                        <br />
                    </div>
                    <div class="skill-icons">
                        <div><img src={wholefoods} alt="wholefoods logo"/></div>
                        <div><img src={ball} alt="ball logo"/></div>
                        <div><img src={fresca} alt="fresca logo"/></div>
                        <div><img src={coors} alt="coors logo"/></div>
                        <div><img src={cardinal} alt="cardinal logo"/></div>
                        <div><img src={acme} alt="acme logo"/></div>
                        <div><img src={aspen} alt="aspen logo"/></div>
                        <div><img src={bigo} alt="bigo logo"/></div>
                        <div><img src={bmc} alt="bmc logo"/></div>
                        <div><img src={brownss} alt="brownss logo"/></div>
                        <div><img src={cintas} alt="cintas logo"/></div>
                        <div><img src={dmco} alt="dmco logo"/></div>
                        <div><img src={empire} alt="empire logo"/></div>
                        <div><img src={forterra} alt="forterra logo"/></div>
                        <div><img src={jepp} alt="jepp logo"/></div>
                        <div><img src={liva} alt="liva logo"/></div>
                        <div><img src={metal} alt="metal logo"/></div>
                        <div><img src={napa} alt="napa logo"/></div>
                        <div><img src={sorin} alt="sorin logo"/></div>
                        <div><img src={sund} alt="sund logo"/></div>
                        <div><img src={tms} alt="tms logo"/></div>
                        <div><img src={trelle} alt="trelle logo"/></div>
                        <div><img src={uec} alt="uec logo"/></div>


                    </div>    
                </section>

        <div class="grid-container2">
            <div class="grid-child3">
                        <Card class="bg-gray-200 ml-0 h-80 ">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Schedule an Interview
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-800">
                                    We work with thousands of associates every year, and we know what is important to you and how to get things done so you may succeed. 
                                </p>
                                <Button type="button" onClick={onInterviewClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52">
                                        I'm ready to leap!
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </Button>
                            </Card>
            </div>

            <div class="grid-child4">
                    <Card class="bg-gray-100 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Submit your Resume
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                            Quick Apply for New Candidates. Provide Your Contact Information & Upload Your Resume. 
                        </p>
                            <Button type="button" class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52">
                                Send it! 
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                            </Button>
                    </Card>
            </div>

            <div class="grid-child5">
                        <Card class="bg-gray-100 ml-0 h-80 ">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Job Opportunities
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-800">
                                   We pride ourselves in getting to know you, giving you personalized attention, clear communication, and honest accountability.
                                </p>
                                <Button type="button" class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52">
                                        Peep some jobs!
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg>
                                    </Button>
                            </Card>
            </div>

            <div class="grid-child6">
                    <Card class="bg-gray-200 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Who We Are
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                            If you are looking for a partner with the best new job opportunities throughout the Denver area, you’ve found us. Welcome to Excel Personnel.
                        </p>
                            <Button type="button" class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52">
                                Tell me more!
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </Button>
                    </Card>
                </div>
        </div>
  



  

    </>
    )

};
