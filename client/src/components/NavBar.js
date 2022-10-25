import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Dropdown, Card } from 'flowbite-react'
import icon from "../assets/as-icon.png"
import defaultpic from '../assets/profile-pic.webp'



function NavBar({ loggedIn, setCurrentCandidate, setLoggedIn, setVisible }) {

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
    

        </div >
    )
}

export default NavBar