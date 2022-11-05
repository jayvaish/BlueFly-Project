import React from 'react';
import { Container , Offer  } from './Signup';
import { useState, useEffect } from 'react';
import "./Signup.css";

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


// const BelowData = [
//   {
//     id: 1,
//     image:
//       "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/denim_900x.jpg?v=1615204984",
//     disp: "UP TO 85% OFF THE DENIM SHOP FOR HIM & HER",
//     short: "From Hudson Jeans, Joe's Jeans, J Brand & More",
//     btn: "SHOP DENIM",
//   },
//   {
//     id: 2,
//     image:
//       "	https://cdn.shopify.com/s/files/1/0248/3473/6191/files/lightweight_jackets_900x.jpg?v=1630509164",
//     disp: "UP TO 80% OFF LIGHTWEIGHT JACKETS & COATS",
//     short: "Must-Haves From Cole Haan, Burberry, & More",
//     btn: "SHOP OUTWEAR",
//   },
//   {
//     id: 2,
//     image:
//       "	https://cdn.shopify.com/s/files/1/0248/3473/6191/files/accesories_900x.jpg?v=1630509636",
//     disp: "UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES",
//     short: "Shop Wallets, Belts, Hats, Sunglasses & More",
//     btn: "SHOP WOMAN'S ACCESSORIES",
//   },
// ];
const Heading = styled.h1`
   font-family: Tiemann ,serif;
    font-weight: 500;
    letter-spacing: 0em;
    line-height: 1;
    font-size: 37px;
    text-transform: uppercase;
    display: block;
    margin: 19px;
    margin-left: 38%;
`
const Sub = styled.div`
display: flex;
text-align: center;
margin-top: 20px;
`
const Button = styled.button`
    height:45px;
    width:99%;
    margin-top: 1%;
    padding: 8px 10px;
    background-color: black;
    letter-spacing: 0.35em;
    color:white;
    font-weight: bolder;
    cursor: pointer;
`
const Inputitem = styled.div`

  height:560px;
  width:450px;
  margin-top: 40px;
  margin-left: 34%;
`
const slideData = [
  {
      title:"WELCOME TO BLUEFLY : Luxury brands at discounted prices"
  },
  {
      title:"FREE SHIPPING On Orders Over $99"
  },
  {
      title:"Designer fashion upto 70% off"
  }
]


const Register = () => {
  const [currentSlide , setCurrentSlide] = useState(0);
  const [check , setCheck] = useState({
    email:"",
    pass:""
  });
  const navigate = useNavigate();
  const slideLength = slideData.length;


  const handleChange=(e)=> {
    setCheck({
      ...check,[e.target.id]:e.target.value
    });
  }

  const handleSubmit =(e)=> {
    e.preventDefault();
    if(check.email === "" || check.pass === ""){
      alert("Please fill all details...")
    }
    else{
      //console.log(check);
      localStorage.setItem("auth", JSON.stringify(check));
      navigate("/signin")
    }
  }
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength-1 ? 0 : currentSlide+1);
  }

  function auto() {
    slideInterval = setInterval(nextSlide,intervalTime);
  }
 useEffect(()=> {
   if(autoScroll){
     auto();
   }
   return () => clearInterval(slideInterval);

 },[currentSlide])

  return (
    <div className="register-page" style={{ marginTop: "30px" }}>
      <Container className="slide">
        {slideData.map((slide, index) => {
          return (
            <div key={index}>
              {index === currentSlide && (
                <>
                  <p className="item">{slide.title}</p>
                </>
              )}
            </div>
          );
        })}
      </Container>

      <h1 style={{ fontSize: "50px" }}>CREATE ACCOUNT</h1>
      <Inputitem>
        <div>
          <label className="l1" style={{ marginLeft: "-360px" }}>
            FIRST NAME
          </label>
          <br />
          <input type="text" className="input1" />
        </div>
        <div className="pass">
          <label className="l1" style={{ marginLeft: "10px" }}>
            LAST NAME
          </label>
        </div>

        <input type="text" className="input1" />

        <div className="wap">
          <label className="l1" style={{ marginLeft: "-390px" }}>
            EMAIL
          </label>
          <br />
          <input
            type="email"
            className="input1"
            id="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="pass1">
          <label className="l1" style={{ marginLeft: "10px" }}>
            PASSWORD
          </label>
        </div>

        <input
          type="password"
          className="input1"
          id="pass"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Sub>
          <p style={{ marginLeft: "-33px" }}>
            <input type="checkbox" id="cb" />
            Subscribe to stay updated with new offers!
          </p>
        </Sub>
        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          CREATE
        </Button>
        <br />
      </Inputitem>
    </div>
  );
}

export default Register