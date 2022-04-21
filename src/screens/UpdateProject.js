import { View, TextInput, StyleSheet, Dimensions, Button } from "react-native";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import useGetAll from "../hooks/useGetAll";
import { useMemo, useState } from "react";

function UpdateProject(participants = [], { navigation }) {
  const { proj } = useGetAll("projects");
  const [valueTitle, setValueTitle] = useState("");
  const [valueTags, setValueTags] = useState("");
  const [error, setError] = useState(false);

  const onChangeTitle = (text) => {
    setError(false);
    setValueTitle(text);
  };

  const onChangeTags = (text) => {
    setError(false);
    setValueTags(text);
  };

  const handleUpdate = async () => {
    const projectRef = doc(db, "projects", proj.id);
    const payload = { title: valueTitle, tags: valueTags };
    await updateDoc(projectRef, payload);
    console.log("projet modifié");
    alert("Projet modifié");
    navigation.navigate("Accueil");
  };
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <TextInput
          placeholder="Nom du projet"
          style={styles.input}
          value={valueTitle}
          onChangeText={onChangeTitle}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Tags"
          style={styles.input}
          value={valueTags}
          onChangeText={onChangeTags}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Nom de famille du/des participant(s)"
          style={styles.input}
        />
      </View>
      <View style={styles.actions}>
        <Button title="Créer le projet" onPress={handleUpdate} />
      </View>
    </View>
  );
}

export default UpdateProject;

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
