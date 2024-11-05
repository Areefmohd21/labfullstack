// pages/Home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is a protected page accessible after login.</p>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div><img src="https://images.pexels.com/photos/12904838/pexels-photo-12904838.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 1" /></div>
                <div><img src="https://images.pexels.com/photos/28905425/pexels-photo-28905425/free-photo-of-charming-spanish-architecture-in-sunlit-alley.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 2" /></div>
                <div><img src="https://images.pexels.com/photos/22719433/pexels-photo-22719433/free-photo-of-analog-camera-lying-in-front-of-a-computer-keyboard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 3" /></div>
                <div><img src="https://images.pexels.com/photos/17504247/pexels-photo-17504247/free-photo-of-bag-and-book-with-poems-on-picnic-blanket.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 4" /></div>
            </Carousel>
        </div>
    );
}

export default Home;
