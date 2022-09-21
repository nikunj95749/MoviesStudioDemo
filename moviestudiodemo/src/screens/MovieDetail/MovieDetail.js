import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native';
import { styles } from '@/screens/MovieDetail/MovieDetail.styles';
import { typography } from '@/theme';
import { TxtNormal } from '@/components/text/TxtNormal';
import MoviesTitle from './MoviesTitle';
import { WINDOW_WIDTH } from '@/constants/mixins';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { WHITE } from '@/constants/colors';
import ListHeader from '@/components/ListHeader';
import TopBar from '@/components/TopBar';
import { bookMark, playIcon } from '@/assets';
import Rating from '@/components/Rating';
import MovieTypes from '@/components/MovieTypes';
import { getCastData } from '@/resources/baseServices/movies';
import { BASE_IMAGE_PATH } from '@/constants/baseApi';

export function MovieDetail({ route }) {
  const { colors } = useTheme();
  const [arrCastData, setArrCastData] = useState([]);

  const navigation = useNavigation();

  const mediaDetails = route?.params?.item;

  const setCastData = async () => {
    try {
      const res = await getCastData(mediaDetails?.media_type, mediaDetails?.id);
      setArrCastData(res?.data?.cast);
      console.log('route Data: == ', res?.data?.cast);
    } catch (error) {
      console.log('[MovieDetail] setCastData error: ', error);
    }
  };

  useEffect(() => {
    setCastData();
  }, []);

  const TagValues = ({ tagName = '', value = '' }) => {
    return (
      <View style={{ flex: 1 }}>
        <TxtNormal
          title={tagName}
          style={{
            ...typography.mulishRegular,
            color: '#9C9C9C',
            marginLeft: 5,
            fontSize: RFPercentage(1.9),
          }}
        />
        <TxtNormal
          title={value}
          style={{
            ...typography.mulishRegular,
            marginLeft: 5,
            fontSize: RFPercentage(1.9),
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <ImageBackground
            source={{ uri: BASE_IMAGE_PATH + mediaDetails?.poster_path }}
            style={{ width: '100%', aspectRatio: 1.3}}
          >
            <TopBar
              onBack={() => {
                navigation.goBack();
              }}
              onMoreShow={() => {}}
            />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ alignItems: 'center', position: 'absolute' }}>
                <Image source={playIcon} style={{ height: 45, width: 45 }} />
                <TxtNormal
                  title={'Play Trailer'}
                  style={{
                    ...typography.mulishRegular,
                    fontSize: RFPercentage(2),
                    marginTop: 5,
                    color: WHITE,
                  }}
                />
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              width: '100%',
              marginTop: -20,
              paddingBottom: 20,
              paddingLeft: 20,
              backgroundColor: WHITE,
              borderTopStartRadius: 10,
              borderTopEndRadius: 10,
            }}
          >
            <View
              style={{ width: '100%', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}
            >
              <View style={{ flex: 1 }}>
                <MoviesTitle title={mediaDetails?.title ?? mediaDetails?.name} />
              </View>
              <Image style={{ height: 25, width: 25, marginRight: 20 }} source={bookMark} />
            </View>
            <Rating title={`${parseFloat(mediaDetails?.vote_average).toFixed(1)}/10 IMDb`} style={{ marginTop: 10 }} />
            <MovieTypes style={{ marginTop: 20 }} />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <TagValues tagName="Length" value="2h 28min" />
              <TagValues tagName="Language" value="English" />
              <TagValues tagName="Rating" value="PG-13" />
            </View>

            <ListHeader title="Description" style={{ marginTop: 25, marginBottom: 20 }} />
            <TxtNormal
              title={
                mediaDetails?.overview
              }
              style={{
                ...typography.mulishRegular,
                color: '#9C9C9C',
                marginTop: -10,
                fontSize: RFPercentage(1.9),
              }}
            />
            <ListHeader title="Cast" style={{ marginTop: 25, marginBottom: 20 }} />

            <FlatList
              data={arrCastData}
              style={{ width: '100%' }}
              horizontal={true}
              renderItem={({ item, index }) => (
                <View style={{ width: WINDOW_WIDTH * 0.25, marginRight: 15 }}>
                  <Image
                    source={{ uri: BASE_IMAGE_PATH + item?.profile_path }}
                    style={{
                      width: '100%',
                      aspectRatio: 1,
                      borderRadius: 5,
                    }}
                  />
                  <TxtNormal
                    title={item?.name}
                    style={{ ...typography.mulishRegular, marginTop: 10 }}
                  />
                </View>
              )}
              keyExtractor={(item) => item?.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

