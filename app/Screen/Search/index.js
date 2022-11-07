import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import React,{useEffect, useMemo, useRef, useState} from 'react';
import * as Icons from 'react-native-heroicons/outline';
import { commonStyles } from "../../common";
import ConfirmModal from '../../Component/ConfirmModal';
import Loader from "../../Component/Loader";
import axios from "axios";

export default React.memo( function ScreenA({ navigation }) {
    const loginState = {
        login:true,
        isCon:true,
        email:'ezicland@naver.com',
        name:'손동윤',
        userCd:1
    }


    const [loading, setLoading] = useState(false);
    const [tabLoading, setTabLoading] = useState(false);
    const [datas, setDatas] = useState([]);

    const [nameList, setNameList] = useState([]);
    const [partyList, setPartyList] = useState([]);
    const [loList, setLolist] = useState([]);


    const getListName = () =>{
        axios.get('http://144.24.94.124:8091/api/v1/gookie/list',{
            params:{
                state:'1'
            }
        }).then(res=> {

                let dataList = [];
                console.log(res.data,'TEST');
                res.data.data.list.forEach((item,index)=>{
                    const data = {
                        title : `${res.data.data.chs[index]} [${res.data.data.chList[index].firstCh} - ${res.data.data.chList[index].lastCh}]`,
                        content : item
                    }
                    dataList.push(data);
                })
                setDatas(dataList);
            });
    }
    const getListParty = () =>{
        axios.get('http://144.24.94.124:8091/api/v1/gookie/list',{
            params:{
                state:'2'
            }
        }).then(res=> {

        });
    }
    const getListLocation = () =>{
        axios.get('http://144.24.94.124:8091/api/v1/gookie/list',{
            params:{
                state:'3'
            }
        }).then(res=> {

        });
    }

    //즐겨찾기 클릭시 색변경
    const [markLike, setMarkLike] = useState(false);

    //탭변경
    const [tab, setTab] = useState(0);
    //즐겨찾기 취소 모달
    const [modalCancel, setModalCancel] = useState(false);

    //즐찾시 로그인 체크 모달
    const [modalLoginCheck, setModalLoginCheck] = useState(false);

    console.log('TETSTSSS!!!');

    useEffect(() => {
        const load = async () =>{
            await getListName();
            await getListParty();
            await getListLocation();
            // setTimeout(()=>setLoading(false),5000);
        }
        setLoading(true);
        load();
    }, []);

    useEffect(() => {
        if(datas.length>0){
            setLoading(false);
        }
    }, [datas]);

    const flatState = () =>{
        if(tab==1){
            return
        }
    }

    const datasTest = useMemo(() => datas, [datas]);



    return (
        <View style={{height:"100%"}}>
            <View
                contentContainerStyle={{paddingBottom:143, height:"100%"}}

            >
                <View>
                    <Text style={styles.searchTit}>
                        의원찾기
                    </Text>
                </View>
                <View style={commonStyles.loaderWrap}>
                    {loading ? <Loader type={"full"} /> :
                    <View>
                        <View style={commonStyles.inner}>
                            <View style={{flexDirection:"row", marginTop:24, borderWidth:1, borderColor:"#f4933a", borderRadius:8, height:48, marginBottom:32,}}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress = {() => {
                                        setTab(()=>(0))
                                    }}
                                    style={{flex:1}}
                                >
                                    <View style={
                                        tab === 0 ? styles.tabView : styles.tabViewOff
                                        }>
                                        <Text style={
                                            tab === 0 ? styles.tabText : styles.tabTextOff
                                        }>
                                            이름순
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress = {() => {
                                        setTab(()=>(1))
                                    }}
                                    style={{flex:1}}
                                >
                                    <View style={
                                        tab === 1 ? styles.tabView : styles.tabViewOff
                                    }>
                                        <Text style={
                                            tab === 1 ? styles.tabText : styles.tabTextOff
                                        }>
                                            정당순
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress = {() => {
                                        setTab(()=>(2))
                                    }}
                                    style={{flex:1}}
                                >
                                    <View style={
                                        tab === 2 ? styles.tabView : styles.tabViewOff
                                        }>
                                        <Text style={
                                            tab === 2 ? styles.tabText : styles.tabTextOff
                                        }>
                                            지역구순
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            keyExtractor={item => item.title}
                            data={datasTest}
                            windowSize={2}
                            renderItem={({item})=>{
                                return(
                                    <View style={commonStyles.mb32}>
                                        <View style={{borderBottomWidth:8, borderColor:"#f8f7f7", width:"100%"}}>
                                            <View style={{paddingHorizontal:32, paddingBottom:8,}}>
                                                <Text style={styles.congressAling}>{item.title}</Text>
                                            </View>
                                        </View>
                                        <View style={{paddingHorizontal:24,}}>

                                            {item.content.map((conitem,index)=>{
                                                return(
                                                    <View>
                                                        <TouchableOpacity
                                                            activeOpacity={1}
                                                            onPress ={() => {navigation.navigate('Detail',{email:conitem.e_mail,monaCd:conitem.mona_cd})}}
                                                        >
                                                            <View style={{flexDirection:"row", justifyContent:"space-between", borderBottomWidth:1, borderColor:"#eee", paddingVertical:12, paddingHorizontal:8,}}>
                                                                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center",}}>
                                                                    <Text style={styles.congressName}>{conitem.hg_nm}</Text>
                                                                    <Text style={styles.congressParty}>{conitem.poly_nm}</Text>
                                                                </View>
                                                                <View>
                                                                    <TouchableOpacity
                                                                        activeOpacity={1}
                                                                        onPress = {() => {
                                                                            setMarkLike(!markLike)
                                                                            if(!loginState.login){
                                                                                setModalLoginCheck(true)
                                                                            }else{
                                                                                if(markLike){
                                                                                    setModalCancel(true)
                                                                                }
                                                                            }
                                                                        }}
                                                                        style={{flex:1}}
                                                                    >
                                                                        <Icons.StarIcon color={markLike ? "#ffbd12" : "rgba(217,217,217,1)"} size={18} fill={markLike ? "#ffbd12" : "transparent"} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                            })}

                                        </View>
                                    </View>
                                )
                            }}
                        />




                    </View>
                    }
                </View>
            </View>
            <ConfirmModal
                transparent={true}
                btnBoolean={modalCancel}
                onPress={() => {
                    setModalCancel(false);
                }}
                onCancel={() => {
                    setModalCancel(false);
                }}
                titleText={'즐겨찾기 해제'}
                bodyText={'즐겨찾기를 정말로 해제하시겠습니까?'}
                btnText={'확인'}
                btnText2={'취소'}
            />

            <ConfirmModal
                transparent={true}
                btnBoolean={modalLoginCheck}
                onPress={() => {
                    setModalLoginCheck(false);
                    navigation.navigate('Login')
                }}
                onCancel={() => {
                    setModalLoginCheck(false);
                }}
                titleText={'로그인 확인'}
                bodyText={'로그인 하시겠습니까?'}
                btnText={'확인'}
                btnText2={'취소'}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    searchTit:{
        textAlign:"center",
        fontSize:16,
        fontWeight:"bold",
        letterSpacing:-0.32,
        color:"#313131",
        paddingVertical:24
    },
    tabView:{
        backgroundColor:"#f4933a",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:6,
        width:"100%",
        height:"100%",
    },
    tabViewOff:{
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:6,
        width:"100%",
        height:"100%",
    },
    tabText:{
        fontSize:14,
        fontWeight:"bold",
        letterSpacing:-0.56,
        color:"#fff"
    },
    tabTextOff:{
        fontSize:14,
        fontWeight:"bold",
        letterSpacing:-0.56,
        color:"#f4933a"
    },
    congressAling:{
        fontSize:16,
        fontWeight:"bold",
        letterSpacing:-0.32,
        color:"#f4933a"
    },
    congressName:{
        fontSize:14,
        fontWeight:"bold",
        letterSpacing:-0.28,
        color:"#313131",
        marginRight:24
    },
    congressParty:{
        fontSize:12,
        fontWeight:"normal",
        letterSpacing:-0.24,
        color:"#b1b1b1"
    },

})
