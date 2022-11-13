import React from "react";
import ContractorForm from "components/ContractorForm";

const AddContractor = () => {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"></div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-6">
            <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
              <ContractorForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContractor;
