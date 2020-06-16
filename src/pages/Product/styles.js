import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #F6F5F5;
`;

export const Header = styled.View`
    height: 96px;
    justify-content: flex-end;
    padding-left: 21px;
    padding-bottom: 22px;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const Title = styled.Text`
    margin-left: 20px;
    font-size: 34px;
    font-weight: bold;
    color: #2D0C57;
`;

export const SearchContainer = styled.View`
    margin-top: 27px;
    align-items: center;
    flex-direction: row;
    background: red;
    justify-content: center;
    height: 48px;
    border-radius: 27px;
    border-width: 0.3px;
    border-color: #9586A8;
    margin-left: 20px;
    margin-right: 20px;
    background: #fff;
    padding-left: 10px;
`;

export const Search = styled.TextInput`
    width: 90%;
    justify-content: center;
    padding-left: 12px;
    border-color: #9586A8;
    font-size: 17px;
`;

export const FilterContainer = styled.View`
    margin-top: 20px;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;

export const Divider = styled.View`
    height: 32px;
`;