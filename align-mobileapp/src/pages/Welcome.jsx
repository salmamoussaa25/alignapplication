import React from 'react';
import './Welcome.css';
import alignlogo from "../assets/alignlogo.png"

const Welcome = () => {
    return ( 
        <section className='welcomepage_container'>
            <img src={alignlogo} alt="" className='alignwelcomelogo' />
            <div className='welcome_maintextcont'>
                <h1 className='welcome_title'>Welcome to Align</h1>
                <h2 className='welcome_slogan'>Balanced is the New Productive.</h2>
                <h3 className='welcomedescription'>A gentle system designed to support you in building sustainable routines</h3>
            </div>

            
        </section>
     );
}
 
export default Welcome;