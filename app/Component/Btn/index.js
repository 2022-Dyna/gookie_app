import {View, Text, TouchableOpacity} from 'react-native';
import {commonStyles} from '../../common/index';

export default function Btn() {
  /*
    Default : View {commonStyles.btnDefault}, Text {commonStyles.btnTextDefault}
    OrangeBg : View {[commonStyles.btnDefault, commonStyles.btnBgColor]}, Text {commonStyles.btnTextDefault}
    GrayLine : View {[commonStyles.btnDefault, commonStyles.btnLine]}, Text {[commonStyles.btnTextDefault, commonStyles.btnTextColor1]}
    OrangeLine : View {[commonStyles.btnDefault, commonStyles.btnLine, commonStyles.btnLineColor]}, Text {[commonStyles.btnTextDefault, commonStyles.btnTextColor2]}
  */

  return (
    <TouchableOpacity>
      <View style={commonStyles.btnDefault}>
        <Text style={commonStyles.btnTextDefault}>버튼 예시</Text>
      </View>
    </TouchableOpacity>
  );
}
