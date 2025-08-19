import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const DataCollections = () => {
  const location = useLocation();
  const campaign = location.state?.campaign; // get campaign passed from Link
  const [donationForm, setDonationForm] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    additionalNotes: ""
  });
  const [showToast, setShowToast] = useState(false);

  if (!campaign) {
    return (
      <div className="p-6 text-center text-gray-500">
        No campaign selected.
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonationForm({
      ...donationForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show toast message
    setShowToast(true);
    // Clear form
    setDonationForm({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      additionalNotes: ""
    });
    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        {/* Campaign Details Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="h-64 w-full md:w-96 object-cover md:rounded-l-xl"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{campaign.title}</h2>
              <p className="mt-2 text-gray-600 mb-6">{campaign.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span>{campaign.division}</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>{campaign.contactinfo}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Make a Donation</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity of items
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={donationForm.quantity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 2 jackets, 3 blankets"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="itemType" className="block text-sm font-medium text-gray-700 mb-1">
                  Item type
                </label>
                <select
                  id="itemType"
                  name="itemType"
                  value={donationForm.itemType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select an item type</option>
                  <option value="blanket">Blanket</option>
                  <option value="jacket">Jacket</option>
                  <option value="sweater">Sweater</option>
                  <option value="food">Food</option>
                  <option value="medicine">Medicine</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup location
                </label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={donationForm.pickupLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., House 12, Road 5, Dhamnondi, Dhaka"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional notes (optional)
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={donationForm.additionalNotes}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special instructions or details about your donation"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Donation
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg transition-opacity duration-300">
          Thank you! We will reach your destination soon.
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DataCollections;