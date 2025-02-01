import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import Search from '../components/Search';
import CardProduct from '../components/CardProduct';
import { useGetProductsQuery } from '../services/shop';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductsByCategory = ({ route }) => {
  const { category } = route.params;
  const { data, isSuccess, isError, error, isLoading } = useGetProductsQuery(category);
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isSuccess && data) {
      console.log('Datos obtenidos desde Firebase:', data);
      const productsWithIds = Object.entries(data).map(([key, product]) => ({
        ...product,
        id: key, // Usamos la clave generada por Firebase como ID
      }));
      setProducts(productsWithIds);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess && data) {
      const filteredProducts = Object.entries(data)
        .map(([key, product]) => ({ ...product, id: key }))
        .filter((product) => product.title.includes(keyword));
      setProducts(filteredProducts);
    }
  }, [keyword, isSuccess, data]);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return (
    <View>
      <Text>{error.message}</Text>
    </View>
  );

  return (
    <View>
      <Search onChangeKeyword={(t) => setKeyword(t)} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProduct product={item} />}
      />
    </View>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({});