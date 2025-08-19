import { useState } from 'react';
import donationsData from "../data/donations.json";
import { Link } from 'react-router-dom';

const MainSection = () => {
  const winterDonations = donationsData.filter(campaign => 
    campaign.title.toLowerCase().includes('winter') || 
    campaign.description.toLowerCase().includes('winter')
  );

  const [visibleItems, setVisibleItems] = useState(6);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Winter Donation Campaigns</h1>
      
      <div className="mb-8">
        
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

                {/* Pass campaign as state */}
                <Link 
                  to="/datacollection" 
                  state={{ campaign }}
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors text-center"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
