import styled from 'styled-components/native';

import background from '../../assets/background.png';

export const Container = styled.ScrollView.attrs({})`
  background: #f7f9fc;
`;

export const Background = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
`;

export const Profile = styled.View`
  padding: 50px 20px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const Balance = styled.View``;

export const BalancePrice = styled.Text`
  font-size: 36px;
  font-family: 'Poppins_600SemiBold';
  color: #fff;
`;

export const BalanceAvailable = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 16px;
  color: #85899a;
  margin-top: -2px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-left: 15px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
`;

export const Content = styled.View`
  flex: 1;
  background: #f7f9fc;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const YourCards = styled.View`
  padding: 25px;
`;

export const Deposits = styled.SafeAreaView`
  padding: 0 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #181e3b;
  font-size: 19px;
  font-family: 'Poppins_600SemiBold';
`;

export const AddLink = styled.Text`
  color: #2573d5;
  font-size: 16px;
  font-family: 'Poppins_600SemiBold';
`;

export const ItemsContainer = styled.View`
  background: #fff;
  margin-top: 10px;
  border-radius: 5px;
  padding: 15px;

  flex-direction: column;
  align-items: center;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 15px 0;
  background: #f7f9fc;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemLogo = styled.View`
  height: 40px;
  width: 40px;
  background: #f7f9fc;
  border-radius: 14px;
  margin-right: 15px;
`;

export const ItemContent = styled.View`
  flex: 1;
`;

export const ItemHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemName = styled.Text`
  font-size: 15px;
  font-family: 'Poppins_600SemiBold';
  color: #181e3b;
`;

export const ItemPrice = styled.Text`
  font-size: 15px;
  font-family: 'Poppins_600SemiBold';
  color: #181e3b;
`;

export const ItemBody = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemSerial = styled.Text`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: #85899a;
`;

export const ItemDate = styled.Text`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: #85899a;
`;
