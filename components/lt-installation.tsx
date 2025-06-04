import React from "react";

const LTInstallation = () => {
  return (
    <div className=" px-4 py-10 w-full text-gray-800">
      <div className=" space-y-8">
        <h1 className="text-2xl font-bold text-gray-800">
          LT Installation:-
        </h1>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            Services Offered:-
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-800">
            <li>Design of wiring methods</li>
            <li>Assistance in choosing right luminaries</li>
            <li>Internal wiring Including MCBs, MCCBs</li>
            <li>Provide adequate Protective devices</li>
            <li>Load audits</li>
            <li>Code compliance</li>
            <li>Electrical service upgrades and repairs</li>
            <li>Complete electrical services</li>
            <li>Indoor and outdoor lighting</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-600">Market:-</h2>
          <div className="mt-2 space-y-1 text-sm text-gray-600">
            <p>Offices</p>
            <p>Interior & Exterior Lightings</p>
            <p>
              Plant lighting works
              <span className="ml-1">Speciality Lighting</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LTInstallation;
