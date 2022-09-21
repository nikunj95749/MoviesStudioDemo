import React from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WINDOW_WIDTH } from '@/constants/mixins';
import { NAVIGATION } from '@/constants';
import { BASE_IMAGE_PATH } from '@/constants/baseApi';
import { typography } from '@/theme';
import { TxtNormal } from '@/components/text/TxtNormal';
import Rating from '@/components/Rating';
import MovieTypes from '@/components/MovieTypes';
import { clockIcon } from '@/assets';

const SearchMoviesList = ({ arrMovieList = [], style = {} }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={arrMovieList}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate(NAVIGATION.movieDetail, { item });
          }}
          style={styles.container}
        >
          <Image source={{ uri: BASE_IMAGE_PATH + item?.poster_path }} style={styles.poster} />
          <View style={styles.contentMainView}>
            <TxtNormal title={item?.title} style={typography.mulishSemiBold} />
            <Rating
              title={`${parseFloat(item?.vote_average).toFixed(1)}/10 IMDb`}
              style={styles.rate}
            />
            <MovieTypes />
            <View style={styles.contentSubView}>
              <Image source={clockIcon} style={styles.imgClock} />
              <TxtNormal title={'1h 47m'} style={styles.time} />
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item?.id}
    />
  );
};

export default SearchMoviesList;

export const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH * 0.25,
    marginRight: 15,
    marginTop: 15,
    flexDirection: 'row',
  },
  poster: {
    width: '100%',
    aspectRatio: 0.72,
    borderRadius: 5,
  },
  contentMainView: { height: '100%', marginLeft: 10 },
  contentSubView: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  imgClock: { height: 12, width: 12 },
  rate: { alignItems: 'center', marginTop: 7 },
  time: { ...typography.mulishRegular, marginLeft: 5 },
});
