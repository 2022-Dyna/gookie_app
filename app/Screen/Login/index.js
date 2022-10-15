import { useState } from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import FWIcon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from 'react-redux';
import * as loginAction from '../../Reducer/action/index';

export default function Login({ navigation }) {
    const dispatch = useDispatch();

    const [emailfocus, setEmailFocus] = useState(false);
    const [pwfocus, setPwFocus] = useState(false);
    const [autoLogin, setAutoLogin] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <View>
                    <Text style={[styles.maintit, styles.mb10]}>
                        로그인
                    </Text>
                </View>
                <View style={styles.mt20}>
                    <Text style={[styles.labeltext, styles.mb10]}>
                        이메일
                    </Text>
                    <TextInput 
                        style = {!emailfocus ? styles.input : styles.inputfocus}
                        onFocus = {() => {
                            setEmailFocus(true);
                            }
                        }
                        onBlur= {() => {
                            setEmailFocus(false);
                            }
                        }
                        
                    >
                        
                    </TextInput>
                </View>
                <View style={styles.mt20}>
                    <Text style={[styles.labeltext, styles.mb10]}>
                        비밀번호
                    </Text>
                    <TextInput 
                        style = {!pwfocus ? styles.input : styles.inputfocus}
                        onFocus = {() => {
                            setPwFocus(true);
                            }
                        }
                        onBlur= {() => {
                            setPwFocus(false);
                            }
                        }
                        secureTextEntry
                    >

                    </TextInput>
                </View>
                <View>
                    <View>
                        <TouchableOpacity
                            onPress={()=>{
                                setAutoLogin(!autoLogin)
                            }}
                            style={{flexDirection:'row'}}
                        >
                            <FWIcon
                                color={autoLogin?"#f4933a":"#d0d0d0"} 
                                name="check-square" 
                                size={25}
                            >

                            </FWIcon>
                            <Text
                            >
                                자동 로그인
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        </View>
    );

    
}
const styles = StyleSheet.create({
    mb10:{
        marginBottom:10
    },
    mt20:{
        marginTop:20
    },
    container: {
        height:"100%",
    },
    inner:{
        backgroundColor:'#FFFFFF',
        height:'100%', 
        justifyContent:'center', 
        paddingHorizontal:24,
    },
    maintit:{
        fontSize:24,
        textAlign:'left',
        color:'#313131',
        fontWeight:'bold',
    },
    labeltext:{
        fontSize:12,
        color:'#7b7b7b',
        fontWeight:'300'
    },
    input:{
        width:"100%",
        height:50,
        borderWidth:1,
        borderColor:'#d0d0d0',
        borderRadius: 8,
        paddingHorizontal:20,
    },
    inputfocus:{
        width:"100%",
        height:50,
        borderWidth:1,
        borderRadius: 8,
        borderBottomColor:'#f4933a',
        borderTopColor:'#f4933a',
        borderLeftColor:'#f4933a',
        borderRightColor:'#f4933a',
        paddingHorizontal:20,
    },

});