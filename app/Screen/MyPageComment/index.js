import {View, Text, TouchableOpacity, ScrollView, StyleSheet, FlatList} from 'react-native';


export default function MyPageComment({ navigation }) {

    const data = [
      {
        name:"강기윤",
        group:"국민의힘",
        date:"22.10.26",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리1"
      },
      {
        name:"강기윤2",
        group:"국민의힘2",
        date:"22.10.27",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리2"
      },
      {
        name:"강기윤3",
        group:"국민의힘2",
        date:"22.10.28",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리3"
      },
      {
        name:"강기윤2",
        group:"국민의힘2",
        date:"22.10.27",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리2"
      },
      {
        name:"강기윤3",
        group:"국민의힘2",
        date:"22.10.28",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리3"
      },
      {
        name:"강기윤2",
        group:"국민의힘2",
        date:"22.10.27",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리2"
      },
      {
        name:"강기윤3",
        group:"국민의힘2",
        date:"22.10.28",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리3"
      },
      {
        name:"강기윤2",
        group:"국민의힘2",
        date:"22.10.27",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리2"
      },
      {
        name:"강기윤3",
        group:"국민의힘2",
        date:"22.10.28",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리3"
      },
      {
        name:"강기윤2",
        group:"국민의힘2",
        date:"22.10.27",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리2"
      },
      {
        name:"강기윤3",
        group:"국민의힘2",
        date:"22.10.28",
        content:"우리 11월까지만 힘내자우리 11월까지만 힘내자우리3"
      },
    ]

    return (
        <View>
          <ScrollView>
            <View>
              <View style={{paddingVertical:16, }}>
                <Text style={styles.myCommentTit}>
                  내가 쓴 댓글
                </Text>
              </View>
              <FlatList 
                data={data}
                renderItem={({item}) => {
                  return (
                    <View style={{paddingHorizontal:24,}}>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.navigate('Detail')}
                      >
                        <View style={{paddingVertical:24, borderBottomWidth:1, borderColor:"#eee"}}>
                          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                              <Text style={styles.myCommentName}>{item.name}</Text>
                              <Text style={styles.myCommentParty}>{item.group}</Text>
                            </View>
                            <View>
                              <Text style={styles.myCommentDay}>{item.date}</Text>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.myCommentContent} numberOfLines={1} ellipsizeMode="tail">
                              {item.content}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )
                }}
              />
              
            </View>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  myCommentTit:{
    fontSize:16,
    fontWeight:"bold",
    letterSpacing:-0.32,
    color:"#313131",
    textAlign:"center",
  },
  myCommentName:{
    fontSize:14,
    fontWeight:"bold",
    letterSpacing:-0.28,
    color:"#454545",
    marginRight:16,
  },
  myCommentParty:{
    fontSize:12,
    fontWeight:"normal",
    letterSpacing:-0.24,
    color:"#b1b1b1"
  },
  myCommentDay:{
    fontSize:12,
    fontWeight:"normal",
    letterSpacing:-0.24,
    color:"#b1b1b1"
  },
  myCommentContent:{
    fontSize:12,
    fontWeight:"normal",
    letterSpacing:-0.24,
    color:"#7b7b7b",
    paddingTop:24,
    width:"95%"
  },
})
