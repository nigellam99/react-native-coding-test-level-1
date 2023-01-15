import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const ViewCatalog = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const navigation = useNavigation();

  const fetchPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon([...pokemon, ...res?.results]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/pkmbg.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <FlatList
          data={pokemon}
          numColumns={2}
          onEndReached={() => setOffset(offset + limit)}
          onEndReachedThreshold={0.5}
          renderItem={({ item, index }) => {
            const lastItem = index === pokemon.length - 1;
            return (
              <View
                style={{
                  flex: 1,
                  padding: 8,
                  maxWidth: lastItem ? "50%" : "100%",
                }}
              >
                <View style={styles.card}>
                  <Text style={styles.name}>{item?.name}</Text>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                      }.png`,
                    }}
                  />
                </View>
                <PrimaryButton
                  buttonColor="#3B4CCA"
                  titleColor="white"
                  title="View"
                  buttonStyle={{
                    borderRadius: 10,
                    height: hp("5%"),
                    width: wp("35%"),
                    alignSelf: "center",
                  }}
                  textStyle={{ fontSize: wp("5%") }}
                  onPress={() =>
                    navigation.navigate("View Catalog Details", {
                      id: index + 1,
                    })
                  }
                />
              </View>
            );
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "orange",
    borderRadius: 10,
  },
  name: {
    color: "black",
    fontSize: wp("5%"),
    fontWeight: "bold",
    textTransform: "capitalize",
    marginLeft: 10,
  },
  image: {
    width: wp("25%"),
    height: wp("25%"),
    alignSelf: "center",
  },
});

export default ViewCatalog;
