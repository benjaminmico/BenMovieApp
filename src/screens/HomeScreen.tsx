/* eslint-disable max-lines-per-function */
import { useNavigation } from '@react-navigation/native';
import { useAPI } from 'api';
import {
  Error,
  Loader,
  MovieList,
  MovieTitleList,
  SearchBar,
} from 'components';
import type { AppNavigationProp } from 'navigation/types';
import React, { memo, useCallback, useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import useMovieStore from 'store/movieStore';
import type { Movie, MovieRequest } from 'types';
import { theme } from 'utils';

const HomeScreen: React.FunctionComponent = () => {
  const { navigate, setOptions } = useNavigation<AppNavigationProp>();

  const movies = useMovieStore((state) => state.movies);
  const setMovies = useMovieStore((state) => state.setMovies);
  const [isSearch, setSearch] = useState<boolean>(false);

  const { isLoading, error, refetch } = useAPI<MovieRequest>('?q=Bourne', {
    onSuccess: (response) => setMovies(response.description),
  });

  const {
    isLoading: isLoadingSearch,
    data: dataSearch,
    refetch: refetchSearch,
  } = useAPI<MovieRequest>(`?q=`, {
    enabled: false,
    onSuccess: () => setSearch(true),
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => setRefreshing(false));
  }, [refetch]);

  useLayoutEffect(() => {
    setOptions({
      headerShown: true,
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => HeaderSearchBar,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = useCallback(
    (query: string) => {
      refetchSearch(`?q=${query}`);
    },
    [refetchSearch],
  );

  if (isLoading && !refreshing) {
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

  const onMoviePress = (pressedMovie: Movie) =>
    navigate('MovieDetail', { movie: pressedMovie });

  const HeaderSearchBar = (
    <View>
      <SearchBar
        onSearch={handleSearch}
        onCloseSearch={() => setSearch(false)}
        style={styles.searchBarContainer}
      />
    </View>
  );

  const LoadingSearch = isLoadingSearch ? (
    <ActivityIndicator size="large" color={theme.colors.primary} />
  ) : (
    <View />
  );

  return (
    <>
      {isSearch ? (
        <MovieTitleList
          movies={dataSearch?.description || []}
          style={styles.searchListContainer}
          isLoading={isLoading}
          onMoviePress={onMoviePress}
          ListHeaderComponent={LoadingSearch}
        />
      ) : (
        <MovieList
          movies={movies}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={styles.container}
          onMoviePress={onMoviePress}
          ListHeaderComponent={LoadingSearch}
        />
      )}
    </>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacer.medium,
    paddingTop: theme.spacer.tiny,
  },
  errorText: {
    ...theme.typography.caption,
  },
  errorButtonText: {
    marginTop: theme.borders.medium,
    ...theme.typography.caption,
  },
  searchBarContainer: {
    marginBottom: theme.spacer.large,
    paddingTop: theme.spacer.medium,
    paddingHorizontal: theme.spacer.medium,
  },
  searchListContainer: {
    margin: theme.spacer.medium,
  },
});
