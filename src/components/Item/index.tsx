import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import styles from './styles';

type ItemProps = {
  author: string,
  date: string,
  description: string,
  title: string,
  imgPath: string,
  navigation: any,
}

export default function Item({ author, date, title, imgPath, description, navigation }: ItemProps) {
  const { height } = useWindowDimensions()
  const { colors } = useTheme();
  const onPress = () => {
    navigation.navigate('NewsDetail', { author, date, title, imgPath, description });
  }
  return (
    imgPath &&
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]} onPress={onPress}>{title}</Text>
      <Image resizeMode='contain' style={{ ...styles.image, height: height / 5 }} source={{ uri: imgPath }} />
    </View>

  )
}
