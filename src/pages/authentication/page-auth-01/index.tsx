import React from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BoxImage,
  BackgroundImage,
  ImageLogo,
  TextLogo,
  BoxProfile,
  ChooseYourProfile,
  TextChooseYourProfile,
  BoxButtonForBorder,
  BoxProfileButtons,
  ButtonCollaborator,
  TextCollaborator,
  ButtonNext,
  TextButtonNext,
} from './styles';

import backgroundImg from '../../../assets/images/PageAuth01/backgroundImage.png';
import logo from '../../../assets/images/PageAuth01/logo.png';

const PageAuth01: React.FC = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Container>
        <BoxImage>
          <BackgroundImage source={backgroundImg} />
          <ImageLogo source={logo} />
          <TextLogo>TRANFORMANDO LIXO EM RIQUEZA</TextLogo>
        </BoxImage>
        <BoxProfile>
          <ChooseYourProfile>
            <TextChooseYourProfile>Escolha seu perfil</TextChooseYourProfile>
          </ChooseYourProfile>
          <BoxProfileButtons>
            <BoxButtonForBorder>
              <ButtonCollaborator>
                <TextCollaborator>Colaborador Físico</TextCollaborator>
                <Icon name="help-outline" color="#000" size={22} />
              </ButtonCollaborator>
            </BoxButtonForBorder>
            <BoxButtonForBorder>
              <ButtonCollaborator>
                <TextCollaborator>Colaborador Pessoa Jurídica</TextCollaborator>
                <Icon name="help-outline" color="#000" size={22} />
              </ButtonCollaborator>
            </BoxButtonForBorder>
            <BoxButtonForBorder>
              <ButtonCollaborator>
                <TextCollaborator>Colaborador Coletor</TextCollaborator>
                <Icon name="help-outline" color="#000" size={22} />
              </ButtonCollaborator>
            </BoxButtonForBorder>
            <BoxButtonForBorder>
              <ButtonCollaborator>
                <TextCollaborator>Colaborador Reciclador</TextCollaborator>
                <Icon name="help-outline" color="#000" size={22} />
              </ButtonCollaborator>
            </BoxButtonForBorder>
          </BoxProfileButtons>
        </BoxProfile>
        <ButtonNext>
          <TextButtonNext>Avançar</TextButtonNext>
        </ButtonNext>
      </Container>
    </ScrollView>
  );
};

export default PageAuth01;
