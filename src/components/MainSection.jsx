import { useState } from 'react';
import donationsData from "../data/donations.json";

const MainSection = () => {
  // Filter winter clothing donations
  const winterDonations = donationsData.filter(campaign => 
    campaign.title.toLowerCase().includes('winter') || 
    campaign.description.toLowerCase().includes('winter')
  );

  // State to track how many items to show
  const [visibleItems, setVisibleItems] = useState(4);
  
  const handleAddToCollection = (campaignId) => {
    console.log(`Added campaign ${campaignId} to collection`);
    alert(`Added winter clothing donation to your collection!`);
  };

  const showMoreItems = () => {
    // Show all items when clicked
    setVisibleItems(winterDonations.length);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Donation Campaigns</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Winter Clothing Donations</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {winterDonations.slice(0, visibleItems).map((campaign) => (
            <div key={campaign.id} className="border rounded-lg overflow-hidden shadow-md relative">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-40 object-cover"
              />
              
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h2 className="font-bold text-lg">{campaign.title}</h2>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                
                <p className="text-gray-500 text-sm mt-1">{campaign.division}</p>
                <p className="my-3">{campaign.description}</p>
                
                <div className="text-sm mb-4">
                  <p>📧 {campaign.contactinfo.split('|')[0].trim()}</p>
                  <p>📞 {campaign.contactinfo.split('|')[1].trim()}</p>
                </div>

                <button 
                  onClick={() => handleAddToCollection(campaign.id)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
                >
                  Add to Collection
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More button (only if there are more items to show) */}
        {visibleItems < winterDonations.length && (
          <div className="text-center mt-6">
            <button 
              onClick={showMoreItems}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Show More Winter Donations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;