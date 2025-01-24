import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { EventRegister } from "react-native-event-listeners";
import React, { useState, useEffect } from "react";
import theme from "./theme/Theme";
import themeContext from "./theme/themeContext";

const Tab = createBottomTabNavigator();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listeners = EventRegister.addEventListener("ChangeTheme", (data) =>
      setDarkMode(data)
    );
    return () => {
      EventRegister.removeAllListeners(listeners);
    };
  }, [darkMode]);

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

export default App;
