import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import Input from "./ui/Input";
import Typography from "./ui/Typography";

const Jesmonite = () => {
  const [{ initialPrice, weight, base, liquid, bruto }, setState] = useState({
    initialPrice: "",
    weight: "",
    base: "",
    liquid: "",
    bruto: "",
  });

  const setStatheHandler = (e: React.SetStateAction<string>, name: string) => {
    setState((prevState) => ({
      ...prevState,
      [`${name}`]: e,
    }));
  };

  useEffect(() => {
    const pricePerG = +initialPrice / (+weight * 1000);
    const brutoPrice = (+base + +liquid) * +pricePerG;
    setStatheHandler(brutoPrice.toFixed(2).toString(), "bruto");
  }, [initialPrice, weight, base, liquid]);

  return (
    <ImageBackground
      source={require("../assets/images/jesmonit.webp")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.backdrop}>
        <View style={styles.main}>
          <View style={styles.form}>
            <ScrollView>
              <Input
                name="initialPrice"
                label="Cena kod dobavljača + dostava (rsd)"
                value={initialPrice}
                setValue={setStatheHandler}
              />
              <Input
                name="weight"
                label="Ukupna količina (kg)"
                value={weight}
                setValue={setStatheHandler}
              />
              <Input
                name="base"
                label="Tečnost (g)"
                value={base}
                setValue={setStatheHandler}
              />
              <Input
                name="liquid"
                label="Smesa (g)"
                value={liquid}
                setValue={setStatheHandler}
              />
            </ScrollView>
          </View>
          <Typography style={styles.title}>
            Cena = {bruto !== "NaN" ? bruto : "0.00"}rsd
          </Typography>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Jesmonite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 20,
    marginTop: 10,
  },
  image: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 30,
    color: Colors.light.tint,
  },
  main: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: { width: "80%" },
});
