import img9 from "../assets/img9.jpg"
import img10 from "../assets/img10.jpg"

const EventsSection = () => {
    return (
       <div className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Upcoming Events</h2>
        <p className="text-center text-xl mb-12">Join us at these upcoming donation drives</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img src={img9} alt="Winter Drive" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Annual Winter Coat Drive</h3>
              <p>December 15, 2023 • 10AM - 4PM</p>
              <p>City Central Plaza</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img src={img10} alt="Sorting Event" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Donation Sorting Day</h3>
              <p>December 18, 2023 • 9AM - 3PM</p>
              <p>Community Center Hall</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Volunteer</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <button className="btn btn-outline btn-primary">View All Events</button>
        </div>
      </div>
    </div>
    );
};

export default EventsSection;