// MovieDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const MovieDetailsScreen = ({ route }:any) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={movie.image} style={styles.movieImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.movieTitle}>{movie.name}</Text>
        <Text style={styles.movieDuration}>{movie.duration}</Text>
        <Text style={styles.movieDescription}>{movie.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  movieImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieDuration: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
  },
  movieDescription: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MovieDetailsScreen;