import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

const NewTweet = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const onTweetPress = () => {
    console.log("posting the tweet", text);

    setText("");
    router.back();
  };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"white"}}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>
            Cancel
          </Link>
          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image src={user.image} style={styles.image} />
          <TextInput
            value={text}
            onChange={setText}
            placeholder="What's happening?"
            multiline
            numberOfLines={5}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C98F0",
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    borderRadius: 50,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
  },
  image: {
    marginTop: 15,
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
});

export default NewTweet;
