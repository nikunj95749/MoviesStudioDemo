import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const typography = StyleSheet.create({
  merriweatherRegular: {
    fontSize: RFPercentage(3),
    fontFamily: 'Merriweather-Regular',
  },
  merriweatherMedium: {
    fontSize: RFPercentage(3),
    fontFamily: 'Merriweather-Black',
  },
  merriweatherBold: {
    fontSize: RFPercentage(2.6),
    fontFamily: 'Merriweather-Bold',
  },
  mulishRegular: {
    fontSize: RFPercentage(1.6),
    fontFamily: 'Mulish-Regular',
  },
  mulishSemiBold: {
    fontSize: RFPercentage(2.2),
    fontFamily: 'Mulish-SemiBold',
    fontWeight:'700'
  },
  text: {
    fontSize: RFPercentage(16),
    fontWeight: '400',
  },
  label: {
    fontSize: RFPercentage(2),
    fontWeight: '700',
  },
  error: {
    fontSize: RFPercentage(14),
    fontWeight: '400',
  },
});
