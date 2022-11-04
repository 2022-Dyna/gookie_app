import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import { useEffect, useState } from 'react';
import * as Icons from 'react-native-heroicons/outline';
import { commonStyles } from "../../common";
import ConfirmModal from '../../Component/ConfirmModal';
import Loader from "../../Component/Loader";
import axios from "axios";

export default function ScreenA({ navigation }) {
    const loginState = {
        login:true,
        isCon:true,
        email:'ezicland@naver.com',
        name:'손동윤',
        userCd:1
    }



            //의원 데이터
    const data =[
        {
            title: 'ㄱ [강 - 김]',
            content: [
            {
                name: "강기윤",
                group: "국민의 힘"
            },
            {
                name: "강대식",
                group: "국민의 힘"
            },
            {
                name: "강득구",
                group: "더불어민주당"
            },
            {
                name: "강민국",
                group: "국민의 힘"
            },
            {
                name: "강민정",
                group: "더불어민주당"
            },
            {
                name: "강병원",
                group: "더불어민주당"
            },
            ]
        },
        {
            title: 'ㄴ [남 - 노]',
            content: [
                {
                    name: "남인순",
                    group: "더불어민주당"
                },
                {
                    name: "노용호",
                    group: "더불어민주당"
                },
                {
                    name: "남인순",
                    group: "더불어민주당"
                },
                {
                    name: "노용호",
                    group: "더불어민주당"
                },
                {
                    name: "남인순",
                    group: "더불어민주당"
                },
                {
                    name: "노용호",
                    group: "더불어민주당"
                },
                {
                    name: "남인순",
                    group: "더불어민주당"
                },
                {
                    name: "노용호",
                    group: "더불어민주당"
                },
                {
                    name: "남인순",
                    group: "더불어민주당"
                },
                {
                    name: "노용호22",
                    group: "더불어민주당"
                },
            ]
        }
    ];

    const [loading, setLoading] = useState(true);
    const [tabLoading, setTabLoading] = useState(false);
    const [datas, setDatas] = useState([]);

    const [ga, setGa] = useState(null);
    const [na, setNa] = useState(null);
    const [da, setDa] = useState(null);
    const [ra, setRa] = useState(null);
    const [ma, setMa] = useState(null);
    const [ba, setBa] = useState(null);
    const [sa, setSa] = useState(null);
    const [aa, setAa] = useState(null);
    const [ja, setJa] = useState(null);
    const [ca, setCa] = useState(null);
    const [ka, setKa] = useState(null);
    const [ta, setTa] = useState(null);
    const [fa, setFa] = useState(null);
    const [ha, setHa] = useState(null);

    const getList = () =>{
        axios.get('http://144.24.94.124:8091/api/v1/gookie/list',{})
            .then(res=> {
                console.log(res.data.data);
                res.data.data.forEach((item)=>{
                    // const ga = /[ㄱ-ㄱ|ㅏ-ㅣ|가-깋]/;
                    // if(ga.test(item.hg_nm.charAt(0))){
                    //     setGa(item);
                    // }
                    // const na = /[ㄴ-ㄴ|ㅏ-ㅣ|나-닣]/;
                    // if(na.test(item.hg_nm.charAt(0))){
                    //     setNa(item);
                    // }
                    // const da = /[ㄷ-ㄷ|ㅏ-ㅣ|다-딯]/;
                    // if(da.test(item.hg_nm.charAt(0))){
                    //     setDa(item);
                    // }
                    // const ra = /[ㄹ-ㄹ|ㅏ-ㅣ|라-맇]/;
                    // if(ra.test(item.hg_nm.charAt(0))){
                    //     setRa(item);
                    // }
                    // const ma = /[ㅁ-ㅁ|ㅏ-ㅣ|마-밓]/;
                    // if(ma.test(item.hg_nm.charAt(0))){
                    //     setMa(item);
                    // }
                    // const ba = /[ㅂ-ㅂ|ㅏ-ㅣ|바-빟]/;
                    // if(ba.test(item.hg_nm.charAt(0))){
                    //     setBa(item);
                    // }
                    // const sa = /[ㅅ-ㅅ|ㅏ-ㅣ|사-싷]/;
                    // if(sa.test(item.hg_nm.charAt(0))){
                    //     setSa(item);
                    // }
                    // const aa = /[ㅇ-ㅇ|ㅏ-ㅣ|아-잏]/;
                    // if(aa.test(item.hg_nm.charAt(0))){
                    //     setAa(item);
                    // }
                    // const ja = /[ㅈ-ㅈ|ㅏ-ㅣ|자-짛]/;
                    // if(ja.test(item.hg_nm.charAt(0))){
                    //     setJa(item);
                    // }
                    // const ca = /[ㅊ-ㅊ|ㅏ-ㅣ|차-칳]/;
                    // if(ca.test(item.hg_nm.charAt(0))){
                    //     setCa(item);
                    // }
                    // const ka = /[ㅋ-ㅋ|ㅏ-ㅣ|카-킿]/;
                    // if(ka.test(item.hg_nm.charAt(0))){
                    //     setKa(item);
                    // }
                    // const ta = /[ㅌ-ㅌ|ㅏ-ㅣ|타-팋]/;
                    // if(ta.test(item.hg_nm.charAt(0))){
                    //     setTa(item);
                    // }
                    // const fa = /[ㅍ-ㅍ|ㅏ-ㅣ|파-핗]/;
                    // if(fa.test(item.hg_nm.charAt(0))){
                    //     setFa(item);
                    // }
                    // const ha = /[ㅎ-ㅎ|ㅏ-ㅣ|하-힣]/;
                    // if(ha.test(item.hg_nm.charAt(0))){
                    //     setHa(item);
                    // }


                })
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

    useEffect(() => {
        try {
            setDatas(data);
            setLoading(false);
        } catch (e) {
            console.log(e.message);
        }
        getList();
    }, []);

    return (
        <View style={{height:"100%"}}>
            <ScrollView
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
                                        setTab(0)
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
                                        setTab(1)
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
                                        setTab(2)
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
                            data={datas}
                            renderItem={({item}) => {
                                return(
                                    <View style={commonStyles.mb32}>
                                        <View style={{borderBottomWidth:8, borderColor:"#f8f7f7", width:"100%"}}>
                                            <View style={{paddingHorizontal:32, paddingBottom:8,}}>
                                                <Text style={styles.congressAling}>{item.title}</Text>
                                            </View>
                                        </View>
                                        <View style={{paddingHorizontal:24,}}>
                                            <FlatList
                                                data={item.content}
                                                renderItem={(conItem) => {
                                                    return(
                                                        <View>
                                                            <TouchableOpacity
                                                                activeOpacity={1}
                                                                onPress ={() => {navigation.navigate('Detail')}}
                                                            >
                                                                <View style={{flexDirection:"row", justifyContent:"space-between", borderBottomWidth:1, borderColor:"#eee", paddingVertical:12, paddingHorizontal:8,}}>
                                                                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center",}}>
                                                                        <Text style={styles.congressName}>{conItem.item.name}</Text>
                                                                        <Text style={styles.congressParty}>{conItem.item.group}</Text>
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
                                                }}
                                            />
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    }
                </View>
            </ScrollView>
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
}

const styles = StyleSheet.create({
    searchTit:{
        textAlign:"center",
        fontSize:16,
        fontFamily:"pre700",
        letterSpacing:-0.32,
        color:"#313131",
        paddingVertical:24,
        lineHeight:20,
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
        fontFamily:"pre700",
        letterSpacing:-0.56,
        color:"#fff",
        lineHeight:18,
    },
    tabTextOff:{
        fontSize:14,
        fontFamily:"pre700",
        letterSpacing:-0.56,
        color:"#f4933a",
        lineHeight:18,
    },
    congressAling:{
        fontSize:16,
        fontFamily:"pre700",
        letterSpacing:-0.32,
        color:"#f4933a",
        lineHeight:20,
    },
    congressName:{
        fontSize:14,
        fontFamily:"pre700",
        letterSpacing:-0.28,
        color:"#313131",
        marginRight:24,
        lineHeight:18,
    },
    congressParty:{
        fontSize:12,
        fontFamily:"pre400",
        letterSpacing:-0.24,
        color:"#b1b1b1",
        lineHeight:16,
    },

})
