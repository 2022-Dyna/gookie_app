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
      <View>
        <Text>다음</Text>
      </View>
    </TouchableOpacity>
  );
}
