import * as MailComposer from "expo-mail-composer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { TouchableOpacity, View, Text, Alert, StyleSheet } from "react-native";

function Mail_Composer() {
  const [status, setStatus] = useState(null);

  const sendEmail = async (file) => {
    var options = {};
    if (file.length < 1) {
      options = {
        subject: "Sending email with attachment",
        body: "Enter email body here...",
      };
    } else {
      options = {
        subject: "Sending email with attachment",
        body: "Enter email body here...",
        attachments: file,
      };
    }

    let promise = new Promise((resolve, reject) => {
      MailComposer.composeAsync(options)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
    promise.then(
      (result) => setStatus("Status: email " + result.status),
      (error) => setStatus("Status: Email " + error.status)
    );
  };
  const sendEmailWithAttachment = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result.uri);
      sendEmail([result.uri]);
    } else {
      sendEmail([]);
    }
  };
  const showAlert = () =>
    Alert.alert("Add a file", "Do you want to attach a file?", [
      {
        text: "No",
        onPress: () => {
          sendEmail([]);
        },
        style: "cancel",
      },
      { text: "Yes", onPress: sendEmailWithAttachment },
    ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showAlert}>
        <Text>Send Email</Text>
      </TouchableOpacity>
      {status !== null && (
        <View>
          <Text>{status}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Mail_Composer;
