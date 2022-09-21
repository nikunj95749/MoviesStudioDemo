import { BLACK, WHITE } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:WHITE
  },
  subContainer: {
    width:'100%',
    
    paddingLeft: 15,
    backgroundColor:WHITE
  },
  nowShowingHeader:{ marginTop: 20, marginBottom: 20 },
  popularHeader:{ marginTop: 30, marginBottom: 5 },
  txtSearch:{
    marginRight: 15,
    paddingLeft: 10,
    height: 40,
    borderColor: BLACK,
    borderWidth: 1.5,
  },
  listView:{ width: '100%', height: '90%' }
});
