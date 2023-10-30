import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dkgray text-spxs w-full py-2 fixed bottom-0 left-0 right-0">
      <div className="flex flex-row w-5/6 mx-auto items-center">
        <div className="text-center w-1/2 mx-auto">
          <span>Image Credits:</span>
          <p className="flex-col md:flex-row flex mt-2">
            <span>
              <a
                className="cursor-pointer"
                href="https://www.freepik.com/free-photo/dragon-middle-mountain-generative-ai_40736269.htm#page=3&query=fantasy%20game&position=5&from_view=keyword&track=ais"
              >
                Dragon Image by kenshinstock,
              </a>{" "}
              &nbsp;
            </span>
            <span>
              <a
                className="cursor-pointer"
                href="https://www.freepik.com/free-ai-image/view-imposing-castle-with-natural-landscape_40572802.htm#fromView=search&term=horizontal+wallpaper+castle+ttrpg&page=1&position=11&track=ais_ai_generated&regularType=ai"
              >
                Castle Image By freepik,
              </a>
              &nbsp;
            </span>
            <span>
              <a
                className="cursor-pointer"
                href="https://www.freepik.com/free-photo/group-people-walking-strange-environment-digital-illustration_14541093.htm#query=adventurers%20going%20on%20a%20quest%20rpg%20game&position=34&from_view=search&track=ais"
              >
                Adventurers Image by liuzishan,
              </a>
              &nbsp;
            </span>

            <span>
              <a
                className="cursor-pointer"
                href="https://www.freepik.com/free-photo/challenger-stands-front-spooky-castle-illustration_14402210.htm#query=challenger-stands-front-spooky-castle-illustration&position=0&from_view=search&track=sph"
              >
                Challenger Image by liuzishan
              </a>
            </span>
          </p>
        </div>

        <div className="text-center w-1/2 mx-auto cursor-pointer">
          <span>
            Designed by{" "}
            <a href="https://github.com/jezraelhope"> Jezrael Hope Magat</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
