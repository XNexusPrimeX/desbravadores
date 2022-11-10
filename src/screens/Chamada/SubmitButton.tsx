import styled from 'styled-components/native';
import React from 'react';

let selectedUser: string;
export const selectedTableOptions: { [key: string]: number } = {};

export const setSelectedUser = (user: string) => selectedUser = user;

const Button = styled.TouchableOpacity`
    width: 120px;
    height: 60px;

    border-radius: 50px;
    background-color: ${props => props.theme.primary};

    position: absolute;
    bottom: 10%;
    right: 5%;

    justify-content: center;
    align-items: center;
`;
const ButtonText = styled.Text`
    
`

const SubmitButton: React.FC<{ placeholder: string }> = ({ placeholder }) => {
    function submit() {
        alert(`name: ${selectedUser}\nobject: ${JSON.stringify(selectedTableOptions)}`)
    }
    return <Button onPress={submit}><ButtonText>{placeholder}</ButtonText></Button>
}

export default SubmitButton;