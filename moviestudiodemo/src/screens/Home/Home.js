import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '@/screens/Home/Home.styles';
import ListHeader from '../../components/ListHeader';
import TopBar from '@/components/TopBar';
import { getTrendingAllListData, getTrendingListData } from '@/resources/baseServices/movies';
import { trandingAllSuccess, trandingMoviesSuccess } from '@/redux/actions/DashBoardActions';
import { getTrandingAll, getTrandingMovies } from '@/redux/selectors/DashBoardSelectors';
import TrendingMoviesList from './TrendingMoviesList';
import TrendingAllList from './TrendingAllList';
import { NAVIGATION } from '@/constants';

export function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const arrTrandingMovies = useSelector(getTrandingMovies);

  const arrTrendingAll = useSelector(getTrandingAll);

  const setTrendingListData = async () => {
    try {
      const res = await getTrendingListData();
      dispatch(trandingMoviesSuccess(res?.data?.results));
    } catch (error) {
      console.log('[Home] setTrendingListData error: ', error);
    }
  };

  const setTrendingAllListData = async () => {
    try {
      const res = await getTrendingAllListData();
      console.log('res?.data?.results===== ');
      dispatch(trandingAllSuccess(res?.data?.results));
    } catch (error) {
      console.log('[Home] setTrendingAllListData error: ', error);
    }
  };

  useEffect(() => {
    setTrendingListData();
    setTrendingAllListData();
  }, []);

  const onPressSearch = ()=>{
    navigation.navigate(NAVIGATION.search)
  }

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <TopBar onMenuPress={() => {}} onBellShow={() => {}} />
          <View style={styles.subContainer}>
            <ScrollView>
              <ListHeader title="Now Showing" style={styles.nowShowingHeader} onSearch={onPressSearch} />
              <TrendingMoviesList arrTrandingMovies={arrTrandingMovies} />
              <ListHeader title="Popular" style={styles.popularHeader} />
              <TrendingAllList arrTrendingAll={arrTrendingAll} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
