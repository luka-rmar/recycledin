import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const BoxImage = styled.View`
  width: 100%;
  height: 364px;
  position: relative;
  justify-content: center;
  align-items: center;
`;
export const BackgroundImage = styled.ImageBackground`
  height: 100%;
  width: 100%;
  position: absolute;
`;
export const ImageLogo = styled.Image``;
export const TextLogo = styled.Text`
  font-size: 19px;
  color: #ffffff;
  font-family: 'WorkSans-SemiBold';
`;

export const BoxProfile = styled.View`
  flex: 1;
  align-items: center;
  padding: 18px 6px;
`;
export const ChooseYourProfile = styled.TouchableOpacity`
  margin-bottom: 28px;
  padding: 2px 2px;
`;
export const TextChooseYourProfile = styled.Text`
  font-size: 20px;
  font-family: 'WorkSans-Medium';
`;
export const BoxProfileButtons = styled.View`
  width: 100%;
`;

export const BoxButtonForBorder = styled.View`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  border-width: 2px;
  border-color: #000;
  border-radius: 3px;
`;
export const ButtonCollaborator = styled(RectButton)`
  width: 100%;
  height: 58px;
  padding: 0 15px 0 17px;
  flex-direction: row;

  align-items: center;
`;
export const TextCollaborator = styled.Text`
  font-size: 20px;
  color: #000000;
  margin-right: auto
  font-family: 'WorkSans-Medium';
`;

export const ButtonNext = styled(RectButton)`
  height: 58px;
  background: #bfbfbf;
  justify-content: center;
  align-items: center;
  margin: 0 48px 8px 48px;
  border-radius: 4px;
`;
export const TextButtonNext = styled.Text`
  font-family: 'WorkSans-Regular';
  font-size: 20px;
  color: #fff;
`;
