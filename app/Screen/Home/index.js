import {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import {commonStyles} from '../../common/index';

export default function Home({navigation}) {
  const datas1 = [
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
  const datas2 = [
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
  const datas3 = [
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

  const [bestTab, setBestTab] = useState(0);

  return (
    <View>
      <ScrollView>
        <View style={{width: '100%', height: 160}}>
          <Image
            source={require('../../img/banner.png')}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{backgroundColor: '#f8f7f7'}}>
          {/* 이번주 소통왕 */}
          <View style={{backgroundColor: '#ffffff'}}>
            <View style={styles.titBox}>
              <Text style={[styles.title]}>이번주 소통왕 💬</Text>
              <Text style={[commonStyles.mt8]}>
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
                            }}>
                            <Text style={styles.cardName}>{item.name}</Text>
                            <View style={{flexDirection: 'row'}}>
                              <Text
                                style={[
                                  styles.cardPercent,
                                  {fontSize: 24, fontWeight: 'bold'},
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
              <TouchableOpacity activeOpacity={1}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 48,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#b1b1b1',
                      lineHeight: 15,
                    }}>
                    모든 의원 보기
                  </Text>
                  <Icons.ChevronRightIcon color="#b1b1b1" size={15} />
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
                                {fontWeight: 'bold', color: '#f4993a'},
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
                                {fontWeight: 'bold', color: '#f4993a'},
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
                                {fontWeight: 'bold', color: '#f4993a'},
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
                      <TouchableOpacity activeOpacity={1}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 8,
                          }}>
                          <View style={{width: 24}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: '#313131',
                              }}>
                              {index + 1}
                            </Text>
                          </View>
                          <View style={{width: 48, paddingRight: 8}}>
                            <Text
                              numberOfLines={1}
                              style={{fontSize: 12, color: '#313131'}}>
                              {item.name}
                            </Text>
                          </View>
                          <View style={{flex: 1}}>
                            <Text
                              numberOfLines={1}
                              style={{fontSize: 12, color: '#7b7b7b'}}>
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
                                size={10}
                                color="#d0d0d0"
                                style={{marginRight: 8}}
                              />
                              <Text style={{fontSize: 12, color: '#b1b1b1'}}>
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
              <Text style={[commonStyles.mt8]}>
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
                      <TouchableOpacity activeOpacity={1}>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#313131',
  },
  desc: {
    fontSize: 12,
    color: '#b1b1b1',
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
    fontSize: 12,
    color: '#b1b1b1',
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
  tabBtnText: {fontSize: 10, color: '#b1b1b1'},
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
    fontSize: 8,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  cardGroup: {
    fontSize: 10,
    color: '#7b7b7b',
    marginBottom: 4,
  },
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#313131',
  },
  cardPercent: {
    fontSize: 14,
    color: '#f4933a',
    lineHeight: 24,
  },
});
