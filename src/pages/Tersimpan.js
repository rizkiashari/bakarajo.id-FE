import { ScrollView, VStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { CardPekerjaan, Header } from '../components';

const Tersimpan = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} title="Tersimpan" />
      <ScrollView width="full" showsVerticalScrollIndicator={false}>
        <VStack mb={4} pt={5} px={4} space={5}>
          <CardPekerjaan />
          <CardPekerjaan />
          <CardPekerjaan />
          <CardPekerjaan />
          <CardPekerjaan />
        </VStack>
      </ScrollView>
    </>
  );
};

export default Tersimpan;

const styles = StyleSheet.create({});
