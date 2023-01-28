import React from "react";
import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { addCharacter } from "../redux/actions";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number().required("Age is required"),
  gender: Yup.string().required("Gender is required"),
});

const CharacterCreation = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Formik
        initialValues={{ name: "", age: "", gender: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            dispatch(addCharacter(values));
          }, 500);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View>
            <TextInput
              onChangeText={handleChange("name")}
              value={values.name}
              placeholder="Name"
            />
            {errors.name && touched.name ? <Text>{errors.name}</Text> : null}

            <TextInput
              onChangeText={handleChange("age")}
              value={values.age}
              placeholder="Age"
            />
            {errors.age && touched.age ? <Text>{errors.age}</Text> : null}

            <TextInput
              onChangeText={handleChange("gender")}
              value={values.gender}
              placeholder="Gender"
            />
            {errors.gender && touched.gender ? (
              <Text>{errors.gender}</Text>
            ) : null}

            <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CharacterCreation;
