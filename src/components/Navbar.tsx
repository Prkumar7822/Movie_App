import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable } from "react-native";

const Navbar: React.FC = () => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
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
