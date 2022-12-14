import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  inner: {
    paddingHorizontal: 24,
  },
  // main_title
  maintit: {
    fontFamily: 'pre700',
    fontSize: 24,
    textAlign: 'left',
    color: '#313131',
    letterSpacing: -0.96,
    lineHeight: 28,
  },
  // input, label
  labeltext: {
    fontFamily: 'pre300',
    fontSize: 12,
    color: '#7b7b7b',
    letterSpacing: -0.24,
    lineHeight: 16,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontFamily: 'pre400',
    fontSize: 14,
    color: '#313131',
    letterSpacing: -0.28,
  },
  inputfocus: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderBottomColor: '#f4933a',
    borderTopColor: '#f4933a',
    borderLeftColor: '#f4933a',
    borderRightColor: '#f4933a',
    paddingHorizontal: 20,
    fontFamily: 'pre400',
    fontSize: 14,
    color: '#313131',
    letterSpacing: -0.28,
  },
  // validText
  validText: {
    fontFamily: 'pre400',
    fontSize: 12,
    color: '#ff0000',
    letterSpacing: -0.24,
    lineHeight: 16,
  },
  // btn
  btnDefault: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#d0d0d0',
    textAlign: 'center',
  },
  btnLine: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    backgroundColor: 'transparent',
  },
  btnLineColor: {
    borderColor: '#f4933a',
  },
  btnBgColor: {
    backgroundColor: '#f4933a',
  },
  btnPressColor: {
    backgroundColor: '#d87419',
  },
  btnTextDefault: {
    fontFamily: 'pre700',
    fontSize: 14,
    color: '#ffffff',
    letterSpacing: -0.28,
  },
  btnTextColor1: {
    color: '#b1b1b1',
  },
  btnTextColor2: {
    color: '#f4933a',
  },
  // modal
  modalWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '85%',
    maxWidth: 360,
    margin: 24,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  modalTextWrap: {
    paddingHorizontal: 12,
    paddingVertical: 40,
  },
  modalTitle: {
    fontFamily: 'pre700',
    textAlign: 'center',
    fontSize: 16,
    color: '#313131',
    letterSpacing: -0.32,
    lineHeight: 20,
  },
  modalDesc: {
    fontFamily: 'pre400',
    textAlign: 'center',
    fontSize: 12,
    color: '#313131',
    letterSpacing: -0.24,
    lineHeight: 18,
  },
  modalBtn: {
    fontFamily: 'pre700',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f4933a',
    letterSpacing: -0.28,
  },
  modalBtnPressColor: {
    backgroundColor: '#d87419',
  },
  modalBtnGrayColor: {
    backgroundColor: '#d0d0d0',
  },
  modalBtnText: {
    fontFamily: 'pre700',
    fontSize: 14,
    color: '#ffffff',
    letterSpacing: -0.28,
  },
  headerTit: {
    fontSize: 16,
    fontFamily: 'pre700',
    letterSpacing: -0.32,
    color: '#313131',
    textAlign: 'center',
  },
  // loader
  loaderWrap: {
    position: 'relative',
    height: '100%',
  },
  // margin
  mb8: {
    marginBottom: 8,
  },
  mb16: {
    marginBottom: 16,
  },
  mb24: {
    marginBottom: 24,
  },
  mb32: {
    marginBottom: 32,
  },
  mb40: {
    marginBottom: 40,
  },
  mb48: {
    marginBottom: 48,
  },
  mb56: {
    marginBottom: 56,
  },
  mb64: {
    marginBottom: 64,
  },
  mb72: {
    marginBottom: 72,
  },
  mb80: {
    marginBottom: 80,
  },
  mb88: {
    marginBottom: 88,
  },
  mb96: {
    marginBottom: 96,
  },
  mt8: {
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  mt24: {
    marginTop: 24,
  },
  mt32: {
    marginTop: 32,
  },
  mt40: {
    marginTop: 40,
  },
  mt48: {
    marginTop: 48,
  },
  mt56: {
    marginTop: 56,
  },
  mt64: {
    marginTop: 64,
  },
  mt72: {
    marginTop: 72,
  },
  mt80: {
    marginTop: 80,
  },
  mt88: {
    marginTop: 88,
  },
  mt96: {
    marginTop: 96,
  },
  ml8: {
    marginLeft: 8,
  },
  ml16: {
    marginLeft: 16,
  },
  ml24: {
    marginLeft: 24,
  },
  ml32: {
    marginLeft: 32,
  },
  ml40: {
    marginLeft: 40,
  },
  ml48: {
    marginLeft: 48,
  },
  ml56: {
    marginLeft: 56,
  },
  ml64: {
    marginLeft: 64,
  },
  ml72: {
    marginLeft: 72,
  },
  ml80: {
    marginLeft: 80,
  },
  ml88: {
    marginLeft: 88,
  },
  ml96: {
    marginLeft: 96,
  },
  mr8: {
    marginRight: 8,
  },
  mr16: {
    marginRight: 16,
  },
  mr24: {
    marginRight: 24,
  },
  mr32: {
    marginRight: 32,
  },
  mr40: {
    marginRight: 40,
  },
  mr48: {
    marginRight: 48,
  },
  mr56: {
    marginRight: 56,
  },
  mr64: {
    marginRight: 64,
  },
  mr72: {
    marginRight: 72,
  },
  mr80: {
    marginRight: 80,
  },
  mr88: {
    marginRight: 88,
  },
  mr96: {
    marginRight: 96,
  },
});
