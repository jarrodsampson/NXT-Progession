"use client";

import { useEffect } from "react";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = `Contact - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }, []);

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="text-center my-20">
        <h2 className="text-2xl font-bold my-4">Contact Us</h2>
        <p className="max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        </p>
      </div>
    </div>
  );
};

export default Contact;
