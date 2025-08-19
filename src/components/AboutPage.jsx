

const AboutPage = () => {
    return (
        <div className="py-16 px-4 md:px-8 lg:px-16 bg-base-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Winter Warmth Initiative</h2>

                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://placehold.co/600x400/e6f7ff/0066cc?text=Winter+Donation"
                            alt="Winter clothing donation drive"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl font-bold mb-6 text-secondary">Our Mission</h3>
                        <p className="text-lg mb-6">
                            Each winter, thousands struggle to stay warm in freezing temperatures. Our mission is to provide
                            warm clothing to those in need during the coldest months of the year. We collect, sort, and
                            distribute winter essentials to shelters, community centers, and directly to individuals
                            experiencing homelessness or financial hardship.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4 text-accent">How You Can Contribute</h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="bg-primary text-primary-content rounded-full p-2 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Donate Winter Clothing</h4>
                                    <p>Clean coats, sweaters, blankets, hats, gloves, and scarves in good condition.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary text-primary-content rounded-full p-2 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Financial Contributions</h4>
                                    <p>Monetary donations help us purchase new items and cover distribution costs.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary text-primary-content rounded-full p-2 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Volunteer Your Time</h4>
                                    <p>Help with collection, sorting, and distribution at our centers.</p>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary rounded-full px-8">Get Involved Today</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;