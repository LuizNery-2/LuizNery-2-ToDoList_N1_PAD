import React,{useState} from 'react';
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
  const [title,setTitle] = useState("tarefa");
  const selector = useSelector(state => state.TaskReducer);
  const disp = useDispatch();
  const task = Tasks({title});
  

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
    <Input placeholder="Ex: TerminarApp"
           Value = {title} onChangeText={text => setTitle(text)}/> 
   <AddTaskButton onPress={ () =>{disp(Creators.addNewTask(task,geraStringAleatoria(8)))}}>
       <ButtonTitle >Adicionar tarefa</ButtonTitle>
   </AddTaskButton>
    </AddTaskContainer> 
       <FlatList data = {selector.data}
                  renderItem ={({item}) => <View>{item.task}</View>}
       />
       
     
   </Container>
    
  )
}

export default Home;