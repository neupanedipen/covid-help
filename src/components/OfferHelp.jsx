import Footer from "./Footer"
import HelpForm from "./HelpForm"
import Hero from "./Hero"
import Navbar from "./Navbar"

const OfferHelp = () => {
    return (
        <>
            <Navbar/>
            <Hero title="Offer Help" desc="Offer help to the needy ones by filling the form below"/>
            <HelpForm helpDesc="What help can you offer?"/>
            <Footer/>
        </>
    )
}

export default OfferHelp;