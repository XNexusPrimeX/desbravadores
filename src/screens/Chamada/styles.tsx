import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
    margin-top: ${StatusBar.currentHeight}px;
    flex: 1;
    align-items: center;
`

export const HeaderTitle = styled.Text`
    margin-top: 5%;

    color: white;
    font-size: 20px;
`

export const Input = styled.TextInput.attrs({ placeholderTextColor: 'grey' })`
    width: 75%;
    height: 40px;
    border-radius: 50px;
    padding-left: 20px;
    
    color: ${prop => prop.theme.text};
    background-color: ${prop => prop.theme.card};
`

export const Table = styled.ScrollView`
    width: 90%;
`

export const RowContainer = styled.View`
    flex-direction: row;
    height: 45px;

    margin-bottom: 15px;
`

export const RowText: React.FC<{ text: string }> = ({ text }) => {
    const Container = styled.View`
        border-radius: 3px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        justify-content: center;
        flex-grow: 1;
        
        background-color: ${prop => prop.theme.card};
    `

    const Txt = styled.Text`
        color: white;
    ` 

    return <Container><Txt>{ `      ${text}` }</Txt></Container>
}

export const RowTouchableHighlight = styled.TouchableOpacity<{ isLastButton: boolean, isSelected: boolean }>`
    margin-left: 3px;

    width: 35px;

    border-radius: 3px;
    border-top-right-radius: ${ props => props.isLastButton ? 15 : 3 }px;
    border-bottom-right-radius: ${ props => props.isLastButton ? 15 : 3 }px;

    background-color: ${props => props.isSelected ? props.theme.primary : props.theme.card};

    justify-content: center;
    align-items: center;
`

export const RowTouchableText = styled.Text<{ isSelected: boolean }>`
    color: ${props => props.isSelected ? props.theme.card : 'grey'};
`

export const Suggestion = styled.Text`
    color: white;
    padding: 8px 0;
    width: 200px;
    text-align: center;
    text-decoration: underline;
`
export const InputSuggestions = styled.View<{ hide: boolean }>`
    width: 60%;
    align-items: center;
    padding: 5px 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const Space = styled.View`
    width: 100%;
    height: 160px;
`