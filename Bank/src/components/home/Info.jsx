import styled from 'styled-components'
import Pg1 from '../../assets/images/pg1.png'
import Pg2 from '../../assets/images/pg2.png'
import Pg3 from '../../assets/images/pg3.png'
import Pg4 from '../../assets/images/pg4.png'
import Pg5 from '../../assets/images/pg5.png'


const Info = () => {
  return (
    <Container>
        <Wrapper>
            <Imagebox1>
                <img src={Pg1} alt='' />
                <img src={Pg2} alt='' />
                <img src={Pg3} alt='' />
            </Imagebox1>

            <Imagebox2>
                <img src={Pg4} alt='' />
                <img src={Pg5} alt='' />

            </Imagebox2>

        </Wrapper>
    </Container>
  )
}

export default Info

const Container = styled.div`
/* max-width: 1280px; */
/* margin-left: auto; */
/* margin-right: auto; */
/* padding: 0px 10px; */
display: flex;
align-items: center;
justify-content: center;
/* background-color: blue; */
width: 100%;

min-height: calc(100vh - 70px);

`

const Wrapper = styled.div`
display: grid;
/* background-color:red; */
width: 85%;
flex-wrap: wrap;
padding: 0px 10px;
margin-left: auto;
margin-right: auto;
min-height: 80vh
`

const Imagebox1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
/* border: 1px solid blue; */
/* margin-top: 20px; */
img{
    width:350px;
    height: 150px;
}

    
`

const Imagebox2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 0px;
margin-bottom: 0px;
/* border:1px solid black; */

img{
    width:350px;
    height: 150px;
    
}
`