import img from "../assets/img4.jpg"

const VolunteerTestimonials = () => {
    return (
        <div className="py-16 bg-base-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Stories of Warmth</h2>

                <div className="carousel w-full rounded-box">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col md:flex-row gap-8 p-6 bg-base-200 rounded-box">
                            <div className="w-full md:w-1/3">
                                <img src={img} className="rounded-box w-full" alt="Volunteer" />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold mb-4">Sarah's Story</h3>
                                <p className="text-lg italic mb-4">
                                    "I've been volunteering with Winter Warmth for three seasons now. Last year, we helped a family
                                    who had recently arrived from a warmer climate and were completely unprepared for our harsh winter.
                                    Seeing the relief on their faces when we provided proper coats for their children was priceless."
                                </p>
                                <div className="text-sm font-semibold">Sarah Johnson, Volunteer since 2020</div>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            {/* <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a> */}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full py-2 gap-2 mt-6">
                    {/* <a href="#slide1" className="btn btn-xs">1</a>
                    <a href="#slide2" className="btn btn-xs">2</a>
                    <a href="#slide3" className="btn btn-xs">3</a>
                    <a href="#slide4" className="btn btn-xs">4</a> */}
                </div>
            </div>
        </div>
    );
};

export default VolunteerTestimonials;