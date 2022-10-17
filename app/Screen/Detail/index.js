import { useState } from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, ScrollView, ImageBackground} from 'react-native';
import FWIcon from "react-native-vector-icons/FontAwesome";
import {commonStyles} from '../../common/index'

export default function Detail({ navigation }) {


    return (
        <ScrollView>
            <View style={{height:180}}>
                <ImageBackground source={require("../../img/detail_img.png")} resizeMode="cover">
                    <View style={{flexDirection:"row", justifyContent:"flex-end", height:'100%'}}>
                        <View>
                            <Text>
                                2039
                            </Text>
                        </View>
                        <View>
                            <FWIcon
                                color={"white"} 
                                name="star-o" 
                                size={25}
                            ></FWIcon>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );

    
}
const styles = StyleSheet.create({
    
});