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
import {WebView} from "react-native-webview";

export default function WebViewPage({navigation,route}) {


  return (
    <View>
      <WebView
          originWhitelist={['http://*', 'https://*', 'intent://*']}
          source={{ uri:'https://www.naver.com' }}
          containerStyle={{width:'100%',height:'100%'}}
          style={{
            height:500,
            width:500,
            opacity:0.99,
            minHeight:1,
          }}
        // source={{ uri: route.params.link }}
      />
      <View>
        <Text>
          test
        </Text>
      </View>
    </View>
  );
}

