import React from 'react';
import styled from 'styled-components';
import MeIMG from '../images/Me.jpg';
import '../App.css';

const Container = styled.div`
  padding: 2rem;
`;

const About = () => (
  <Container>
    <h1>About Me</h1>
    <img id='profilePic' src={MeIMG} alt="Me"/>
    <p>Hello! My name is Raimonds, and this page is all about me.</p>
    <p>I'm a student in RTK studying to be a programmer.<br/>This website is a part of learning task.</p>
  </Container>
);

export default About;
