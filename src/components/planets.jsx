import PageLayout from "./pageLayout";
import Mercury from "../../planets/mercury.svg";
import Venus from "../../planets/venus.svg";
import Earth from "../../planets/earth.svg";
import Mars from "../../planets/mars.svg";
import Jupiter from "../../planets/jupiter.svg";
import Saturn from "../../planets/saturn.svg";
import Uranus from "../../planets/uranus.svg";
import Neptune from "../../planets/neptune.svg";
import { Link } from "react-router-dom";

const Planets = () => {
  return (
    <PageLayout>
      <section
        className="flex items-center justify-center"
        id="planetsContainer"
      >
        <div className="columns-2 gap-16 text-white">
          <section>
            <Link to={"/neptune"}>
              <div className="py-5 flex flex-row items-center justify-end">
                <img src={Neptune} className="size-24"></img>
                <span className="text-6xl px-2 font-pacifico">Neptune</span>
              </div>
            </Link>
            <Link to={"/saturn"}>
              <div className="mb-5 flex flex-row items-center justify-end saturn">
                <img src={Saturn} className="size-24"></img>
                <span className="text-6xl px-2 font-pacifico">Saturn</span>
              </div>
            </Link>
            <Link to={"/jupiter"}>
              <div className="mb-5 flex flex-row items-center justify-end jupiter">
                <img src={Jupiter} className="size-24"></img>
                <span className="text-6xl px-2 font-pacifico">Jupiter</span>
              </div>
            </Link>
            <Link to={"/uranus"}>
              <div className="mb-5 flex flex-row items-center justify-end uranus">
                <img src={Uranus} className="size-24"></img>
                <span className="text-6xl px-2 font-pacifico">Uranus</span>
              </div>
            </Link>
          </section>
          <section>
            <Link to={"/mercury"}>
              <div className="py-5 flex flex-row items-center">
                <img src={Mercury} className="size-24"></img>
                <span className="text-6xl px-2 font-pacifico">Mercury</span>
              </div>
            </Link>
            <Link to={"/venus"}>
              <div className="mb-5 flex flex-row items-center">
                <img src={Venus} className="size-24"></img>
                <span className="text-6xl px-2 font-pacifico">Venus</span>
              </div>
            </Link>
            <Link to={"/earth"}>
              <div className="mb-5 flex flex-row items-center">
                <img src={Earth} className="size-24"></img>
                <span className="text-6xl px-2 font-pacifico">Earth</span>
              </div>
            </Link>
            <Link to={"/mars"}>
              <div className="mb-5 flex flex-row items-center">
                <img src={Mars} className="size-24"></img>
                <span className="text-6xl px-2 font-pacifico">Mars</span>
              </div>
            </Link>
          </section>
        </div>
      </section>
    </PageLayout>
  );
};

export default Planets;
