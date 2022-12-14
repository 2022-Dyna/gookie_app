import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import * as loginAction from '../../Reducer/action/index';
import ConfirmModal from '../../Component/ConfirmModal';
import * as Icons from 'react-native-heroicons/outline';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {useIsFocused} from "@react-navigation/native";

export default function MyPage({navigation}) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const commentData = [
    {
      name: '강기윤',
      content: '안녕하세요 저는 오늘 처음 가입한 강기윤입니당구리당당숭당당',
    },
    {
      name: '강기윤2',
      content: '안녕하세요 저는 오늘 처음 가입한 강기윤입니당구리당당숭당당',
    },
    {
      name: '강기윤3',
      content: '안녕하세요 저는 오늘 처음 가입한 강기윤입니당구리당당숭당당',
    },
    {
      name: '강기윤4',
      content: '안녕하세요 저는 오늘 처음 가입한 강기윤입니당구리당당숭당당',
    },
    {
      name: '강기윤5',
      content: '안녕하세요 저는 오늘 처음 가입한 강기윤입니당구리당당숭당당',
    },
  ];

  const markData = [
    {
      name: '강기윤',
      group: '국민의힘',
    },
    {
      name: '강대식',
      group: '국민의힘',
    },
    {
      name: '강득구',
      group: '더불어민주당',
    },
    {
      name: '강기윤',
      group: '국민의힘',
    },
    {
      name: '강대식',
      group: '국민의힘',
    },
    {
      name: '강득구',
      group: '더불어민주당',
    },
    {
      name: '강기윤',
      group: '국민의힘',
    },
    {
      name: '강대식',
      group: '국민의힘',
    },
    {
      name: '강득구',
      group: '더불어민주당',
    },
    {
      name: '강기윤',
      group: '국민의힘',
    },
    {
      name: '강대식',
      group: '국민의힘',
    },
    {
      name: '강득구',
      group: '더불어민주당',
    },
  ];

  const loginState = {
    login: true,
    isCon: true,
    email: 'ezicland@naver.com',
    name: '손동윤',
    userCd: 1,
  };
  //즐겨찾기 클릭시 색변경
  const [markLike, setMarkLike] = useState(false);

  //즐격찾기 취소 모달
  const [modalCancel, setModalCancel] = useState(false);

  //로그아웃 확인 모달
  const [modalLogout, setModalLogout] = useState(false);

  const [loginUser, setLoginUser] = useState(null);
  const [myReplyList, setReplyList] = useState([]);
  const [myFvList, setMyFvList] = useState([]);
  const [cancelFv, setCancelFv] = useState(null);

  const getMyReplyList = async () =>{
    let loginUser = await AsyncStorage.getItem("loginUser");
    const loginUserObj = JSON.parse(loginUser);

    axios.get('http://144.24.94.124:8091/api/v1/mypage/reply',{
      params:{
        memberId:loginUserObj.memberId,
        memberRole:loginUserObj.memberRole,
        pageNum:1,
        limit:5
      }
    }).then(res=> {

      if(loginUserObj.memberRole=='MEMBER'){
        setReplyList(res.data.data.replyList);


      }else {
        console.log(res.data.data.congressReplyList,'???');
        setReplyList(res.data.data.congressReplyList);
      }


    });
  }

  const getMyFVList = async () =>{
    let loginUser = await AsyncStorage.getItem("loginUser");
    const loginUserObj = JSON.parse(loginUser);

    axios.get('http://144.24.94.124:8091/api/v1/mypage/favorites',{
      params:{
        memberId:loginUserObj.memberId,
      }
    }).then(res=> {
      setMyFvList(res.data.data);
    });
  }

  const insFavorites = async () =>{
    let loginUser = await AsyncStorage.getItem("loginUser");
    const loginUserObj = JSON.parse(loginUser);

    console.log(loginUserObj.memberId);
    console.log(cancelFv);
    axios.get('http://144.24.94.124:8091/api/v1/mypage/insfavorites',{
      params:{
        memberId:loginUserObj.memberId,
        monaCd:cancelFv,
      }

    }).then(res=>{
       getMyFVList();
    })
  }


  useEffect(()=>{
    setMyFvList([]);
    setReplyList([]);
    const load = async () =>{
      let loginUser = await AsyncStorage.getItem("loginUser");
      const loginUserObj = JSON.parse(loginUser);
      setLoginUser(loginUserObj);
      getMyReplyList();
      getMyFVList();

    }
    if(isFocused){
      console.log("TEST!!!!!!");
      load()
    }
    load();
  },[isFocused])

  return (
    <View>
      <ScrollView>
        <View style={{paddingVertical: 16}}>
          <Text style={styles.myPageTit}>마이페이지</Text>
        </View>
        <View style={{borderBottomWidth: 8, borderColor: '#f8f7f7'}}>
          <View
            style={{
              paddingVertical: 32,
              paddingHorizontal: 24,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.myName}>{loginUser!=null&&loginUser.memberName}</Text>
              <Text style={styles.myMail}>{loginUser!=null&&loginUser.memberLoginId}</Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('PwReset')}>
                <View style={styles.myEditBox}>
                  <Text style={styles.myEditText}>수정</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 32,
            paddingHorizontal: 24,
            borderBottomWidth: 8,
            borderColor: '#f8f7f7',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 8,
            }}>
            <View>
              <Text style={styles.subTit}>내가 쓴 댓글</Text>
            </View>
            {myReplyList!=null&&myReplyList.length !== 0 && (
              <View>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate('MyPageComment')}>
                  <Text style={styles.allView}>전체보기</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <FlatList
            ListEmptyComponent={() => (
              <View style={{paddingTop: 8, paddingBottom: 32}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#b1b1b1',
                    letterSpacing: -0.24,
                  }}>
                  내가 쓴 댓글이 없어요
                </Text>
              </View>
            )}
            empty
            data={myReplyList}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate('Detail',{monaCd:loginUser&&loginUser.memberRole!='MEMBER'?loginUser.memberRole:item.monaCd})}>
                    <View
                      style={
                        index === 0
                          ? {
                              flexDirection: 'row',
                              alignItems: 'center',
                              paddingVertical: 12,
                              paddingHorizontal: 8,
                            }
                          : {
                              flexDirection: 'row',
                              alignItems: 'center',
                              borderTopWidth: 1,
                              borderColor: '#eee',
                              paddingVertical: 12,
                              paddingHorizontal: 8,
                            }
                      }>
                      <Text style={styles.commentName}>{item.memberName}</Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.commentContent}>
                        {loginUser&&loginUser.memberRole!='MEMBER'?item.congressReplyContent:item.replyContent}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />


        </View>
        <View
          style={{
            paddingVertical: 32,
            paddingHorizontal: 24,
            borderBottomWidth: 8,
            borderColor: '#f8f7f7',
          }}>
          <View style={{paddingBottom: 8}}>
            <View>
              <Text style={styles.subTit}>즐겨찾기 목록</Text>
            </View>
          </View>
          <View>
            <FlatList
              ListEmptyComponent={() => (
                <View style={{paddingTop: 8, paddingBottom: 32}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#b1b1b1',
                      letterSpacing: -0.24,
                    }}>
                    즐겨찾기 한 의원이 없어요.
                  </Text>
                </View>
              )}
              empty
              data={myFvList}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => navigation.navigate('Detail',{monaCd:item.monaCd})}>
                      <View
                        style={
                          index === 0
                            ? {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingVertical: 12,
                                paddingHorizontal: 8,
                              }
                            : {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderTopWidth: 1,
                                borderColor: '#eee',
                                paddingVertical: 12,
                                paddingHorizontal: 8,
                              }
                        }>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={styles.commentName}>{item.hgNm}</Text>
                          <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={styles.group}>
                            {item.polyNm}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                              setCancelFv(item.monaCd);
                              setModalCancel(true);
                            }}
                            style={{flex: 1}}>
                            <Icons.StarIcon
                              color="#ffbd12"
                              size={18}
                              fill="#ffbd12"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={{paddingVertical: 56}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setModalLogout(true);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.logout}>로그아웃</Text>
              <View
                style={{
                  width: 50,
                  height: 1,
                  backgroundColor: '#d0d0d0',
                }}></View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ConfirmModal
        transparent={true}
        btnBoolean={modalCancel}
        onPress={() => {
          setMyFvList([]);
          insFavorites();
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
      <ConfirmModal
        transparent={true}
        btnBoolean={modalLogout}
        onPress={async () => {
          dispatch(loginAction.makeLogout());
          await AsyncStorage.clear();
          navigation.navigate('Home');
          setModalLogout(false);
        }}
        onCancel={() => {
          setModalLogout(false);
        }}
        titleText={'로그아웃'}
        bodyText={'로그아웃 하시겠어요?'}
        btnText={'네'}
        btnText2={'아니오'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  myPageTit: {
    fontSize: 16,
    fontFamily: 'pre700',
    letterSpacing: -0.32,
    color: '#313131',
    textAlign: 'center',
    lineHeight: 20,
  },
  myName: {
    fontSize: 24,
    fontFamily: 'pre700',
    letterSpacing: -0.96,
    color: '#313131',
    paddingBottom: 8,
    lineHeight: 28,
  },
  myMail: {
    fontSize: 12,
    fontFamily: 'pre400',
    letterSpacing: -0.24,
    color: '#b1b1b1',
    lineHeight: 16,
  },
  myEditBox: {
    width: 60,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f4933a',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  myEditText: {
    fontSize: 14,
    fontFamily: 'pre400',
    letterSpacing: -0.28,
    color: '#f4933a',
    lineHeight: 18,
  },
  subTit: {
    fontSize: 16,
    fontFamily: 'pre700',
    letterSpacing: -0.32,
    color: '#313131',
    lineHeight: 20,
  },
  allView: {
    fontSize: 12,
    fontFamily: 'pre700',
    letterSpacing: -0.24,
    color: '#b1b1b1',
    lineHeight: 16,
  },
  commentName: {
    fontSize: 14,
    fontFamily: 'pre700',
    letterSpacing: -0.28,
    color: '#454545',
    width: 60,
  },
  commentContent: {
    fontSize: 12,
    fontFamily: 'pre400',
    letterSpacing: -0.24,
    color: '#7b7b7b',
    flex: 1,
    paddingRight: 50,
  },
  group: {
    fontSize: 12,
    fontFamily: 'pre400',
    letterSpacing: -0.24,
    color: '#b1b1b1',
    lineHeight: 16,
  },
  logout: {
    fontSize: 12,
    fontFamily: 'pre700',
    letterSpacing: -0.24,
    color: '#b1b1b1',
    textAlign: 'center',
    lineHeight: 16,
  },
});
