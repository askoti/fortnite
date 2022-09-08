import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
const Special = ({iShop}) => {
    const url = "https://fortnite-api.com/v2/shop/br";

    const [itemShop, setItemShop] = useState();
    const [loading, setLoading] = useState(true);
  
    const fetchItemShop = async () => {
      const { data } = await axios.get(url);
      setLoading(false);
      setItemShop(data.data.specialFeatured.entries);
    };
  
    console.log(itemShop);
  
    useEffect(() => {
      fetchItemShop();
    }, []);
  
  if (loading === true) {
    return(
      <Loading />
    )
  }
    if (!itemShop) {
      return null;
    }


    return (
      <div className="mx-auto text-white flex flex-row flex-wrap justify-center">
        {itemShop.map((item, index) => {
          const { bundle, finalPrice, regularPrice, items } = item;
          const {images, name, rarity} = items[0]
          return (
            <div key={index}>
              {bundle === null ? (
                       <div className="desktop:w-auto h-auto p-4 m-4" >
                           <div>
                             <img src={images.featured === null ? images.icon : images.featured} alt='pic' className="rounded w-72" />
                           </div>
                           <div className="text-center text-xl bg-neutral-800 rounded p-3 pb-1">
                             <h1 className="mb-1">{name}</h1>
                             <h2 className="mb-1">Rarity: {rarity.displayValue}</h2>
                               <div className="flex justify-center mb-6">
                                 <h1 className="align-center m-1 mr-0 ">{finalPrice}</h1>
                                 <img src={iShop} alt="vbucks" className="w-9" />
                               </div>
                           </div>
                       </div>
              ) : (
                <div className='m-4 w-screen p-12 h-auto rounded-xl'> 
                <br />
                <br />
                <div className="text-white w-full text-center flex justify-around desktop:text-2xl laptop:text-1xl tablet:text-base phone:text-sm phone:p-8 align-center bg-neutral-800 p-10 mb-5 rounded font-semibold">
                  <h1 className="">{bundle.name}</h1>
                  <div className={regularPrice === null ? 'hidden' : 'flex justify-center'}>
                    <h1 className="mx-2 desktop:inline laptop:inline tablet:inline phone:hidden">From</h1>
                    <h1 className="desktop:inline laptop:inline tablet:inline phone:hidden">{regularPrice}</h1>
                    <h1 className="desktop:inline laptop:inline tablet:inline phone:hidden">
                      <img src={iShop} alt="vbucks" className="desktop:w-8 laptop:w-7 tablet:w-7 phone:w-5 align-middle"/>
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <h1 className={regularPrice === null ? 'hidden' : 'inline mx-2 desktop:inline laptop:inline tablet:inline phone:hidden'}>To</h1>
                    <h1 className="align-center ">{finalPrice}</h1>
                    <h1>
                      <img src={iShop} alt="vbucks" className="desktop:w-8 laptop:w-7 tablet:w-7 phone:w-5" />
                    </h1>
                  </div>
                  <h4>{bundle.info.substring(0, 6)}s</h4>
                </div>
                <div className="img">
                  <img src={bundle.image} alt="" className="w-fit rounded mx-auto object-cover" />
                </div>
              </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

export default Special