import React, { Component } from 'react';
import { AppRegistry, View, Image, Text } from 'react-native';

// screen size for iphone8: width: 375, height: 650
export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
      return (
        <View style={style.mainContainer}>
          <Image source={pic} style={style.imageFullWidth}/>
          <Image source={require('./assets/pink-background.jpeg')} style={style.imageFullWidth}/>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <View style={{backgroundColor: 'red', flex: 0.5}} />
          <Text>Hello World!</Text>
      </View>
    );
  }
}

const style = {
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
  },
  imageFullWidth: {
    width: 375,
    height: 200,
  }

}
