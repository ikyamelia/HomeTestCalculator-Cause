import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {CheckBox} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function App() {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');

  const [result, setResult] = useState();

  const validateCheck = () => {
    let count = 0;
    if (isSelected1) {
      count++;
    }
    if (isSelected2) {
      count++;
    }
    if (isSelected3) {
      count++;
    }
    count > 1;
  };

  const plus = () => {
    if (validateCheck()) {
      var res = 0;
      if (isSelected1) {
        if (res === 0) {
          res = parseInt(number1);
        } else {
          res += parseInt(number1);
        }
      }
      if (isSelected2) {
        if (res === 0) {
          res = parseInt(number2);
        } else {
          res += parseInt(number2);
        }
      }
      if (isSelected3) {
        if (res === 0) {
          res = parseInt(number3);
        } else {
          res += parseInt(number3);
        }
      }
      setResult(res);
    } else {
      setResult('Error');
    }
  };

  const minus = () => {
    if (validateCheck()) {
      var res = 0;
      if (isSelected1) {
        if (res === 0) {
          res = parseInt(number1);
        } else {
          res -= parseInt(number1);
        }
      }
      if (isSelected2) {
        if (res === 0) {
          res = parseInt(number2);
        } else {
          res -= parseInt(number2);
        }
      }
      if (isSelected3) {
        if (res === 0) {
          res = parseInt(number3);
        } else {
          res -= parseInt(number3);
        }
      }
      setResult(res);
    } else {
      setResult('Error');
    }
  };

  const multiple = () => {
    if (validateCheck()) {
      var res = 0;
      if (isSelected1) {
        if (res === 0) {
          res = parseInt(number1);
        } else {
          res *= parseInt(number1);
        }
      }
      if (isSelected2) {
        if (res === 0) {
          res = parseInt(number2);
        } else {
          res *= parseInt(number2);
        }
      }
      if (isSelected3) {
        if (res === 0) {
          res = parseInt(number3);
        } else {
          res *= parseInt(number3);
        }
      }
      setResult(res);
    } else {
      setResult('Error');
    }
  };

  const divide = () => {
    if (validateCheck()) {
      var res = 0;
      if (isSelected1) {
        if (res === 0) {
          res = parseInt(number1);
        } else {
          res /= parseInt(number1);
        }
      }
      if (isSelected2) {
        if (res === 0) {
          res = parseInt(number2);
        } else {
          res /= parseInt(number2);
        }
      }
      if (isSelected3) {
        if (res === 0) {
          res = parseInt(number3);
        } else {
          res /= parseInt(number3);
        }
      }
      setResult(res);
    } else {
      setResult('Error');
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.backgroundColor}>
        <View>
          <View style={styles.boxPertama}>
            <TextInput
              keyboardType="number-pad"
              value={number1}
              placeholder="Input number here..."
              onChangeText={setNumber1}
              style={styles.InputAngkaPertama}
            />
            <CheckBox
              center
              containerStyle={styles.containerCheckBox}
              onPress={() => setSelection1(!isSelected1)}
              checked={isSelected1}
            />
          </View>
          <View style={styles.boxPertama}>
            <TextInput
              keyboardType="number-pad"
              placeholder="Input number here..."
              value={number2}
              onChangeText={setNumber2}
              style={styles.InputAngkaPertama}
            />
            <CheckBox
              containerStyle={styles.containerCheckBox}
              onPress={() => setSelection2(!isSelected2)}
              checked={isSelected2}
            />
          </View>
          <View style={styles.boxPertama}>
            <TextInput
              keyboardType="number-pad"
              placeholder="Input number here..."
              value={number3}
              onChangeText={setNumber3}
              style={styles.InputAngkaPertama}
            />
            <CheckBox
              containerStyle={styles.containerCheckBox}
              onPress={() => setSelection3(!isSelected3)}
              checked={isSelected3}
            />
          </View>
          <View style={styles.boxOperator}>
            <Text onPress={plus} style={styles.textOperatorPlus}>
              +
            </Text>
            <Text onPress={minus} style={styles.textOperatorMinus}>
              -
            </Text>
            <Text onPress={multiple} style={styles.textOperatorMultiple}>
              *
            </Text>
            <Text onPress={divide} style={styles.textOperatorDivide}>
              /
            </Text>
          </View>
          <View style={styles.line} />
          <View>
            <View style={styles.result}>
              <Text style={styles.resultText}>Result:</Text>
              <Text style={styles.resultAngka}>{result}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxPertama: {
    flexDirection: 'row',
    width: widthPercentageToDP(100),
    paddingHorizontal: moderateScale(20),
  },
  InputAngkaPertama: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(20),
    borderRadius: 15,
    color: '#479aa3',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  backgroundColor: {
    height: '100%',
    backgroundColor: '#70cef6',
  },
  containerCheckBox: {
    backgroundColor: 'white',
    borderRadius: 15,
    alignSelf: 'center',
    padding: moderateScale(12),
  },
  textOperatorPlus: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    backgroundColor: '#c87dcf',
    color: '#94398b',
    borderRadius: 50,
    marginHorizontal: 20,
    fontSize: 26,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textOperatorMinus: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    backgroundColor: '#ffbe7b',
    color: '#ab7b3a',
    borderRadius: 50,
    marginHorizontal: 20,
    fontSize: 26,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textOperatorMultiple: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    backgroundColor: '#ff9bcf',
    color: '#764860',
    borderRadius: 50,
    marginHorizontal: 20,
    fontSize: 26,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textOperatorDivide: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    backgroundColor: '#7dffa2',
    color: '#356c45',
    borderRadius: 50,
    marginHorizontal: 20,
    fontSize: 26,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  boxOperator: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  line: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#479aa3',
    width: widthPercentageToDP(90),
    height: 3,
  },
  result: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#c87dcf',
    marginHorizontal: 20,
    borderRadius: 50,
    padding: moderateScale(15),
  },
  resultText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  resultAngka: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
