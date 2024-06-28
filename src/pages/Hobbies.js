import React from 'react';
import styled from 'styled-components';
import BikeIMG from '../images/Bike.jpg';
import GamingIMG from '../images/Gaming.png';
import ProgrammingIMG from '../images/Programming.png';
import '../App.css';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hobby = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Hobbies = () => (
  <Container>
    <h1>My Hobbies</h1>
    <Hobby>
      <img className='hobbieIMG' src={BikeIMG} alt="Sport" />
      <p>I like sports.<br/>Espesally riding my bike.</p>
    </Hobby>
    <Hobby>
      <img className='hobbieIMG' src={GamingIMG} alt="Gaming" />
      <p>I like to play video games in my free time.<br/>Racing games the most engaging for me.</p>
    </Hobby>
    <Hobby>
      <img className='hobbieIMG' src={ProgrammingIMG} alt="Programming" />
      <p>I also like to programm in my free for school and ofr my self.<br/>I mostly like to design apps for automating tasks formyself.</p>
    </Hobby>
  </Container>
);

export default Hobbies;
