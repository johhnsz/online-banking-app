import React from 'react';
import Action from '../../components/Action';

import {
  Container,
  Background,
  Profile,
  Balance,
  BalancePrice,
  BalanceAvailable,
  User,
  Avatar,
  Actions,
  Content,
  YourCards,
  Deposits,
  Header,
  Title,
  AddLink,
  ItemsContainer,
  Separator,
  Item,
  ItemLogo,
  ItemContent,
  ItemHeader,
  ItemName,
  ItemPrice,
  ItemBody,
  ItemSerial,
  ItemDate,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Background>
        <Profile>
          <Balance>
            <BalancePrice>$5,990.00</BalancePrice>
            <BalanceAvailable>Saldo diponível</BalanceAvailable>
          </Balance>

          <User>
            <Avatar
              source={{
                uri:
                  'https://scontent.fpoa24-1.fna.fbcdn.net/v/t1.0-9/68430394_1489593794516547_3954781537987198976_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=1xBbN-nlGzgAX-It4K-&_nc_ht=scontent.fpoa24-1.fna&oh=0a412f93f1324dc8ddd864d948bb2bdd&oe=5F40B85F',
              }}
            />
          </User>
        </Profile>

        <Actions>
          <Action icon="dollar-sign" text="Depositar" />
          <Action icon="git-pull-request" text="Negociar" />
          <Action icon="file" text="Histórico" />
          <Action icon="edit" text="Trocas" />
        </Actions>

        <Content>
          <YourCards>
            <Header>
              <Title>Seus cartões</Title>
              <AddLink>Add</AddLink>
            </Header>
            <ItemsContainer>
              <Item>
                <ItemLogo />
                <ItemContent>
                  <ItemHeader>
                    <ItemName>Visa Master</ItemName>
                    <ItemPrice>$10000.00</ItemPrice>
                  </ItemHeader>
                  <ItemBody>
                    <ItemSerial>**7546</ItemSerial>
                    <ItemDate>01/22</ItemDate>
                  </ItemBody>
                </ItemContent>
              </Item>
              <Separator />
              <Item>
                <ItemLogo />
                <ItemContent>
                  <ItemHeader>
                    <ItemName>Mastercard</ItemName>
                    <ItemPrice>$1000.00</ItemPrice>
                  </ItemHeader>
                  <ItemBody>
                    <ItemSerial>**4987</ItemSerial>
                    <ItemDate>29/07</ItemDate>
                  </ItemBody>
                </ItemContent>
              </Item>
            </ItemsContainer>
          </YourCards>
          <Deposits>
            <Header>
              <Title>Depósitos</Title>
              <AddLink>Add</AddLink>
            </Header>
            <ItemsContainer>
              <Item>
                <ItemLogo />
                <ItemContent>
                  <ItemHeader>
                    <ItemName>For 5 years</ItemName>
                    <ItemPrice>$1250.00</ItemPrice>
                  </ItemHeader>
                  <ItemBody>
                    <ItemSerial>13.02.2003</ItemSerial>
                    <ItemDate>Rate 5%</ItemDate>
                  </ItemBody>
                </ItemContent>
              </Item>
              <Separator />
              <Item>
                <ItemLogo />
                <ItemContent>
                  <ItemHeader>
                    <ItemName>For 5 years</ItemName>
                    <ItemPrice>$1250.00</ItemPrice>
                  </ItemHeader>
                  <ItemBody>
                    <ItemSerial>13.02.2003</ItemSerial>
                    <ItemDate>Rate 5%</ItemDate>
                  </ItemBody>
                </ItemContent>
              </Item>
            </ItemsContainer>
          </Deposits>
        </Content>
      </Background>
    </Container>
  );
};

export default Home;
