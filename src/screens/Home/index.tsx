import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, SafeAreaView, Text, TextInput } from 'react-native';
import Item from '../../components/Item';
import { AppContext } from '../../contexts';
import getData from '../../services';
import styles from './styles';

interface Item {
  author: string;
  title: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
}

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Home({ navigation }) {
  const [data, setData] = useState<Item[]>([]);
  const [page, setPage] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { language } = React.useContext(AppContext);


  useEffect(() => {
    const populateData = async () => {
      try {
        const date = new Date().toLocaleDateString().replace("/", "-").replace("/", "-");
        const response = await getData(language, date, page, searchQuery);
        console.log({ articles: response });
        if (data.length === 0) {
          setData(response.articles);
        } else {
          setData(data => data.concat(response?.articles));
        }
      } catch (e) {
        console.log({ e });
      }
    }
    populateData()
  }, [navigation, searchQuery, page])

  useEffect(() => {
    const populateData = async () => {
      try {
        const date = new Date().toLocaleDateString().replace("/", "-").replace("/", "-");
        const response = await getData(language, date, 1, searchQuery);
        setData(response.articles);
      } catch (e) {
        console.log({ e });
      }
    }
    populateData()
  }, [language])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search/Filter"
        onChangeText={(text) => setSearchQuery(text)}
        placeholderTextColor="#999"
        value={searchQuery}
      />
      <FlatList
        data={data}
        ListEmptyComponent={<Text style={styles.emptyDataText}>No data</Text>}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListFooterComponent={<ActivityIndicator size='small' />}
        onEndReachedThreshold={0.5}
        onEndReached={() => setPage(page + 1)}
        renderItem={({ item }) => {
          console.log({ item })
          const { author = "", publishedAt = "", title = "", content = "", urlToImage = null } = item || {};
          return (
            <Item author={author} date={publishedAt} title={title} description={content} imgPath={urlToImage} navigation={navigation} />
          )
        }}
      />
    </SafeAreaView>
  )
}
