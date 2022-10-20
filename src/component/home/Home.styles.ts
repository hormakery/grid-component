import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3rem;
  display: grid;
  justify-content: center;
  // flex-direction: column;

  @media(max-width: 650px){
    padding: 2rem;
  }
`;

export const About = styled.div`
  padding: 3rem;
  background-color: #fff;
  border-top-left-radius: .4rem;
  border-top-right-radius: .4rem;

  @media(max-width: 650px){
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  color: #2bb4b1;
  margin-bottom: 1.5rem;

  @media(max-width: 650px){
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.h2`
color: #bedf32;
margin-bottom: 1rem;

@media(max-width: 650px){
  font-size: 1rem;
}
`

export const Description=styled.p`
color:  grey;
font-size: .9rem;

`

export const WrapperLayout=styled.div`
flex: 1;
color: #fff;
display: grid;
grid-template-columns: 300px 300px;

@media(max-width: 650px){
  grid-template-columns: repeat(1, 1fr);
}

`

export const TopLeft=styled.div`
 flex: 0.5;
 padding: 3rem;
 display: grid;
//  flex-direction: column;
  background-color: #2bb4b1;
  // border-bottom-left-radius: .4rem;

  span{
   
    .price{
      color: #fff;
      font-size: 1.6rem;
      margin-right: .7rem;
    }
  }

  .list-price{
    font-weight: 300;
    font-size: .8rem;
    color: #dcdfe2;
    margin-bottom: .5rem;
  }

  .sub_details{
    font-weight: 300;
    font-size: .8rem;
    margin-top: .6rem;
  }

  @media(max-width: 650px){
    padding: 2rem;
    
  }
`

export const Subtag =styled.h4`
font-weight: 600;
margin-bottom: .6rem;
`

export const Button =styled.button`
border: none;
color: #fff;
cursor: pointer;
font-weight: 600;
margin-top: 1.5rem;
border-radius: .4rem;
padding: .8rem 1.5rem;
background-color: #bedf32;
box-shadow: 6px 11px 15px -3px #4a5710;

  :hover{
    font-weight: 700;
    color: #dcdfe2;
  }
`

export const TopRight=styled.div`
 flex: 0.5;
 padding: 3rem;
 background-color: #49bebd;
 border-bottom-right-radius: .4rem;
 span{
  :first-child{
    font-weight: 500;
    margin-bottom: .9rem;
  }
 }

 @media(max-width: 650px){
  padding: 2rem;
  border-bottom-left-radius: .4rem;
}
`

export const AboutList=styled.ul`

`

export const List=styled.li`
 font-size: .8rem;
 margin-top: .3rem;
list-style: none;
color: #dcdfe2;
`
