import React from 'react'
import styled from 'styled-components';

const Header = styled.header
`
max-width:70rem;
margin:2rem auto;
text-align:center;
`;

const h1 = styled.header
`
font-family:'Oswald',sans-serif;
margin-bottom:1em;  


`;

const Heading = () => {
    return (
        <Header>
        <div>
            <h1 style={{ color: 'blue' }}>Gallery</h1>
        </div>
        </Header>
    )
}

export default Heading;