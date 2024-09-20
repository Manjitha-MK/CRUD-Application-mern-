import React, { useEffect } from 'react';
import Nav from '../Nav/Nav'
import './home.css'

const Home = () => {

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
  return (
    <>
     <Nav />
     <div className="home-background">
       
       <h1 className='homeh1'>Wellcome To Crud Application</h1>
     </div>
    </>
   
  )
}

export default Home

