import {useState} from 'react';
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
    btnText2 = null,
    onCancel = () => {},
  } = props;
  const [btnPress, setBtnPress] = useState(false);

  return (
    <Modal
      transparent={transparent}
      visible={btnBoolean}
      onRequestClose={() => {}}>
      <View style={commonStyles.modalWrap}>
        <View style={commonStyles.modalView}>
          <View style={commonStyles.modalTextWrap}>
            <Text style={[commonStyles.modalTitle, commonStyles.mb24]}>
              {titleText}
            </Text>
            <Text style={commonStyles.modalDesc}>{bodyText}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {btnText2 !== null && (
              <View style={{flex: 1}}>
                <TouchableOpacity activeOpacity={1} onPress={onCancel}>
                  <View
                    style={[
                      commonStyles.modalBtn,
                      commonStyles.modalBtnGrayColor,
                    ]}>
                    <Text style={commonStyles.modalBtnText}>{btnText2}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            <View style={{flex: 1}}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                onPressIn={() => setBtnPress(true)}
                onPressOut={() => setBtnPress(false)}>
                <View
                  style={
                    !btnPress
                      ? [commonStyles.modalBtn]
                      : [commonStyles.modalBtn, commonStyles.modalBtnPressColor]
                  }>
                  <Text style={commonStyles.modalBtnText}>{btnText}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
