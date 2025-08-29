import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WinterDonationsAnimation = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="min-h-[50vh] bg-gradient-to-b from-blue-50 to-white mt-5">
            {/* CTA Section */}
            <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto text-center px-4">
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        data-aos="fade-up"
                    >
                        Winter Donation Campaign
                    </h2>
                    <p
                        className="text-lg mb-6 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Bring warmth and hope to those in need this winter season.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4" data-aos="zoom-in" data-aos-delay="400">
                        <button className="btn btn-accent btn-md px-6">Donate Now</button>
                    </div>

                    <div
                        className="mt-8 bg-blue-900 bg-opacity-30 rounded-lg p-4 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <h3 className="text-xl font-semibold mb-2">Campaign Progress</h3>
                        <p className="mb-2">Our goal: $100,000</p>
                        <progress
                            className="progress progress-accent w-full h-4"
                            value="75"
                            max="100"
                        ></progress>
                        <p className="mt-2">$75,000 raised so far (75%)</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WinterDonationsAnimation;