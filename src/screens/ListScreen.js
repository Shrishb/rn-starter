import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen =  () =>{
   const friends =[
       {name :"Friend 1", age: '20', key:"1"},
       {name :"Friend 2", age: '45',key:"2"},
       {name :"Friend 3",age: '32', key:"3"},
       {name :"Friend 4",age: '27', key:"4"}
   ]

   return (<FlatList 
            data={friends} 
            renderItem={({item}) => {
              return  <Text style={styles.textStyle}>Name-{item.name} Age-{item.age}</Text>
            }
        }/>
   );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});

export default ListScreen;