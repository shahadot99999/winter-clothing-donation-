import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const DataCollections = () => {
  const location = useLocation();
  const campaign = location.state?.campaign; // get campaign passed from Link

  if (!campaign) {
    return (
      <div className="p-6 text-center text-gray-500">
        No campaign selected.
      </div>
    );
  }

  return (
    
    <div className="  ">

      <Navbar></Navbar>

      <div className=" w-11/12 mx-auto pt-5 shadow-lg rounded-2xl overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-96 h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{campaign.title}</h2>
          <p className="text-gray-600 mb-3">{campaign.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{campaign.division}</span>
          </div>
          <p className="mt-3 text-sm text-gray-700">
            📞 {campaign.contactinfo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataCollections;
