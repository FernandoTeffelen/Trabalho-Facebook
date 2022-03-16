import React from 'react';
import { View, StyleSheet,  TouchableOpacity, Text, Image, Button, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { ImageBackground } from 'react-native';

const App = () => {
  return ( 
    <ScrollView>
      <ImageBackground source={require('./src/bg-instagram.jpg')} 
        style={styles.imageBackground}
        style={{width: '100%', height: '100%'}}>
        <View>
          <View>
            <Icon name="genderless" size={25} color='#fff' 
            style={{
              marginTop: 20,
              left: 256,
            }}/>
            <Text style={{color: '#fff', bottom: 23, left: 265}}>
              ?
            </Text>
            <Icon name="instagram" size={25} color='#fff' 
            style={{
              left: 315,
              bottom: 45,
            }}/>
          </View>


          <View>
            <Icon name="locked" size={25} color='#fff' 
            style={{
              marginLeft: 170,
              marginBottom: 10,
            }}/>
            <View style={styles.text}>
              <Text>
                Enter the code sent to your number ending in 8691 or
              </Text>
              <Text style={{marginBottom: 10}}>
                use your Backup Codes.
              </Text>
              <Text>
                It may take few moments to receive SMS.
              </Text>
            </View>
          </View>


          <TextInput style={styles.twoFactor} defaultValue="Enter Two-Factor code"/>


          <Text style={styles.whatIsIt}>
            What is it?
          </Text>


          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.login}> 
              <Text>
                Login Instagram
              </Text>
            </TouchableOpacity>
          </View>


          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{color: '#fff'}}>
              Back to Login
            </Text>
          </View>


          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.or}> 
              <Text style={{color: '#FFF'}}>
                or
              </Text>
            </TouchableOpacity>
          </View>


          <View style={{alignItems: 'center', marginBottom: 94}}>
            <TouchableOpacity style={styles.repostLogin}> 
              <Text style={{color: '#FFF'}}>
                Repost without login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
export default App;



const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: 400, 
    height: 600
  },
  text: {
    fontSize: 12,
    alignItems: 'center',
  },
  twoFactor: {
    borderColor: '#696969',
    color: '#C0C0C0',
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 19,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    marginTop: 15,
    borderWidth: 1
  },
  whatIsIt: {
    marginTop: -5,
    left: 290,
    fontSize: 13,
    color: '#fff',
    fontFamily: 'inherit',
    marginBottom: 15
  },
  login:{
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    width: 300,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  or: {
    backgroundColor: 'rgba(0,0,0,0.3',
    alignItems: 'center',
    padding: 10,
    width: 40,
    height: 40,
    marginTop: 10,
    borderRadius: 40,
  },
  repostLogin: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    padding: 10,
    width: 300,
    marginTop: 10,
  },
})