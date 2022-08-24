import { StyleSheet } from 'react-native';
import React from 'react';
import { Header } from '../components';

const Profile = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} isProfile title="Profile" />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
