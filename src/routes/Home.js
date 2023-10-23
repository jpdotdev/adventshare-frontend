import { Link } from "react-router-dom";

import dragon from "../assets/dragon.jpg";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home flex flex-row">
      <div className="w-1/2 dragon">
        <img src={dragon} alt="" className="object-cover w-[100vw] h-[100vh]" />
      </div>
      <div className="home-text w-3/5 py-16 px-auto mt-20 mx-auto text-center max-w-4xl flex flex-col rounded-[4rem]">
        <h1 className="text-mainHeader font-Cinzel text-hYellow font-bold mb-5">
          {" "}
          Welcome to Adventshare!{" "}
        </h1>
        <p className="text-p1 min-w-[70%] max-w-md text-center mx-auto mb-5 font-Fauna">
          {" "}
          This app was built for TTRPG players and Game Masters to share their
          adventures. Whether it was just a one shot, or a multi-year journey,
          Adventshare is the place to write your final tale...{" "}
        </p>
        <Link
          to="/stories"
          className="bg-asred rounded-full p-3 mx-auto mt-5 text-center"
        >
          <button className="text-buttonMain p-1 font-CinzelDeco">
            View All Stories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
