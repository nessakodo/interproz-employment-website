import React, { useState } from "react"
import { Footer, Card, Button, Checkbox, Label, TextInput, Accordion} from 'flowbite-react'
import map_footer from '../assets/map_footer.jpeg';
import AccordionBlock from "./AccordionBlock";
import translation from "../assets/translation.jpg";
import interpretation from "../assets/interpretation.jpg";
import transcription from "../assets/transcription.jpg";
import local from "../assets/local.jpg";
import audio from "../assets/audio.jpg";
import ata from "../assets/logos/ata.png";
import capi from "../assets/logos/capi.png";
import cta from "../assets/logos/cta.png";
import imia from "../assets/logos/imia.png";
import najit from "../assets/logos/najit.png";
import ncihc from "../assets/logos/ncihc.png";


function Clients () {



  const [translationClicked, setTranslationClicked] = useState(false);
  const [interpretationClicked, setInterpretationClicked] = useState(true);
  const [transcriptionClicked, setTranscriptionClicked] = useState(true);
  const [localizationClicked, setLocalizationClicked] = useState(true);
  const [audioClicked, setAudioClicked] = useState(true);



  const translationCard = (
    <React.Fragment>
        <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
            <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "90px", maxHeight: "90px"}}>
                <div class="flex grid-cols-2 w-full o p-1">
                  <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                    Translation
                    </h5>
                    <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
                </div>
            </Card>
        </div>
    </React.Fragment>
);

  const translationDescriptionCard = (
    <React.Fragment>
        <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
            <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "250px", maxHeight: "250px"}}>
                <div class="flex grid-cols-2 w-full o p-1">
                  <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                    Translation
                  </h5>
                    <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-500">
                  Our team of professional translators specialize in delivering exceptional English to Spanish and Spanish to English translations. We understand the importance of effective and clear communication, and our goal is to ensure that your message is accurately conveyed in either language. We take pride in preserving the integrity of your original formatting and presentation style in the translation process. Our extensive experience encompasses a wide range of documents, including certificates, brochures, forms, manuals, books, radio and television scripts, website content, research, casework files, and many other types of written material.
                </p>
            </Card>
        </div>
    </React.Fragment>
);

const interpretationCard = (
  <React.Fragment>
      <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
          <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "90px", maxHeight: "90px"}}>
              <div class="flex grid-cols-2 w-full o p-1">
                <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                  Interpretation
                  </h5>
                  <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
              </div>
          </Card>
      </div>
  </React.Fragment>
);

const interpretationDescriptionCard = (
  <React.Fragment>
      <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
          <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "250px", maxHeight: "250px"}}>
              <div class="flex grid-cols-2 w-full o p-1">
                <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                  Interpretation
                </h5>
                  <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                We specialize in English to Spanish interpretation and Spanish to English interpretation. We take spoken material in one language and convey it in the other, allowing our clients to exercise their specialty without the barrier of proficiency limitations. Our interpreters have considerable experience serving at judicial and workers compensation hearings, medical examinations, academic conferences, social services meetings, and functions in other professional fields. We perform simultaneous, consecutive, and sight interpretation as required. For congresses, conventions, and conferences with many participants, we use digital audio equipment with infrared technology.
              </p>
          </Card>
      </div>
  </React.Fragment>
);

const transcriptionCard = (
  <React.Fragment>
      <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
          <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "90px", maxHeight: "90px"}}>
              <div class="flex grid-cols-2 w-full o p-1">
                <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                  Transcription
                  </h5>
                  <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
              </div>
          </Card>
      </div>
  </React.Fragment>
);

const transcriptionDescriptionCard = (
  <React.Fragment>
      <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
          <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "250px", maxHeight: "250px"}}>
              <div class="flex grid-cols-2 w-full o p-1">
                <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                  Transcription
                </h5>
                  <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                Whether it's dictations or recorded material in Spanish, our team of specialists expertly transcribe it into written form in English. Conversely, we take audio material in English and put it in written form in Spanish. Our transcription service is unique in that we do not rely on voice recognition software, ensuring that our clients receive accurate and reliable transcriptions every time. Our specialists will personally handle your transcription tasks, accurately capturing even the most nuanced or difficult-to-understand speech, giving you the confidence to use our transcriptions for any purpose you need. We work with various types of audio material, and you may send us your electronic files or provide us with a link.
              </p>
          </Card>
      </div>
  </React.Fragment>
);

const localizationCard = (
  <React.Fragment>
      <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
          <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "90px", maxHeight: "90px"}}>
              <div class="flex grid-cols-2 w-full o p-1">
                <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                  Localization
                  </h5>
                  <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
              </div>
          </Card>
      </div>
  </React.Fragment>
);

const localizationDescriptionCard = (
  <React.Fragment>
      <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
          <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "250px", maxHeight: "250px"}}>
              <div class="flex grid-cols-2 w-full o p-1">
                <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                  Localization
                </h5>
                  <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                Interproz offers you more than translation; we facilitate cultural adaptation for your product or service for specific Spanish-speaking regions or groups. As an example, an American company that offers staples and wants to export to Latin America must call the product “grapas” for Mexico and “grampas” for Argentina. “Grapa” in Argentina refers to an alcoholic beverage made from grapes. Our team of experts understands the importance of localization when it comes to labeling, marketing, and other key aspects of your business. Interproz has established partnerships in and is represented in various Spanish-speaking regions to help you adapt your product or service to the target culture.
              </p>
          </Card>
      </div>
  </React.Fragment>
);

    const audioCard = (
      <React.Fragment>
          <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
              <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "90px", maxHeight: "90px"}}>
                  <div class="flex grid-cols-2 w-full o p-1">
                    <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                      Audio & Video Dub
                      </h5>
                      <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
                  </div>
              </Card>
          </div>
      </React.Fragment>
);

    const audioDescriptionCard = (
      <React.Fragment>
          <div className="max-w-full max-h-100 p-4  pr-16 pl-20">
              <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "250px", maxHeight: "250px"}}>
                  <div class="flex grid-cols-2 w-full o p-1">
                    <h5 className="w-full text-2xl tracking-tight text-gray-900 dark:text-gray-800">
                      Audio & Video Dub
                    </h5>
                      <svg class="w-7 h-7 dark:text-white" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-500">
                    The professionals at Interproz are active participants in the media community and highly experienced in the translation, transcription, and trans-creation of advertising and entertainment material.  Whether you have a radio or TV spot, instructional video, podcast, webcast, infomercial, short film, or feature film – Interproz has the post-production knowledge to take your English audio or video material and cater it for the Spanish-speaking audience.  In trans-creation, we will take your English production and re-create it in Spanish with the corresponding effects, backgrounds, jingles, and style.
                  </p>
              </Card>
          </div>
      </React.Fragment>
);


    return (
        <>
            
            <div class="bg-clients bg-cover bg-no-repeat bg-right-botom">
                     <header class="h-screen">
                    <h1 class="pt-16 pl-8 pb-3 text-8xl text-gray-800">Work With Us </h1>

        <p className="font-normal text-gray-700 dark:text-gray-800 pt-4 pl-8 pr-96 pb-9 mr-96 text-xl"> <span class="italic">
        Unlock the power of clear communication with Interproz. Our team of experienced professionals specialize in both English and Spanish translations and interpretations, ensuring seamless communication for all your needs. 
        </span> </p>


  
</header>
            </div>



            <div className="text-gray-700 text-center justify-center justify-self-center mb-0 pt-24">
            <h5 style={{ fontSize: "28px" }}>Specialty Fields</h5> 
            <br />
        </div>


<div class="grid grid-cols-[repeat(auto-fit,_33%)] pl-12 pb-8 pt-12 m-auto justify-center col-span-3 justify-center justify-self-center mx-auto bg-white-100 ">
<div className="max-w-md p-2" >
  <Card imgSrc={translation} class="p-5 bg-gray-100 rounded-xl" style={{minHeight: "520px", maxHeight: "520px"}}> 
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Legal
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    We specialize in providing precise and accurate translations between English and Spanish, ensuring your message is communicated effectively in either language.
    </p>
  </Card>
</div>      
<div className="max-w-md p-4" >
  <Card imgSrc={interpretation} class="p-5 bg-gray-100 rounded-xl" style={{minHeight: "520px", maxHeight: "520px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Medical
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    When it comes to medical interpretation and translation, trust the experts at Interproz. We adhere to strict ethical principles of accuracy and confidentiality to ensure the best possible outcome for you and your patients.
    </p>
  </Card>
</div>
      
<div className="max-w-md p-4" >
  <Card imgSrc={transcription} class="p-5 bg-gray-100 rounded-xl" style={{minHeight: "520px", maxHeight: "520px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Academic
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    Interproz is the partner you can count on for all your academic interpreting and translation needs. From elementary to university level institutions, we have the experience and expertise to support your academic goals.
    </p>
  </Card>
</div>
<div className="max-w-md p-4">
  <Card imgSrc={local} class="p-5 bg-gray-100 rounded-xl" style={{minHeight: "520px", maxHeight: "520px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Advertising
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    At Interproz, we understand the importance of effectively communicating your ideas and passions across language barriers. As a leader in advertising translation services, we help you convey the value of your products and services to a global audience.
    </p>
  </Card>
</div>
      
<div className="max-w-md p-4">
  <Card imgSrc={audio} class="p-5 bg-gray-100 rounded-xl" style={{minHeight: "520px", maxHeight: "520px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Human Services
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    Interproz is dedicated to providing interpreting and translation services for Child, Adolescent, and Family Services, Adult Protective Services, and Community Support Services. Trust us to support and empower your clients.
    </p>
  </Card>
</div>
<div className="max-w-md p-4">
  <Card imgSrc={audio} class="p-5 bg-gray-100 rounded-xl" style={{minHeight: "520px", maxHeight: "520px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Finance & Accounting
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    With experience working with Standard & Poor's and a deep understanding of financial terminology, we ensure your financial documents are translated with precision and accuracy.
    </p>
  </Card>
</div>
</div>

           
            <div className="text-gray-700 text-center justify-center justify-self-center mb-12 pt-24">
            <h5 style={{ fontSize: "28px" }}>Our Services</h5> 
            <br />
        </div>

        <React.Fragment>
        <div>
          <div
            onClick={() => setTranslationClicked(!translationClicked)}
          >
            {translationClicked ? translationCard : translationDescriptionCard}
          </div>
        </div>
      </React.Fragment>

      <React.Fragment>
        <div>
          <div
            onClick={() => setInterpretationClicked(!interpretationClicked)}
          >
            {interpretationClicked ? interpretationCard : interpretationDescriptionCard}
          </div>
        </div>
      </React.Fragment>  

      <React.Fragment>
        <div>
          <div
            onClick={() => setTranscriptionClicked(!transcriptionClicked)}
          >
            {transcriptionClicked ? transcriptionCard : transcriptionDescriptionCard}
          </div>
        </div>
      </React.Fragment> 

      <React.Fragment>
        <div>
          <div
            onClick={() => setLocalizationClicked(!localizationClicked)}
          >
            {localizationClicked ? localizationCard : localizationDescriptionCard}
          </div>
        </div>
      </React.Fragment>  

      <React.Fragment>
        <div>
          <div
            onClick={() => setAudioClicked(!audioClicked)}
          >
            {audioClicked ? audioCard : audioDescriptionCard}
          </div>
        </div>
      </React.Fragment>    

<div class="flex justify-center items-center p-20 text-7xl text-black font-thin">
  <h1>Experience professional and reliable translation and interpretation services with Interproz.
  <br></br>
  <br></br>
  Get in touch with us today.
  </h1></div>


<div className="max-w-screen pr-20 pl-20 pb-20">
<div className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label class="text-gray-800"
        htmlFor="small"
        value="Name / Business"
      />
    </div>
    <TextInput class="text-gray-800 w-full"
      id="small"
      type="text"
      sizing="sm"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label class="text-gray-800"
        htmlFor="base"
        value="Email"
      />
    </div>
    <TextInput class="text-gray-800 w-full"
      id="base"
      type="text"
      sizing="md"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label class="text-gray-800"
        htmlFor="base"
        value="Phone"
      />
    </div>
    <TextInput class="text-gray-800 w-full"
      id="base"
      type="text"
      sizing="md"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label class="text-gray-800"
        htmlFor="base"
        value="Subject"
      />
    </div>
    <TextInput class="text-gray-800 w-full"
      id="base"
      type="text"
      sizing="md"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label class="text-gray-800"
        htmlFor="large"
        value="Message"
      />
    </div>
    <TextInput class="text-gray-800 w-full h-36 mb-8"
      id="large"
      type="text"
      sizing="lg"
    />
  </div>
</div>

<Button type="button" class="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-50 ">
                            <span  style={{ fontSize: "16px"}}>Send Message&nbsp;</span>
                    </Button>
</div>





            <Footer container={true}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                <img src={map_footer} class="mr-3 max-h-96 pr-16" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Conveniently located at I-25 and Thornton Pkwy, <br />our office is located just off of Grant St.</span>
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
                        by="Flowbite™"
                        year={2022}/>
        
                </div>
            </div>
        </Footer>
         
        </>
    )

};

export default Clients;