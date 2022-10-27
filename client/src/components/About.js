import React, {useEffect} from 'react';
// import aboutpic from '../assets/aboutpic.jpg'
import { Tabs, Timeline } from 'flowbite-react'



export default function About() {
    
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <>
        <div class="bg-about bg-cover bg-no-repeat">
                <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"/>
        </div>
        <div class="p-20 text-7xl text-black bg-white bg-opacity-75">
                        Why choose Excel? <br /> 
                    </div> 
        
        <Tabs.Group aria-label="Default tabs"  >
            <Tabs.Item
                active={true}
                title="Focus"
            >
                We realize that strong search capabilities are what ensures the success of our clients, so that’s where we focus our resources and efforts.
            </Tabs.Item>
            <Tabs.Item title="Quality">
                Quality costs less – when you need to hire, don’t settle for anything less than the highest quality available.
            </Tabs.Item>
            <Tabs.Item title="Relationships">
                You need a staffing partner that focuses on solving problems rather than just filling orders. We take a strategic approach to solving your staffing challenges and improving your bottom line.
            </Tabs.Item>
            <Tabs.Item title="Results">
                In order to make sure of constant progress and improvement, you need to be able to measure your results and the parameters of success that have been agreed upon. We pride ourselves on achieving results that benefit you!
            </Tabs.Item>
            <Tabs.Item
                title="Expertise"
            >
                We have been providing exceptional, customized staffing fulfillment since 1992.
            </Tabs.Item>
        </Tabs.Group>
        
        <h1>Excel Milestones</h1>
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            1987 
                        </Timeline.Time>
                        <Timeline.Title>
                        <div class= "text-black">
                            Excel Personnel established in San Diego, CA
                        </div>
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            1992
                        </Timeline.Time>
                        <Timeline.Title>
                            <div class= "text-black">
                                Expanded to service the Denver market & the Front Range
                            </div>
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            1992
                        </Timeline.Time>
                        <Timeline.Title>
                            <div class= "text-black">
                                Denver established as corporate headquarters
                            </div>
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            2002
                        </Timeline.Time>
                        <Timeline.Title>
                            <div class= "text-black">
                                Five offices located in Denver area covering the entire Metro region
                            </div>
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            2004
                        </Timeline.Time>
                        <Timeline.Title>
                            <div class= "text-black">
                                Relocated Corporate offices to the Denver Tech Center
                            </div>
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            2007
                        </Timeline.Time>
                        <Timeline.Title>
                            <div class= "text-black">
                                Nominated "Best Companies to Work for in Colorado"
                            </div>
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            2022
                        </Timeline.Time>
                        <Timeline.Title>
                            <div class= "text-black">
                                Celebrated 30 years in Denver Metro region
                            </div>
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>

        </>
    )

};

