import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import firebase from "firebase/app";
import ViewShot from "react-native-view-shot";
import Share from "react-native-share";
import { addCharacter } from "./redux/actions";

const CreateCharacter = () => {
  const [character, setCharacter] = useState({});
  const dispatch = useDispatch();

  const saveToStorage = async () => {
    try {
      await AsyncStorage.setItem("character", JSON.stringify(character));
    } catch (e) {
      console.log(e);
    }
  };

  const saveToFirebase = async () => {
    const database = firebase.database();
    database.ref("characters/").push(character);
  };

  const saveToCameraRoll = async () => {
    try {
      const result = await ViewShot.takeSnapshot(this.viewShotRef, {
        format: "jpg",
        quality: 0.8,
      });
      await CameraRoll.saveToCameraRoll(result, "photo");
    } catch (error) {
      console.log(error);
    }
  };

  const shareImage = async (imageUri) => {
    try {
      const shareOptions = {
        title: "Partager ma création",
        message: "Regardez ce que j'ai créé !",
        url: imageUri,
      };
      await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = () => {
    saveToStorage();
    saveToFirebase();
    shareImage(character.imageUri);
    dispatch(addCharacter(character));
  };

  return (
    <View>
      <View ref={(ref) => (this.viewShotRef = ref)}>
        {/* Render character creation elements */}
      </View>
      <TouchableOpacity onPress={handleSave}>
        <Image source={require("./save.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default CreateCharacter;
