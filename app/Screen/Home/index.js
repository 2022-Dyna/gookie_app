import {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import {commonStyles} from '../../common/index';
import Loader from '../../Component/Loader';

export default function Home({navigation}) {
  const width = Dimensions.get('window').width;
  const data1 = [
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '김대윤',
      percent: 98,
    },
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '김대용',
      percent: 84,
    },
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '손동윤',
      percent: 70,
    },
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '김대윤',
      percent: 65,
    },
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '김대용',
      percent: 57,
    },
  ];
  const data2 = [
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '김대윤',
      percent: 98,
    },
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '김대용',
      percent: 84,
    },
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '손동윤',
      percent: 70,
    },
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '김대윤',
      percent: 65,
    },
    {
      imgSrc: require('../../img/congress_img.png'),
      group: '더불어민주당',
      name: '김대용',
      percent: 57,
    },
  ];
  const data3 = [
    {
      name: '김대윤',
      content:
        '국갤 진짜 최고네요 최고예요 최고임 국갤 진짜 최고네요 최고예요 최고임',
      like: 1300,
    },
    {
      name: '김대용',
      content:
        '안녕하세요 오랜만에 인사드립니다 안녕하세요 오랜만에 인사드립니다 ',
      like: 218,
    },
    {
      name: '손동윤',
      content:
        '정치 똑바로하세요 국민이 지켜보고 있습니다 정치 똑바로하세요 국민이 지켜보고 있습니다',
      like: 129,
    },
    {
      name: '홍다영',
      content:
        '집에 가고싶다 집에 가고싶다 집에 가고싶다 집에 가고싶다 집에 가고싶다',
      like: 29,
    },
    {
      name: '나지혜',
      content:
        '국갤 진짜 최고네요 최고예요 최고임 국갤 진짜 최고네요 최고예요 최고임',
      like: 5,
    },
  ];

  const [loading, setLoading] = useState(true);
  const [datas1, setDatas1] = useState([]);
  const [datas2, setDatas2] = useState([]);
  const [datas3, setDatas3] = useState([]);
  const [dataList, setDataList] = useState({
    d1: false,
    d2: false,
    d3: false,
  });

  useEffect(() => {
    try {
      setDatas1(data1);
      // setDataList({...dataList, d1: true});
      setDatas2(data2);
      // setDataList({...dataList, d2: true});
      setDatas3(data3);
      // setDataList({...dataList, d3: true});
      setDataList({...dataList, d1: true, d2: true, d3: true});
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  useEffect(() => {
    let num = 0;
    Object.keys(dataList)
      .map(key => dataList[key])
      .filter(val => val && num++);
    num === 3 && setLoading(false);
  }, [dataList]);

  const [bestTab, setBestTab] = useState(0);

  return (
    <View style={commonStyles.loaderWrap}>
      {loading ? (
        <Loader type={'full'} />
      ) : (
        <ScrollView>
          <View style={{width: '100%'}}>
            <TouchableOpacity 
              activeOpacity={1}
              onPress={() => navigation.navigate('Guide')}
            
            >
              <Image
                source={require('../../img/banner.png')}
                style={{width: '100%', height: width * 0.5}}
              />
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#f8f7f7'}}>
            {/* 이번주 소통왕 */}
            <View style={{backgroundColor: '#ffffff'}}>
              <View style={styles.titBox}>
                <Text style={[styles.title]}>이번주 소통왕 💬</Text>
                <Text style={[commonStyles.mt8, styles.desc]}>
                  국민과 가장 열심히 소통한 의원들이에요.
                </Text>
                <View style={[commonStyles.mt8, {flexDirection: 'row'}]}>
                  <View style={[styles.tag, commonStyles.mr8]}>
                    <Text style={styles.tagText}>#답변율100%</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>#댓글바람</Text>
                  </View>
                </View>
              </View>
              <View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={datas1}
                  contentContainerStyle={{paddingLeft: 24, paddingRight: 14}}
                  renderItem={({item, index}) => {
                    let grade;
                    if (index === 0) {
                      grade = '1st';
                    } else if (index === 1) {
                      grade = '2nd';
                    } else if (index === 2) {
                      grade = '3rd';
                    } else {
                      grade = `${index + 1}th`;
                    }
                    return (
                      <View style={{marginRight: 10}}>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => navigation.navigate('Detail')}>
                          <View style={styles.cardImg}>
                            <Image
                              source={item.imgSrc}
                              resizeMode="cover"
                              style={{width: '100%', height: '100%'}}
                            />
                            <View
                              style={
                                index > 1
                                  ? [styles.cardGrade]
                                  : [
                                      styles.cardGrade,
                                      {backgroundColor: '#f4933a'},
                                    ]
                              }>
                              <Text style={styles.cardGradeText}>{grade}</Text>
                            </View>
                          </View>
                          <View style={commonStyles.mt8}>
                            <Text style={styles.cardGroup}>{item.group}</Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}>
                              <Text style={styles.cardName}>{item.name}</Text>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'flex-end',
                                }}>
                                <Text
                                  style={[
                                    styles.cardPercent,
                                    {
                                      fontFamily: 'pre700',
                                      fontSize: 24,
                                      lineHeight: 24,
                                    },
                                  ]}>
                                  {item.percent}
                                </Text>
                                <Text style={styles.cardPercent}>%</Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: '#f5f5f5',
                  marginTop: 32,
                }}>
                <TouchableOpacity 
                  activeOpacity={1}
                  onPress={() => navigation.navigate('Search')}
                >
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      height: 48,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'pre700',
                        fontSize: 12,
                        color: '#b1b1b1',
                        letterSpacing: -0.24,
                      }}>
                      모든 의원 보기
                    </Text>
                    <Icons.ChevronRightIcon
                      color="#b1b1b1"
                      size={12}
                      style={{marginLeft: 4}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* 베스트 댓글 */}
            <View
              style={[
                commonStyles.mt8,
                {backgroundColor: '#ffffff', paddingBottom: 32},
              ]}>
              <View
                style={{
                  paddingHorizontal: 24,
                  paddingTop: 40,
                  paddingBottom: 24,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.title]}>베스트 댓글</Text>
                <View style={styles.tabBox}>
                  <View
                    style={{
                      flex: 1,
                      marginTop: -1,
                      marginLeft: -1,
                    }}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => setBestTab(0)}>
                      <View
                        style={
                          bestTab !== 0
                            ? styles.tabBtn
                            : [
                                styles.tabBtn,
                                {
                                  borderColor: '#f4933a',
                                  backgroundColor: '#ffffff',
                                },
                              ]
                        }>
                        <Text
                          style={
                            bestTab !== 0
                              ? styles.tabBtnText
                              : [
                                  styles.tabBtnText,
                                  {fontFamily: 'pre700', color: '#f4993a'},
                                ]
                          }>
                          일간
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginTop: -1,
                    }}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => setBestTab(1)}>
                      <View
                        style={
                          bestTab !== 1
                            ? styles.tabBtn
                            : [
                                styles.tabBtn,
                                {
                                  borderColor: '#f4933a',
                                  backgroundColor: '#ffffff',
                                },
                              ]
                        }>
                        <Text
                          style={
                            bestTab !== 1
                              ? styles.tabBtnText
                              : [
                                  styles.tabBtnText,
                                  {fontFamily: 'pre700', color: '#f4993a'},
                                ]
                          }>
                          주간
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginTop: -1,
                      marginRight: -1,
                    }}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => setBestTab(2)}>
                      <View
                        style={
                          bestTab !== 2
                            ? styles.tabBtn
                            : [
                                styles.tabBtn,
                                {
                                  borderColor: '#f4933a',
                                  backgroundColor: '#ffffff',
                                },
                              ]
                        }>
                        <Text
                          style={
                            bestTab !== 2
                              ? styles.tabBtnText
                              : [
                                  styles.tabBtnText,
                                  {fontFamily: 'pre700', color: '#f4993a'},
                                ]
                          }>
                          월간
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{paddingHorizontal: 24}}>
                <FlatList
                  data={datas3}
                  renderItem={({item, index}) => {
                    let likeNum;
                    if (item.like < 1000) {
                      likeNum = item.like;
                    } else {
                      likeNum = `${(item.like * 0.001).toFixed(1)}k`;
                    }

                    return (
                      <View
                        style={
                          index !== 0 && {
                            borderTopWidth: 1,
                            borderTopColor: '#eee',
                          }
                        }>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => navigation.navigate('Detail')}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              paddingVertical: 12,
                            }}>
                            <View style={{width: 24}}>
                              <Text
                                style={{
                                  fontFamily: 'pre700',
                                  fontSize: 12,
                                  color: '#313131',
                                  letterSpacing: -0.24,
                                  lineHeight: 14,
                                }}>
                                {index + 1}
                              </Text>
                            </View>
                            <View style={{width: 48, paddingRight: 8}}>
                              <Text
                                numberOfLines={1}
                                style={{
                                  fontFamily: 'pre700',
                                  fontSize: 12,
                                  color: '#313131',
                                  letterSpacing: -0.24,
                                  lineHeight: 14,
                                }}>
                                {item.name}
                              </Text>
                            </View>
                            <View style={{flex: 1, paddingRight: 8}}>
                              <Text
                                numberOfLines={1}
                                style={{
                                  fontFamily: 'pre400',
                                  fontSize: 12,
                                  color: '#7b7b7b',
                                  letterSpacing: -0.24,
                                  lineHeight: 14,
                                }}>
                                {item.content}
                              </Text>
                            </View>
                            <View style={{minWidth: 40}}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <Icons.HandThumbUpIcon
                                  size={16}
                                  color="#bbb"
                                  style={{marginRight: 8}}
                                />
                                <Text
                                  style={{
                                    fontFamily: 'pre400',
                                    fontSize: 12,
                                    color: '#b1b1b1',
                                    letterSpacing: -0.24,
                                    lineHeight: 14,
                                  }}>
                                  {likeNum}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
            {/* 이번주 최고 인기 */}
            <View
              style={[
                commonStyles.mt8,
                {backgroundColor: '#ffffff', paddingBottom: 40},
              ]}>
              <View style={styles.titBox}>
                <Text style={[styles.title]}>이번주 최고 인기 ✨</Text>
                <Text style={[commonStyles.mt8, styles.desc]}>
                  국민들이 가장 많이 찾은 인기 의원들이에요.
                </Text>
                <View style={[commonStyles.mt8, {flexDirection: 'row'}]}>
                  <View style={[styles.tag, commonStyles.mr8]}>
                    <Text style={styles.tagText}>#국회셀럽</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>#내가제일잘나가</Text>
                  </View>
                </View>
              </View>
              <View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={datas2}
                  contentContainerStyle={{paddingLeft: 24, paddingRight: 14}}
                  renderItem={({item, index}) => {
                    let grade;
                    if (index === 0) {
                      grade = '1st';
                    } else if (index === 1) {
                      grade = '2nd';
                    } else if (index === 2) {
                      grade = '3rd';
                    } else {
                      grade = `${index + 1}th`;
                    }
                    return (
                      <View style={{marginRight: 10}}>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => navigation.navigate('Detail')}>
                          <View style={styles.cardImg}>
                            <Image
                              source={item.imgSrc}
                              resizeMode="cover"
                              style={{width: '100%', height: '100%'}}
                            />
                            <View
                              style={
                                index > 1
                                  ? [styles.cardGrade]
                                  : [
                                      styles.cardGrade,
                                      {backgroundColor: '#f4933a'},
                                    ]
                              }>
                              <Text style={styles.cardGradeText}>{grade}</Text>
                            </View>
                          </View>
                          <View style={commonStyles.mt8}>
                            <Text style={styles.cardGroup}>{item.group}</Text>
                            <Text style={styles.cardName}>{item.name}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}

      {/* <View>
        <Text>홈입니다.</Text>
        <Button
          title="Go to ScreenA"
          onPress={() => navigation.navigate('ScreenA')}
        />
        <Button
          title="Go to Join"
          onPress={() => navigation.navigate('Join')}
        />
        <Button
          title="Go to PwReset"
          onPress={() => navigation.navigate('PwReset')}
        />
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate('Detail')}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  titBox: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
  },
  title: {
    fontFamily: 'pre700',
    fontSize: 20,
    color: '#313131',
    letterSpacing: -0.8,
    lineHeight: 24,
  },
  desc: {
    fontFamily: 'pre400',
    fontSize: 12,
    color: '#b1b1b1',
    letterSpacing: -0.24,
    lineHeight: 18,
  },
  tag: {
    justifyContent: 'center',
    height: 24,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  tagText: {
    fontFamily: 'pre400',
    fontSize: 12,
    color: '#b1b1b1',
    letterSpacing: -0.24,
    lineHeight: 14,
  },
  tabBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 120,
    height: 24,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 4,
    backgroundColor: '#fdfdfd',
  },
  tabBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 24,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'transparent',
  },
  tabBtnText: {
    fontFamily: 'pre400',
    fontSize: 10,
    color: '#b1b1b1',
    letterSpacing: -0.2,
    lineHeight: 10,
  },
  cardImg: {
    position: 'relative',
    width: 120,
    height: 130,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardGrade: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    paddingHorizontal: 6,
    borderBottomRightRadius: 8,
    backgroundColor: '#b1b1b1',
  },
  cardGradeText: {
    fontFamily: 'pre700',
    fontSize: 8,
    color: '#ffffff',
    letterSpacing: 0.32,
    lineHeight: 8,
  },
  cardGroup: {
    fontFamily: 'pre400',
    fontSize: 10,
    color: '#7b7b7b',
    letterSpacing: -0.2,
    lineHeight: 16,
  },
  cardName: {
    fontFamily: 'pre700',
    fontSize: 14,
    color: '#313131',
    letterSpacing: -0.28,
    lineHeight: 18,
  },
  cardPercent: {
    fontFamily: 'pre400',
    fontSize: 10,
    color: '#f4933a',
    letterSpacing: -0.48,
    lineHeight: 12,
  },
});
