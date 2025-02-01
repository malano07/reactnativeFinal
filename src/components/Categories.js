import { StyleSheet, FlatList, View, Text } from 'react-native';
import CardItemCategory from './CardItemCategory';
import { useGetCategoriesQuery } from '../services/shop';
import { colors } from '../globals/colors';

const Categories = () => {
  const { data: categories, isError, error, isSuccess, isLoading } = useGetCategoriesQuery();

  if (isLoading)
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  if (isError)
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error.message}</Text>
      </View>
    );

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item}
      renderItem={({ item }) => <CardItemCategory item={item} />}
      contentContainerStyle={styles.containerCard}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  containerCard: {
    padding: 6,
    backgroundColor: colors.darkBlue, 
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue, 
  },
  loadingText: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    color: colors.lightBlue,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue, 
  },
  errorText: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: colors.red,
    textAlign: 'center',
  },
});
