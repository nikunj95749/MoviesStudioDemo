import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/redux/actions/UserActions';
import { ErrorView } from '@/components';
import { styles } from '@/screens/Login/Login.styles';
import { errorsSelector } from '@/redux/selectors/ErrorSelectors';
import { shadow } from '@/theme';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export function Login() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const errors = useSelector((state) => errorsSelector([TYPES.LOGIN], state), shallowEqual);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '459079798367-qntehehtf30qc7v6s37nm6f7ittfco45.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const _signIn = async () => {
    try {
      // await GoogleSignin.hasPlayServices();
      const { user, idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      dispatch(login(idToken, user?.id));
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('error====== ', error.code);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.formContainer, shadow.primary, { backgroundColor: colors.primary }]}>
        <ErrorView errors={errors} />
        <GoogleSigninButton
          style={{ width: '100%', height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
        />
      </View>
    </View>
  );
}
