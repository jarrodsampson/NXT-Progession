"use client";

import { useEffect } from "react";
import SuperstarList from "../components/superstarList/superstarList";

const Page: React.FC = () => {
  useEffect(() => {
    document.title = `Superstars - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }, []);
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <SuperstarList />
    </div>
  );
};

export default Page;
