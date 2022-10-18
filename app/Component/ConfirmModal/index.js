import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {commonStyles} from '../../common/index';

export default function ConfirmModal(props) {

  const {
    btnBoolean,
    onPress,
    titleText,
    bodyText,
    btnText,
    transparent,
  } = props;

  return (
    <Modal transparent={transparent} visible={btnBoolean} onRequestClose={() => {}}>
      <View style={commonStyles.modalWrap}>
        <View style={commonStyles.modalView}>
          <View style={commonStyles.modalTextWrap}>
            <Text style={[commonStyles.modalTitle, commonStyles.mb24]}>
              {titleText}
            </Text>
            <Text style={commonStyles.modalDesc}>
              {bodyText}
            </Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <View style={commonStyles.modalBtn}>
              <Text style={commonStyles.modalBtnText}>{btnText}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
