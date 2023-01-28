import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";

const SceneCreator = () => {
  const dispatch = useDispatch();
  const scenes = useSelector((state) => state.scenes);
  const selectedScene = useSelector((state) => state.selectedScene);

  const [, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop: (item, monitor) => {
      const scene = {
        ...item,
        position: monitor.getClientOffset(),
      };
      dispatch(addScene(scene));
    },
  });

  const handleSelectScene = (scene) => {
    dispatch(selectScene(scene));
  };

  return (
    <div ref={drop}>
      {scenes.map((scene, index) => (
        <Scene
          key={index}
          scene={scene}
          isSelected={scene === selectedScene}
          onSelect={() => handleSelectScene(scene)}
        />
      ))}
    </div>
  );
};
