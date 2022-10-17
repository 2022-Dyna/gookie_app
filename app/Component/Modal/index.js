import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {commonStyles} from '../../common/index';

export default function ModalPop() {
  return (
    <Modal transparent={true} visible={false} onRequestClose={() => {}}>
      <View style={commonStyles.modalWrap}>
        <View style={commonStyles.modalView}>
          <View style={commonStyles.modalTextWrap}>
            <Text style={[commonStyles.modalTitle, commonStyles.mb24]}>
              모달 타이틀
            </Text>
            <Text style={commonStyles.modalDesc}>
              모달 내용{'\n'}
              모달 내용
            </Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={commonStyles.modalBtn}>
              <Text style={commonStyles.modalBtnText}>모달 버튼</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
