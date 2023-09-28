import { Link } from "react-router-dom";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="bg-dragon bg-cover h-full p-1 flex flex-col">
      <h1 className="welcome bg-trgray text-asred font-bold py-16 px-auto mt-[10rem] mb-8 mx-auto text-center rounded-[4rem] w-4/5 max-w-6xl">
        {" "}
        Welcome to Adventshare!{" "}
      </h1>
      <p className="home-text w-4/5 max-w-6xl text-center mx-auto my-10">
        {" "}
        This app was built for TTRPG players and Game Masters to share their
        adventures. Whether it was just a one shot, or a multi-year journey,
        Adventshare is the place to write your final tale...{" "}
      </p>
      <Link
        to="/stories"
        className="bg-asred rounded-full p-3 mx-auto my-20 text-center"
      >
        <button className="allstories-button p-1">View All Stories</button>
      </Link>
    </div>
  );
};

export default Home;
