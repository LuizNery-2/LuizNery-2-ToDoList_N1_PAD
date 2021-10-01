import styled from 'styled-components/native';

export const Container = styled.SafeAreaView `

background-Color: #e6c0f4;
flex: 1;
padding: 4px 0px;





`;


export const AddTaskContainer = styled.View `

background-color: #fff;
width: 85%;
height: 210px;
margin-left:30px;
margin-top: 25px;
border-radius: 20px;
align-items: center;




`;

export const Title = styled.Text`
margin-top: 5px;
font-size: 23px;
font-weight: bold;
color:#000;
`;

export const Input = styled.TextInput`
 background-color: #999999;
 width: 85%;
 height:70px;
 margin-top:15px;
 border-radius: 15px;
 padding: 5px;
 opacity: 0.65;
 color: #000;
 font-size: 19px;
`;

export const AddTaskButton = styled.TouchableOpacity`
 
 background-color: #8600b3;
 width: 85%;
 height:50px;
 border-radius:10px;
 margin-top: 12px;
 align-items: center;
justify-content: center;

`;

export const ButtonTitle = styled.Text`
font-size: 25px;
font-weight: bold;
color: #fff;

`;