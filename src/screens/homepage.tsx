// App.js
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image,Dimensions, TouchableOpacity, Modal } from 'react-native';
import { FlatList } from 'react-native';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { Model } from '../route/Navigation';
const { width } = Dimensions.get('window');


const DATA = [
  {
    id: '1',
    title: 'Popular on Netflix',
    data: [
      { id: '101', image: require('../assests/Movies/Jumangi.png'), name: 'Jumanji', duration: '2h 3m', description: 'A magical board game unleashes a world of adventure.' },
      { id: '102', image: require('../assests/Movies/Wakanda.png'), name: 'Black Panther: Wakanda Forever', duration: '2h 41m', description: 'The people of Wakanda fight to protect their home.' },
      { id: '103', image: require('../assests/Movies/Dolittle.png'), name: 'Dolittle', duration: '1h 41m', description: 'A doctor who can talk to animals embarks on an adventure.' },
    ],
  },
  {
    id: '2',
    title: 'Trending Now',
    data: [
      { id: '201', image: require('../assests/Movies/FightRisk.png'), name: 'Fight Risk', duration: '1h 30m', description: 'A thrilling action movie.' },
      { id: '202', image: require('../assests/Movies/Mufasa.png'), name: 'Mufasa: The Lion King', duration: '1h 50m', description: 'The origin story of Mufasa.' },
    ],
  },
];


const NetflixHomePage = () => {
  const navigation = useNavigation<NavigationProp<Model>>();
  
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => navigation.navigate('movieDetails', { movie: item })}>
       <Image source={item.image} style={styles.movieImage} />
    </TouchableOpacity>
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
    <Navbar navigation={navigation}/>
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
