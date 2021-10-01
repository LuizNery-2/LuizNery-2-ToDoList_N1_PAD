import React from 'react';
import { View,Text,FlatList } from 'react-native';
import { Container } from './styles';
import Header from '../../components/Header';
import {useSelector,useDispatch} from 'react-redux';
import Tasks from '../../components/Tasks';
import { 
    AddTaskContainer,
    Title,
    Input,
    AddTaskButton,
    ButtonTitle               } from './styles';
import {Creators} from '../../store/ducks/TaskReducer';  


function Home(){
  
  const selector = useSelector(state => state);
  const disp = useDispatch();
  const task = Tasks();

  function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
  }
  
  
  return (
   <Container>
     <Header/>

     <AddTaskContainer>
     <Title>Adcione aqui uma tarefa</Title> 
    <Input placeholder="Ex: TerminarApp"/> 
   <AddTaskButton onPress={ () =>{disp(Creators.addNewTask(task,geraStringAleatoria(12)))}}>
       <ButtonTitle >Adicionar tarefa</ButtonTitle>
   </AddTaskButton>
    </AddTaskContainer> 
       <FlatList data = {selector.TaskReducer.data}
                  renderItem ={({item}) => <View>{item.task}</View>}
       />
       
     
   </Container>
    
  )
}

export default Home;