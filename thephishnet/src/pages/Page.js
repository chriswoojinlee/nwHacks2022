import styled from 'styled-components';
import { TopBar } from "../components/TopBar";

const Container = styled.div`

position: relative;
width: 100%;
height: 100vh;

background: ${({color}) => (color ? "#10102E" : "#60ADAD")};

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
  height: 100%;
  z-index: 90;
  `


const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  z-index: 100;
  `

const Row = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgEnd}) => (imgEnd ? `'col2 col1'` : `'col1 col2'`)};

`

const ColumnOne = styled.div`

margin-bottom: 15px;
padding 0 15px;
grid-area: col1;
`
const ColumnTwo = styled.div`

margin-bottom: 15px;
padding 0 15px;
grid-area: col2;
`

const BackButton = styled.button`
width: 300px;
height: 50px;
text-aligned: center;
background-color: #F6F5F5;
border-radius: 23px;
font-size: 25px;
margin-left: 30%;
margin-right: 70%
`  

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 20px;
  `

const Text = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #A3E6FF; 

`


const Page = ({imgEnd, img, info, color, alt}) => {

    return(
      <div>
          <Container color={color}>
          <TopBar />
            <Wrapper>
                <Row imgEnd={imgEnd}>

                <ColumnOne>
                <TextWrapper>
                    <Text>
                        {info}
                    </Text>
                </TextWrapper>
                </ColumnOne>

                <ColumnTwo>
                <ImgWrap>
                <Img src={img} alt={alt} />
                </ImgWrap>
                </ColumnTwo>

                </Row>
              
              
            </Wrapper>
        </Container>
      </div>
  
  
    );
  
  }

  export default Page;