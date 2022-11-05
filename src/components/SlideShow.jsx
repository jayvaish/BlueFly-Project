import React from "react";
import Carousel from "react-bootstrap/Carousel";

function SlideShow1(){
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Prada_1944x.jpg?v=1630505683&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontSize: "60px" }}>FARADA UPTO 75% OFF</h1>
          <p style={{ fontSize: "20px" }}>
            AN ITALIAN FASHION HOUSE MADE WITH CLASSIC AND ECCENTRIC STYLE
          </p>
          <button
            style={{ color: "black", backgroundColor: "white", padding: "5px" }}
          >
            SHOP NOW
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/saint_laurent_3_1944x.jpg?v=163050858&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontSize: "60px" }}>LUXE HANDBAGS UPTO 75% OFF</h1>
          <p style={{ fontSize: "20px" }}>
            Styles from Gucci,Prada,Saint Laurent,Bottega Venitta , Fendi & More
          </p>
          <button
            style={{ color: "black", backgroundColor: "white", padding: "5px" }}
          > SHOP HANDBAGS NOW
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/sunglasses1_1944x.jpg?v=1615211259&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontSize: "60px" }}>ICONIC SUNGLASSES UPTO 80% OFF</h1>
          <p style={{ fontSize: "20px" }}>
            Featuring Dior , Tom Ford , Fendi And More{" "}
          </p>
          <button
            style={{ color: "black", backgroundColor: "white", padding: "5px" }}
          >
            SHOP WOMEN'S SUNGLASSES
          </button>
          <br />
          <br />
          <button
            style={{ color: "black", backgroundColor: "white", padding: "5px" }}
          >
            SHOP MENS'S SUNGLASSES
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default SlideShow1;



export function SlideShow2() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="https://wallpaperaccess.com/full/4620254.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontSize: "60px" }}>FARADA UPTO 75% OFF</h1>
          <p style={{ fontSize: "20px" }}>
            AN ITALIAN FASHION HOUSE MADE WITH CLASSIC AND ECCENTRIC STYLE
          </p>
          <button
            style={{ color: "black", backgroundColor: "white", padding: "5px" }}>
            SHOP NOW
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="https://static.fibre2fashion.com/articleresources/images/70/6921/what-makes-celebrity-apparel-big.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 style={{ fontSize: "60px" }}>LUXE HANDBAGS UPTO 75% OFF</h1>
          <p style={{ fontSize: "20px" }}>
            Styles from Gucci,Prada,Saint Laurent,Bottega Venitta , Fendi & More
          </p>
          <button
            style={{ color: "black", backgroundColor: "white", padding: "5px" }}
          >
            SHOP HANDBAGS NOW
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_17/1867369/mothers-day-jewelry-vl-2x1-220429.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontSize: "60px" }}>ICONIC SUNGLASSES UPTO 80% OFF</h1>
          <p style={{ fontSize: "20px" }}>
            Featuring Dior , Tom Ford , Fendi And More{" "}
          </p>
          <button
            style={{ color: "black", backgroundColor: "white", padding: "5px" }}
          >
            SHOP WOMEN'S SUNGLASSES
          </button>
          <br />
          <br />
          <button
            style={{ color: "black", backgroundColor: "white", padding: "5px" }}
          >
            SHOP MENS'S SUNGLASSES
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

