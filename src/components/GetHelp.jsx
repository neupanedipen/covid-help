import Navbar from "./Navbar";
import Hero from './Hero'
import Footer from "./Footer";
import HelpForm from "./HelpForm";


const GetHelp = () => {
    return (
        <>
        <Navbar/>
        <Hero title="Get Help" desc="Need help for yourself or someone you know? Fill the form below and someone will contact you."/>
        <HelpForm helpDesc="What help do you need?"/>
        <Footer/>
        </>
    )
}

export default GetHelp;