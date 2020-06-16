import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const CardBuy = styled.View`
    background: red;
    height: 100%;
    width: 100%;
    margin-top: 328px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    margin-bottom: 30px;
    position: absolute;
    background: #F6F5F5;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    color: #2D0C57;
    margin-left: 20px;
`;

export const TextPrice = styled.Text`
    font-size: 24px;
    color: #9586A8;
    margin-top: 16px;
    margin-left: 20px;
`;

export const Bold = styled.Text`
    font-size: 32px;
    color: #2D0C57;
    font-weight: bold;
`;

export const TextGr = styled.Text`
    font-size: 17px;
    margin-left: 20px;
    margin-top: 8px;
    color: #06BE77;
`;

export const Country = styled.Text`
    margin-top: 32px;
    margin-left: 20px;
    font-weight: bold;
    font-size: 22px;
    color: #2D0C57;
`;

export const Description = styled.Text`
    font-size: 17px;
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: left;
    color: #9586A8;
`;

export const ButtonsContainer = styled.View`
    margin-top: 56px;
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonLike = styled.TouchableOpacity`
    background: #fff;
    height: 50px;
    width: 70px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border-width: 0.3px;
    border-color: #D9D0E3;
`;

export const ButtonBuy = styled.TouchableOpacity`
    background: #06BE77;
    height: 50px;
    width: 275px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const BuyText = styled.Text`
    color: #fff;
    font-size: 15px;
    margin-left: 16px;
    font-weight: bold;
`;