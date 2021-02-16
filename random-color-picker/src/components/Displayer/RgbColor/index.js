import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100px;
  margin: 10px 0 40px;
`

const Tag = styled.p`
    color: #282828;
    background: #ededed;
    text-direction: center;
    padding: 5px 10px;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: .7em;
    margin: 5px auto;
`

const RgbContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`

const RgbComponent = styled.div`
    color: #282828;
    &:nth-child(2n) {
        padding: 10px;
        border: 2px solid #e4e4e4;
        border-radius: 10px;
        background: #f8f8f8;
        margin: 5px 20px 5px 5px;
        min-width: 40px;
        text-align: center;
    }
    &:nth-child(2n-1)  {
        padding: 13px 0;
        margin: 5px 0px;
        font-size: .8em;
    }
    &:last-child {
        margin-right: 0px;
    }
`

export default class RGBColor extends React.Component {
    render() {
        return (
            <Container>
                <Tag>RGB</Tag>
                <RgbContainer>
                    { this.props.rgb.map( component =>
                        <>
                            { component.map( element =>
                                <RgbComponent>
                                    {element}
                                </RgbComponent>
                            
                            )}
                        </>  
                    )}
                </RgbContainer>
            </Container>
        )
    }
}