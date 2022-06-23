import { useState } from 'react'; 
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  StatusBar,
  Platform,
  Text,
  ScrollView
} from 'react-native';
import styled from 'styled-components/native';

const InfoText = styled.Text`
  font-size: 46px;
  color: red;
`;

export default function App() {
  const [todos,setTodos] = useState([
    {item:'Play football',key:'1'},
    {item:'Read text book',key:'2'},
    {item:'Cook for family',key:'3'},
    {item:'Do React Native project',key:'4'},
    {item:'Learn to play guitar',key:'5'},
    {item:'Call dad and mom',key:'6'},
    {item:'Transfer to electrician',key:'7'},
    {item:'Transfer to mom',key:'8'},
    {item:'Transfer to dad',key:'9'},
  ]);

  return (
    <>
      <SafeAreaView>
        <View style={styles.AD}>
          <InfoText>My Everyday Todos</InfoText>
          <ScrollView>
          {
            todos.map((todo) => {
              return <Text style={styles.todotext}>{todo.item}</Text>
            })
          }
          </ScrollView>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  AD: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
  },
  todotext:{
    backgroundColor:'skyblue',
    paddingVertical:24,
    paddingHorizontal: 10,
    marginVertical:10,
    marginHorizontal:10,
    borderWidth:1,
    borderColor:'blue',
    borderRadius:10
  }
});
