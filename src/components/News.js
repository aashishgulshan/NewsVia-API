import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { GiArmoredBoomerang } from 'react-icons/gi';

import Loading from './Loading';

const News = ({cat}) => {
  const [Data, setData] = useState("");
  console.log(cat);
  const fetchNews = async () =>{
    await axios.get(
      cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=d4bcce6bf37d4946b1e6a8c8d4eed362`
      
      : "https://newsapi.org/v2/top-headlines?country=in&apiKey=d4bcce6bf37d4946b1e6a8c8d4eed362"
    ).then((res)=> setData(res.data.articles));
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(() =>{
     window.location.reload(); 
    }, 6000);
    return () => clearInterval(interval);
    
    // console.log("Useeffect Called");
    }, [cat]);

  return (
    <div className=' container my-5 px-5'>
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
      {Data ? Data.map((items)=>(
    <>
      <div className='shadow-lg ring-1 ring-gray-300 rounded-lg flex-wrap'>
              <img className='rounded-t-lg' src={!items.urlToImage 
                ? "https://images.hindustantimes.com/img/2022/06/15/1600x900/AFP_9BX2L6_1623489835537_1655275114928.jpg"
                : items.urlToImage} max-width={360} alt="Not able to load Image"/>
              <h2 className='text-violet-700 p-1 font-semibold font-serif text-xl '>{items.title}</h2>
              <p className=' text-amber-500 ml-1 font-mono'>Published Date:{items.publishedAt.substring(0,10)}</p>
              <a className=' hover:text-sky-600' href={items.url} target='_blank'><p className='p-1'>{items.content}</p></a>
              <a href={items.url} target="_blank" className=' m-1 font-bold text-red-800'>View More...</a>
            </div>
    </>
    ))
    : <Loading/>}
    </div>
  </div>
  )
}

export default News;