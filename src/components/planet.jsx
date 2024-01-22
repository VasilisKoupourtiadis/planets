import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import nasaImageIds from "../assets/nasa-image-ids";

const apiKey = import.meta.env.VITE_API_KEY;

const Planet = () => {
  let { planetName } = useParams();
  const [planet, setPlanet] = useState(null);
  const [planetImage, setPlanetImage] = useState(null);

  const imageId = nasaImageIds.get(planetName.toLocaleLowerCase());

  const infoUrl = `https://api.api-ninjas.com/v1/planets?name=${planetName}`;
  const imageUrl = `https://images-api.nasa.gov/asset/${imageId}`;

  useEffect(() => {
    const getPlanetInfo = async () => {
      try {
        await axios
          .all([
            axios.get(infoUrl, {
              headers: {
                "X-Api-Key": apiKey,
              },
            }),
            axios.get(imageUrl),
          ])
          .then(
            axios.spread((info, image) => {
              setPlanet(info.data);
              setPlanetImage(image.data);
            })
          );
      } catch (error) {
        console.error("Error while fetching planet:", error);
      }
    };
    getPlanetInfo();
  }, [imageUrl, infoUrl]);

  return planet && planetImage ? (
    <>
      <p>Info for {planetName}</p>
      <p>Name: {planet[0].name}</p>
      <p className="block">Temperature: {planet[0].temperature}</p>
      <p className="block">Host Star Mass: {planet[0].host_star_temperature}</p>
      <img src={planetImage.collection.items[0].href} className="size-64"></img>
    </>
  ) : (
    <>
      <span>Oops! Looks like something went wrong :(</span>
    </>
  );
};

export default Planet;
