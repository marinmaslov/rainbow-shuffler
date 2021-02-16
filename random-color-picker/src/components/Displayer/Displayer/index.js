import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt, faPalette } from '@fortawesome/free-solid-svg-icons'

import './style.css'

import Fetcher from '../../Fetcher/index'
import HexColor from '../HexColor/index'
import RgbColor from '../RgbColor/index'
import ColorHistory from '../ColorHistory/index'

const Container = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`

const SubContainer = styled.div`
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Start = styled.h2`
    font-size: 2.6em;
    color: #3c3c3c;
    margin: auto;
`

const Button = styled.button`
  border: none;
  min-width: 300px;
  padding: 20px;
  border-radius: 50px;
  font-size: 1.6em;
  cursor:pointer;
  background: #f67280;
  color: #fff;
  max-width: 200px;
  transition: all 0.3s ease-in-out 0s;
  margin: auto;
  &:hover {
    opacity: 0.8;
  }
`

export default class Displayer extends Fetcher {
    render() {
        const hex = this.state.color
        const rgb = [
            ["R", parseInt(this.state.color.slice(0,2), 16)],
            ["G", parseInt(this.state.color.slice(2,4), 16)],
            ["B", parseInt(this.state.color.slice(4,6), 16)]
        ]

        return (
            <Container>
                <SubContainer>
                    { (this.state.color == "") && 
                        <>
                            
                            <Start><FontAwesomeIcon icon={faPalette} /> Let's start!</Start> 
                        </>
                    }
                    { !(this.state.color == "") && 
                        <>
                            <HexColor hex={ hex } />
                            <RgbColor rgb={ rgb } />
                        </>
                    }
                </SubContainer>
                <Button onClick={ this.handleButtonClick }>Shuffle <FontAwesomeIcon icon={faSyncAlt} /></Button>
                { !(this.state.color == "") && 
                    <ColorHistory history={ this.state.colorHistory }/>
                }
            </Container>
        )
    }
}