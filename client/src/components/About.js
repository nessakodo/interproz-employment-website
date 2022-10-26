import React from 'react';
// import aboutpic from '../assets/aboutpic.jpg'
import { Tabs, Timeline } from 'flowbite-react'



export default function About() {

    return (
        <>
        <div>
            <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
                <div class="p-20 text-black bg-gray-300 bg-opacity-70 max-w-max text-left text-9xl">
                Why Choose Excel? 
                </div> 
            </header>
        </div>
        <h1>Why Choose Excel?</h1>
        <Tabs.Group aria-label="Default tabs" style="default" >
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
                disabled={true}
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
                            Excel Personnel established in San Diego, CA
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
                            Expanded to service the Denver market & the Front Range
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
                            Denver established as corporate headquarters
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
                            Five offices located in Denver area covering the entire Metro region
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
                            Relocated Corporate offices to the Denver Tech Center
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
                            Nominated "Best Companies to Work for in Colorado"
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
                            Celebrated 30 years in Denver Metro region
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>

        </>
    )

};

