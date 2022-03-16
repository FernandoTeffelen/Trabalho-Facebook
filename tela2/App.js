import React from 'react';
import { View, Appbar, Text, FAB, Surface, Image, Button, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'

const App = () => {
  return (
    <ScrollView style={{
      backgroundColor: '#FFF',
    }}>


      <View style={{
        backgroundColor: '#4461A2',
        width: '100%',
        height: 55,
      }}>
        <Icon name="arrow-left-l" size={25} color='#FFFFFF' style={{
          marginLeft: 20,
          marginTop: 15,
        }}/>
        <Icon name="search" size={20} color='#FFFFFF' style={{
          marginLeft: 65,
          top: -23          
        }}/>
        
      </View>
      


      <View style={{
        backgroundColor: '#D5E1FF',
        width: '100%',
        height: 150,
      }}>
      </View>


      <View style={{
        backgroundColor: '#BCD2EE',
        width: 150,
        height: 150,
        marginLeft: 105,
        bottom: 50,
        borderColor: '#fff',
        borderWidth: 2,
      }}>
      </View>


      <Text style={{
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 5
      }}> Your name </Text>


      <Text style={{
        marginLeft: 20,
      }}> 
        __________________________________________________
      </Text>


      <View style={{
        width: '100%',
        height: 80,
      }}>
        <Icon name="messenger" size={30} color='#000000' style={{
          marginTop: 25,
          marginLeft: 100,         
        }}/>
        <Icon name="commenting" size={30} color='#000000' style={{
          bottom: 25,
          left: 290,
        }}/>
        <Text style={{
        marginLeft: 20,
      }}> 
        __________________________________________________
        </Text>
      </View>

      <View style={{
        marginLeft: 50,
        marginBottom: 30,
        marginTop: 50,
        fontSize: 15,
      }}>
        <Text style={{marginBottom: 10}}>
        Your base info 1
        </Text>
        <Text>
        Your base info 2
        </Text>
      </View>


      <View style={{
        backgroundColor: '#DCDCDC',
        width: '100%',
        height: 80,
      }}>
        <Text style={{
          textAlign: 'center',
          marginTop: 30,
          fontSize: 20,
        }}>
          ABOUT        PHOTOS        FRIENDS
        </Text>
      </View>
    </ScrollView>
  );
}

export default App;