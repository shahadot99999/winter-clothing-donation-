import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div>
           <nav className="w-11/12 max-auto py-2">
            <Navbar></Navbar>
           </nav>
           <main className="w-11/12 mx-auto pt-5">
           <MainSection></MainSection>
           </main>
           <footer></footer>
        </div>
    );
};

export default HomeLayout;