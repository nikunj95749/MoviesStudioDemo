import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Profile/Profile.styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export function Profile() {
  const dispatch = useDispatch();

  const logoutUser = async () => {
    dispatch(logout());
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Button title={strings.profile.logout} onPress={logoutUser} />
    </View>
  );
}
