import React from 'react';
import { Image, Text, View } from 'react-native';

type ItemProps = {
  author: string;
  date: string;
  description: string
  title: string,
  imgPath: string,
  navigation: any;
}

export default function Item({ author, date, title, imgPath, description, navigation }: ItemProps) {
  const onPress = () => {
    navigation.navigate('NewsDetail', { author, date, title, imgPath, description });
  }
  return (
    <View>
      <Text onPress={onPress}>{title}</Text>
      <Image source={require(imgPath)} />
    </View>
  )
}
