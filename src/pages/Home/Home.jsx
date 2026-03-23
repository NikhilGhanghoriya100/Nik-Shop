import React,{useEffect, useState} from 'react'
import Nav from '../../components/Nav/Nav'
import Product from '../../components/Product/Product'
import bg1 from "../../assets/bg1.jpeg"
import bg2 from "../../assets/bg2.jpeg"
import bg3 from "../../assets/bg3.jpeg"
import "./Home.css"
import { category } from '../../category'
import { dummydata } from '../../dummydata'


function Home() {
  let [cate, setCate] =useState(dummydata)
  
  function filterProducts(category){
    const updatedata =  dummydata.filter((item)=>(item.category===category))

    setCate(updatedata)
  }


  const images = [bg1, bg3, bg2];
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  

  return (
    <div className='home'>

      <div className="hero-bg">
      <div className="hero-slider">

        {/* Slider */}
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <img src={img} key={i} alt="hero" />
          ))}
        </div>

        {/* Arrows */}
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>

        {/* Dots */}
        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={current === i ? "dot active" : "dot"}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>

      </div>
    </div>
   
      
      <h1>Categories</h1>
      <div className="category-section">
        {category.slice(0,8).map((item) =>(
          <div className="category-card" onClick={() => {
            filterProducts(item.name)
          }}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      
      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0,8).map((item) => (
          <Product name= {item.name} price = {item.price} image = {item.image} id = {item.id}/>
        ))}
      </div>

    </div>
  )
}

export default Home

