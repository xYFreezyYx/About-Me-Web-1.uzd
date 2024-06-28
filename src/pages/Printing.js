import React from 'react';
import styled from 'styled-components';
import '../App.css';

const Container = styled.div`
  padding: 2rem;
`;

const Printing = () => (
  <Container>
    <h1>3D Printing</h1>
    <p>One of my passions is 3D printing.<br/>Here are some of the things I have 3D printed:</p>
    <div id='imgGrid'>
    <img className='printIMG' src='https://lh3.googleusercontent.com/pw/AP1GczMFQdBcrYr_6meE3Brnv3p4NcYcrlGzHYEp2Ep8xvkVOd8IgxIgjlzEVZSVgnUYhLePFU1IzAl_tG7c9XvvLZy1InGQR8uTNpw3Bsqu-Y3eUS2SqHgURoWzj87FtO4gr-Kn9nA2TzAtNCfOUzGkY4js=w1187-h1187-s-no-gm?authuser=0' alt='3D Print' />
    <img className='printIMG' src='https://lh3.googleusercontent.com/pw/AP1GczN4wqpmawR3WwaynUmZczK8RusBM8exyAjDcByCh_WiK3iU9KqpsdrPrfR2ynsF532pr80qb4EXjHw9EIiHur05uHua9M4pICVPK6Hpke67d6Ul6uZbgramLTS6MEJp7hBHqnzBuo0HCrFFyP2Nf38u=w1187-h1187-s-no-gm?authuser=0' alt='3D Print' />
    <img className='printIMG' src='https://lh3.googleusercontent.com/pw/AP1GczOpCzOVipx2QFYjz__QxrctRCUxFAV7cpSlZxm6EqKBbGT3sRAkhbJaouNGvVvx-a9KjIT3JCS7QJ8xWAdI5wjYdn_bRI7J1UH9ksIft5Kacw46ayqNRIdQ2wl85AiOiganjyrlCZN6-StlPiCtl3og=w1187-h1187-s-no-gm?authuser=0' alt='3D Print' />
    <img className='printIMG' src='https://lh3.googleusercontent.com/pw/AP1GczPdgeWOuRnWNTD9n6qE_tMKp1zMa-HLVdj-m6np_DuoPa4Prsz8ZBdtrR39TuxbrusoBLWFlKlnmDA2aJLBNDAq3li8UPmcVwiQIiIuD6JiBNpQYmjjIVp6MnsxbOZsAAcxKUBs744M-X2N0cFk4IJT=w1187-h1187-s-no-gm?authuser=0' alt='3D Print' />
    <img className='printIMG' src='https://lh3.googleusercontent.com/pw/AP1GczPKWNqcdyXiuPBtEgkzanF6HdVbz4DAryERk2vCHcywg6E61EI-_VLVFDkLKFfEKjNI-9OR1wJcII1scOhszFdSlZtkpPQWrsPw3idBFhiEvDJNoXB8bgTnI3Gk7EeTV7jm2dDKSQEmpOY_Z3DqgS67=w1187-h1187-s-no-gm?authuser=0' alt='3D Print' />
    </div>
  </Container>
);

export default Printing;
