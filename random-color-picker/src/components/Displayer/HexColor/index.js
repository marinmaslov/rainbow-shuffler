import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
`;

const Tag = styled.p`
    color: #282828;
    background: #ededed;
    text-direction: center;
    padding: 5px 10px;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: .7em;
    margin: 5px auto;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HexString = styled.h2`
    color: #3c3c3c;
    font-size: 2em;
`;

const ColorCircle = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 20px auto 5px;
`

export default class HexColor extends React.Component {
    render() {
        const { hex } = this.props;
        const color = {
            background: "#" + hex,
        }
        return (
            <Container>
                <Tag>Hex</Tag>
                <ColorCircle style={color}/>
                <SubContainer>
                    <HexString>#{ this.props.hex }</HexString> 
                </SubContainer>
            </Container>
        )
    }
}