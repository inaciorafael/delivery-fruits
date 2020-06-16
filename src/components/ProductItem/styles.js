import styled from 'styled-components/native';

export const Container = styled.View`
    height: 160px;
    flex-direction: row;
    padding: 16px 20px;
`;

export const ImageContainer = styled.View`
    flex: 1;
`;

export const InfoContainer = styled.View`
    flex: 1;
    padding-left: 20px;
`;

export const TextItem = styled.Text`
    font-size: 18px;
    color: #2D0C57;
`;

export const TextPrice = styled.Text`
    color: #9586A8;
    margin-top: 12px;    
`;

export const Bold = styled.Text`
    color: #2D0C57;
    font-weight: bold;
    font-size: 22px;
`;

export const RowContainer = styled.View`
    flex-direction: row; 
    margin-top: 20px;
    margin-right: 20px;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const Button = styled.TouchableOpacity`
    background: ${props => props.color};
    height: 35px;
    width: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;