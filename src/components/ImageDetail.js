import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ImageDetail = (props) => {
    return( 
    <View>
      <Image source={props.img}></Image>
      <Text>{props.title}</Text>
    </View>
    );
  };

const sheet = StyleSheet.create({

});

  export default ImageDetail;