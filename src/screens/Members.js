import { View, ScrollView, StyleSheet } from "react-native";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import useGetAll from "../hooks/useGetAll";

import data from "../../assets/data.json";
import Avatar from "../components/Avatar";
import Button from "../components/Button";

function Members() {
  const newMember = async () => {
    const firstname = prompt("Prénom");
    const lastname = prompt("Nom de famille");
    const color = prompt("Couleur préférée");

    const collectionRef = collection(db, "members");
    const payload = {
      firstname: firstname,
      lastname: lastname,
      favoriteColor: color,
    };
    await addDoc(collectionRef, payload);
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.list}>
        {data.members.map((member) => (
          <View
            style={styles.avatar}
            key={`${member.firstname}${member.lastname}`}
          >
            <Avatar
              label={member.firstname[0].toLocaleUpperCase()}
              color={member.favoriteColor}
            />
          </View>
        ))}
        <View style={styles.footer}>
          <Button title="Inviter" onPress={newMember} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Members;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  avatar: {
    margin: 16,
  },
  footer: {
    width: "100%",
    padding: 32,
  },
});
