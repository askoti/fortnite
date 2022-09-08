import axios from "axios";
import React, { useEffect, useState } from "react";
import Daily from "./Daily";
import Featured from "./Featured";
import Special from "./Special";

const ItemShop = () => {
  const url = "https://fortnite-api.com/v2/shop/br";

  const [itemShop, setItemShop] = useState();
  const [loading, setLoading] = useState(true);

  const fetchItemShop = async () => {
    const { data } = await axios.get(url);
    setLoading(false);
    setItemShop(data.data);
  };

  console.log(itemShop);

  useEffect(() => {
    fetchItemShop();
  }, []);

  if (loading === true)
  if (!itemShop) {
    return null;
  }
  var str = itemShop.date;
  var strDate = str.substring(0, 10);

  return (
    <div className="containter mx-auto">
      <div className="flex justify-center text-5xl p-4 text-white font-bold mb-10">
        <h1 className="mx-4 laptop:text-3xl tablet:text-2xl phone:text-xl">Item Shop :</h1>
        <h1 className="laptop:text-3xl tablet:text-2xl phone:text-xl">{strDate}</h1>
      </div>
      <h1 className="text-white desktop:text-4xl laptop:text-4xl tablet:text-3xl font-bold text-center m-4 phone:text-2xl">Featured</h1>
      <Featured iShop={itemShop.vbuckIcon} />
      <h1 className="text-white desktop:text-4xl laptop:text-4xl tablet:text-3xl font-bold text-center m-4 phone:text-2xl">Daily</h1>
      <Daily iShop={itemShop.vbuckIcon} />
      <h1 className="text-white desktop:text-4xl laptop:text-4xl tablet:text-3xl font-bold text-center m-4 phone:text-2xl">Special</h1>
      <Special iShop={itemShop.vbuckIcon}/>
    </div>
  );
};

export default ItemShop;
