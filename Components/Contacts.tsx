import React from "react";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mx-auto">
        Contacts
      </h3>
    </div>
  );
};

export default Contacts;
