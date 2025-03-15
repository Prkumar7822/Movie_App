// App.js
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import Navbar from '../components/Navbar';
const { width } = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    title: 'Popular on Netflix',
    data: [
      { id: '101', image: require('../assests/Movies/Jumangi.png') },
      {
        id: '102',
        image: require('../assests/Movies/Wakanda.png'),
      },
      {
        id: '103',
        image: require('../assests/Movies/Dolittle.png'),
      }
    
    ],
  },
  {
    id: '2',
    title: 'Trending Now',
    data:[
      {id:'201',image:require('../assests/Movies/FightRisk.png')},
    ]
    
  },
];

const NetflixHomePage = () => {
  const renderItem = ({ item }:any) => (
    <Image source={item.image} style={styles.movieImage} />
  );

  const renderCategory = ({ item }:any) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <FlatList
        horizontal
        data={item.data}
        renderItem={renderItem}
        keyExtractor={(movie) => movie.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <Navbar/>
      <ScrollView>
        <FlatList
          data={DATA}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 16,
    backgroundColor: '#000',
  },
  headerTitle: {
    color: '#E50914',
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
  },
  movieImage: {
    width: width * 0.3,
    height: width * 0.45,
    marginHorizontal: 8,
    borderRadius: 8,
  },
});

export default NetflixHomePage;
