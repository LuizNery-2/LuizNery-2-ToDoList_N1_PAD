import React from 'react';
import { Container, 
         Title,
         OptContainer,
         OptionBtn,
         CloseBtn,
         DetailTouch,
         DetailText   
        } from './styles';
import {Feather, AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Tasks(){
  
  const navigation = useNavigation();
  function navigationToDetails(item){
     navigation.navigate('Detail');
     
  };
    
  return( 
    <Container>  
        <OptContainer>
          <OptionBtn onPress={() => navigationToDetails()}>

        <Feather name="menu" size={30} color="#000"/>
          
          </OptionBtn>

        <Title></Title>
         
           <CloseBtn>
             <AntDesign name="close" size={30} color="#000"/>
           </CloseBtn>
        </OptContainer>
         <DetailTouch activeOpacity={1}>
             <DetailText></DetailText>
         </DetailTouch>

    </Container>
     
    
    );
}

export default Tasks;