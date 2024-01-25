import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import getImageUrl from "../getImageUrl.js";

const apiKey = import.meta.env.VITE_API_KEY;

const Planet = () => {
  let { planetName } = useParams();
  const [planet, setPlanet] = useState(null);

  const infoUrl = `https://api.api-ninjas.com/v1/planets?name=${planetName}`;

  useEffect(() => {
    const getPlanetInfo = async () => {
      try {
        const response = await axios.get(infoUrl, {
          headers: {
            "X-Api-Key": apiKey,
          },
        });
        setPlanet(response.data);
      } catch (error) {
        console.error("Error while fetching planet:", error);
      }
    };
    getPlanetInfo();
  }, [infoUrl]);

  const convertToLocaleString = (string) => {
    if (string.toLowerCase() === "temp") {
      const temp = planet[0].temperature - 273.15;
      const fixedTemp = temp.toFixed(1);
      return Number(fixedTemp).toLocaleString();
    } else if (string.toLowerCase() === "dist") {
      const distance = planet[0].distance_light_year * 9460730472580;
      const fixedDistance = distance.toFixed(1);
      return Number(fixedDistance).toLocaleString();
    }
  };

  return planet ? (
    <>
      <div className="flex items-center justify-center" id="planetContainer">
        <section className="text-white w-1/2 flex flex-row justify-between items-center">
          <section className="w-1/2 flex justify-center flex-col">
            <span className="block font-mono text-3xl">
              Name: {planet[0].name}
            </span>
            <span className="block font-mono text-3xl">
              Mass: {planet[0].mass}
            </span>
            <span className="block font-mono text-3xl">
              Radius: {planet[0].radius}
            </span>
            <span className="block font-mono text-3xl">
              Period: {planet[0].period}
            </span>
            <span className="block font-mono text-3xl">
              Semi Major Axis: {planet[0].semi_major_axis}
            </span>
            <span className="block font-mono text-3xl">
              Temperature(C): {convertToLocaleString("temp")}
            </span>
            <span className="block font-mono text-3xl">
              Distance(Km):{convertToLocaleString("dist")}
            </span>
            <span className="block font-mono text-3xl">
              Host Star Mass: {planet[0].host_star_mass}
            </span>
            <span className="block font-mono text-3xl">
              Host Star Temperature(C):{" "}
              {planet[0].host_star_temperature - 273.15}
            </span>
          </section>
          <section className="w-1/2 flex justify-center">
            <img src={getImageUrl(planetName)} className="planetSize"></img>
          </section>
        </section>
      </div>
    </>
  ) : (
    <>
      <span>Oops! Looks like something went wrong :(</span>
    </>
  );
};

export default Planet;
