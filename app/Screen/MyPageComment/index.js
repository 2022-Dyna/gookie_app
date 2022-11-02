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

export default function MyPageComment({navigation}) {
  const [loading, setLoading] = useState(true);
  const [itemLoading, setItemLoading] = useState(true);
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
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리2',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
    {
      name: '강기윤3',
      group: '국민의힘2',
      date: '22.10.28',
      content: '우리 11월까지만 힘내자우리 11월까지만 힘내자우리3',
    },
  ];

  const [datas, setDatas] = useState([]);
  const [pageOptions, setPageOptions] = useState({num: 5, page: 1});
  
  const pageRefresh = () => {
    if(!refreshing){
        setRefreshing(true);
        setPageOptions(state => ({...pageOptions, page: state.page + 1}));
        dataLoad();
        setRefreshing(false);
      }
  }

  const dataLoad = () => {
    setDatas(
      data.filter((item, index) => {
        if (index < pageOptions.num * pageOptions.page) {
          return item;
        }
      }),
    );
    setPageOptions(state => ({...pageOptions, page: state.page + 1}));
  };

  useEffect(() => {
    dataLoad();
    setLoading(false);
  }, []);

  const pageLoad = () => {
    const totalPage = Math.ceil(data.length / pageOptions.num);
    if (pageOptions.page <= totalPage) {
      dataLoad();
    }else{
      setItemLoading(false);
    }
  };

  return (
    <View style={{height:"100%"}}>
      <View style={{height:"100%"}}>
        <View style={{paddingVertical: 16}}>
          <Text style={styles.myCommentTit}>내가 쓴 댓글</Text>
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
              ListFooterComponent={itemLoading && <Loader type={"small"}/>}
              renderItem={({item, index}) => {
                return (
                  <View style={{paddingHorizontal: 24}}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => navigation.navigate('Detail')}>
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
                            <Text style={styles.myCommentName}>{item.name}</Text>
                            <Text style={styles.myCommentParty}>
                              {item.group}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles.myCommentDay}>{item.date}</Text>
                          </View>
                        </View>
                        <View>
                          <Text
                            style={styles.myCommentContent}
                            numberOfLines={1}
                            ellipsizeMode="tail">
                            {item.content}
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
    fontWeight: 'bold',
    letterSpacing: -0.32,
    color: '#313131',
    textAlign: 'center',
  },
  myCommentName: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.28,
    color: '#454545',
    marginRight: 16,
  },
  myCommentParty: {
    fontSize: 12,
    fontWeight: 'normal',
    letterSpacing: -0.24,
    color: '#b1b1b1',
  },
  myCommentDay: {
    fontSize: 12,
    fontWeight: 'normal',
    letterSpacing: -0.24,
    color: '#b1b1b1',
  },
  myCommentContent: {
    fontSize: 12,
    fontWeight: 'normal',
    letterSpacing: -0.24,
    color: '#7b7b7b',
    paddingTop: 24,
    width: '95%',
  },
});