import React from 'react';
import { useHistory } from 'react-router-dom'


import { Card, Button, Footer, Accordion } from 'flowbite-react';
import map_footer from '../assets/map_footer.jpeg';
import interproz from "../assets/interproz-home.png";
import translation from "../assets/translation.jpg";
import interpretation from "../assets/interpretation.jpg";
import transcription from "../assets/transcription.jpg";
import audio from "../assets/audio.jpg";
import local from "../assets/local.jpg";
import ata from "../assets/logos/ata.png";
import capi from "../assets/logos/capi.png";
import cta from "../assets/logos/cta.png";
import imia from "../assets/logos/imia.png";
import najit from "../assets/logos/najit.png";
import ncihc from "../assets/logos/ncihc.png";
import candidate from "../assets/candidate.jpg";
import client from "../assets/client.jpg";


export default function Home () {

    const history = useHistory();

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

    function onCandidatesClick() {
        history.push('/opportunities')
        }

    function onClientsClick() {
        history.push('/clients')
        }


    return (
        <>
        
        <div class="bg-hero bg-cover bg-no-repeat">
                <header class="flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img">
                    <div class="p-20 text-7xl text-black bg-gray-100 bg-opacity-80 ">
                        <img
                        src={interproz}
                        className="ml-0 h-0 sm:h-20 mb-10 mt-0"
                        alt="Interproz"
                    />
                        <h1 style={{ fontSize: "18px", color: "#262626" }} className="ml-1">
                        We are the premier group of Spanish/English interpreting professionals in Colorado, and pride ourselves in our ability to convey meaning beyond lexical translation.
                        <br></br>
                        <br></br>
                        Our business requires us to continuously interact between the English speaking world of the  United States and that whic lies south of the border. We are trained to identify the cultural nuances in everything from slang to protocol - and that is what makes Interproz the right choice for you.
                        </h1>
                    </div> 
                </header>
        </div>

        <section>
                <div className="text-gray-700 text-center justify-center justify-self-center pt-20">
            <h5 style={{ fontSize: "28px" }}>Professional Affiliations</h5>
            <br />
        </div>


        <div class="skill-icons inline-grid grid-cols-6 mt-12 pb-0 shrink gap-12 m-4 p-4">

<div class="imia-icon pb-0 pt-16"><img src={imia} alt="wholefoods logo"/></div>
<div class="cta-icon pb-0 mb-12"><img src={cta} alt="wholefoods logo"/></div>

<div class="ncihc-icon pb-0 pt-2"><img src={ncihc} alt="wholefoods logo"/></div>

<div class="najit-icon pb-0 mb-36"><img src={najit} alt="wholefoods logo"/></div>
<div class="capi-icon pb-0 pt-10"><img src={capi} alt="wholefoods logo"/></div>


<div class="ata-icon pb-0 pt-12"><img src={ata} alt="wholefoods logo"/></div>

</div>  
                    {/* <div class="skill-icons inline-grid grid-cols-3 gap-14 mt-12 pr-12 pl-12 pb-0 shrink">
                        <div class="wf-icon pb-0 pr-20 pl-20 mt-4"><img src={capi} alt="wholefoods logo"/></div>
                        <div class="wf-icon pb-0 pr-20 pl-20"><img src={cta} alt="wholefoods logo"/></div>
                        <div class="wf-icon pb-0 pr-20 pl-20 mb-8"><img src={ata} alt="wholefoods logo"/></div>

                        <div class="wf-icon pb-0 pr-20 pl-20 mt-8"><img src={imia} alt="wholefoods logo"/></div>
                        <div class="wf-icon pb-0 pr-20 pl-20"><img src={najit} alt="wholefoods logo"/></div>
                        <div class="wf-icon pb-0 pr-20 pl-20 mb-56"><img src={ncihc} alt="wholefoods logo"/></div>
                        </div>     */}
                </section>




                   
                <section>
<div className="text-gray-700 text-center justify-center justify-self-center mb-12 mt-5 pt-0">
            <h5 style={{ fontSize: "28px" }}>Our Specialties</h5> 
            <br />
        </div>
  
<div class="grid grid-cols-[repeat(auto-fit,_20%)] m-auto pb-20 pr-3 pl-3 justify-center col-span-4 justify-center justify-self-center mx-auto bg-white-100 ">
<div className="max-w-sm p-2" >
  <Card imgSrc={translation} class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "470px", maxHeight: "470px"}}> 
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Translation
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    We specialize in providing precise and accurate translations between English and Spanish, ensuring your message is communicated effectively in either language.
    </p>
  </Card>
</div>      
<div className="max-w-sm p-2" >
  <Card imgSrc={interpretation} class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "470px", maxHeight: "470px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Interpretation
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    Our interpreters provide seamless interpretation services in real-time, ensuring clear and efficient communication in both English and Spanish.
    </p>
  </Card>
</div>
      
<div className="max-w-sm p-2" >
  <Card imgSrc={transcription} class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "470px", maxHeight: "470px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Transcription
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    The Interproz team skillfully transcribes your dictated or recorded material in Spanish, and converts it to written form in English with linguistic precision and natural fluency.
    </p>
  </Card>
</div>
<div className="max-w-sm p-2">
  <Card imgSrc={local} class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "470px", maxHeight: "470px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Localization
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    We represent various Spanish-speaking regions to help facilitate cultural adaptation for your product or service for specific Spanish-speaking groups.
    </p>
  </Card>
</div>
      
<div className="max-w-sm p-4">
  <Card imgSrc={audio} class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "470px", maxHeight: "470px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Audio & Video Dub
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    Interproz delivers audio and video dubbing services in both English and Spanish, helping you to reach a wider audience with high-quality, seamless translations.
    </p>
  </Card>
</div>
</div>
</section>
<br></br>




                   
        <section>z
<div className="text-gray-700 text-center justify-center justify-self-center font-bold">
            <h1 style={{ fontSize: "28px" }}>Connect With Us</h1> 
            <br />
        </div>
<div class="grid grid-cols-[repeat(auto-fit,_50%)] m-auto p-0.5 justify-center col-span-2 justify-center justify-self-center mx-auto bg-none ">
<div className="max-w-full p-0" >
  <Card imgSrc={candidate} class="p-0.5 m-0.5 bg-gray-100 rounded-xl" >
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">Candidates</h5>
                    <p class="mb-1 font-normal text-gray-700"> Interproz connects qualified candidates with clients in need of interpretation services. We offer a wide range of opportunities for interpreters looking for work, and our team is dedicated to helping you find the perfect fit for your skills and experience. </p>
                    <Button type="button" onClick={onCandidatesClick} class="mt-3 py-1 px-1 text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-0 py-0 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700   w-36">
                                        Read More &nbsp;
                                        <svg class="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Button>
  </Card>
</div>      
<div className="max-w-full p-0" >
  <Card imgSrc={client} class="p-0.5 m-0.5 bg-gray-200 rounded-xl" >
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">Clients</h5>
                    <p class="mb-1 font-normal text-gray-700"> We specialize in providing qualified interpreters ready to assist within a wide range of settings and contexts. Our experienced team is equipped to handle any situation, and we pride ourselves in providing the highest quality service to our clients.</p>
                    <Button type="button" onClick={onClientsClick} class="mt-3 py-1 px-1 text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-0 py-0 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700   w-36">
                                        Read More &nbsp;
                                        <svg class="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Button>
    </Card>
                </div>
      

</div>
</section>
<br></br>

    


                <section>
<div className="text-gray-700 text-center justify-center justify-self-center font-bold">
            <h1 style={{ fontSize: "28px" }}>Join Our Team</h1> 
            <br />
        </div>
            <div class="grid grid-cols-[repeat(auto-fit,_50%)] m-auto p-1 justify-center col-span-2 justify-center justify-self-center mx-auto bg-white-100">

                <div class="max-w-full m-1 p-6 rounded-lg   bg-gray-100">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">Schedule an Interview</h5>
                    <p class="mb-3 font-normal text-gray-700">Join our team of qualified interpreters and connect with clients in need of your language expertise.</p>
                    <Button type="button"  onClick={onInterviewClick} class="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-700 dark:focus:ring-gray-700   w-62">
                            Schedule an Interview &nbsp;
                        <svg class="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </Button>
                </div>
                <div class="max-w-full m-1 p-6 rounded-lg   bg-gray-100">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">Submit Your Resume</h5>
                    <p class="mb-3 font-normal text-gray-700">Expand your interpreting opportunities and connect with new clients by submitting your resume today.</p>
                    <Button type="button"  onClick={onResumeClick} class="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-700 dark:focus:ring-gray-700   w-62">
                            Sumbit Your Resume &nbsp;
                        <svg class="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                    </Button>
                </div>
                <div class="max-w-full m-1 p-6 rounded-lg   bg-gray-100">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">Job Opportunities</h5>
                    <p class="mb-3 font-normal text-gray-700">Explore the job opportunities and openings available for qualified candidates, and take the next step in your interpreting career.</p>
                    <Button type="button" onClick={onOpportunitiesClick} class="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-700 dark:focus:ring-gray-700   w-62">
                            Explore Opportunities &nbsp;
                        <svg class="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg>
                    </Button>
                </div>
                <div class="max-w-full m-1 p-6 rounded-lg   bg-gray-100">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">About Us</h5>
                    <p class="mb-3 font-normal text-gray-700">Learn about our mission and values, and discover why we are the best choice for professional interpreting services.</p>
                    <Button type="button" onClick={onAboutClick} class="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-700 dark:focus:ring-gray-700   w-62">
                            Discover Our Mission &nbsp;
                            <svg class="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </Button>
                </div>
            </div>      
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
<section>
            
        <Footer container={true}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                <img src={map_footer} class="mr-3 mt-5 mb-10 max-h-96 pr-16" alt="Flowbite Logo"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> </span>
                </div>
                    <div className="grid grid-cols-2 gap-x-24 max-w-full mr-24 mt-10">
                        <div>
                        <Footer.Title title="Denver / Thornton Office" />
                        <Footer.LinkGroup col={true}>
                            9351 Grant St.<br />Suite 570<br />Thornton, CO 80229<br />Phone: (303)-427-4600<br /> Fax: (303)427-4147
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title="Corporate / Payroll Office" />
                        <Footer.LinkGroup col={true}>
                            10111 Inverness Main St.<br />Englewood, CO 80112<br />Phone: (303)-805-2300<br /> Fax: (303)805-2400
                        </Footer.LinkGroup>
                        </div>
                  
                    </div>
                </div>
                <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Interproz™"
                        year={2023}/>
        
                </div>
            </div>
        </Footer>
        </section>


  

    </>
    )

};
