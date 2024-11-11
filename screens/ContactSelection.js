import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const contacts = [
  { id: "1", name: "Ana Campos", phone: "+506 8753-6347" },
  { id: "2", name: "Ana Lucia", phone: "+506 8753-6543" },
  { id: "3", name: "Alberto Chaves", phone: "+506 8722-6543" },
  { id: "4", name: "Arturo Robles", phone: "+506 8731-6543" },
  { id: "5", name: "Bernal Campos", phone: "+506 8883-6543" },
  { id: "6", name: "Carlos Naranjo", phone: "+506 8765-4321" },
  { id: "7", name: "Daniel Solano", phone: "+506 8872-4321" },
];

const ContactSelection = () => {
  const navigation = useNavigation();

  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      <View style={styles.contactInfo}>
        <View style={styles.contactIcon}>
          <Text style={styles.contactInitials}>
            {item.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </Text>
        </View>
        <View>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactPhone}>{item.phone}</Text>
        </View>
      </View>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Ionicons name="chevron-forward" size={16} color="#4C51F7" />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require("../assets/arrow-left.png")} />
      </Pressable>
      <Text style={styles.title}>Seleccioná un contacto</Text>
      <Image
        source={require("../assets/search.png")}
        style={styles.iconSearch}
      />
      <TextInput
        inlineImageLeft="search_icon"
        style={styles.searchInput}
        placeholder="Buscá por nombre o número"
        placeholderTextColor="#787878"
      />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  },
  backButton: {
    position: "absolute",
    top: 18,
    left: 16,
    zIndex: 1,
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 16,
    fontFamily: "RedHatDisplay_700Bold",
    color: "#4C51F7",
    textAlign: "center",
    marginTop: 18,
  },
  iconSearch: {
    position: "absolute",
    top: 88,
    left: 36,
  },
  searchInput: {
    height: 48,
    borderColor: "#CECECE",
    borderWidth: 1,
    borderRadius: 24,
    paddingLeft: 52,
    paddingRight: 20,
    fontSize: 14,
    marginTop: 33,
    fontFamily: "RedHatDisplay_400Regular",
  },
  list: {
    paddingTop: 56,
  },
  contactItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactIcon: {
    width: 32,
    height: 32,
    borderRadius: 25,
    backgroundColor: "#C6C7FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  contactInitials: {
    fontSize: 11,
    fontFamily: "RedHatDisplay_400Regular",
    color: "#4C51F7",
  },
  contactName: {
    fontSize: 14,
    fontFamily: "RedHatDisplay_400Regular",
    color: "#3E3E3E",
  },
  contactPhone: {
    fontSize: 12,
    fontFamily: "RedHatDisplay_400Regular",
    color: "#787878",
    marginTop: 5,
  },
});

export default ContactSelection;
