import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import { useState } from 'react';
import * as Icons from 'react-native-heroicons/outline';
import { commonStyles } from "../../common";

export default function ScreenA({ navigation }) {
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
                    name: "노용호",
                    group: "더불어민주당"
                },
            ]
        }
    ];


    //즐겨찾기 클릭시 색변경
    const [markLike, setMarkLike] = useState(false);

    //탭변경
    const [tab, setTab] = useState(0);

    return (
        <View>
            <ScrollView
                contentContainerStyle={{paddingBottom:24}}
            >
                <View>
                    <Text style={styles.searchTit}>
                        의원찾기
                    </Text>
                </View>
                <View style={commonStyles.inner}>
                    <View style={{flexDirection:"row", marginTop:24, borderWidth:1, borderColor:"#f4933a", borderRadius:8, height:48,}}>
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
                    data={data}
                    renderItem={({item}) => {
                        return(
                            <View style={commonStyles.mt32}>
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
                                                            }}
                                                            style={{flex:1}}
                                                        >
                                                            <Icons.StarIcon color={markLike ? "#f4933a" : "rgba(217,217,271,1)"} size={18} fill={markLike ? "#f4933a" : "transparent"} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            )
                                        }}
                                    />
                                </View>
                            </View>
                        )
                    }}
                />
            </ScrollView>
        </View>
    );
}

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
