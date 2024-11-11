import "@expo/metro-runtime";
import {
  useFonts,
  RedHatDisplay_400Regular,
  RedHatDisplay_700Bold,
} from "@expo-google-fonts/red-hat-display";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";

import logoWink from "./assets/logo-wink.png";

const App = () => {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
    RedHatDisplay_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  const transactions = [
    {
      id: 1,
      name: "Arturo Robles",
      amount: "-₡1,850.00",
      date: "Hoy 10:12 a.m",
    },
    {
      id: 2,
      name: "Juan Fernandez",
      amount: "-₡1,850.00",
      date: "Hoy 8:36 a.m",
    },
    {
      id: 3,
      name: "Alberto Chaves",
      amount: "-₡5,200.00",
      date: "Hoy 8:12 a.m",
    },
    {
      id: 4,
      name: "Bernal Campos",
      amount: "-₡28,000.00",
      date: "Hoy 8:00 a.m",
    },
    {
      id: 5,
      name: "Maria Pérez",
      amount: "-₡1,850.00",
      date: "11/10/22 11:30 a.m",
    },
    {
      id: 6,
      name: "Sofia Herrera",
      amount: "-₡3,500.00",
      date: "Ayer 5:45 p.m",
    },
    {
      id: 7,
      name: "Carlos Ureña",
      amount: "-₡2,750.00",
      date: "Ayer 3:15 p.m",
    },
    {
      id: 8,
      name: "Lucía Rojas",
      amount: "-₡6,200.00",
      date: "11/09/22 2:30 p.m",
    },
    {
      id: 9,
      name: "Andrés Gómez",
      amount: "-₡4,100.00",
      date: "11/09/22 11:10 a.m",
    },
    {
      id: 10,
      name: "Valeria Castro",
      amount: "-₡7,300.00",
      date: "11/08/22 9:50 a.m",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoWink}>
        <Image source={logoWink} style={styles.image} />
      </View>
      <Text style={styles.title}>Cuenta Colones</Text>
      <Text style={styles.balanceLabel}>Saldo disponible</Text>
      <Text style={styles.balance}>₡36,850.00</Text>
      <Text style={styles.subtitle}>¿Qué querés hacer?</Text>
      <View style={styles.actionButton}>
        <Text style={styles.actionText}>SINPE</Text>
        <Text style={styles.actionText}>móvil</Text>
      </View>

      <Text style={styles.sectionTitle}>Movimientos</Text>
      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionItem}>
          <View style={styles.transactionInfo}>
            <Text style={styles.transactionText}>
              SINPE móvil - {transaction.name}
            </Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
          </View>
          <Text style={styles.transactionAmount}>{transaction.amount}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
  logoWink: {
    alignItems: "center",
    paddingVertical: 32,
  },
  title: {
    fontSize: 22,
    fontFamily: "RedHatDisplay_700Bold",
    color: "#4C51F7",
    marginTop: 24,
  },
  balanceLabel: {
    fontSize: 12,
    fontFamily: "RedHatDisplay_400Regular",
    color: "#3E3E3E",
    marginTop: 16,
  },
  balance: {
    fontSize: 32,
    fontFamily: "RedHatDisplay_700Bold",
    color: "#3E3E3E",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "RedHatDisplay_400Regular",
    color: "#3E3E3E",
    marginTop: 24,
  },
  actionButton: {
    marginTop: 20,
    alignItems: "center",
  },
  actionText: {
    color: "#4C51F7",
    fontSize: 12,
    fontFamily: "RedHatDisplay_700Bold",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "RedHatDisplay_700Bold",
    color: "#3E3E3E",
    marginTop: 32,
    marginBottom: 16,
  },
  transactionItem: {
    marginVertical: 12.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  transactionInfo: {
    flexDirection: "column",
    justifyContent: "center",
  },
  transactionText: {
    fontFamily: "RedHatDisplay_400Regular",
    fontSize: 14,
    color: "#3E3E3E",
  },
  transactionAmount: {
    fontSize: 14,
    color: "#F44336",
    fontFamily: "RedHatDisplay_700Bold",
    textAlign: "right",
  },
  transactionDate: {
    fontFamily: "RedHatDisplay_400Regular",
    marginTop: 4,
    fontSize: 12,
    color: "#787878",
  },
});

export default App;
