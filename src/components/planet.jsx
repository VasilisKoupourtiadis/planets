import { useParams } from "react-router-dom";

const Planet = () => {
  let { planet } = useParams();

  return (
    <>
      <p>Info for {planet}</p>
    </>
  );
};

export default Planet;
