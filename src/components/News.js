import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const News = () => {
  const url = "https://fortnite-api.com/v2/news";

  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    const { data } = await axios.get(url);
    setLoading(false);
    setNews(data.data);
  };

  console.log(news);

  useEffect(() => {
    fetchNews();
  }, []);

if (loading === true) {
    return(
      <Loading />
    )
  }

  if (!news) {
    return null;
  }

  return (
    <div className="news">
        <div className="br">
            <h1 className="desktop:text-5xl laptop:text-4xl mb-12 text-center my-6 font-bold text-white tablet:text-3xl phone:text-2xl">Battle Royale News</h1>
            <div className="new">
                {news.br.motds.map((news, index) => {
                  const {title, body, image} = news
                    return(
                        <div className="container mx-auto my-4 mb-10" key={index}>
                            <img src={image} alt={title} width='100%' className="rounded"/>
                            <div className="p-5 text-1xl text-white bg-neutral-800 rounded desktop:text-1xl laptop:text-xl tablet:text-xl phone:p-2">
                              <h3 className="text-2xl desktop:text-3xl laptop:text-3xl tablet:text-1xl phone:text-lg">{title}</h3>
                              <p className="desktop:text-xl laptop:text-xl tablet:text-lg phone:text-lg">{body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div><br /><br />
        <div className="stw">
            <h1 className="desktop:text-5xl laptop:text-4xl mb-12 text-center my-6 font-bold text-white tablet:text-3xl phone:text-2xl">Save the World News</h1>
            <div className="new">
                {news.stw.messages.map((news, index) => {
                  const {title, body, image} = news
                    return(
                        <div className="container mx-auto my-4 mb-10" key={index}>
                            <img src={image} alt={title} width='100%' className="rounded"/>
                            <div className="p-5 text-1xl text-white bg-neutral-800 rounded desktop:text-1xl laptop:text-xl tablet:text-xl phone:p-2">
                              <h3 className="text-2xl desktop:text-3xl laptop:text-3xl tablet:text-1xl phone:text-lg">{title}</h3>
                              <p className="desktop:text-xl laptop:text-xl tablet:text-lg phone:text-lg">{body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
};

export default News;
