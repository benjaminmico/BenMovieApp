import type { NavigationProp } from '@react-navigation/native';
import type { Movie } from 'types';

export type AppNavigationParamList = {
  Home: undefined;
  MovieDetail: { movie: Movie };
};

export type AppNavigationProp = NavigationProp<AppNavigationParamList>;
