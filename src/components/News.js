import React, {useState,useEffect} from 'react';
import axios from 'axios';
// import { FcShare, FcLike, FcReading, FcAdvance} from 'react-icons/fc';
import Loading from './Loading';

const News = ({cat}) => {
  const [Data, setData] = useState("");
  console.log(Data);
  const fetchNews = async () =>{
    await axios.get(
      cat ? `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&category=${cat}&max=10&apikey=a14009d402499c13aade4df186ed8c02
      `
      
      : "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=a14009d402499c13aade4df186ed8c02"
    ).then((res)=> setData(res.data.articles));
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(() =>{
     window.location.reload(); 
    }, 6000000);
    return () => clearInterval(interval);
    
    // console.log("Useeffect Called");
  // console.log(Data);

    }, [cat]);


  return (
    <div className="p-5 bg-gradient-to-r from-fuchsia-200 to-cyan-200">
      <div className='max-w-4xl lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-4'>
          {Data ? Data.map((items)=>(
          <div className='shadow-lg rounded-lg hover:scale-105 flex-wrap bg-white'>
            <div class="h-26 w-full overflow-hidden">
              <img className='min-h-26 w-full rounded-t-lg overflow-hidden' src={!items.image
                ? "https://images.hindustantimes.com/img/2022/06/15/1600x900/AFP_9BX2L6_1623489835537_1655275114928.jpg"
                : items.image} alt="Not able to load Image"/>
            </div>
            <div class="text-sm text-gray-500 m-2">{items.publishedAt.substring(0,10)}</div>
            <div class="font-bold text-lg leading-snug text-black m-2"> {items.title.substring(0, 70)} </div>
            <div class="text-gray-500 m-2 text-sm">
              <a href={items.url} target='_blank'>{items.description.substring(0, 200)}</a>
            </div>
            
          </div>
        ))
        : <>
        
        <Loading/>
        </>}
      </div>
    </div>
  )
}

export default News;