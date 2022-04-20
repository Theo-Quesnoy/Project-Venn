import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
} from "react-native";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import useGetAll from "../hooks/useGetAll";
import { useMemo, useState } from "react";
//import { prompt } from "react-native-prompt-android";

function CreateProject(participants = []) {
  const { data } = useGetAll("members");
  const [valueName, setValueName] = useState("");
  const [valueTag, setValueTag] = useState("");
  const [error, setError] = useState(false);

  const onChange = (text) => {
    setError(false);
    setValueName(text);
  };
  const onChangeTag = (text) => {
    setError(false);
    setValueTag(text);
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
    const payload = { title: valueName, tags: valueTag };
    await addDoc(collectionRef, payload);
    console.log("projet créer");
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
          value={valueTag}
          onChangeText={onChangeTag}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Nom de famille du/des participant(s)"
          style={styles.input}
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
