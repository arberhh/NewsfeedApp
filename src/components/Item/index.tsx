import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import styles from './styles';

type ItemProps = {
  author: string;
  date: string;
  description: string
  title: string,
  imgPath: string,
  navigation: any;
}

export default function Item({ author, date, title, imgPath, description, navigation }: ItemProps) {
  const { height } = useWindowDimensions()
  const onPress = () => {
    navigation.navigate('NewsDetail', { author, date, title, imgPath, description });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={onPress}>{title}</Text>
      <Image style={{ ...styles.image, height: height / 5 }} source={{ uri: imgPath }} />
    </View>
  )
}
