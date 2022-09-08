import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
const Cosmetics = () => {
  const url = "https://fortnite-api.com/v2/cosmetics/br/new";

  const [cosmetics, setCosmetics] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCosmetics = async () => {
    const { data } = await axios.get(url);
    setLoading(false);
    setCosmetics(data.data);
  };

  console.log(cosmetics);

  useEffect(() => {
    fetchCosmetics();
  }, []);

  if (loading === true) {
    return(
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          <Loading />
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto text-white inline">
      <div className="flex flex-row flex-wrap justify-center">
        {cosmetics.items.map((item) => {
            const {name, images, rarity, type} = item
            return(
                <div className="desktop:w-72 laptop:w-72 tablet:w-72 phone:w-82 m-7 h-auto">
                  <div>
                  <img src={images.featured === null ? images.icon : images.featured} alt='pic' className="rounded w-72" />
                  </div>
                  <div className="text-lg bg-neutral-800 rounded p-3 pb-1 text-center">
                    <h1>{name === 'null' ? 'No Name' : name}</h1>
                    <p>{type.displayValue === 'null' ? 'No type' : type.displayValue}</p>
                    {/* <h4>{description === 'null' ? 'No desciption' : description}</h4> */}
                    <p>Rarity: {rarity.displayValue}</p>
                  </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Cosmetics;
