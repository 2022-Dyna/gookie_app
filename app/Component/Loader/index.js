import {Image, View} from 'react-native';

export default function Loader(props) {
  const {type} = props;

  return (
    // type: full | trans | small
    <View
      style={
        type === 'small'
          ? {
              justifyContent: 'center',
              alignItems: 'center',
            }
          : type === 'full'
          ? {
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }
          : {
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              flex: 1,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0)',
              zIndex: 100,
            }
      }>
      <Image
        source={
          type === 'small'
            ? require('../../img/loading2.gif')
            : require('../../img/loading.gif')
        }
        resizeMode={'contain'}
        style={
          type === 'small' ? {width: 50, height: 50} : {width: 100, height: 100}
        }
      />
    </View>
  );
}
