"use client";

import SuperstarList from "./components/superstarList";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <SuperstarList />
    </div>
  );
};

export default Home;
