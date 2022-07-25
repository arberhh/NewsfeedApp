import React, { useContext } from 'react'
import { SafeAreaView, Switch, Text, View, } from 'react-native'
import { useTheme } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { AppContext } from '../../contexts';
import { languages } from '../../constants/LanguageData';
import styles from './styles';


export default function Settings() {
  const { language, mode, setGlobalState } = useContext(AppContext);
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={{ ...styles.text, color: colors.text }}>Dark Mode</Text>
        <Switch
          trackColor={{ false: colors.text, true: colors.primary }}
          onValueChange={() => setGlobalState({ mode: mode === "dark" ? "light" : "dark", language: language })}
          value={mode === "dark"}
        />
      </View>
      <RNPickerSelect
        value={language}
        style={{
          inputIOS: { ...styles.picker, color: colors.text, borderColor: colors.text, },
          inputAndroid: { ...styles.picker, color: colors.text, borderColor: colors.text },
        }}
        placeholder={{}}
        onValueChange={(itemValue, itemIndex) =>
          setGlobalState({ language: itemValue, mode: mode })
        }
        itemKey={language}
        items={languages}
      />
    </SafeAreaView >
  )
}
