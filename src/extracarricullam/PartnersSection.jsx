import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.png";

const PartnersSection = () => {
    return (
        <div className="py-16 bg-base-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-primary">Our Partners</h2>
                <p className="text-center text-xl mb-12">Together we're making a difference</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    <div className="flex justify-center">
                        <img src={img5} alt="Partner 1" className="opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex justify-center">
                        <img src={img6} alt="Partner 2" className="opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex justify-center">
                        <img src={img7} alt="Partner 3" className="opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex justify-center">
                        <img src={img8} alt="Partner 4" className="opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                <div className="text-center mt-12">
                    <div className="bg-base-200 p-8 rounded-box">
                        <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
                        <p className="mb-6">Join our network of organizations making a direct impact in our community</p>
                        <button className="btn btn-primary">Partner With Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersSection;