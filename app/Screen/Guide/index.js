import {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {commonStyles} from '../../common';
import Loader from '../../Component/Loader';
import FastImage from 'react-native-fast-image';
import * as Icons from 'react-native-heroicons/outline';

export default function Guide({navigation}) {

  const [loading, setLoading] = useState(true)

  const width = Dimensions.get('window').width;

  
  

  return (
    <View style={commonStyles.loaderWrap}>
      {loading && <Loader type={"full"} />}
        <ScrollView>
          <View style={{height:50, paddingTop:13}}>
            <Text style={styles.myCommentTit}>사용 가이드</Text>
            <View style={{position:"absolute", left:16, top:13, zIndex:10,}}>
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
          <View style={{width:"100%"}}>
            <FastImage 
              source={require("../../img/guide_img.jpg")}
              style={{width:"100%", height:width * 7.23}}
              onLoadEnd={() => {
                setLoading(false)
              }}
            />
          </View>
        </ScrollView>
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
  },
});
