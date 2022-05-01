import { View, TextInput, StyleSheet, Dimensions, Button } from "react-native";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import useGetAll from "../hooks/useGetAll";
import { useMemo, useState } from "react";

function UpdateProject(participants = [], { navigation }) {
  const { proj } = useGetAll("projects");
  const [valueTitle, setValueTitle] = useState("");
  const [valueTag1, setValueTag1] = useState("");
  const [valueTag2, setValueTag2] = useState("");
  const [valueTag3, setValueTag3] = useState("");
  const [valueMember1, setValueMember1] = useState("");
  const [valueMember2, setValueMember2] = useState("");
  const [valueMember3, setValueMember3] = useState("");
  const [valueMember4, setValueMember4] = useState("");
  const [valueGitHub, setValueGitHub] = useState("");
  const [error, setError] = useState(false);

  const onChangeTitle = (text) => {
    setError(false);
    setValueTitle(text);
  };

  const onChangeTag1 = (text) => {
    setError(false);
    setValueTag1(text);
  };
  const onChangeTag2 = (text) => {
    setError(false);
    setValueTag2(text);
  };
  const onChangeTag3 = (text) => {
    setError(false);
    setValueTag3(text);
  };

  const onChangeMember1 = (text) => {
    setError(false);
    setValueMember1(text);
  };
  const onChangeMember2 = (text) => {
    setError(false);
    setValueMember2(text);
  };
  const onChangeMember3 = (text) => {
    setError(false);
    setValueMember3(text);
  };
  const onChangeMember4 = (text) => {
    setError(false);
    setValueMember4(text);
  };
  const onChangeGitHub = (text) => {
    setError(false);
    setValueGitHub(text);
  };

  const handleUpdate = async () => {
    const projectRef = doc(db, "projects", "dQYDbGkVL3tw0qUkHJS3");
    const payload = {
      title: valueTitle,
      tags: [valueTag1, valueTag2, valueTag3],
      participants: [valueMember1, valueMember2, valueMember3, valueMember4],
      Github: valueGitHub,
    };
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
          value={valueTag1}
          onChangeText={onChangeTag1}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Tags"
          style={styles.input}
          value={valueTag2}
          onChangeText={onChangeTag2}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Tags"
          style={styles.input}
          value={valueTag3}
          onChangeText={onChangeTag3}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Nom de famille du participant"
          style={styles.input}
          value={valueMember1}
          onChangeText={onChangeMember1}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Nom de famille du participant"
          style={styles.input}
          value={valueMember2}
          onChangeText={onChangeMember2}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Nom de famille du participant"
          style={styles.input}
          value={valueMember3}
          onChangeText={onChangeMember3}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Nom de famille du participant"
          style={styles.input}
          value={valueMember4}
          onChangeText={onChangeMember4}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Lien du Git"
          style={styles.input}
          value={valueGitHub}
          onChangeText={onChangeGitHub}
        />
      </View>
      <View style={styles.actions}>
        <Button title="Modifier le projet" onPress={handleUpdate} />
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
