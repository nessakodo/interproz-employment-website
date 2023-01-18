import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Dropdown } from 'flowbite-react'
import icon from "../assets/interproz.png"
import defaultpic from '../assets/profile-pic.webp'


function NavBar({setJobsComp, profPhoto, loggedIn, setCurrentCandidate, currentCandidate, setLoggedIn, setVisible,  setProfileCard,} ) {

    const history = useHistory()

    function toLogin() {
        history.push('/login')
        setVisible(true)
    }


    function handleProfDropClick(e) {
        const click = e.target.textContent
        if (click === "Account") {
            setProfileCard(true)
            setJobsComp(false)
        }
        else if (click === "My Jobs") {
            setProfileCard(false)
            setJobsComp(true)
        } else  {
            setProfileCard(false)
            setJobsComp(false)
        }
        history.push('./profile')

    }

    function onSignOut() {
        fetch('/logout', { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    setCurrentCandidate(null)
                    setLoggedIn(false)
                    history.push('./')
                }
            })
    }


    return (
        <div>
            <Navbar class="bg-grey mb-5 mt-5 "
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src={icon}
                        className="ml-5 mr-5 h-6 mt-0 sm:h-14"
                        alt="Interproz"
                    />
                    {/* <span className=" self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Interproz
                    </span> */}
                </Navbar.Brand>
            
                {loggedIn ?
                    (<div className="flex md:order-2 mr-4">
                        <Dropdown
                            inline={true}
                            label={currentCandidate ? <img class='object-cover w-12 h-12 rounded-full border-2 border-gray-400' src={profPhoto.image_url} alt='' /> :
                            null}
                        >
                            <Dropdown.Header >
                                <span className="block text-sm">
                                    Signed in as:
                                </span>
                                <span className="block truncate text-sm font-bold">
                                    {currentCandidate.name}
                                </span>
                                </Dropdown.Header>
                               
                                <Dropdown.Item onClick={handleProfDropClick}>
                                    Account
                                </Dropdown.Item>
                                <Dropdown.Item onClick={handleProfDropClick}>
                                    My Jobs
                                </Dropdown.Item>
                            

                            <Dropdown.Item onClick={(onSignOut)} >
                            <strong>Sign out</strong>
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                    :
                    (<div className="flex md:order-2 mr-4">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<img class='object-cover w-12 h-12 rounded-full border-2 border-gray-400' src={defaultpic} alt='' />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm font-bold">
                                Interproz Portal
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={toLogin}>
                                Login
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                }

                <div className="flex md:order-1 mr-24" > 
                    <Navbar.Collapse>
                        <Navbar.Link
                            style={{ fontSize: "16px" }}   
                            href="/"
                            active={true}
                        >
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="./about" style={{ fontSize: "16px" }} >
                            About
                        </Navbar.Link>
                        <Navbar.Link href="./candidates" style={{ fontSize: "16px" }} >
                            Candidates
                        </Navbar.Link>
                        <Navbar.Link href="./clients" style={{ fontSize: "16px" }} >
                            Clients
                        </Navbar.Link>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div class='flex flex-col items-center'> 
                <div className='absolute pt-20'>
            </div>
        </div>
    </div >

    )
}

export default NavBar