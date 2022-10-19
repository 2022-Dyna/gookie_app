import { useState } from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, ScrollView, ImageBackground, Image} from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import {commonStyles} from '../../common/index'

export default function Detail({ navigation }) {

    const [tab , setTab] = useState(0);
    const party = [
        {id: 1, name:"더불어민주당", src: require('../../img/detail_img.png')},
        {id: 2, name:"정의당", src: require('../../img/detail_profile.png')},
    ];

    return (
        <ScrollView>
            <View style={{height:180}}>
                <ImageBackground source={party[0].src} resizeMode="cover">
                    <View style={{flexDirection:"row", justifyContent:"flex-end", height:'100%', marginTop:16, marginRight:16}}>
                        <View>
                            <Text style={styles.markText}>
                                2039
                            </Text>
                        </View>
                        <View>
                            <Icons.StarIcon color="#fff" size={25}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={commonStyles.inner}>
                <View style={{justifyContent:"center", alignItems:"center", marginTop:-100,}}>
                    <View style={{width:160, height:160, borderWidth:5, borderRadius:85, borderColor:"#fff"}}>
                        <ImageBackground
                            source={require("../../img/detail_profile.png")}
                            resizeMode="cover"
                            style={{width:"100%", height:"100%",}}
                        >

                        </ImageBackground>
                    </View>
                </View>
                <View style={{justifyContent:"center", alignItems:"center", marginTop:24}}>
                    <Text style={styles.profileName}>
                        김대윤
                    </Text>
                    <Text style={styles.profileSubName}>
                        {party[0].name}
                    </Text>
                </View>
                <View style={{flexDirection:"row", marginTop:32, borderWidth:1, borderRadius:8, borderColor:"#f4933a"}}>
                    <TouchableOpacity
                        style={{flex:1}}
                        onPress={() => setTab(0)}
                    >
                        <View style={!tab ? styles.tabOrange : styles.tabWhite}>
                            <Text style={!tab ? styles.tabOrangeText : styles.tabWhiteText}>
                                약력
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flex:1}}
                        onPress={() => setTab(1)}
                    >
                        <View style={tab ? styles.tabOrange : styles.tabWhite}>
                            <Text style={tab ? styles.tabOrangeText : styles.tabWhiteText}>
                                댓글
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {tab === 0 ? (
                    <View>
                        <View style={{flexDirection:"row", marginTop:40}}>
                            <View style={{flex:1, marginRight:24}}>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor:"#eee", paddingBottom:8}}>
                                    <View>
                                        <Icons.CakeIcon color="#f4933a" size={25} style={commonStyles.mr8}/>
                                    </View>
                                    <View>
                                        <Text style={styles.historyText}>생년월일</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.historyTextSubText}>1983년 10월 12일</Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor:"#eee", paddingBottom:8}}>
                                    <View>
                                        <Icons.PhoneIcon color="#f4933a" size={25} style={commonStyles.mr8}/>
                                    </View>
                                    <View>
                                        <Text style={styles.historyText}>전화번호</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.historyTextSubText}>02)2384-1234</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", marginTop:40}}>
                            <View style={{flex:1, marginRight:24}}>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor:"#eee", paddingBottom:8}}>
                                    <View>
                                        <Icons.BriefcaseIcon color="#f4933a" size={25} style={commonStyles.mr8}/>
                                    </View>
                                    <View>
                                        <Text style={styles.historyText}>국회참석률</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"flex-end"}}>
                                    <View>
                                        <Text style={styles.historyBigText}>38</Text>
                                    </View>
                                    <View>
                                        <Text style={[styles.historyTextSubText, {marginBottom:5}]}>%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor:"#eee", paddingBottom:8}}>
                                    <View>
                                        <Icons.ChatBubbleLeftEllipsisIcon color="#f4933a" size={25} style={commonStyles.mr8}/>
                                    </View>
                                    <View>
                                        <Text style={styles.historyText}>댓글 응답률</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"flex-end"}}>
                                    <View>
                                        <Text style={styles.historyBigText}>38</Text>
                                    </View>
                                    <View>
                                        <Text style={[styles.historyTextSubText, {marginBottom:5}]}>%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:40}}>
                            <View style={{flex:1, marginRight:24}}>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor:"#eee", paddingBottom:8}}>
                                    <View>
                                        <Icons.HandThumbUpIcon color="#f4933a" size={25} style={commonStyles.mr8}/>
                                    </View>
                                    <View>
                                        <Text style={styles.historyText}>발의한 안건</Text>
                                    </View>
                                </View>
                                <View style={{marginTop:8}}>
                                    <View style={{marginTop:8}}>
                                        <TouchableOpacity>
                                            <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                                                <View style={{marginRight:32, flex:30,}}>
                                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.historyTextSubText02}>문화예술진흥법 일부개정법률안(대안)(문화머시기머시기)</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Icons.ChevronRightIcon color="rgb(217,217,217)" size={25} style={commonStyles.mr8}/>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginTop:8}}>
                                        <TouchableOpacity>
                                            <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                                                <View style={{marginRight:32, flex:30,}}>
                                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.historyTextSubText02}>문화예술진흥법 일부개정법률안(대안)(문화머시기머시기)</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Icons.ChevronRightIcon color="rgb(217,217,217)" size={25} style={commonStyles.mr8}/>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:40}}>
                            <View style={{flex:1, marginRight:24}}>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor:"#eee", paddingBottom:8}}>
                                    <View>
                                        <Icons.HandThumbDownIcon color="#f4933a" size={25} style={commonStyles.mr8}/>
                                    </View>
                                    <View>
                                        <Text style={styles.historyText}>반대한 안건</Text>
                                    </View>
                                </View>
                                <View style={{marginTop:8}}>
                                    <View style={{marginTop:8}}>
                                        <TouchableOpacity>
                                            <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                                                <View style={{marginRight:32, flex:30,}}>
                                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.historyTextSubText02}>문화예술진흥법 일부개정법률안(대안)(문화머시기머시기)</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Icons.ChevronRightIcon color="rgb(217,217,217)" size={25} style={commonStyles.mr8}/>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginTop:8}}>
                                        <TouchableOpacity>
                                            <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                                                <View style={{marginRight:32, flex:30,}}>
                                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.historyTextSubText02}>문화예술진흥법 일부개정법률안(대안)(문화머시기머시기)</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Icons.ChevronRightIcon color="rgb(217,217,217)" size={25} style={commonStyles.mr8}/>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:40}}>
                            <View style={{flex:1, marginRight:24}}>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor:"#eee", paddingBottom:8}}>
                                    <View>
                                        <Icons.IdentificationIcon color="#f4933a" size={25} style={commonStyles.mr8}/>
                                    </View>
                                    <View>
                                        <Text style={styles.historyText}>학력 및 경력</Text>
                                    </View>
                                </View>
                                <View>
                                    <View>
                                        <Text style={[styles.historyTextSubText02, {marginTop:24}]}>
                                            [학력]
                                        </Text>
                                        <Text style={styles.historyTextSubText03}>
                                            마산공고(26회){"\n"}
                                            창원대학교 행정학과{"\n"}
                                            중앙대학교 행정대학원 지방의회과 석사{"\n"}
                                            창원대학교 대학원 행정학 박사
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <View>
                                        <Text style={[styles.historyTextSubText02, {marginTop:24}]}>
                                            [경력]
                                        </Text>
                                        <Text style={styles.historyTextSubText03}>
                                            현) 국회 보건복지위원회 국민의힘 간사{"\n"}
                                            현) 국민의힘 소상공인살리기 특별위원회 부위원장{"\n"}
                                            현) 국민의힘 코로나19 대책 특별위원회 위원
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <View>
                                        <Text style={[styles.historyTextSubText03, {marginTop:24}]}>
                                            미래통합당 경남도당 민생특위 위원장{"\n"}
                                            제19대 국회의원 (새누리당/경남 창원시 성산구){"\n"}
                                            새누리당 원내부대표
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                ) :
                (
                    <View>
                        <Text>456</Text>
                    </View>
                )}

            </View>
            
        </ScrollView>
    );

    
}
const styles = StyleSheet.create({
    markText:{
        fontSize:16,
        color:"#fff",
        fontWeight:"500",
        letterSpacing:0.32,
        marginRight:8
    },
    profileName:{
        fontSize:28,
        fontWeight:"bold",
        color:"#313131",
        letterSpacing:-1.12,
    },
    profileSubName:{
        fontSize:18,
        color:"#b1b1b1",
        fontWeight:"bold",
        letterSpacing:-0.72,
        marginTop:8
    },
    tabOrange:{
        height:50,
        backgroundColor:"#f4933a",
        borderRadius:6,
        justifyContent:"center",
        alignItems:"center",
    },
    tabWhite:{
        height:50,
        justifyContent:"center",
        alignItems:"center",
    },
    tabOrangeText:{
        fontSize:14,
        color:"#fff",
        letterSpacing:-0.28,
        fontWeight:"bold"
    },
    tabWhiteText:{
        fontSize:14,
        color:"#f4933a",
        letterSpacing:-0.28,
        fontWeight:"bold"
    },
    historyText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#7b7b7b",
        letterSpacing:-0.72,
    },
    historyTextSubText:{
        marginTop:24,
        fontSize:14,
        color:"#7b7b7b",
        fontWeight:"normal",
        letterSpacing:-0.28,
    },
    historyBigText:{
        fontSize:36,
        fontWeight:"bold",
        color:"#313131",
        letterSpacing:-1.44,
        marginRight:8,
        lineHeight:36,
    },
    historyTextSubText02:{
        fontSize:14,
        color:"#7b7b7b",
        fontWeight:"normal",
        letterSpacing:-0.28,
    },
    historyTextSubText03:{
        fontSize:14,
        color:"#7b7b7b",
        fontWeight:"normal",
        letterSpacing:-0.28,
        lineHeight:22,
    },

});