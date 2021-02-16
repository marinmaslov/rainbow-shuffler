import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    max-width: 500px;
    width: 500px;
    display: flex;
    overflow-x: scroll;
    min-height: 120px;
`

const Title = styled.h3`
    color: #3c3c3c;
    font-size: 1em;
    text-align: center;
    margin: 50px 0 10px;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
`

const ColorCircle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 20px auto 5px;
`

export default class ColorHistory extends React.Component {
    render() {
        return (
            <>
            <Title>Previous colors:</Title>
            <Container>
                
                { this.props.history.reverse().map( element =>
                    {
                        let hex = "#" + element;
                        const color = {
                            background: hex,
                        }
                        return (
                            <SubContainer>
                                <ColorCircle style={color}/>
                                <p>
                                    #{ element }
                                </p>
                            </SubContainer>
                        )
                    }
                )}
            </Container>
            </>
        )
    }
}