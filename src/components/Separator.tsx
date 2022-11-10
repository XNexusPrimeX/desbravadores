import React from 'react';
import { View, Text } from 'react-native';

const Separator: React.FC<{ text: string, paddingTop?: number, paddingBottom?: number }> = ({ text, paddingTop = 0, paddingBottom = 0 }) => {
    const DEFAULT_PADDING: number = 10;
    const COLOR = 'grey'

    return <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingTop: DEFAULT_PADDING + paddingTop,
        paddingBottom: DEFAULT_PADDING + paddingBottom,
        width: '90%'
    }}>
        <View style={{ flex: 1, height: 1, backgroundColor: COLOR }}/>
        <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ color: COLOR, fontSize: 10 }}>{ text }</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: COLOR }}/>
    </View>
}

export default Separator;