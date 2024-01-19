import PageLayout from "./pageLayout";
import Mercury from "../../planets/mercury.svg";
import Venus from "../../planets/venus.svg";
import Earth from "../../planets/earth.svg";
import Mars from "../../planets/mars.svg";
import Jupiter from "../../planets/jupiter.svg";
import Saturn from "../../planets/saturn.svg";
import Uranus from "../../planets/uranus.svg";
import Neptune from "../../planets/neptune.svg";

const Planets = () => {
  return (
    <PageLayout>
      <section className="columns-2">
        <section>
          <div className="py-5 flex flex-row items-center">
            <img src={Mercury} className="size-24"></img>
            <span className="text-6xl px-2 font-pacifico">Mercury</span>
          </div>
          <div className="mb-5 flex flex-row items-center">
            <img src={Earth} className="size-24"></img>
            <span className="text-6xl px-2 font-pacifico">Earth</span>
          </div>
          <div className="mb-5 flex flex-row items-center">
            <img src={Jupiter} className="size-24"></img>
            <span className="text-6xl px-2 font-pacifico">Jupiter</span>
          </div>
          <div className="mb-5 flex flex-row items-center">
            <img src={Uranus} className="size-24"></img>
            <span className="text-6xl px-2 font-pacifico">Uranus</span>
          </div>
        </section>
        <section>
          <div className="py-5 flex flex-row items-center">
            <img src={Venus} className="size-24"></img>
            <span className="text-6xl px-2 font-pacifico">Venus</span>
          </div>
          <div className="mb-5 flex flex-row items-center">
            <img src={Mars} className="size-24"></img>
            <span className="text-6xl px-2 font-pacifico">Mars</span>
          </div>
          <div className="mb-5 flex flex-row items-center">
            <img src={Saturn} className="size-24"></img>
            <span className="text-6xl px-2 font-pacifico">Saturn</span>
          </div>
          <div className="mb-5 flex flex-row items-center">
            <img src={Neptune} className="size-24"></img>
            <span className="text-6xl px-2 font-pacifico">Neptune</span>
          </div>
        </section>
      </section>
    </PageLayout>
  );
};

export default Planets;
