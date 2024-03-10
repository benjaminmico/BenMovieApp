import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useAPI } from 'api';
import { Error, Loader, MovieDetail } from 'components';
import type { AppNavigationParamList } from 'navigation/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { MovieDetail as MovieDetailType } from 'types';
import { theme } from 'utils';

const MovieDetailScreen: React.FC = () => {
  const {
    params: { movie },
  } = useRoute<RouteProp<AppNavigationParamList, 'MovieDetail'>>();

  const { isLoading, error, data, refetch } = useAPI<MovieDetailType>(
    `?tt=${movie['#IMDB_ID']}`,
  );

  if (isLoading || !data) {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Error
          errorMessage="An error occurred while fetching movies."
          onRefresh={refetch}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MovieDetail movieDetail={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    marginBottom: theme.spacer.large,
  },
  listContainer: {
    margin: theme.spacer.medium,
  },
});

export default MovieDetailScreen;
