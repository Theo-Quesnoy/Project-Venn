import { TextInput, Button, View, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
import useGetAll from "../hooks/useGetAll";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function CreateMember({ navigation }) {
  const { data } = useGetAll("members");
  const [valueFirstName, setFirstName] = useState("");
  const [valueLastName, setLastName] = useState("");
  const [valueColor, setValueColor] = useState("");
  const [error, setError] = useState(false);

  const onChangeFN = (text) => {
    setError(false);
    setFirstName(text);
  };

  const onChangeLN = (text) => {
    setError(false);
    setLastName(text);
  };

  const onChangeColor = (text) => {
    setError(false);
    setValueColor(text);
  };

  const handleNew = async () => {
    const collectionRef = collection(db, "members");
    const payload = {
      firstname: valueFirstName,
      lastname: valueLastName,
      favoriteColor: valueColor,
    };
    await addDoc(collectionRef, payload);
    console.log("membre créé");
    alert("Membre créé");
    navigation.navigate("Accueil");
  };

  // const onNavigateMembers = async () => {
  //   navigation.navigate("Members");
  // };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <TextInput
          placeholder="Prénom"
          style={styles.input}
          value={valueFirstName}
          onChangeText={onChangeFN}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Nom"
          style={styles.input}
          value={valueLastName}
          onChangeText={onChangeLN}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Couleur préféré"
          style={styles.input}
          value={valueColor}
          onChangeText={onChangeColor}
        />
      </View>
      <View style={styles.actions}>
        <Button title="Créer le membre" onPress={handleNew} />
      </View>
    </View>
  );
}

export default CreateMember;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 4,
    borderStyle: "solid",
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 8,
    width: Dimensions.get("window").width - 64,
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 8,
  },
  actions: {
    marginVertical: 16,
  },
});
