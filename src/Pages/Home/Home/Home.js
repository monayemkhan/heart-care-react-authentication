import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;