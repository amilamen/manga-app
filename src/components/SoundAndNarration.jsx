import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Audio } from "expo-av";

const SoundAndNarration = () => {
  const [selectedSound, setSelectedSound] = useState(null);
  const [selectedNarration, setSelectedNarration] = useState(null);
  const dispatch = useDispatch();

  const handleSelectSound = (sound) => {
    setSelectedSound(sound);
  };

  const handleSelectNarration = (narration) => {
    setSelectedNarration(narration);
  };
};
