import { Link } from "react-router-dom";

import "../styles/home.css";
import dragon from "../assets/dragon.jpg";

const Home = () => {
  return (
    <div className="flex flex-row">
      <img src={dragon} alt="" className="w-1/2" />
      <div className="w-3/5  py-16 px-auto mt-12 mb-8 mx-auto text-center rounded-[4rem]  max-w-4xl">
        <h1 className="welcome text-asred font-bold px-4 mt-4">
          {" "}
          Welcome to Adventshare!{" "}
        </h1>
        <p className="home-text w-4/5 max-w-6xl text-center mx-auto my-10 font-CinzelDeco">
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
    </div>
  );
};

export default Home;
