import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>
          <Text>Prontinho</Text>
        </Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas {"\n"}plantinhas com muito
          cuidado.
        </Text>
        <View style={styles.footer}>
          <Button title="Começar" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  emoji: {
    fontSize: 78,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 64,
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 25,
    marginTop: 16,
    textAlign: "center",
    paddingHorizontal: 10,
    fontFamily: fonts.text,
    color: colors.heading,
  },

  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 75,
  },
});
