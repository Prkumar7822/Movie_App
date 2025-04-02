import React, { use,useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/route/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch } from "react-redux";
import { setToken } from "./src/Redux/slicer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   
      const fetchToken = async () => {
        try {
          const token = await AsyncStorage.getItem("token");
          if (token) {
            dispatch(setToken(token));
          }
        } catch (error) {
          console.error("Failed to fetch token:", error);
        }
      };

      fetchToken();
    },[]);
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;