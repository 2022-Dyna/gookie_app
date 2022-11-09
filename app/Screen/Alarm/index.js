import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {commonStyles} from '../../common';
import Loader from '../../Component/Loader';
import ConfirmModal from "../../Component/ConfirmModal";
import {useSelector} from "react-redux";
import {useIsFocused} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Alarm({navigation}) {
  const loginStates = useSelector(state => state.login);

  const loginState = {
    login: true,
    isCon: false,
    email: 'ezicland@naver.com',
    name: '손동윤',
    userCd: 1,
  };
  const data1 = [
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
    {
      alarmId: 1,
      name: '강기윤',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      date: '22.10.25',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      date: '22.10.21',
      isRead: false,
    },
  ];
  const data2 = [
    {
      alarmId: 1,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 2,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 3,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 4,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 5,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 6,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 7,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 8,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 9,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 10,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 11,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 12,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 13,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 14,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 15,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 16,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 17,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 18,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 19,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 20,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 21,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 22,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 23,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 24,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 25,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 26,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 27,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 28,
      name: '강기윤',
      group: '국민의 힘',
      date: '22.10.26',
      isRead: false,
    },
    {
      alarmId: 29,
      name: '김대윤',
      group: '국민의 힘',
      date: '22.10.24',
      isRead: true,
    },
    {
      alarmId: 30,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 31,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
    {
      alarmId: 32,
      name: '강민정',
      group: '더불어민주당',
      date: '22.10.22',
      isRead: false,
    },
  ];
  let data = loginState.isCon ? data1 : data2;

  const [loading, setLoading] = useState(true);
  const [itemLoading, setItemLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [datas, setDatas] = useState([]);
  const [pageOptions, setPageOptions] = useState({num: 10, page: 1});
  const [isLogin, setIsLogin] = useState(false);
  const [alarmList, setAlarmList] = useState(null);
  const [loginUser, setLoginUser] = useState(null);

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
    const totalPage = Math.ceil(data.length / pageOptions.num);
    if (pageOptions.page <= totalPage) {
      dataLoad();
    } else {
      setItemLoading(false);
    }
  };

  const pageRefresh = () => {
    if (!refreshing) {
      setRefreshing(true);
      // setPageOptions({...pageOptions, page: 1});
      // dataLoad();
      setDatas(
        data.filter((item, index) => {
          if (index < pageOptions.num) {
            return item;
          }
        }),
      );
      setPageOptions({...pageOptions, page: 2});
      setRefreshing(false);
    }
  };

  const getAlarm = async () =>{
    let loginUser = await AsyncStorage.getItem("loginUser");
    const loginUserObj = JSON.parse(loginUser);
    let param ;
    if(loginUserObj.memberRole=='MEMBER'){
      param = { memberId : loginUserObj.memberId}
    }else {
      param = {monaCd:loginUserObj.memberRole,memberId : loginUserObj.memberId}
    }

    axios.get('http://144.24.94.124:8091/api/v1/gookie/getAlarm',{

      params:param

    }).then(res=> {
      setAlarmList(res.data.data);
    });
  }

  const insAlarm = async (reply_id) =>{
    let loginUser = await AsyncStorage.getItem("loginUser");
    const loginUserObj = JSON.parse(loginUser);

    axios.get('http://144.24.94.124:8091/api/v1/gookie/insAlarm',{

      params: {
        member_id:loginUserObj.memberId,
        reply_id:reply_id
      }

    }).then(res=> {

    });
  }

  const isFocus = useIsFocused();
  useEffect(() => {
    setAlarmList([]);
    const load = async () =>{
      let loginUser = await AsyncStorage.getItem("loginUser");
      const loginUserObj = JSON.parse(loginUser);
      setLoginUser(loginUserObj);
    }
    setLoading(false);
    if(isFocus&&!loginStates){
      setIsLogin(true);
    }
    if(isFocus){
      getAlarm();
    }
    if(loginStates){
      load();
    }
  }, [isFocus]);

  return (
    <View style={{height: '100%'}}>
      <ConfirmModal
          transparent={true}
          btnBoolean={isLogin}
          onPress={() => {
            setIsLogin(false);
            navigation.navigate("Login");
          }}
          titleText={'로그인 필요'}
          bodyText={
            '로그인이 필요한 서비스입니다.'
          }
          btnText={'확인'}
      />
      <View style={{height: '100%'}}>
        <View style={styles.alarmTit}>
          <Text style={styles.alarmTitText}>알림</Text>
        </View>
        <View style={[commonStyles.loaderWrap, {paddingBottom: 56}]}>
          {loading ? (
            <Loader type={'full'} />
          ) : (
            <FlatList
              contentContainerStyle={datas.length === 0 && {flex: 1}}
              ListEmptyComponent={() => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontFamily: 'pre400',
                          fontSize: 12,
                          color: '#7b7b7b',
                          letterSpacing: -0.24,
                          lineHeight: 12,
                        }}>
                        알림이 없습니다.
                      </Text>
                    </View>
                  </View>
                );
              }}
              empty
              data={alarmList}
              onEndReached={pageLoad}
              onEndReachedThreshold={0.3}
              refreshing={refreshing}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      if(item.alarm==0){
                        insAlarm(item.reply_id);
                      }
                      navigation.navigate('Detail',{monaCd:item.mona_cd});
                    }}>
                    <View
                      style={
                        item.alarm > 0
                          ? {paddingHorizontal: 24}
                          : {paddingHorizontal: 24, backgroundColor: '#fff8f2'}
                      }>
                      <View
                        style={
                          index === 0
                            ? [styles.alarmBox]
                            : [
                                styles.alarmBox,
                                {borderTopWidth: 1, borderTopColor: '#eeeeee'},
                              ]
                        }>
                        <View>
                          {loginUser!=null&&loginUser.memberRole=='MEMBER' && (
                            <View
                              style={[
                                commonStyles.mb16,
                                {flexDirection: 'row', alignItems: 'center'},
                              ]}>
                              <View style={commonStyles.mr8}>
                                <Text style={styles.alarmName}>
                                  {item.hg_nm}
                                </Text>
                              </View>
                              <View>
                                <Text style={styles.alarmGroup}>
                                  {item.poly_nm}
                                </Text>
                              </View>
                            </View>
                          )}
                          <Text style={styles.alarmDesc}>
                            {loginUser!=null&&loginUser.memberRole!='MEMBER'
                              ? `${item.member_name} 님이 댓글을 남겼습니다.`
                              : `${item.hg_nm} 의원이 답글을 남겼습니다.`}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.alarmDate}>{item.reply_create_date}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
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
  alarmTit: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  alarmTitText: {
    fontFamily: 'pre700',
    fontSize: 16,
    color: '#313131',
    letterSpacing: -0.32,
    lineHeight: 16,
  },
  alarmBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  alarmName: {
    fontFamily: 'pre700',
    fontSize: 14,
    color: '#454545',
    letterSpacing: -0.28,
    lineHeight: 14,
  },
  alarmGroup: {
    fontFamily: 'pre400',
    fontSize: 12,
    color: '#b1b1b1',
    letterSpacing: -0.24,
    lineHeight: 12,
  },
  alarmDate: {
    fontFamily: 'pre400',
    fontSize: 12,
    color: '#b1b1b1',
    letterSpacing: -0.24,
    lineHeight: 12,
  },
  alarmDesc: {
    fontFamily: 'pre400',
    fontSize: 12,
    color: '#7b7b7b',
    letterSpacing: -0.24,
    lineHeight: 12,
  },
});
