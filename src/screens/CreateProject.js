import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import Avatar from "../components/Avatar";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import useGetAll from "../hooks/useGetAll";
import { useState } from "react";

function CreateProject({ participants = [] }) {
  const { data } = useGetAll("members");
  const [valueName, setValueName] = useState("");
  const [valueTag1, setValueTag1] = useState("");
  const [valueTag2, setValueTag2] = useState("");
  const [valueTag3, setValueTag3] = useState("");
  const [participant, setValueParticipant] = useState("");
  const [participant2, setValueParticipant2] = useState("");
  const [participant3, setValueParticipant3] = useState("");
  const [participant4, setValueParticipant4] = useState("");
  const [setParticipant, setDisplayParticipants] = useState("");
  const [valueGitHub, setValueGitHub] = useState("");
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

  const onChangeParticipant = (text) => {
    setError(false);
    setValueParticipant(text);
  };

  const onChangeParticipant2 = (text) => {
    setError(false);
    setValueParticipant2(text);
  };

  const onChangeParticipant3 = (text) => {
    setError(false);
    setValueParticipant3(text);
  };

  const onChangeParticipant4 = (text) => {
    setError(false);
    setValueParticipant4(text);
  };

  const onChangeGitHub = (text) => {
    setError(false);
    setValueGitHub(text);
  };

  const isMember = () => {
    if (participant.length > 0) {
      const found = data.find(({ lastname }) =>
        participant.match(new RegExp(`(${lastname})`, "i"))
      );
      if (participants.length > 0) {
        const added = participants.find((Id) => Id === found.id);
        if (added) {
          setError("Vous avez dejà ajouté cet utilisateur.");
          return false;
        }
      }
      participants.push(found.id);
      console.log(participants);
      console.log(participants);
    }
    if (participant2.length > 0) {
      const found = data.find(({ lastname }) =>
        participant2.match(new RegExp(`(${lastname})`, "i"))
      );
      if (participants.length > 0) {
        const added = participants.find((Id) => Id === found.id);
        if (added) {
          setError("Vous avez dejà ajouté cet utilisateur.");
          return false;
        }
      }
      participants.push(found.id);
      console.log(participants);
      console.log(participants);
    }
    if (participant3.length > 0) {
      const found = data.find(({ lastname }) =>
        participant3.match(new RegExp(`(${lastname})`, "i"))
      );
      if (participants.length > 0) {
        const added = participants.find((Id) => Id === found.id);
        if (added) {
          setError("Vous avez dejà ajouté cet utilisateur.");
          return false;
        }
      }
      participants.push(found.id);
    }
    if (participant4.length > 0) {
      const found = data.find(({ lastname }) =>
        participant4.match(new RegExp(`(${lastname})`, "i"))
      );
      if (participants.length > 0) {
        const added = participants.find((Id) => Id === found.id);
        if (added) {
          setError("Vous avez dejà ajouté cet utilisateur.");
          return false;
        }
      }
      participants.push(found.id);
      console.log(participants);
    }
  };

  const addParticipant = () => {
    if (isMember()) {
      console.log(participants);
      setDisplayParticipants(
        participants.map((item) => (
          <View style={styles.avatar} key={item}>
            <Avatar label={item[0].toLocaleUpperCase()} />
          </View>
        ))
      );
    }
    Alert.alert("Ajouter un membre au projet", "Membre(s) ajouté(s)");
  };

  const handleNew = async () => {
    const collectionRef = collection(db, "projects");
    const payload = {
      title: valueName,
      tags: [valueTag1, valueTag2, valueTag3],
      participants: participants,
      Github: valueGitHub,
    };
    await addDoc(collectionRef, payload);
    Alert.alert("Création de projet", "Projet créé");
  };

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.list}>
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
            placeholder="Nom de famille du participant"
            style={styles.input}
            onChangeText={onChangeParticipant}
          />
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Nom de famille du participant"
            style={styles.input}
            onChangeText={onChangeParticipant2}
          />
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Nom de famille du participant"
            style={styles.input}
            onChangeText={onChangeParticipant3}
          />
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Nom de famille du participant"
            style={styles.input}
            onChangeText={onChangeParticipant4}
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
          <Button title="Créer le projet" onPress={handleNew} />
        </View>
        <View style={styles.actions}>
          <Button title="Ajouter les participants" onPress={addParticipant} />
        </View>
      </ScrollView>
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
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
