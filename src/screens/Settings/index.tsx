import React from 'react'
import { SafeAreaView, Switch, Text, useColorScheme, View, } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { AppContext } from '../../contexts';
import { useTheme } from '@react-navigation/native';
import styles from './styles';


export default function Settings() {
  const { language, mode, setGlobalState } = React.useContext(AppContext);
  const { colors } = useTheme();
  console.log({ mode });
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
      <Picker
        selectedValue={language}
        style={{ ...styles.picker, color: colors.text, borderColor: colors.text, }}
        dropdownIconColor={colors.text}
        onValueChange={(itemValue, itemIndex) =>
          setGlobalState({ language: itemValue, mode: mode })
        }>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="French" value="fr" />
      </Picker>
    </SafeAreaView >
  )
}
