
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Categories from '../components/Categories';
import { colors } from '../globals/colors';
import Search from '../components/Search';
import CardProduct from '../components/CardProduct';
import { useGetProductsQuery } from '../services/shop';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const { data, isSuccess, isError, error, isLoading } = useGetProductsQuery(); 
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isSuccess && data) {
      const productsWithIds = Object.entries(data).map(([key, product]) => ({
        ...product,
        id: key,
      }));
      setProducts(productsWithIds);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccess && data) {
      const filteredProducts = Object.entries(data)
        .map(([key, product]) => ({ ...product, id: key }))
        .filter((product) => product.title.toLowerCase().includes(keyword.toLowerCase()));
      setProducts(filteredProducts);
    }
  }, [keyword, isSuccess, data]);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <Text>{error.message}</Text>;

  return (
    <View style={styles.container}>
      <Search onChangeKeyword={(t) => setKeyword(t)} />
      <Text style={styles.sectionTitle}>Categorías</Text>
      <Categories />
      <Text style={styles.sectionTitle}>Productos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProduct product={item} />}
        contentContainerStyle={styles.productsContainer}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Montserrat',
    color: colors.lightBlue,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  productsContainer: {
    paddingBottom: 20, 
  },
});
