import React from 'react';
import './App.css';
// import './App.jsx';
// import { goToProducts } from "./App.jsx";
// import { useState } from "react";

function AboutUs({ goToProductsParam }) {
    // const [page, setPage] = useState('landing');
    // const goToProducts = () => {setPage('products')};
    return (
        <>
        <div className="background-blur"></div>
        <div className='landingpage'>
            <div className='left-landingpage'>
                <p>Welcome to Paradise Nursery</p>
                <p>------</p>
                <button className='get-start-btn' onClick = {goToProductsParam}>Get Started</button>
            </div>
            <div className='right-landingpage'>
                <p>Welcome to E-PlantShopping, your go-to destination for bringing nature into your home with ease. We offer a carefully curated selection of indoor and outdoor plants, from low-maintenance succulents to vibrant statement pieces, all available at your fingertips. Whether you’re a beginner looking to start your plant journey or a seasoned plant lover expanding your collection, our platform makes it simple to browse, learn, and shop.</p>    
                <p>At E-PlantShopping, we believe plants do more than just decorate a space—they improve well-being, boost mood, and create a calming environment. That’s why we aim to provide not only high-quality plants, but also helpful care tips and guidance to ensure your plants thrive.</p>          
            </div>
        </div>
            
        
        </>
    )

};
export default AboutUs;