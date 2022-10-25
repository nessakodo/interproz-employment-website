import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Dropdown, Card } from 'flowbite-react'
import icon from "../assets/as-icon.png"
import defaultpic from '../assets/profile-pic.webp'
import homepage_pic from '../assets/homepage_pic.jpg'


function NavBar({loggedIn, setCurrentCandidate, setLoggedIn, setVisible} ) {

    const history = useHistory()

    function toLogin() {
        history.push('/login')
        setVisible(true)
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
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src={icon}
                        className="mr-3 h-6 sm:h-9"
                        alt="Excel Personnel"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Excel Personnel
                    </span>
                </Navbar.Brand>
            
                {loggedIn ?
                    (<div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                           
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Signed in as:
                                </span>
                                {/* <span className="block truncate text-sm font-bold">
                                    {currentCandidate.name}
                                </span> */}
                            </Dropdown.Header>
                            <Dropdown.Item onClick={(onSignOut)}>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                    :
                    (<div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<img class='object-cover w-12 h-12 rounded-full border-2 border-gray-400' src={defaultpic} alt='' />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm font-bold">
                                Excel Personnel Portal
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={toLogin}>
                                Login
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                }

                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="./about">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="./candidates">
                        Candidates
                    </Navbar.Link>
                    <Navbar.Link href="./clients">
                        Clients
                    </Navbar.Link>
                    <Navbar.Link href="./opportunities">
                        Opportunities
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <div class='flex flex-col items-center'>
              
                <div className='absolute pt-20'>
            
                </div>
            </div>
            <div>
                <img src={homepage_pic} alt="Picture Courtesy of Tiger Lily on Pexels" />
                <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
                <div class="p-20 text-2xl text-black bg-gray-300 bg-opacity-50">
                    EXCEL PERSONNEL <br /> We specialize in Administration, Forklift, Packaging, Quality Control, Shipping & Receiving and Warehouse talent. <br />Begin your search <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </header>
            </div>
    

        </div >
    )
}

export default NavBar