import React from "react";
import { View, Text } from "react-native";
import { Page } from "../../../App";

const Home: Page = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
        </View>
    );
}

export default Home;