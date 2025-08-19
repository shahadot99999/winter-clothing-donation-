

const ImpactStats = () => {
    return (
        <div className="py-16 bg-base-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="stats shadow bg-base-100 text-center">
                        <div className="stat">
                            <div className="stat-value text-secondary">5,000+</div>
                            <div className="stat-desc">Coats Donated</div>
                        </div>
                    </div>

                    <div className="stats shadow bg-base-100 text-center">
                        <div className="stat">
                            <div className="stat-value text-accent">2,500+</div>
                            <div className="stat-desc">Families Helped</div>
                        </div>
                    </div>

                    <div className="stats shadow bg-base-100 text-center">
                        <div className="stat">
                            <div className="stat-value text-primary">15</div>
                            <div className="stat-desc">Communities Served</div>
                        </div>
                    </div>

                    <div className="stats shadow bg-base-100 text-center">
                        <div className="stat">
                            <div className="stat-value text-secondary">10K+</div>
                            <div className="stat-desc">Winter Items Collected</div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <button className="btn btn-outline btn-primary">See Full Impact Report</button>
                </div>
            </div>
        </div>
    );
};

export default ImpactStats;