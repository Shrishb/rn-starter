import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail.js';

const ImageScreen = () => {
    return <View>
        <ImageDetai title="Forest" img={require('../../assets/forest.jpg')}/>
        <ImageDetai title="Beach" img={require('../../assets/beach.jpg')}/>
        <ImageDetail title="Mountain" img={require('../../assets/mountain.jpg')}/>
    </View>;
  };

const sheet = StyleSheet.create({

});

  export default ImageScreen;