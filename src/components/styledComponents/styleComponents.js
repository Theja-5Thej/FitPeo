import styled from "styled-components";
import { Drawer } from 'antd';
import { Content } from "antd/es/layout/layout";

export const SideIconItem = styled.div`
svg {
    font-size: ${props => props.size || '20px'};
    color: ${props => props.color || 'black'};
  }
`
export const LogoIcon = styled.div`
font-size: 22px;
padding:0px;
height: 50px;


svg {
    font-size: ${props => props.size || '28px'};
    color: ${props => props.color || 'black'};
    cursor: pointer;
  }
`
export const LogountContainer = styled.div`
margin-top: auto;
padding:10px;
Button svg{
    font-size: ${props => props.size || '20px'};
    color: ${props => props.color || 'black'};
}

`
export const LogoutBtn = styled.button`
    cursor: pointer;
    margin-left: 10px;
    padding: 8px;

    background-color: transparent;
    &:hover{
        border: none;
        svg{
            color: red;
        }
    }
 `
export const styledNavBar = styled.div`
 color: white;
 display: flex;
 align-items: center;
 height: 100%;
 `
export const SearchBar = styled.div`
 margin-left:${props => props.mleft || '150px'} ;
 max-width: 300px;
 width: 100%;
 background-color: transparent;
 border: 1px solid #2a2b30;
 display: flex;
 align-items: center;
 flex-direction: row;
 padding-left: 10px;
 gap: 10px;
 background-color: #2a2b30;
border-radius: 4px;
 `
export const Input = styled.input`
   width: 100%;
    height: 30px;
    color: white;
    font-weight: 400;
   background-color: transparent;
   border: none;
 `
export const NavIconContainer = styled.div`
 padding:4px;
 height: 30px;
 width: 30px;
 border-radius: 50%;
 background-color:#2a2b30 ;
 display: flex;
 align-items: center;
 justify-content: center;
 `
export const UserImage = styled.img`
 width: 30px;
 height: 30px;
 border-radius: 50%;
 object-fit: cover;
 `
export const Dropdown = styled.button`
 background-color: transparent !important;
 border: none !important;
 display:${props => props.display} ;
 align-items: center;
 margin-left: auto;
 cursor: pointer;
 svg{
  font-size: 24px;
 }
 `

export const CustomDrawer = styled(Drawer)`
 background-color:'rgb(0,21,41)';
 padding: 0px;
  .ant-drawer-body {
    background-color: #001529;
    color: white;
    padding: 0;
    height: fit-content;
  }
  .ant-drawer-body .ant-menu-vertical{
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .ant-drawer-body .ant-menu-vertical li{
    display: flex;
    align-items: center;
    width: 150px;
    
  }
  .ant-drawer-header{
    padding: 10px 20px;
    display: flex;
    justify-content: center;
  }
  .ant-drawer-header .ant-drawer-header-title{
max-width: 10px;
margin-left: auto;

  }
 `

export const StyledContent = styled(Content)`  
 padding: 20px 160px;
 color: white;
 background-color: #141416;
 max-height: calc(100vh - 64px);
 overflow-y: auto;
 @media (max-width: 1200px) {
  padding: 20px 40px;
 }
 @media (max-width: 900px) {
  padding: 10px 10px;
 }
 &::-webkit-scrollbar {
    width: 4px; /* Change the width of the scrollbar */
    height: 12px; /* Change the height of the scrollbar (for horizontal scrollbars) */
  }

  &::-webkit-scrollbar-thumb {
    background-color: white; /* Change the scrollbar thumb color */
    border-radius: 6px; /* Change the scrollbar thumb shape */
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); /* Change the scrollbar track color */
  }
 `

export const CustomHead = styled.div`
 font-size: ${props => props.fontSize || '16px'};
 font-weight: ${props => props.fontWeight || "400"};
 `
export const CardItem = styled.div`
 background-color: #001529;
border-radius:4px;
width: 150px;
height: 100px;
padding: 10px;
display: flex;
flex-direction: column;
gap: 10px;
@media (max-width: 400px) {
width: 95%;
 }
 `

export const CardItemContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
gap: 10px;
@media (max-width: 550px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
 }
 @media (max-width: 400px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
 }
 `
export const NetProfitCotainer = styled.div`
  background-color: #001529;
  border-radius:4px;
  width: 100%;
  height: 100%;
  padding: 10px;
  @media (max-width: 400px) {
max-width: 95%;
margin: 0 auto;

 }

 `
export const StyledChart = styled.div`
 border-radius:4px;
 padding:10px;
 background-color:#001529;
 @media (max-width: 400px) {
max-width: 95%;
margin: 0 auto;

 }
 `
export const StyledGoalContainer = styled.div`
 border-radius:4px;
 padding:24px;
 background-color:#001529;
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 gap: 20px;
 justify-content: space-between;

 @media (max-width: 400px) {
max-width: 95%;
margin: 0 auto;
 }
 .goalItem{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 2px;
 }
 .iconCont{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center; 
  justify-content: center;
 }
 `

export const StyledTableContainer = styled.div`
 border-radius:4px;
 padding:24px;
 background-color:#001529;
 width: 100%;
 height: 100%;
 overflow: hidden;
 @media (max-width: 400px) {
max-width: 95%;
margin: 0 auto;
padding: 8px;
 }

 `
export const StyledTableWrapper = styled.div`
margin-top: 15px;
border:none !important;
max-height: 600px;
overflow: hidden;

.ant-table-thead{
  border: none;
}
.ant-table-cell{
  border:none !important;
}
.ant-table-thead > tr > th {
  background-color: #001529 !important; 
  color: white !important;
  border-bottom: 1px solid #706F6F !important;
  font-size: 12px;
  border-radius: 0;
}
.ant-table-thead > tr > th.ant-table-cell.ant-table-cell-scrollbar{
  display: none !important;
}
.ant-table-thead > tr > th::before{
  display: none;
}
.ant-table-thead > tr > th:first-child{
  border-start-start-radius: 0px !important;
}
.ant-table-thead > tr > th:last-child{
  border-start-end-radius: 0px !important;
}
.ant-table-tbody > tr > td {
  background-color: #001529;
  color: white !important;
  border-bottom: 1px solid #706F6F !important;
  font-size: 10px;

}
.ant-table-tbody > tr:hover > td {
  background-color: #001529 !important; 
}
.ant-table-tbody > tr > td.ant-table-cell.ant-table-cell-scrollbar{
background-color: white;
border: none;
}
img{
  width: 40px ;
  height: 40px ;
  object-fit: cover;
 }
@media (max-width: 600px){
  img{
  width: 30px ;
  height: 30px ;
  object-fit: cover;
 }
}
@media (max-width: 450px) {
  .ant-table-tbody > tr:hover > td {
 font-size: 7px;
 }
 .ant-table-thead > tr > th {
  font-size: 8px;
 }
 img{
  width: 24px ;
  height: 24px ;
  object-fit: cover;
 }
}
@media (max-width: 350px){
 img{
  width: 20px !important;
  height: 20px !important;
  object-fit: cover;
 }
}
colgroup col:last-child{
  width:0px !important;
  border: none !important;
}
.ant-table-tbody::-webkit-scrollbar {
    width: 4px; 
    height: 12px; 
  }

  .ant-table-tbody::-webkit-scrollbar-thumb {
    background-color: white; 
    border-radius: 6px; 
  }

  .ant-table-tbody::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); 
  }
`
export const StyeldFeedBackContainer = styled.div`
 border-radius:4px;
 padding:24px;
 background-color:#001529;
 width: 100%;
 height: 100%;
 overflow: hidden;
 @media (max-width: 400px) {
max-width: 95%;
margin: 0 auto;
padding: 8px;
 }
`
export const FeedbackItem = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
img{
  width: 40px ;
  height: 40px ;
  object-fit: cover;
  border-radius: 50%;
 }
@media (max-width: 350px){
 img{
  width: 20px !important;
  height: 20px !important;
  object-fit: cover;
 }
}
`
export const FeedbackItemConrainer =styled.div`
margin-top: 20px;
max-height: 300px;
overflow: auto;
display: flex;
flex-direction: column;
gap: 20px;
&::-webkit-scrollbar {
    width: 4px; 
    height: 12px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); 
  }
`
export const StarIcon = styled.div`
svg{
  fill: yellow;
  margin-right: 4px;
}
`