import {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Loader from "../../Component/Loader"
import {commonStyles} from "../../common"
import * as Icons from 'react-native-heroicons/outline';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function MyPageComment({navigation}) {
  const [loading, setLoading] = useState(true);
  const [itemLoading, setItemLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const data = [
    {
      name: '강기윤',
      group: '국민의힘',
      date: '22.10.26',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리1',
    },
    {
      name: '강기윤2',
      group: '국민의힘2',
      date: '22.10.27',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리2',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤2',
      group: '국민의힘2',
      date: '22.10.27',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리4',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리5',
    },
    {
      name: '강기윤2',
      group: '국민의힘2',
      date: '22.10.27',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리6',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리7',
    },
    {
      name: '강기윤2',
      group: '국민의힘2',
      date: '22.10.27',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리8',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리9',
    },
    {
      name: '강기윤2',
      group: '국민의힘2',
      date: '22.10.27',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리10',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리11',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리12',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리13',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리14',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리15',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리16',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리17',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리18',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리19',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리20',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리21',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리22',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리23',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리24',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리25',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리26',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리27',
    },
  ];

  const [datas, setDatas] = useState([]);
  const [pageOptions, setPageOptions] = useState({num: 20, page: 1});
  //페이징
  const [pageNum ,setPageNum] = useState(1);
  const [pageData ,setPageData] = useState(null);
  const [loginUser ,setLoginUser] = useState(null);

  const getMyReplyList = async (num) =>{
    let loginUser = await AsyncStorage.getItem("loginUser");
    const loginUserObj = JSON.parse(loginUser);
    setLoginUser(loginUserObj);
    axios.get('http://144.24.94.124:8091/api/v1/mypage/reply',{
      params:{
        memberId:loginUserObj.memberId,
        memberRole:loginUserObj.memberRole,
        pageNum:num,
        limit:10
      }
    }).then(res=> {

      if(loginUserObj.memberRole=='MEMBER'){
        setDatas(state=>{
          const arr = state.concat(res.data.data.replyList);
          return arr;
        })
        console.log(res.data.data.replyList);


      }else {
        setDatas(state=>{
          const arr = state.concat(res.data.data.congressReplyList);
          return arr;
        })
        console.log(res.data.data.congressReplyList);
      }
      setPageData(res.data.data.pagination)

    });
  }

  const dataLoad = () => {
    setItemLoading(true);
    setDatas(
      data.filter((item, index) => {
        if (index < pageOptions.num * pageOptions.page) {
          return item;
        }
      }),
    );
    setPageOptions(state => ({...pageOptions, page: state.page + 1}));
  };

  const pageLoad = () => {

    if(pageData.count>pageNum+1){
      getMyReplyList(pageNum+1);
      setPageNum(pageNum+1);
    }else{
      setItemLoading(false);
    }
  };

  const pageRefresh = () => {
    if(!refreshing){
        setDatas([]);
        setRefreshing(true);
        getMyReplyList(1);
        setPageNum(1);
        setRefreshing(false);
      }
  }


  useEffect(() => {

    setLoading(false);
    getMyReplyList(1);
  }, []);


  return (
    <View style={{height:"100%"}}>
      <View style={{height:"100%"}}>
        <View style={{height:50, position:"relative"}}>
          <Text style={styles.myCommentTit}>내가 쓴 댓글</Text>
          <View style={{position:"absolute", left:16, top:15, zIndex:10,}}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                navigation.goBack()
                }}
            >
                <Icons.ChevronLeftIcon
                color="#000"
                size={24}
                />
            </TouchableOpacity>
        </View>
        </View>
        <View style={[commonStyles.loaderWrap, {paddingBottom:60}]}>
          {loading ? (
            <Loader type={'full'} />
          ) : (
            <FlatList
              ListEmptyComponent={() => {
                return (
                  <View
                    style={{
                      paddingTop: 100,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#7b7b7b',
                          letterSpacing: -0.24,
                          textAlign: 'center',
                        }}>
                        내가 쓴 댓글이 없습니다.
                      </Text>
                    </View>
                  </View>
                );
              }}
              empty
              data={datas}
              onEndReached={pageLoad}
              onRefresh={pageRefresh}
              refreshing={refreshing}
              onEndReachedThreshold={0.3}
              ListFooterComponent={itemLoading && <Loader type={"small"}/>}
              renderItem={({item, index}) => {
                return (
                  <View style={{paddingHorizontal: 24}}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => navigation.navigate('Detail',{monaCd:item.monaCd})}>
                      <View
                        style={
                          index === 0
                            ? {paddingVertical: 24}
                            : {
                                paddingVertical: 24,
                                borderTopWidth: 1,
                                borderColor: '#eee',
                              }
                        }>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={styles.myCommentName}>{loginUser!=null&&loginUser.memberRole=='MEMBER'?item.hgNm:item.memberName}</Text>
                            <Text style={styles.myCommentParty}>
                              {loginUser.memberRole=='MEMBER'?item.polyNm:''}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles.myCommentDay}>{loginUser.memberRole=='MEMBER'?item.replyCreateDate:item.congressReplyCreateDate}</Text>
                          </View>
                        </View>
                        <View>
                          <Text
                            style={styles.myCommentContent}
                            numberOfLines={1}
                            ellipsizeMode="tail">
                            {loginUser.memberRole=='MEMBER'?item.replyContent:item.congressReplyContent}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myCommentTit: {
    fontSize: 16,
    fontFamily: 'pre700',
    letterSpacing: -0.32,
    color: '#313131',
    textAlign: 'center',
    lineHeight:50,
  },
  myCommentName: {
    fontSize: 14,
    fontFamily: 'pre700',
    letterSpacing: -0.28,
    color: '#454545',
    marginRight: 16,
    lineHeight:18,
  },
  myCommentParty: {
    fontSize: 12,
    fontFamily: 'pre400',
    letterSpacing: -0.24,
    color: '#b1b1b1',
    lineHeight:16,
  },
  myCommentDay: {
    fontSize: 12,
    fontFamily: 'pre400',
    letterSpacing: -0.24,
    color: '#b1b1b1',
    lineHeight:16,
  },
  myCommentContent: {
    fontSize: 12,
    fontFamily: 'pre400',
    letterSpacing: -0.24,
    color: '#7b7b7b',
    paddingTop: 24,
    width: '95%',
    lineHeight:16,
  },
});
