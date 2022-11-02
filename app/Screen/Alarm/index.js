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

export default function Alarm({navigation}) {
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

  useEffect(() => {
    setDatas(
      data.filter((item, index) => {
        if (index < pageOptions.num) {
          return item;
        }
      }),
    );
    setLoading(false);
  }, []);

  return (
    <View style={{height: '100%'}}>
      <View style={{height: '100%'}}>
        <View style={styles.alarmTit}>
          <Text style={styles.alarmTitText}>알림</Text>
        </View>
        <View style={[commonStyles.loaderWrap, {paddingBottom: 60}]}>
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
                          fontSize: 12,
                          color: '#7b7b7b',
                          letterSpacing: -0.24,
                        }}>
                        알림이 없습니다.
                      </Text>
                    </View>
                  </View>
                );
              }}
              empty
              data={datas}
              onEndReached={pageLoad}
              onEndReachedThreshold={0.3}
              ListFooterComponent={itemLoading && <Loader type={'small'} />}
              onRefresh={pageRefresh}
              refreshing={refreshing}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      setDatas(state => {
                        navigation.navigate('Detail');
                        const arr = state.filter(el => {
                          if (el.alarmId == item.alarmId) {
                            if (!el.isRead) el.isRead = true;
                          }
                          return el;
                        });
                        return arr;
                      });
                    }}>
                    <View
                      style={
                        item.isRead
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
                          {!loginState.isCon && (
                            <View
                              style={[
                                commonStyles.mb24,
                                {flexDirection: 'row', alignItems: 'center'},
                              ]}>
                              <View style={commonStyles.mr8}>
                                <Text style={styles.alarmName}>
                                  {item.name}
                                </Text>
                              </View>
                              <View>
                                <Text style={styles.alarmGroup}>
                                  {item.group}
                                </Text>
                              </View>
                            </View>
                          )}
                          <Text style={styles.alarmDesc}>
                            {loginState.isCon
                              ? `${item.name} 님이 댓글을 남겼습니다.`
                              : `${item.name} 의원이 답글을 남겼습니다.`}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.alarmDate}>{item.date}</Text>
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
    fontSize: 16,
    color: '#313131',
    fontWeight: 'bold',
    letterSpacing: -0.32,
  },
  alarmBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  alarmName: {
    fontSize: 14,
    color: '#454545',
    letterSpacing: -0.28,
    fontWeight: 'bold',
  },
  alarmGroup: {fontSize: 12, color: '#b1b1b1', letterSpacing: -0.24},
  alarmDate: {fontSize: 12, color: '#b1b1b1', letterSpacing: -0.24},
  alarmDesc: {fontSize: 12, color: '#7b7b7b', letterSpacing: -0.24},
});
