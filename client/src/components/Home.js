import React from 'react';
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

            <div class="grid-child2">
                    <Card class="bg-gray-100 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Clients
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                            We know staffing. Use our 30+ years of Denver recruiting and staffing services to your benefit. We are devoutly committed to developing a strong understanding of our clients’ business to continue providing each client with customized solutions to your talent needs.
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
        </div>

                <section>
                    <div>
                        <br /> <br /> <br /> <br /> <br />
                        <h1>Companies who chose us</h1> 
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
  





    </>
    )

};

