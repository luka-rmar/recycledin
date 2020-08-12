import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PageAuth01 from '../pages/authentication/page-auth-01';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Auth.Screen name="PageAuth01" component={PageAuth01} />
  </Auth.Navigator>
);

export default AuthRoutes;
