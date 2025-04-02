import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from "react-native";
import { Model } from "../route/Navigation";
// Removed unused import
import { NavigationProp } from "@react-navigation/native";

// Removed unused type declaration


const Navbar = ({ navigation }: { navigation: NavigationProp<Model> }) => {
  // const navigation = useNavigation<NavigationProp<Props>>();

  const handleLoginPress = () => {
    navigation.navigate("login");
  };
  const handleProfilePress = () => {
    console.log("Profile Pressed!");
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Netflix</Text>
      <TouchableOpacity onPress={handleProfilePress}>
        <Image
          source={require("../assests/profile/profile.png")} // Replace with actual profile image URL
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Button onPress={() => handleLoginPress()} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
   padding: 15,
  },
  title: {
    color: '#E50914',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});

export default Navbar;
