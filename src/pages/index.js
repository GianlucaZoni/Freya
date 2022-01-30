import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import ShopSection from '../components/ShopSection';
import {shopObjOne,shopObjTwo} from '../components/ShopSection/ShopData';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle=()=> {
        setIsOpen(!isOpen)
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <ShopSection {...shopObjOne} />
        <ShopSection {...shopObjTwo} />
        <InfoSection {...homeObjThree} />
        <Footer />
      </>
  );
};

export default Home;
