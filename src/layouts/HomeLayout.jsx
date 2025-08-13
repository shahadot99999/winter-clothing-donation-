import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div>
           <nav className="w-11/12 max-auto py-2">
            <Navbar></Navbar>
           </nav>
           <main></main>
           <footer></footer>
        </div>
    );
};

export default HomeLayout;