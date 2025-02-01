import { FlatList, StyleSheet, Image, View } from 'react-native';
import CardOrder from '../components/CardOrder';
import { useGetOrdersUserQuery } from '../services/orders';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyListComponent from '../components/EmptyListComponent';
import { colors } from '../globals/colors';

const Orders = () => {
  const localId = useSelector((state) => state.user.localId);
  const { data: orders, isLoading } = useGetOrdersUserQuery({ localId });

  if (isLoading) return <LoadingSpinner />;
  if (!orders) return <EmptyListComponent message="No hay órdenes" />;

  return (
    <View style={styles.container}>
      <View style={styles.container_logo}>
      <Image source={require('../../assets/logo_mm7.png')} style={styles.logo} />

      </View>
       
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardOrder order={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: 10,
    
  },
  list: {
    paddingBottom: 20, 
  },
  logo: {
    width: 120,        
    height: 120,
    resizeMode: 'contain', 
    marginBottom: 20,      
  },
});
