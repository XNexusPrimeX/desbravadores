import React from "react";
import { View, Text } from "react-native";
import { Page } from "../../../App";

const Perfil: Page = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>perfil Screen</Text>
        </View>
    );
}

export default Perfil;