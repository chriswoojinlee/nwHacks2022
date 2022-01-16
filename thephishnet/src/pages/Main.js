import React from 'react';
import Button from '../components/Button';
import Page from '../pages/Page';
import styled from 'styled-components'
import logo from '../images/output-onlinepngtools.svg'

const Container = styled.div`

position: relative;
width: 1512px;
height: 982px;

background: #A3E6FF;
`

const Wrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

const ImgWrap = styled.div`
  max-width: 555px;
  height: 50%;
  z-index: 90;
  text-align: center;
  `


const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  z-index: 100;
  `

const TextWrapper = styled.div`
padding: 6px 10px;
width: 100px;

`

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 400px;
  padding-bottom: 900px;
  `


const SubmitButton = styled.button`
width: 300px;
height: 50px;
text-aligned: center;
background-color: #F6F5F5;
border-radius: 23px;

`

function Main() {
    return(
        <div>
            <Container>
                <Wrapper>
                    <ImgWrap>
                    <img src={logo} />
                    </ImgWrap>
                    <TextWrapper>
                    <input type="text" placeholder="Input Website Here.....">
                    </input>
                    </TextWrapper>

                    <BtnWrap>
                    <SubmitButton>
                        Submit
                    </SubmitButton>
                    </BtnWrap>

                </Wrapper>
            </Container>
            
             

        </div>
    )

}

export default Main;