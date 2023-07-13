import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Box, CardContent} from '@mui/material';

//import {useNavigate} from 'react-router-dom';
//import { Button } from '@mui/material';
import Card from 'react-bootstrap/Card';
export const Home = () => {
    

  return (
    <>
        
        <div className='headline'>
              Let's Decore Our Home
        </div>



   
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="slide"
              src="https://burst.shopifycdn.com/photos/cozy-livingroom-with-window.jpg?&format=pjpg&exif=1&iptc=1"
              alt="First slide"
             
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="slide"
              src="https://burst.shopifycdn.com/photos/perfect-morning-patio.jpg?&format=pjpg&exif=1&iptc=1"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide"
              src="https://burst.shopifycdn.com/photos/cozy-livingroom-with-window.jpg?&format=pjpg&exif=1&iptc=1"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        
       

    </>
  )
}
export default Home;


