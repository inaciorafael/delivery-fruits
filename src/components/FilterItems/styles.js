import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${props => props.color};
    padding: 5px 16px;
    border-radius: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 8px;
`;

export const TextItem = styled.Text`
    font-size: 14px;
    color: ${props => props.color};
`;