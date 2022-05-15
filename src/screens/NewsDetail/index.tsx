import React from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import styles from './styles'

export default function NewsDetail({ navigation, route }) {
  const { author, date, description, title, imgPath, } = route.params;
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={[styles.image, { width: width - 40, height: height / 3 }]} source={{ uri: imgPath }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={[styles.meta, { fontWeight: "600" }]}>{author}</Text>
      <Text style={styles.meta}>{new Date(date).toLocaleDateString()}</Text>
    </View>
  )
}
