import {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Join() {
  const [step, setStep] = useState(0);

  return (
    <View>
      <View style={styles.basic}>
        <View>
          <Text style={styles.percentText}>{step + 1}/2</Text>
          <View style={styles.percentBar}>
            <View
              style={[
                styles.percentFill,
                step === 0 ? styles.percentFillHalf : styles.percentFillFull,
              ]}
            />
          </View>
        </View>
        <View>
          <Text>회원가입</Text>
          <Text>이름</Text>
          <TextInput value={'text'} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setStep(prev => prev + 1)}>
            <Text style={styles.buttonTextStyle}>다음</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>이메일</Text>
          <View>
            <TextInput />
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => setStep(prev => prev + 1)}>
              <Text style={styles.buttonTextStyle}>다음</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  percentText: {
    marginBottom: 4,
    textAlign: 'right',
    letterSpacing: -0.24,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#b1b1b1',
  },
  percentBar: {
    width: '100%',
    height: 4,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  percentFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#fda95c',
  },
  percentFillHalf: {
    width: '50%',
  },
  percentFillFull: {
    width: '100%',
  },
  btnCommonStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#f4933a',
    textAlign: 'center',
  },
  btnTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.28,
    color: '#ffffff',
  },
});
