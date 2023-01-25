import React from "react"
import { Footer, Card, Button, Checkbox, Label, TextInput, Accordion} from 'flowbite-react'
import map_footer from '../assets/map_footer.jpeg';
import clients2 from '../assets/clients2.jpg';
import translation from "../assets/translation.jpg";
import interpretation from "../assets/interpretation.jpg";
import transcription from "../assets/transcription.jpg";
import local from "../assets/local.jpg";
import audio from "../assets/audio.jpg";
import { AccordionPanel } from "flowbite-react/lib/esm/components/Accordion/AccordionPanel";
import { AccordionTitle } from "flowbite-react/lib/esm/components/Accordion/AccordionTitle";


export default function Clients () {

  

    return (
        <>
            
            <div class="bg-clients bg-cover bg-no-repeat bg-left-top">
                     <header class="h-screen">
                    <h1 class="pt-16 pl-8 pb-3 text-8xl text-gray-800">Work With Us </h1>

        <p className="font-normal text-gray-700 dark:text-gray-800 pt-4 pl-8 pr-96 pb-9 mr-96 text-xl"> <span class="italic">
        Unlock the power of clear communication with Interproz. Our team of experienced professionals specialize in both English and Spanish translations and interpretations, ensuring seamless communication for all your needs. 
        </span> </p>







        

                  
        <div class="grid grid-cols-[repeat(auto-fit,_20%)] m-auto pb-20 pr-3 pl-3 justify-center col-span-4 justify-center justify-self-center mx-auto bg-white-100 ">
<div className="max-w-sm p-4" >
  <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "270px", maxHeight: "270px"}}> 
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Translation
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    We specialize in providing precise and accurate translations between English and Spanish, ensuring your message is communicated effectively in either language.
    </p>
  </Card>
</div>      
<div className="max-w-sm p-4" >
  <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "270px", maxHeight: "270px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Interpretation
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    Our interpreters provide seamless interpretation services in real-time, ensuring clear and efficient communication in both English and Spanish.
    </p>
  </Card>
</div>
      
<div className="max-w-sm p-4" >
  <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "270px", maxHeight: "270px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Transcription
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    The Interproz team skillfully transcribes your dictated or recorded material in Spanish, and converts it to written form in English with linguistic precision and natural fluency.
    </p>
  </Card>
</div>

<div className="max-w-sm p-4">
  <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "270px", maxHeight: "270px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
     Localization
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    
    We represent various Spanish-speaking regions to help facilitate cultural adaptation for your product or service for specific Spanish-speaking groups.
    </p>
  </Card>
</div>      
<div className="max-w-sm p-4">
  <Card class="p-0 bg-gray-100 rounded-xl" style={{minHeight: "270px", maxHeight: "270px"}}>
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-gray-800">
      Audio & Video Dub
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500 pb-10">
    Interproz delivers audio and video dubbing services in both English and Spanish, helping you to reach a wider audience with high-quality, seamless translations.

    </p>
  </Card>
</div>
</div>

</header>
            </div>

           
            <div className="text-gray-700 text-center justify-center justify-self-center mb-12 pt-24">
            <h5 style={{ fontSize: "28px" }}>Our Specialties</h5> 
            <br />
        </div>
  
     
<div className="w-screen pb-4 pl-20 pr-20 ">
  <Card
    class="bg-gray-100"
    horizontal={true}
    
  >
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-black">
   Translation
    </h5>
    <p className="font-normal text-gray-700 dark:gray-800">
    Our team of professional translators specialize in delivering exceptional English to Spanish and Spanish to English translations. We understand the importance of effective and clear communication, and our goal is to ensure that your message is accurately conveyed in either language. We take pride in preserving the integrity of your original formatting and presentation style in the translation process. Our extensive experience encompasses a wide range of documents, including certificates, brochures, forms, manuals, books, radio and television scripts, website content, research, casework files, and many other types of written material.
    </p>
  </Card>
</div>

<div className="w-screen pb-4 pl-20 pr-20 ">
  <Card
    class="bg-gray-100"
    horizontal={true}
    
  >
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-black">
    Interpretation
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500">
    We specialize in English to Spanish interpretation and Spanish to English interpretation. We take spoken material in one language and convey it in the other, allowing our clients to exercise their specialty without the barrier of proficiency limitations. Our interpreters have considerable experience serving at judicial and workers compensation hearings, medical examinations, academic conferences, social services meetings, and functions in other professional fields. We perform simultaneous, consecutive, and sight interpretation as required. For congresses, conventions, and conferences with many participants, we use digital audio equipment with infrared technology.
    </p>
  </Card>
</div>

<div className="w-screen pb-4 pl-20 pr-20 ">
  <Card
    class="bg-gray-100"
    horizontal={true}
    
  >
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-black">
    Transcription
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500">
    Whether it's dictations or recorded material in Spanish, our team of specialists expertly transcribe it into written form in English. Conversely, we take audio material in English and put it in written form in Spanish. Our transcription service is unique in that we do not rely on voice recognition software, ensuring that our clients receive accurate and reliable transcriptions every time. Our specialists will personally handle your transcription tasks, accurately capturing even the most nuanced or difficult-to-understand speech, giving you the confidence to use our transcriptions for any purpose you need. We work with various types of audio material, and you may send us your electronic files or provide us with a link.
    </p>
  </Card>
</div>

<div className="w-screen pb-4 pl-20 pr-20 ">
  <Card
    class="bg-gray-100"
    horizontal={true}
    
  >
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-black">
    Localization
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500">
    Interproz offers you more than translation; we facilitate cultural adaptation for your product or service for specific Spanish-speaking regions or groups. As an example, an American company that offers staples and wants to export to Latin America must call the product “grapas” for Mexico and “grampas” for Argentina. “Grapa” in Argentina refers to an alcoholic beverage made from grapes. Our team of experts understands the importance of localization when it comes to labeling, marketing, and other key aspects of your business. Interproz has established partnerships in and is represented in various Spanish-speaking regions to help you adapt your product or service to the target culture.
    </p>
  </Card>
</div>

<div className="w-screen pb-4 pl-20 pr-20 ">
  <Card
    class="bg-gray-100"
    horizontal={true}
    
  >
    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-black">
    Audio & Video Dub
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-500">
    The professionals at Interproz are active participants in the media community and highly experienced in the translation, transcription, and trans-creation of advertising and entertainment material.  Whether you have a radio or TV spot, instructional video, podcast, webcast, infomercial, short film, or feature film – Interproz has the post-production knowledge to take your English audio or video material and cater it for the Spanish-speaking audience.  In trans-creation, we will take your English production and re-create it in Spanish with the corresponding effects, backgrounds, jingles, and style.
    </p>
  </Card>
</div>



                <div class="flex justify-center items-center p-20 text-7xl text-black font-thin"><h1>Your relationship with Excel Personnel yields many benefits to your business.<br /><br />Our Partnership Services..</h1></div>





<div className="max-w-screen pr-8 pl-8 pb-20">
  <Card>
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          required={true}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button onClick={onClick} type="submit">
        Submit
      </Button>
    </form>
  </Card>
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
