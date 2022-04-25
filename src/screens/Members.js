import { View, ScrollView, StyleSheet } from "react-native";
import { useMemo } from "react";
import useGetAll from "../hooks/useGetAll";

import data from "../../assets/data.json";
import Avatar from "../components/Avatar";
import Button from "../components/Button";

function Members({ membres = [] }, { navigation }) {
  const onNavigateCreateMember = async () => {
    navigation.navigate("CreateMember");
  };

  const { dataMembers } = useGetAll("members");
  const listMembers = useMemo(
    () =>
      membres
        .map((id) => {
          const member = dataMembers?.find((m) => m.firstname);
          if (member) {
            return {
              id,
              label: member.firstname[0],
              color: member.favoriteColor,
            };
          }
          return null;
        })
        .filter(Boolean),
    [dataMembers, membres]
  );

  return (
    <View>
      <ScrollView contentContainerStyle={styles.list}>
        {listMembers.map((list) => (
          <View key={list.id} style={styles.avatar}>
            <Avatar label={list.label} color={list.color} />
          </View>
        ))}
        {/* {data.members.map((member) => (
          <View
            style={styles.avatar}
            key={`${member.firstname}${member.lastname}`}
          >
            <Avatar
              label={member.firstname[0].toLocaleUpperCase()}
              color={member.favoriteColor}
            />
          </View>
        ))} */}
        <View style={styles.footer}>
          <Button title="Inviter" onPress={onNavigateCreateMember} />
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
