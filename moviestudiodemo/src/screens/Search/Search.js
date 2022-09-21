import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '@/screens/Search/Search.styles';
import TopBar from '@/components/TopBar';
import {
  getSearchMovieData,
  getTrendingAllListData,
  getTrendingListData,
} from '@/resources/baseServices/movies';
import { trandingAllSuccess, trandingMoviesSuccess } from '@/redux/actions/DashBoardActions';
import { getTrandingAll } from '@/redux/selectors/DashBoardSelectors';
import SearchMoviesList from './SearchMoviesList';
import { useNavigation } from '@react-navigation/native';
import { BLACK } from '@/constants/colors';
import DelayInput from 'react-native-debounce-input';

export function Search() {
  const navigation = useNavigation();
  const [txtMovieName, setTxtMovieName] = useState('');

  const [arrMovieList, setArrMovieList] = useState([]);

  const onChangeText = async (value) => {
    try {
      setTxtMovieName(value);
      const res = await getSearchMovieData(value);
      setArrMovieList(res?.data?.results);
    } catch (error) {
      console.log('[Search] onChangeText error: ', value);
    }
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TopBar
          headingText="Search"
          backButtonTintColor={BLACK}
          onBack={() => {
            navigation.goBack();
          }}
          onMoreShow={() => {}}
        />

        <View style={styles.subContainer}>
          <DelayInput
            value={txtMovieName}
            minLength={3}
            onChangeText={onChangeText}
            delayTimeout={500}
            placeholder="Search Movies Name.."
            style={styles.txtSearch}
          />
          <View style={styles.listView}>
            <SearchMoviesList arrMovieList={arrMovieList} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
