import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  BerandaActive,
  BerandaInActive,
  ProfileActive,
  ProfileInActive,
  ReviewActive,
  ReviewInActive,
  TersimpanActive,
  TersimpanInActive,
} from '../../assets';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return active ? (
        <BerandaActive height={20} />
      ) : (
        <BerandaInActive height={20} />
      );
    }
    if (title === 'Tersimpan') {
      return active ? (
        <TersimpanActive height={21} />
      ) : (
        <TersimpanInActive height={21} />
      );
    }
    if (title === 'Profile') {
      return active ? (
        <ProfileActive height={23} />
      ) : (
        <ProfileInActive height={23} />
      );
    }
    if (title === 'Review') {
      return active ? (
        <ReviewActive height={23} />
      ) : (
        <ReviewInActive height={23} />
      );
    }

    return <BerandaActive height={20} />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: (active) => ({
    fontSize: 12,
    color: active ? colors.black : colors.gray[650],
    marginTop: 8,
    fontFamily: fonts.primary[500],
  }),
});
