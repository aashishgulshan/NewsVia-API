import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Loading from './Loading';

const News = ({cat}) => {
  const [Data, setData] = useState("");
  console.log(cat);
  const fetchNews = async () =>{
    await axios.get(
      cat ? `https://gnews.io/api/v4/top-headlines?category=${cat}&lang=en&country=in&max=10&apikey=45f17dd78f9edd709fcc5609995d63db`
      
      : "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=45f17dd78f9edd709fcc5609995d63db"
    ).then((res)=> setData(res.data.articles));
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(() =>{
     window.location.reload(); 
    }, 60000);
    return () => clearInterval(interval);
    
    // console.log("Useeffect Called");
    }, [cat]);

  return (
    <div className=' container'>
      <div className='min-h-[100vh] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
        {Data ? Data.map((items)=>(
      <>
        <div className='container shadow-2xl rounded-xl p-1 flex-wrap'>
                <img className='rounded-xl p-1' src={items.image} max-width={360} alt="Unable to Load Images"/>
                <h2 className='font-bold text-xl'>{items.title}</h2>
                <p className='m-1 text-justify'>{items.description}</p>
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