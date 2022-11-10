import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { setSelectedUser } from './SubmitButton';
import { Input, InputSuggestions, Suggestion } from './styles';

const names = [
    'Nícolas Estevão',
    'Gabriella Nogueira',
    'Denise Moraes',
    'Lucas Mitchell',
    'Nikollas Mitchell'
]

const simplifyText = (t: string) => t
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()

let notFound: boolean = false

const SearchInput: React.FC<{ placeholder: string }> = ({ placeholder }) => {
    const [searching, setSearching] = useState<string>();
    const filteredSearch = names.filter(n => {
        if(!searching) return;
        
        notFound = false
        const simplifiedName = simplifyText(n);
        const simplifiedSearch = simplifyText(searching);

        if(simplifiedName === simplifiedSearch) return false;
        if(simplifiedName.includes(simplifiedSearch)) return true;
        notFound = true;
    });

    function onSelectedUser(text: string): void {
        setSearching(text);
        setSelectedUser(text);
    }

    return <View style={{ flex: 0, width: '100%', alignItems: 'center' }}>
        <Input
            placeholder={placeholder}
            value={searching}
            onChangeText={setSearching}
        />
        
        <InputSuggestions hide={filteredSearch.length < 1}>{
            notFound
                ? <Text style={{color: '#ff1c46', fontSize: 10}}>Não encontrado</Text>
                : filteredSearch.map(item => {
                    return <Suggestion onPress={() => onSelectedUser(item)}>{item}</Suggestion>
                }).splice(0, 3)
        }</InputSuggestions>
    </View>
}

export default SearchInput;