import { View, TextInput, StyleSheet, Dimensions, Button } from "react-native";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import useGetAll from "../hooks/useGetAll";
import { useMemo, useState } from "react";

function CreateProject({ participants = [] }) {
  const { data } = useGetAll("members");
  const [valueName, setValueName] = useState("");
  const [valueTag1, setValueTag1] = useState("");
  const [valueTag2, setValueTag2] = useState("");
  const [valueTag3, setValueTag3] = useState("");
  const [valueMember, setValueMember] = useState("");
  const [error, setError] = useState(false);

  const onChange = (text) => {
    setError(false);
    setValueName(text);
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

  const onChangeMember = (text) => {
    setError(false);
    setValueMember(text);
  };

  // const p = useMemo(
  //   () =>
  //     participants
  //       .map((id) => {
  //         const participant = data?.find((member) => member.id === id);
  //         if (participant.lastname === "Quesnoy") {
  //           return id;
  //         }
  //         return null;
  //       })
  //       .filter(Boolean),
  //   [data, participants]
  // );

  const handleNew = async () => {
    const collectionRef = collection(db, "projects");
    const payload = {
      title: valueName,
      tags: [valueTag1, valueTag2, valueTag3],
    };
    await addDoc(collectionRef, payload);
    alert("Projet crée");
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <TextInput
          placeholder="Nom du projet"
          style={styles.input}
          value={valueName}
          onChangeText={onChange}
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
          placeholder="Nom de famille du/des participant(s)"
          style={styles.input}
          value={valueMember}
          onChangeText={onChangeMember}
        />
      </View>
      <View style={styles.actions}>
        <Button title="Créer le projet" onPress={handleNew} />
      </View>
    </View>
  );
}

export default CreateProject;

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
