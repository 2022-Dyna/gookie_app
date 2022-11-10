import {useEffect, useReducer, useRef, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView,
    ImageBackground,
    Modal,
    Pressable,
    FlatList,
    Image,
    RefreshControl, Linking
} from 'react-native';

import * as Icons from 'react-native-heroicons/outline';
import {commonStyles} from '../../common/index';
import ConfirmModal from '../../Component/ConfirmModal';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../Component/Loader';

export default function Detail({navigation, route}) {
    console.log(route);
    const loginState = {
        login: true,
        isCon: true,
        email: 'ezicland@naver.com',
        name: '손동윤',
        userCd: 1
    }
    const arr = [
        {
            name: '손동윤',
            content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅎㅇㅎㅇㅎㅇㅎ1',
            regiDt: '2022.10.14',
            like: 10,
            userCd: 2,
            commentCd: 1125125,
            reComment: [
                {
                    con_name: '김대윤',
                    con_content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎ',
                    con_regiDt: '123123',
                    con_like: 5,
                    con_user_cd: 1,
                    con_commentCd: 0,
                },
            ],
        },
        {
            name: '손동윤',
            content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅎㅇㅎㅇㅎㅇㅎ1',
            regiDt: '2022.10.14',
            like: 10,
            userCd: 2,
            commentCd: 1125125,
            reComment: [
                {
                    con_name: '김대윤',
                    con_content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎ',
                    con_regiDt: '123123',
                    con_like: 5,
                    con_user_cd: 1,
                    con_commentCd: 0,
                },
            ],
        },
        {
            name: '손동윤',
            content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅎㅇㅎㅇㅎㅇㅎ1',
            regiDt: '2022.10.14',
            like: 10,
            userCd: 2,
            commentCd: 1125125,
            reComment: [
                {
                    con_name: '김대윤',
                    con_content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎ',
                    con_regiDt: '123123',
                    con_like: 5,
                    con_user_cd: 1,
                    con_commentCd: 0,
                },
            ],
        },
        {
            name: '손동윤',
            content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅎㅇㅎㅇㅎㅇㅎ1',
            regiDt: '2022.10.14',
            like: 10,
            userCd: 2,
            commentCd: 1125125,
            reComment: [
                {
                    con_name: '김대윤',
                    con_content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎ',
                    con_regiDt: '123123',
                    con_like: 5,
                    con_user_cd: 1,
                    con_commentCd: 0,
                },
            ],
        },
        {
            name: '손동윤',
            content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅎㅇㅎㅇㅎㅇㅎ1',
            regiDt: '2022.10.14',
            like: 10,
            userCd: 2,
            commentCd: 1125125,
            reComment: [
                {
                    con_name: '김대윤',
                    con_content: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎ',
                    con_regiDt: '123123',
                    con_like: 5,
                    con_user_cd: 1,
                    con_commentCd: 0,
                },
            ],
        },

    ];
    const [detailProfie, setDetailProfie] = useState(null);
    const [partyNum, setPartyNum] = useState(0);

    const [loading, setLoading] = useState(true);
    const [comItemLoading, setComItemLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [datas, setDatas] = useState([]);
    const [pageOptions, setPageOptions] = useState({num: 20, page: 1});
    const [loginUser, setLoginUser] = useState(null);

    const commentDataLoad = () => {
        setDatas(
            arr.filter((item, index) => {
                if (index < pageOptions.num * pageOptions.page) {
                    return item;
                }
            }),
        );
        setPageOptions(state => ({...pageOptions, page: state.page + 1}));
    };

    const totalPage = Math.ceil(arr.length / pageOptions.num);
    const pageLoad = () => {
        if (pageOptions.page <= totalPage) {
            commentDataLoad();
        } else {
            setComItemLoading(false);
        }
    };

    const pageRefresh = () => {
        if (!refreshing) {
            setRefreshing(true);
            setDatas([]);
            getReply(1);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        //페이지전환 이후 약력 데이터를 받아온 후
        const load = async () =>{
            const loginUser = await AsyncStorage.getItem("loginUser");
            if(loginUser!=null && loginUser!= undefined){
                const loginObj = JSON.parse(loginUser);
                console.log(loginObj,'zzzzzzzzz');
                setLoginUser(loginObj);
            }
        }
        load();
        // commentDataLoad();
    }, []);

    //텝전환
    const [tab, setTab] = useState(0);

    //배경 및 당변경
    const party = [
        {id: 1, name: '더불어민주당', src: require('../../img/detail_img01.png')},
        {id: 2, name: '국민의힘', src: require('../../img/detail_img02.png')},
        {id: 3, name: '정의당', src: require('../../img/detail_img03.png')},
        {id: 4, name: '국민의당', src: require('../../img/detail_img04.png')},
        {id: 5, name: '열린민주당', src: require('../../img/detail_img05.png')},
        {id: 6, name: '기본소득당', src: require('../../img/detail_img06.png')},
        {id: 7, name: '시대전환', src: require('../../img/detail_img07.png')},
        {id: 8, name: '무소속', src: require('../../img/detail_img08.png')},
    ];


    //1. 국회의원 디테일 통신
    const getDetail = (loginUserObj) => {
        axios.get('http://144.24.94.124:8091/api/v1/gookie/detail', {
            params: {
                monaCd: route != null && route.params != null ? route.params.monaCd : '0VU8517t',
                member_id:loginUserObj!=null?loginUserObj.memberId:''
            }
        }).then(res => {
            const bthArr = res.data.data.result.bthDate.split('-');
            const telNoArr = res.data.data.result.telNo.split('-');
            res.data.data.result.bthDate = `${bthArr[0]}년 ${bthArr[1]}월 ${bthArr[2]}일`
            res.data.data.result.telNo = `${telNoArr[0]}) ${telNoArr[1]} - ${telNoArr[2]}`
            res.data.data.result.meetingAtt = res.data.data.meetingAtt;
            res.data.data.result.replyPer = res.data.data.replyPer;
            res.data.data.result.myProposal = res.data.data.myProposal;
            // console.log(res.data.data.result,'test!!');
            console.log(res.data.data.result.myFv,'???');
            // console.log(res.data.data.myProposal,'test!!');
            if(res.data.data.result.myFv==null||res.data.data.result.myFv==0){
                setMarkLike(false);
            }else if(res.data.data.result.myFv==1){
                setMarkLike(true);
            }
            const detailObj = res.data.data.result;
            setDetailProfie(detailObj);
            switch (detailObj.polyNm) {
                case '더불어민주당':
                    setPartyNum(0);
                    break;
                case '국민의힘':
                    setPartyNum(1);
                    break;
                case '정의당':
                    setPartyNum(2);
                    break;
                case '국민의당':
                    setPartyNum(3);
                    break;
                case '열린민주당':
                    setPartyNum(4);
                    break;
                case '기본소득당':
                    setPartyNum(5);
                    break;
                case '시대전환':
                    setPartyNum(6);
                    break;
                case '무소속':
                    setPartyNum(7);
                    break;
            }
        });
    };

    const insFavorites = async () =>{
        console.log(loginUser.memberId);
        console.log(route.params.monaCd);
        axios.get('http://144.24.94.124:8091/api/v1/mypage/insfavorites',{
            params:{
                memberId:loginUser.memberId,
                monaCd:route.params.monaCd,
            }

        }).then(res=>{

        })
    }

    const getReply = async (num) =>{
        const user = await AsyncStorage.getItem('loginUser');
        let userObj = null;
        if(user!=null){
            userObj = JSON.parse(user);
        }
        let paramObj = {pageNum:num,
            monaCd:route.params.monaCd,};
        if(userObj!=null){
            paramObj = {
                ...paramObj,
                memberId:userObj.memberId
            }
        }
        axios.get('http://144.24.94.124:8091/api/v1/reply/search',{
            params:paramObj
        }).then(res=>{
            setDatas(state=>{
                const arr = state.concat(res.data.data.replyList);
                return arr;
            })
            console.log(res.data.data.replyList,'제발');
            setPageData(res.data.data.pagination);
            setPageNum(num);
            setComItemLoading(false);
        })
    }

    const insReply = async () =>{

        axios.post('http://144.24.94.124:8091/api/v1/reply/write',{
            memberId : loginUser!=null?loginUser.memberId:0,
            monaCd : route.params.monaCd,
            replyContent : inputValue


        }).then(res=>{
            getReply(1);
        })
    }

    const conInsReply = async () =>{

        axios.post('http://144.24.94.124:8091/api/v1/congressReply/write',{
            memberId : loginUser!=null?loginUser.memberId:0,
            replyId : commentCdId,
            congressReplyContent : inputValue


        }).then(res=>{
            getReply(1);
        })
    }

    const editReply = async () =>{

        axios.post('http://144.24.94.124:8091/api/v1/reply/rewrite',{
            memberId : loginUser!=null?loginUser.memberId:0,
            replyId : commentCdId,
            replyContent : inputValue


        }).then(res=>{
            getReply(1);
        })
    }

    const conEditReply = async () =>{

        axios.post('http://144.24.94.124:8091/api/v1/congressReply/rewrite',{
            memberId : loginUser!=null?loginUser.memberId:0,
            congressReplyId : commentCdId,
            congressReplyContent : inputValue


        }).then(res=>{
            getReply(1);
        })
    }

    const delReply = async () =>{

        axios.post('http://144.24.94.124:8091/api/v1/reply/delete',{
            memberId : loginUser!=null?loginUser.memberId:0,
            replyId : commentCdId,



        }).then(res=>{
            getReply(1);
        })
    }

    const conDelReply = async () =>{

        axios.post('http://144.24.94.124:8091/api/v1/congressReply/delete',{
            memberId : loginUser!=null?loginUser.memberId:0,
            congressReplyId : commentCdId,



        }).then(res=>{
            getReply(1);
        })
    }
    const likeRequest = async (replyId,likesType) =>{

        axios.post('http://144.24.94.124:8091/api/v1/likes',{
            replyId : replyId,
            memberId : loginUser!=null?loginUser.memberId:0,
            likesType:likesType

        }).then(res=>{
            getReply(1);
        })
    }



    useEffect(() => {
        setTimeout(()=>setLoading(false),1000)
        const load = async () => {
            const loginUser = await AsyncStorage.getItem('loginUser');
            let loginUserObj = null;
            if(loginUser!=null){
                loginUserObj = JSON.parse(loginUser); // async storage에 담긴 로그인유저 객체
            }
            await getDetail(loginUserObj);
            await getReply(pageOptions.page);
        };
        load();
    }, []);



    //인풋창 텍스트 변경관련
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    let disabled = false;
    inputValue.length !== 0 ? (disabled = false) : (disabled = true);

    //좋아요클릭시 색변경
    const [like, setLike] = useState(false);

    //즐겨찾기 클릭시 색변경
    const [markLike, setMarkLike] = useState(false);

    //모달
    const [modalUp, setModalUp] = useState(false);
    const [modalDeleteComment, setModalDeleteComment] = useState(false);
    const [modalCheck, setModalCheck] = useState(false);
    const [modalLoginCheck, setModalLoginCheck] = useState(false);
    const [modalCommentSort, setModalCommentSort] = useState(false);
    const [modalCancel, setModalCancel] = useState(false);

    //btn state
    const [btnState, setBtnState] = useState(0);

    //내댓글 클릭시 변경관련
    const [mine, setMine] = useState(false);
    const [commentCdId, setCommentCdId] = useState(null);

    //페이징
    const [pageNum ,setPageNum] = useState(1);
    const [pageData ,setPageData] = useState(null);

    //댓글달기
    const nowDate = new Date().toLocaleDateString();
    const commentNum = useRef(0);
    const addComment = async () => {
        setDatas([]);
        await insReply();

        setInputValue('');
        inputRef.current.blur();
        commentNum.current++;
        setCommentCdId(null);
    };

    //대댓글달기
    const reCommentNum = useRef(0);
    const addReComment = async () => {
        setDatas([]);
        await conInsReply();
        setInputValue('');
        inputRef.current.blur();
        setBtnState(0);
        reCommentNum.current++;
        setCommentCdId(null);
    };
    //내 대댓글 수정하기
    const editReComment = async () => {
        setDatas([]);
        await conEditReply();
        setInputValue('');
        inputRef.current.blur();
        setBtnState(0);
        setCommentCdId(null);
    };

    //댓글 수정
    const editComment = async () => {
        setDatas([]);
        await editReply();
        setInputValue('');
        inputRef.current.blur();
        setBtnState(0);
        setCommentCdId(null);
    };

    console.log(pageData);

    //확인버튼
    const onConfirm = () => {
        if (loginUser!=null&&loginUser.memberRole!='MEMBER') {
            if (btnState === 0) {
                return;
            } else if (btnState === 1) {
                addReComment();
                return;
            } else if (btnState === 2) {
                editReComment();
                return;
            }
        } else {
            if (btnState === 0) {
                addComment();
            } else if (btnState === 1) {
                return;
            } else if (btnState === 2) {
                editComment();
                return;
            }
        }
    };

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 10;
        return (
            layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom
        );
    };

    return (
        <View style={{position: 'relative', height: '100%'}}>
            {loading ? (
                <Loader type={'full'}/>
            ) : (

                <ScrollView
                    onScroll={({nativeEvent}) => {
                        if (isCloseToBottom(nativeEvent) && tab == 1) {
                            if(pageData!=null&&pageData.maxPage>pageNum){
                                setComItemLoading(true);
                                getReply(pageNum+1);
                            }
                        }
                    }}
                    refreshControl={
                        <RefreshControl onRefresh={pageRefresh} refreshing={refreshing}/>
                    }>
                    <View style={{height: 180}}>
                        <ImageBackground source={detailProfie!=null&&party[partyNum].src} resizeMode="cover">
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    height: '100%',
                                    marginTop: 16,
                                    marginRight: 16,
                                }}>
                                <View
                                    style={{position: 'absolute', left: 16, top: 0, zIndex: 10}}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {
                                            navigation.goBack();
                                        }}>
                                        <Icons.ChevronLeftIcon color="#fff" size={24}/>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                        height: 25,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    {detailProfie != null &&
                                        <Text style={styles.markText}>{detailProfie.count}</Text>
                                    }
                                    {detailProfie!=null&&detailProfie.myFv!=null&&detailProfie.myFv!=undefined&&
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            onPress={() => {

                                            if (markLike) {
                                            setModalCancel(true);
                                            }else {
                                                insFavorites();
                                                setDetailProfie({
                                                    ...detailProfie,
                                                    count:Number(detailProfie.count)+1
                                                })
                                                setMarkLike(!markLike);
                                            }
                                            }}>
                                        <Icons.StarIcon
                                        color={markLike ? '#ffbd12' : '#fff'}
                                        size={25}
                                        fill={markLike ? '#ffbd12' : 'transparent'}
                                        />
                                        </TouchableOpacity>
                                    }
                                    {detailProfie!=null&&(detailProfie.myFv==null||detailProfie.myFv==undefined)&&
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            onPress={() => {
                                                setMarkLike(false);
                                                setModalLoginCheck(true);
                                            }}>
                                            <Icons.StarIcon
                                                color={markLike ? '#ffbd12' : '#fff'}
                                                size={25}
                                                fill={markLike ? '#ffbd12' : 'transparent'}
                                            />
                                        </TouchableOpacity>
                                    }

                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <View style={commonStyles.inner}>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: -100,
                                }}>
                                <View
                                    style={{
                                        width: 160,
                                        height: 160,
                                        borderWidth: 5,
                                        borderRadius: 85,
                                        borderColor: '#fff',
                                    }}>
                                    <Image
                                        source={{uri: `https://www.assembly.go.kr/static/portal/img/openassm/${route != null && route.params != null ? route.params.monaCd : '0VU8517t'}.jpg`}}
                                        resizeMode="cover"
                                        style={{width: '100%', height: '100%', borderRadius: 85}}></Image>
                                </View>
                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 24,
                                }}>
                                <Text style={styles.profileName}>
                                    {`${detailProfie != null ? detailProfie.hgNm : ''}`}
                                </Text>
                                <Text style={styles.profileSubName}>
                                    {detailProfie != null ?party[partyNum].name:''}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 32,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    borderColor: '#f4933a',
                                }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{flex: 1}}
                                    onPress={() => setTab(0)}>
                                    <View style={!tab ? styles.tabOrange : styles.tabWhite}>
                                        <Text
                                            style={!tab ? styles.tabOrangeText : styles.tabWhiteText}>
                                            약력
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{flex: 1}}
                                    onPress={() => setTab(1)}>
                                    <View style={tab ? styles.tabOrange : styles.tabWhite}>
                                        <Text
                                            style={tab ? styles.tabOrangeText : styles.tabWhiteText}>
                                            댓글
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {tab === 0 ? (
                            <View style={commonStyles.inner}>
                                <View style={{flexDirection: 'row', marginTop: 40}}>
                                    <View style={{flex: 1, marginRight: 24}}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderBottomWidth: 1,
                                                borderColor: '#eee',
                                                paddingBottom: 8,
                                                alignItems: 'flex-end',
                                            }}>
                                            <View>
                                                <Icons.CakeIcon
                                                    color="#f4933a"
                                                    size={25}
                                                    style={commonStyles.mr8}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.historyText}>생년월일</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.historyTextSubText}>{`${
                                                detailProfie != null && detailProfie.bthDate
                                            }`}</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderBottomWidth: 1,
                                                borderColor: '#eee',
                                                paddingBottom: 8,
                                                alignItems: 'flex-end',
                                            }}>
                                            <View>
                                                <Icons.PhoneIcon
                                                    color="#f4933a"
                                                    size={25}
                                                    style={commonStyles.mr8}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.historyText}>전화번호</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.historyTextSubText}>{`${
                                                detailProfie != null ? detailProfie.telNo : 'a'
                                            }`}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 40}}>
                                    <View style={{flex: 1, marginRight: 24}}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderBottomWidth: 1,
                                                borderColor: '#eee',
                                                paddingBottom: 8,
                                                alignItems: 'flex-end',
                                            }}>
                                            <View>
                                                <Icons.BriefcaseIcon
                                                    color="#f4933a"
                                                    size={25}
                                                    style={commonStyles.mr8}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.historyText}>국회참석률</Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                            <View>
                                                <Text style={styles.historyBigText}>{`${
                                                    detailProfie != null ? detailProfie.meetingAtt : '0'
                                                }`}</Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={[
                                                        styles.historyTextSubText,
                                                        {marginBottom: 5},
                                                    ]}>
                                                    %
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderBottomWidth: 1,
                                                borderColor: '#eee',
                                                paddingBottom: 8,
                                                alignItems: 'flex-end',
                                            }}>
                                            <View>
                                                <Icons.ChatBubbleLeftEllipsisIcon
                                                    color="#f4933a"
                                                    size={25}
                                                    style={commonStyles.mr8}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.historyText}>댓글 응답률</Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                            <View>
                                                <Text style={styles.historyBigText}>{`${
                                                    detailProfie != null ? detailProfie.replyPer : '0'
                                                }`}</Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={[
                                                        styles.historyTextSubText,
                                                        {marginBottom: 5},
                                                    ]}>
                                                    %
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 40}}>
                                    <View style={{flex: 1, marginRight: 24}}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderBottomWidth: 1,
                                                borderColor: '#eee',
                                                paddingBottom: 8,
                                                alignItems: 'flex-end',
                                            }}>
                                            <View>
                                                <Icons.HandThumbUpIcon
                                                    color="#f4933a"
                                                    size={25}
                                                    style={commonStyles.mr8}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.historyText}>발의한 안건</Text>
                                            </View>
                                        </View>
                                        <View style={{marginTop: 8}}>
                                            {detailProfie!=null && detailProfie.myProposal!=null && detailProfie.myProposal.length>0&&detailProfie.myProposal.map((item,index)=>{
                                                return(
                                                    <View style={{marginTop: 8}}>
                                                        <TouchableOpacity
                                                            onPress={()=>{
                                                                // navigation.navigate('WebViewPage',{link:item.DETAIL_LINK})
                                                                Linking.openURL(item.DETAIL_LINK);
                                                            }}
                                                            activeOpacity={1}
                                                        >
                                                            <View
                                                                style={{
                                                                    flexDirection: 'row',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                }}>
                                                                <View style={{marginRight: 32, flex: 30}}>
                                                                    <Text
                                                                        numberOfLines={1}
                                                                        ellipsizeMode="tail"
                                                                        style={styles.historyTextSubText02}>
                                                                        {item.BILL_NAME}
                                                                    </Text>
                                                                </View>
                                                                <View style={{flex: 1}}>
                                                                    <Icons.ChevronRightIcon
                                                                        color="rgb(217,217,217)"
                                                                        size={25}
                                                                        style={commonStyles.mr8}
                                                                    />
                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    )

                                            })}

                                        </View>
                                    </View>
                                </View>
                                {/*<View style={{marginTop: 40}}>*/}
                                {/*    <View style={{flex: 1, marginRight: 24}}>*/}
                                {/*        <View*/}
                                {/*            style={{*/}
                                {/*                flexDirection: 'row',*/}
                                {/*                borderBottomWidth: 1,*/}
                                {/*                borderColor: '#eee',*/}
                                {/*                paddingBottom: 8,*/}
                                {/*                alignItems: 'flex-end',*/}
                                {/*            }}>*/}
                                {/*            <View>*/}
                                {/*                <Icons.HandThumbDownIcon*/}
                                {/*                    color="#f4933a"*/}
                                {/*                    size={25}*/}
                                {/*                    style={commonStyles.mr8}*/}
                                {/*                />*/}
                                {/*            </View>*/}
                                {/*            <View>*/}
                                {/*                <Text style={styles.historyText}>반대한 안건</Text>*/}
                                {/*            </View>*/}
                                {/*        </View>*/}
                                {/*        <View style={{marginTop: 8}}>*/}
                                {/*            <View style={{marginTop: 8}}>*/}
                                {/*                <TouchableOpacity>*/}
                                {/*                    <View*/}
                                {/*                        style={{*/}
                                {/*                            flexDirection: 'row',*/}
                                {/*                            justifyContent: 'space-between',*/}
                                {/*                            alignItems: 'center',*/}
                                {/*                        }}>*/}
                                {/*                        <View style={{marginRight: 32, flex: 30}}>*/}
                                {/*                            <Text*/}
                                {/*                                numberOfLines={1}*/}
                                {/*                                ellipsizeMode="tail"*/}
                                {/*                                style={styles.historyTextSubText02}>*/}
                                {/*                                문화예술진흥법*/}
                                {/*                                일부개정법률안(대안)(문화머시기머시기)*/}
                                {/*                            </Text>*/}
                                {/*                        </View>*/}
                                {/*                        <View style={{flex: 1}}>*/}
                                {/*                            <Icons.ChevronRightIcon*/}
                                {/*                                color="rgb(217,217,217)"*/}
                                {/*                                size={25}*/}
                                {/*                                style={commonStyles.mr8}*/}
                                {/*                            />*/}
                                {/*                        </View>*/}
                                {/*                    </View>*/}
                                {/*                </TouchableOpacity>*/}
                                {/*            </View>*/}
                                {/*            <View style={{marginTop: 8}}>*/}
                                {/*                <TouchableOpacity>*/}
                                {/*                    <View*/}
                                {/*                        style={{*/}
                                {/*                            flexDirection: 'row',*/}
                                {/*                            justifyContent: 'space-between',*/}
                                {/*                            alignItems: 'center',*/}
                                {/*                        }}>*/}
                                {/*                        <View style={{marginRight: 32, flex: 30}}>*/}
                                {/*                            <Text*/}
                                {/*                                numberOfLines={1}*/}
                                {/*                                ellipsizeMode="tail"*/}
                                {/*                                style={styles.historyTextSubText02}>*/}
                                {/*                                문화예술진흥법*/}
                                {/*                                일부개정법률안(대안)(문화머시기머시기)*/}
                                {/*                            </Text>*/}
                                {/*                        </View>*/}
                                {/*                        <View style={{flex: 1}}>*/}
                                {/*                            <Icons.ChevronRightIcon*/}
                                {/*                                color="rgb(217,217,217)"*/}
                                {/*                                size={25}*/}
                                {/*                                style={commonStyles.mr8}*/}
                                {/*                            />*/}
                                {/*                        </View>*/}
                                {/*                    </View>*/}
                                {/*                </TouchableOpacity>*/}
                                {/*            </View>*/}
                                {/*        </View>*/}
                                {/*    </View>*/}
                                {/*</View>*/}
                                <View style={{marginTop: 40, paddingBottom:24,}}>
                                    <View style={{flex: 1, marginRight: 24}}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderBottomWidth: 1,
                                                borderColor: '#eee',
                                                paddingBottom: 8,
                                                alignItems: 'flex-end',
                                            }}>
                                            <View>
                                                <Icons.IdentificationIcon
                                                    color="#f4933a"
                                                    size={25}
                                                    style={commonStyles.mr8}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.historyText}>학력 및 경력</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View>
                                                <Text
                                                    style={[
                                                        styles.historyTextSubText02,
                                                        {marginTop: 24},
                                                    ]}>
                                                    {detailProfie!=null&&detailProfie.memTitle}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ) : (
                            <View style={{paddingBottom: 65}}>
                                <FlatList
                                    ListHeaderComponent={() => {
                                        return (
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    paddingVertical: 18,
                                                    borderTopWidth: 1,
                                                    borderBottomWidth: 1,
                                                    borderColor: '#eee',
                                                    marginTop: 16,
                                                }}>
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        paddingHorizontal: 24,
                                                    }}>
                                                    <Text style={styles.commentMainText}>댓글</Text>
                                                    <Text style={styles.commentSubText}>
                                                        {pageData!=null?pageData.count:0}개
                                                    </Text>
                                                </View>
                                                {/*<View>*/}
                                                {/*    <TouchableOpacity*/}
                                                {/*        activeOpacity={1}*/}
                                                {/*        onPress={() => {*/}
                                                {/*            setModalCommentSort(true);*/}
                                                {/*        }}>*/}
                                                {/*        <Icons.BarsArrowDownIcon*/}
                                                {/*            color="rgb(217,217,217)"*/}
                                                {/*            size={25}*/}
                                                {/*            style={commonStyles.mr8}*/}
                                                {/*        />*/}
                                                {/*    </TouchableOpacity>*/}
                                                {/*</View>*/}
                                            </View>
                                        );
                                    }}
                                    stickyHeaderIndices={[0]}
                                    contentContainerStyle={datas.length === 0 && {flex: 1}}
                                    ListEmptyComponent={() => (
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingVertical: 100,
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    color: '#7b7b7b',
                                                    letterSpacing: -0.24,
                                                }}>
                                                등록된 댓글이 없습니다.
                                            </Text>
                                        </View>
                                    )}
                                    data={datas}
                                    empty
                                    ListFooterComponent={
                                        comItemLoading && <Loader type={'small'}/>
                                    }
                                    renderItem={(item) => {
                                        if(item!=null&&item!=undefined){

                                            return (
                                                <View>
                                                    <View
                                                        style={
                                                            loginUser!=null
                                                                ? loginUser.memberId !== item.item.memberId
                                                                    ?{
                                                                        paddingHorizontal: 24,
                                                                        borderBottomWidth: 1,
                                                                        borderColor: '#eee',
                                                                        backgroundColor: '#fff',
                                                                    }
                                                                    : {
                                                                        paddingHorizontal: 24,
                                                                        borderBottomWidth: 1,
                                                                        borderColor: '#eee',
                                                                        backgroundColor: '#fff8f2',
                                                                    }
                                                                : {
                                                                    paddingHorizontal: 24,
                                                                    borderBottomWidth: 1,
                                                                    borderColor: '#eee',
                                                                    backgroundColor: '#fff',
                                                                }
                                                        }>
                                                        <TouchableOpacity
                                                            activeOpacity={1}
                                                            onPress={() => {
                                                                if (loginUser!=null) {
                                                                    if (
                                                                        loginUser.memberRole!='MEMBER'
                                                                    ) {
                                                                        if (loginUser.memberRole == route.params.monaCd){
                                                                            if (inputValue.length !== 0) {
                                                                                setModalCheck(true);
                                                                            } else {
                                                                                if (commentCdId === null) {
                                                                                    setCommentCdId(item.item.replyId);
                                                                                    setModalUp(true);
                                                                                } else {
                                                                                    setModalCheck(true);
                                                                                }
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(loginUser.memberId === item.item.memberId){
                                                                            if (inputValue.length !== 0) {
                                                                                setModalCheck(true);
                                                                            } else {
                                                                                if (commentCdId === null) {
                                                                                    setCommentCdId(item.item.replyId);
                                                                                    setModalUp(true);
                                                                                } else {
                                                                                    setModalCheck(true);
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    loginUser.memberId === item.item.memberId
                                                                        ? setMine(true)
                                                                        : setMine(false);
                                                                } else {
                                                                    setModalLoginCheck(true);
                                                                }
                                                            }}>
                                                            <View style={{paddingVertical: 20}}>
                                                                <Text style={styles.commentName}>
                                                                    {item.item.memberName}
                                                                </Text>
                                                                <TextInput
                                                                    multiline
                                                                    editable={false}
                                                                    style={styles.commentContent}>
                                                                    {item.item.replyContent}
                                                                </TextInput>
                                                                <View
                                                                    style={{
                                                                        flexDirection: 'row',
                                                                        justifyContent: 'space-between',
                                                                        alignItems: 'center',
                                                                    }}>
                                                                    <Text style={styles.commentDay}>
                                                                        {item.item.replyCreateDate}
                                                                    </Text>
                                                                    <TouchableOpacity
                                                                        activeOpacity={1}
                                                                        onPress={() => {
                                                                            if(loginUser!=null){
                                                                                setDatas([]);
                                                                                likeRequest(item.item.replyId,0);
                                                                            }else {
                                                                                setModalLoginCheck(true);
                                                                            }

                                                                        }}>
                                                                        <View
                                                                            style={
                                                                                item.item.myLike==null||item.item.myLike==0
                                                                                    ? [
                                                                                        styles.commentUp,
                                                                                        {
                                                                                            flexDirection: 'row',
                                                                                            alignItems: 'center',
                                                                                        },
                                                                                    ]
                                                                                    : [
                                                                                        styles.commentUp,
                                                                                        {
                                                                                            flexDirection: 'row',
                                                                                            alignItems: 'center',
                                                                                            borderColor: '#f4933a',
                                                                                        },
                                                                                    ]
                                                                            }>
                                                                            <Icons.HandThumbUpIcon
                                                                                color={
                                                                                    item.item.myLike==null||item.item.myLike==0 ? 'rgb(217,217,217)' : '#f4933a'
                                                                                }
                                                                                size={18}
                                                                                style={commonStyles.mr8}
                                                                            />
                                                                            <Text
                                                                                style={
                                                                                    item.item.myLike==null||item.item.myLike==0
                                                                                        ? styles.commentUpText
                                                                                        : [
                                                                                            styles.commentBtnText,
                                                                                            {color: '#f4933a'},
                                                                                        ]
                                                                                }>
                                                                                {item.item.likesCount}
                                                                            </Text>
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <FlatList
                                                        ListEmptyComponent={() => <View></View>}
                                                        data={item.item.congressReplyList}
                                                        empty
                                                        renderItem={reItem => {
                                                            return (
                                                                <View
                                                                    style={
                                                                        loginUser!=null
                                                                            ? loginUser.memberId !==
                                                                            reItem.item.memberId
                                                                                ? {
                                                                                    paddingHorizontal: 24,
                                                                                    borderBottomWidth: 1,
                                                                                    borderColor: '#eee',
                                                                                    backgroundColor: '#fafafa',
                                                                                }
                                                                                : {
                                                                                    paddingHorizontal: 24,
                                                                                    borderBottomWidth: 1,
                                                                                    borderColor: '#eee',
                                                                                    backgroundColor: '#fff8f2',
                                                                                }
                                                                            : {
                                                                                paddingHorizontal: 24,
                                                                                borderBottomWidth: 1,
                                                                                borderColor: '#eee',
                                                                                backgroundColor: '#fafafa',
                                                                            }
                                                                    }>
                                                                    <TouchableOpacity
                                                                        activeOpacity={1}
                                                                        onPress={() => {
                                                                            if (loginUser!=null) {
                                                                                if (
                                                                                    loginUser.memberRole!='MEMBER' &&
                                                                                    loginUser.memberId ===
                                                                                    reItem.item.memberId
                                                                                ) {
                                                                                    if (inputValue.length !== 0) {
                                                                                        setModalCheck(true);
                                                                                    } else {
                                                                                        if (commentCdId === null) {
                                                                                            setCommentCdId(
                                                                                                reItem.item.congressReplyId,
                                                                                            );
                                                                                            setModalUp(true);
                                                                                        } else {
                                                                                            setModalCheck(true);
                                                                                        }
                                                                                    }
                                                                                }
                                                                                loginUser.memberId ===
                                                                                reItem.item.memberId
                                                                                    ? setMine(true)
                                                                                    : setMine(false);
                                                                            } else {
                                                                                setModalLoginCheck(true);
                                                                            }
                                                                        }}>
                                                                        <View style={{paddingVertical: 24}}>
                                                                            <View
                                                                                style={{
                                                                                    flexDirection: 'row',
                                                                                    alignItems: 'center',
                                                                                }}>
                                                                                <Icons.ArrowUturnDownIcon
                                                                                    color="#f4933a"
                                                                                    size={18}
                                                                                    style={{
                                                                                        transform: [{rotate: '-90deg'}]
                                                                                    }}
                                                                                />
                                                                                <Text
                                                                                    style={[
                                                                                        styles.commentName,
                                                                                        {color: '#f4933a', marginTop: 5},
                                                                                    ]}>
                                                                                    @{reItem.item.memberName}
                                                                                </Text>
                                                                            </View>
                                                                            <TextInput
                                                                                multiline
                                                                                editable={false}
                                                                                style={styles.commentContent}>
                                                                                {reItem.item.congressReplyContent}
                                                                            </TextInput>
                                                                            <View
                                                                                style={{
                                                                                    flexDirection: 'row',
                                                                                    justifyContent: 'space-between',
                                                                                    alignItems: 'center',
                                                                                }}>
                                                                                <Text style={styles.commentDay}>
                                                                                    {reItem.item.congressReplyCreateDate}
                                                                                </Text>
                                                                                <TouchableOpacity
                                                                                    activeOpacity={1}
                                                                                    onPress={() => {
                                                                                        if(loginUser!=null){
                                                                                            setDatas([]);
                                                                                            likeRequest(reItem.item.congressReplyId,1);
                                                                                        }else {
                                                                                            setModalLoginCheck(true);
                                                                                        }
                                                                                    }}>
                                                                                    <View
                                                                                        style={
                                                                                            reItem.item.myLike==null||reItem.item.myLike==0 
                                                                                                ? [
                                                                                                    styles.commentUp,
                                                                                                    {
                                                                                                        flexDirection: 'row',
                                                                                                        alignItems: 'center',
                                                                                                    },
                                                                                                ]
                                                                                                : [
                                                                                                    styles.commentUp,
                                                                                                    {
                                                                                                        flexDirection: 'row',
                                                                                                        alignItems: 'center',
                                                                                                        borderColor: '#f4933a',
                                                                                                    },
                                                                                                ]
                                                                                        }>
                                                                                        <Icons.HandThumbUpIcon
                                                                                            color={
                                                                                                reItem.item.myLike==null||reItem.item.myLike==0 
                                                                                                    ? 'rgb(217,217,217)'
                                                                                                    : '#f4933a'
                                                                                            }
                                                                                            size={18}
                                                                                            style={commonStyles.mr8}
                                                                                        />
                                                                                        <Text
                                                                                            style={
                                                                                                reItem.item.myLike==null||reItem.item.myLike==0 
                                                                                                    ? styles.commentUpText
                                                                                                    : [
                                                                                                        styles.commentBtnText,
                                                                                                        {color: '#f4933a'},
                                                                                                    ]
                                                                                            }>
                                                                                            {reItem.item.likesCount}
                                                                                        </Text>
                                                                                    </View>
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            );
                                                        }}
                                                    />
                                                </View>
                                            );
                                        }

                                    }}
                                />
                            </View>
                        )}
                    </View>
                </ScrollView>
            )}
            {tab === 1 && (
                <View
                    style={{
                        paddingHorizontal: 24,
                        borderTopWidth: 1,
                        paddingVertical: 8,
                        borderColor: '#eee',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        backgroundColor: '#fff',
                    }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            loginUser===null && setModalLoginCheck(true);
                        }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextInput
                                placeholder={
                                    loginUser != null
                                    ? loginUser.memberRole != 'MEMBER'
                                      ? loginUser.memberRole == route.params.monaCd
                                        ? btnState === 0
                                          ? '국회의원은 댓글에 답글만 쓸 수 있어요.'
                                          : '최대 200자까지 쓸 수 있어요.'
                                        : '댓글을 달 수 없어요.'
                                      : '최대 200자까지 쓸 수 있어요.'
                                    : '댓글을 쓰려면 로그인을 해주세요.'
                                }
                                placeholderTextColor="#b1b1b1"
                                multiline
                                style={{flex: 9, fontFamily: 'pre400', marginRight: 16}}
                                value={inputValue}
                                onChangeText={text => setInputValue(text)}
                                maxLength={200}
                                ref={inputRef}
                                editable={
                                    loginUser != null
                                        ? loginUser.memberRole != 'MEMBER' && btnState === 0
                                            ? false
                                            : true
                                        : false
                                }>
                            </TextInput>
                            <View style={{flex: 1}}>
                                <TouchableOpacity disabled={disabled} onPress={onConfirm}>
                                    <View
                                        style={
                                            disabled
                                                ? styles.commentBtn
                                                : [styles.commentBtn, {borderColor: '#f4933a'}]
                                        }>
                                        <Text
                                            style={
                                                disabled
                                                    ? styles.commentBtnText
                                                    : [styles.commentBtnText, {color: '#f4933a'}]
                                            }>
                                            확인
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            <Modal visible={modalUp} transparent={true}>
                <Pressable
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    }}
                    onPress={() => {
                        setBtnState(0);
                        setInputValue('');
                        setCommentCdId(null);
                        setModalUp(false);
                    }}
                />
                <View
                    style={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: 1,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                    }}>
                    <View
                        style={{
                            width: '90%',
                            maxWidth: 360,
                            margin: 16,
                            borderRadius: 8,
                            backgroundColor: '#fff',
                            overflow: 'hidden',
                        }}>
                        {loginUser!=null&&loginUser.memberRole!='MEMBER' && mine === false ? (
                            <View>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        setBtnState(1);
                                        setModalUp(false);
                                        setInputValue('');
                                        // inputRef.current.focus();
                                    }}>
                                    <View
                                        style={[
                                            styles.modalView,
                                            {borderBottomWidth: 1, borderColor: '#eee'},
                                        ]}>
                                        <Text style={styles.modalText}>답글달기</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View>
                                <View>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {
                                            setBtnState(2);
                                            setModalUp(false);
                                            if(loginUser!=null){
                                                loginUser.memberRole!='MEMBER'
                                                    ? datas.filter(item => {
                                                        item.congressReplyList = item.congressReplyList.filter(reItem => {
                                                            if (reItem.congressReplyId == commentCdId) {
                                                                setInputValue(reItem.congressReplyContent);
                                                            }
                                                            return reItem;
                                                        });
                                                        return item;
                                                    })
                                                    : datas.filter(item => {
                                                        if (item.replyId == commentCdId) {
                                                            setInputValue(item.replyContent);
                                                        }
                                                        return item;
                                                    });
                                            }
                                        }}>
                                        <View
                                            style={[
                                                styles.modalView,
                                                {borderBottomWidth: 1, borderColor: '#eee'},
                                            ]}>
                                            <Text style={styles.modalText}>수정</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {
                                            setModalDeleteComment(true);
                                            setModalUp(false);
                                        }}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalTextRed}>삭제</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
            <ConfirmModal
                transparent={true}
                btnBoolean={modalDeleteComment}
                onPress={() => {
                    setDatas([]);
                    loginUser!=null && loginUser.memberRole!='MEMBER'
                        ? conDelReply()
                        : delReply();
                    setBtnState(0);
                    setInputValue('');
                    setCommentCdId(null);
                    setModalDeleteComment(false);
                }}
                onCancel={() => {
                    setModalDeleteComment(false);
                }}
                titleText={'댓글 삭제하기'}
                bodyText={'댓글을 삭제하시겠어요?'}
                btnText={'네'}
                btnText2={'아니오'}
            />
            <ConfirmModal
                transparent={true}
                btnBoolean={modalCheck}
                onPress={() => {
                    setBtnState(0);
                    setInputValue('');
                    setCommentCdId(null);
                    setModalCheck(false);
                }}
                onCancel={() => {
                    setModalCheck(false);
                }}
                titleText={'작성 중인 내용이 있어요'}
                bodyText={'지금 쓰고 있는 내용이 있어요.\n' + '작성을 취소할까요?'}
                btnText={'네'}
                btnText2={'아니오'}
            />
            <ConfirmModal
                transparent={true}
                btnBoolean={modalLoginCheck}
                onPress={() => {
                    navigation.navigate('Login');
                }}
                onCancel={() => {
                    setModalLoginCheck(false);
                }}
                titleText={'로그인이 필요해요'}
                bodyText={'로그인 하시겠어요?'}
                btnText={'네'}
                btnText2={'아니오'}
            />
            <ConfirmModal
                transparent={true}
                btnBoolean={modalCancel}
                onPress={() => {
                    insFavorites();
                    setDetailProfie({
                        ...detailProfie,
                        count:Number(detailProfie.count)-1
                    })
                    setMarkLike(false);
                    setModalCancel(false);
                }}
                onCancel={() => {
                    setModalCancel(false);
                }}
                titleText={'즐겨찾기 해제'}
                bodyText={'즐겨찾기를 해제하시겠어요?'}
                btnText={'네'}
                btnText2={'아니오'}
            />
            <Modal visible={modalCommentSort} transparent={true}>
                <Pressable
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    }}
                    onPress={() => {
                        setModalCommentSort(false);
                    }}
                />
                <View
                    style={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: 1,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                    }}>
                    <View
                        style={{
                            width: '90%',
                            maxWidth: 360,
                            margin: 16,
                            borderRadius: 8,
                            backgroundColor: '#fff',
                            overflow: 'hidden',
                        }}>
                        <View>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        setModalCommentSort(false);
                                    }}>
                                    <View
                                        style={[
                                            styles.modalView,
                                            {borderBottomWidth: 1, borderColor: '#eee'},
                                        ]}>
                                        <Text style={styles.modalText}>최신순</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        setModalCommentSort(false);
                                    }}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>인기순</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    markText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'pre500',
        letterSpacing: 0.32,
        marginRight: 8,
        lineHeight: 20,
    },
    profileName: {
        fontSize: 28,
        fontFamily: 'pre700',
        color: '#313131',
        letterSpacing: -1.12,
        lineHeight: 32,
    },
    profileSubName: {
        fontSize: 18,
        color: '#b1b1b1',
        fontFamily: 'pre700',
        letterSpacing: -0.72,
        marginTop: 8,
        lineHeight: 22,
    },
    tabOrange: {
        height: 50,
        backgroundColor: '#f4933a',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabWhite: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabOrangeText: {
        fontSize: 14,
        color: '#fff',
        letterSpacing: -0.28,
        fontFamily: 'pre700',
        lineHeight: 18,
    },
    tabWhiteText: {
        fontSize: 14,
        color: '#f4933a',
        letterSpacing: -0.28,
        fontFamily: 'pre700',
        lineHeight: 18,
    },
    historyText: {
        fontSize: 18,
        fontFamily: 'pre700',
        color: '#7b7b7b',
        letterSpacing: -0.72,
        lineHeight: 22,
    },
    historyTextSubText: {
        marginTop: 24,
        fontSize: 14,
        color: '#7b7b7b',
        fontFamily: 'pre400',
        letterSpacing: -0.28,
        lineHeight: 18,
    },
    historyBigText: {
        fontSize: 36,
        fontFamily: 'pre700',
        color: '#313131',
        letterSpacing: -1.44,
        marginRight: 8,
        marginTop: 16,
        lineHeight: 40,
    },
    historyTextSubText02: {
        fontSize: 14,
        color: '#7b7b7b',
        fontFamily: 'pre400',
        letterSpacing: -0.28,
        lineHeight: 22,
    },
    historyTextSubText03: {
        fontSize: 14,
        color: '#7b7b7b',
        fontFamily: 'pre400',
        letterSpacing: -0.28,
        lineHeight: 22,
    },
    commentMainText: {
        fontSize: 14,
        fontFamily: 'pre700',
        letterSpacing: -0.28,
        color: '#313131',
        marginRight: 8,
        lineHeight: 18,
    },
    commentSubText: {
        fontSize: 12,
        fontFamily: 'pre700',
        letterSpacing: -0.24,
        color: '#7b7b7b',
        lineHeight: 16,
    },
    commentName: {
        fontSize: 14,
        fontFamily: 'pre700',
        letterSpacing: -0.56,
        color: '#313131',
        lineHeight: 18,
    },
    commentContent: {
        fontSize: 14,
        fontFamily: 'pre400',
        letterSpacing: -0.28,
        color: '#7b7b7b',
        lineHeight: 20,
        marginLeft: -3,
    },
    commentDay: {
        paddingTop: 8,
        fontSize: 12,
        fontFamily: 'pre300',
        letterSpacing: -0.24,
        color: '#b1b1b1',
        lineHeight: 16,
    },
    commentUp: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        padding: 8,
        marginTop: 8,
        backgroundColor: '#fff',
    },
    commentUpText: {
        fontSize: 12,
        fontFamily: 'pre500',
        letterSpacing: -0.24,
        color: '#7b7b7b',
        lineHeight: 16,
    },
    commentBtn: {
        borderWidth: 1,
        borderColor: '#d0d0d0',
        height: 32,
        width: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    commentBtnText: {
        fontSize: 12,
        fontFamily: 'pre700',
        letterSpacing: -0.48,
        color: '#d0d0d0',
        lineHeight: 16,
    },
    modalView: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 14,
        fontFamily: 'pre400',
        letterSpacing: -0.56,
        color: '#313131',
        lineHeight: 18,
    },
    modalTextRed: {
        fontSize: 14,
        fontFamily: 'pre700',
        letterSpacing: -0.56,
        color: '#F36060',
        lineHeight: 18,
    },
});
