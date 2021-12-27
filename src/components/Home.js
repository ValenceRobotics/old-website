import Button from "./About/Button.js";
import TeamPhoto from "../assets/team3.png"
import HoneyNest from "../assets/honeynest_realty.png"
import { Navbar } from "./NavBar";
import Banner from "./Banner";
import { SimpleGrid } from '@chakra-ui/react'
import SponsorCard from './Sponsor/SponsorCard.js'

function Home() {
    return (
        <>
            <Navbar active="home" />
            <Banner />
            <div className="w-screen mt-10" >
                <div className="mx-auto flex flex-wrap justify-evenly gap-y-16">
                    <div className="flex justify-center">
                        <div className="m-auto text-center">
                            <h1 className="text-7xl font-bold text-center"><span className="text-light-orange">Valence</span> Robotics</h1>

                            <p className="text-center text-lg text-gray-500 italic mt-8 px-12">Transforming the students of today into the leaders of tomorrow</p>

                            <div className="mt-8 flex justify-center gap-6">
                                <Button className="" text="Join Us" to="JOIN US LINK" dark={true} />
                                <Button className="" text="Sponsor Us" to="sponsor" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={TeamPhoto} alt="our team" className="w-4/5 m-auto" />
                    </div>
                </div>

                <div className="flex justify-evenly flex-wrap gap-x-4 gap-y-16 mt-24">
                    <div className="container md:w-2/5 px-4 md:px-16">
                        <h3 className="text-2xl text-center font-normal">Our Mission</h3>
                        <p className="text-center max-w-md mx-auto mt-3">The mission of Valence Robotics is to uplift our diverse student community through opportunities to develop into motivated leaders of science, technology, engineering, art, and math. Created for and initiated by students, our team seeks to guide members to become <span className="font-bold">uplift</span><span className="font-bold">well-rounded</span> industry <span className="font-bold">profesionals.</span></p>

                        <p className="text-center max-w-md mx-auto mt-3 text-xl italic">(919) 916-8888</p>
                    </div>

                    <div className="container md:w-2/5 px-4 xl:px-16">
                        <h3 className="text-2xl text-center font-normal">Who are we?</h3>
                        <p className="text-center max-w-md mx-auto mt-3">Valence Robotics (FRC Team 8864) is a 501(c)(3) <span className="font-bold">nonprofit organization</span> started by a group of dedicated students from North Carolina's School of Science and Mathematics (<span className="font-bold">NCSSM</span>). The team was established in October 2021 as a result of a spark of inspiration from its founding members. </p>

                        <p className="text-center max-w-md mx-auto mt-3 text-xl italic">valencerobotics@gmail.com</p>
                    </div>
                </div>

                <div className="container mx-auto mt-24 px-4">
                    <h1 className="text-4xl font-bold text-center text-dark-orange"><span className="text-black">Current</span> Sponsors</h1>

                    <SimpleGrid minChildWidth='300px' spacing='40px' mt="4">

                        <SponsorCard companyName="HoneyNest Realty" desc="HoneyNest Realty is a real estate company that specializes in residential and commercial real estate. We are a full service real estate company that offers a wide range of services including property management, property sales, property development, and property maintenance. We are located in Charlotte, North Carolina." img={HoneyNest} tier="Neon Tier Sponsor" />

                        <div></div>

                    </SimpleGrid>
                </div>


            </div >
        </>
    );
}

export default Home;
