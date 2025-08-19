import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import WinterDonationSlider from "../components/WinterDonationSlider";
import ImpactStats from "../extracarricullam/ImpactStats";
import VolunteerTestimonials from "../extracarricullam/VolunteerTestimonials";


const HomeLayout = () => {
    return (
        <div>
           <nav className="w-11/12 max-auto py-2 pl-16">
           <section>
              <Navbar></Navbar>
           </section>
           <section>
               <WinterDonationSlider></WinterDonationSlider>
           </section>
           
            
           </nav>
           <main className="w-11/12 mx-auto pt-5">
           <MainSection></MainSection>
           
           </main>
           <section>
            <AboutPage></AboutPage>
            <ImpactStats></ImpactStats>
            <VolunteerTestimonials></VolunteerTestimonials>
           </section>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default HomeLayout;