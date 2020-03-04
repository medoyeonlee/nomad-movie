import React from 'react';
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';


export default function Movies ({navigation}) {
return <View style={styles.container}>
    <Text>Movies</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
        <Text>go to detail</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container:{
        marginTop:100
    }
})