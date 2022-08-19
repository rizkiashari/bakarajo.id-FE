import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {
  Box,
  Button,
  Center,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const Masuk = () => {
  const dimensiWidth = Dimensions.get('window').width;
  const dimensiHeight = Dimensions.get('window').height;

  return (
    <ScrollView>
      <Box pt="12" px="6" pb="5" h="100%" maxHeight="full">
        <VStack space={6}>
          <VStack space={5} justifyContent="center" alignItems="center">
            <Center w="64" h="48" bg="gray.200" rounded="md" shadow={3} />
            <Text fontFamily={fonts.primary[700]} fontSize="2xl">
              Masuk
            </Text>
          </VStack>
          <VStack space={2}>
            <Text fontFamily={fonts.primary[700]} fontSize="md">
              Alamat Email
            </Text>
            <Input
              placeholder="Masukkan alamat email"
              rounded={8}
              px="4"
              fontFamily={fonts.primary[700]}
              type="email"
              backgroundColor={colors.white}
              py="2"
              fontSize={13}
              w="100%"
            />
          </VStack>
          <VStack space={2}>
            <Text fontFamily={fonts.primary[700]} fontSize="md">
              Kata Sandi
            </Text>
            <Input
              placeholder="Masukkan alamat email"
              rounded={8}
              px="4"
              fontFamily={fonts.primary[700]}
              type="password"
              backgroundColor={colors.white}
              py="2"
              fontSize={13}
              w="100%"
            />
          </VStack>
          <VStack space={5} alignItems="center" justifyContent="center">
            <TouchableOpacity style={styles.btnSignIn}>
              <Text
                fontFamily={fonts.primary[700]}
                color={colors.white}
                fontSize="sm"
                textAlign="center"
              >
                Masuk
              </Text>
            </TouchableOpacity>
            <Text fontFamily={fonts.primary[700]} fontSize="xs">
              Lupa kata sandi? Klik di sini
            </Text>
            <Text
              fontFamily={fonts.primary[700]}
              color={colors.gray[750]}
              fontSize="xs"
            >
              atau
            </Text>
            <TouchableOpacity style={styles.btnSignUp}>
              <Text
                fontFamily={fonts.primary[700]}
                color={colors.black}
                fontSize="sm"
                textAlign="center"
              >
                Buat Akun
              </Text>
            </TouchableOpacity>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default Masuk;

const styles = StyleSheet.create({
  btnSignUp: {
    width: '100%',
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
  },
  btnSignIn: {
    width: '100%',
    backgroundColor: colors.black,

    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
  },
});
