import { useMemo } from "react";
import { View, Text, StyleSheet, Linking, Button } from "react-native";
import Avatar from "../components/Avatar";
import useGetAll from "../hooks/useGetAll";

function Project({ title, participants = [], tags, Github }) {
  const { data } = useGetAll("members");
  const avatars = useMemo(
    () =>
      participants
        .map((id) => {
          const participant = data?.find((member) => member.id === id);
          console.log(data, id, participant);
          if (participant) {
            return {
              id,
              label: participant.firstname[0],
              color: participant.favoriteColor,
            };
          }
          return null;
        })
        .filter(Boolean),
    [data, participants]
  );

  const onNavigateUpdate = async () => {
    navigation.navigate("Update");
  };

  const handleGit = async () => {
    await Linking.openURL(Github);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.avatars}>
        {avatars.map((avatar) => (
          <View key={avatar.id} style={styles.avatar}>
            <Avatar label={avatar.label} color={avatar.color} />
          </View>
        ))}
      </View>
      <Text style={styles.title}>participants : {participants}</Text>
      <Text style={styles.title}>Tags : {tags}</Text>
      <Text style={styles.title}>
        Lien Git : {Github}
        <Button title="Aller sur le repo git" onPress={handleGit}></Button>
      </Text>
      <View style={styles.footer}>
        <Button title="Modifier le projet" onPress={onNavigateUpdate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderColor: "black",
    borderWidth: 4,
    borderStyle: "solid",
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  avatars: {
    flexDirection: "row",
  },
  avatar: {
    margin: 8,
  },
});

export default Project;
