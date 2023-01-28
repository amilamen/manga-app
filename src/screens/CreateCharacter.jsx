import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

const CreateCharacter = () => {
  const [character, setCharacter] = useState({});
  const [showPredefinedCharacters, setShowPredefinedCharacters] =
    useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [showScenarios, setShowScenarios] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showFaceRecognition, setShowFaceRecognition] = useState(false);
  const [showAR, setShowAR] = useState(false);
  const [showGame, setShowGame] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowPredefinedCharacters(!showPredefinedCharacters)}
      >
        <Text>Personnages prédéfinis</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowThemes(!showThemes)}>
        <Text>Thèmes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowScenarios(!showScenarios)}>
        <Text>Scénarios</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
        <Text>Filtres</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setShowFaceRecognition(!showFaceRecognition)}
      >
        <Text>Reconnaissance faciale</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowAR(!showAR)}>
        <Text>Réalité augmentée</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowGame(!showGame)}>
        <Text>Jeux</Text>
      </TouchableOpacity>
      {showPredefinedCharacters && (
        <View>{/* Render predefined characters here */}</View>
      )}
      {showThemes && <View></View>}
    </View>
  );
};
