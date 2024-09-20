import { StatusBar } from 'expo-status-bar';
import {Image, ActivityIndicator, ScrollView,StyleSheet,Text, View} from 'react-native';

export default function App() {
  return (
   <ScrollView>
    <Text>Text1</Text>
    <Text>Text2</Text>
    <ActivityIndicator></ActivityIndicator>
    <Image source={{uri:'https://img.freepik.com/free-photo/pastel-sky-background-with-text-space_53876-125302.jpg?t=st=1726794931~exp=1726798531~hmac=ae8de63eb36e46adef5e262d201c756d52549a8bcef201b9201723408202a53d&w=1060',}}
  style={styles.tinyLogo}>
    </Image>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo:{
    width:500,
    height:500,
  }
});