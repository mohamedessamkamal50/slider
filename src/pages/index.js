import React, {useState}  from  'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Herosection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTow, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer/imdex';
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)


    const toggle = () =>{
        setIsOpen(!isOpen);
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTow}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home;
