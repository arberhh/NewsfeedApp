import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Item from '../../components/Item';
import getData from '../../services';

interface Item {
  author: string;
  title: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
}

export default function Home({ navigation }) {
  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    const populateData = async () => {
      try {
        const date = new Date().toLocaleDateString().replace("/", "-").replace("/", "-");
        const response = await getData("us", date);
        console.log({ articles: response });
        setData(response.articles);
      } catch (e) {
        console.log({ e });
      }
    }
    populateData()
  }, [navigation])

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          console.log({ item })
          const { author, publishedAt, title, content, urlToImage } = item;
          return (
            <Item author={author} date={publishedAt} title={title} description={content} imgPath={urlToImage} navigation={navigation} />
          )
        }}
      />
    </View>
  )
}
