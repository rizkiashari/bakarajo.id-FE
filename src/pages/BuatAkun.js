import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Box,
  Center,
  Container,
  Divider,
  HStack,
  Input,
  Text,
  VStack,
} from 'native-base';
import { fonts } from '../utils/fonts';
import { colors } from '../utils/colors';
import { HidePassword, ShowPassword } from '../assets';

const BuatAkun = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showKonfirm, setShowKonfirm] = useState(false);

  const dimensiWidth = Dimensions.get('window').width;
  // const dimensiHeight = Dimensions.get('window').height;

  return (
    <ScrollView>
      <Center>
        <Container centerContent={true}>
          <Box pt="12" pb="5" h="100%" maxHeight="full">
            <VStack space={7} width="full">
              <VStack justifyContent="center" alignItems="center">
                <Text
                  fontFamily={fonts.primary[700]}
                  mb="20px"
                  textAlign="center"
                  fontSize="xl"
                >
                  Buat Akun
                </Text>
                <Box
                  width="20"
                  height="20"
                  rounded="full"
                  bgColor={colors.gray[655]}
                />
              </VStack>
              <VStack space={2}>
                <Text
                  fontFamily={fonts.primary[700]}
                  color={colors.black}
                  fontSize="md"
                >
                  Nama Lengkap
                </Text>
                <Input
                  placeholder="Masukkan nama lengkap"
                  rounded={8}
                  px="4"
                  fontFamily={fonts.primary[700]}
                  type="text"
                  backgroundColor={colors.white}
                  py="2"
                  fontSize={13}
                  w="100%"
                />
              </VStack>
              <VStack space={2}>
                <Text
                  fontFamily={fonts.primary[700]}
                  color={colors.black}
                  fontSize="md"
                >
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
                <Text
                  fontFamily={fonts.primary[700]}
                  color={colors.black}
                  fontSize="md"
                >
                  Kata Sandi
                </Text>
                <Box position="relative">
                  <Input
                    placeholder="Masukkan kata sandi"
                    rounded={8}
                    px="4"
                    fontFamily={fonts.primary[700]}
                    type={showPassword ? 'text' : 'password'}
                    backgroundColor={colors.white}
                    py="2"
                    fontSize={13}
                    w="100%"
                  />
                  {showPassword ? (
                    <TouchableOpacity
                      style={styles.actionPassword}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <ShowPassword />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.actionPassword}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <HidePassword />
                    </TouchableOpacity>
                  )}
                </Box>
              </VStack>
              <VStack space={2}>
                <Text
                  fontFamily={fonts.primary[700]}
                  color={colors.black}
                  fontSize="md"
                >
                  Konfirmasi Kata Sandi
                </Text>
                <Box position="relative">
                  <Input
                    placeholder="Ulangi kata sandi"
                    rounded={8}
                    px="4"
                    fontFamily={fonts.primary[700]}
                    type={showKonfirm ? 'text' : 'password'}
                    backgroundColor={colors.white}
                    py="2"
                    fontSize={13}
                    w="100%"
                  />
                  {showKonfirm ? (
                    <TouchableOpacity
                      style={styles.actionPassword}
                      onPress={() => setShowKonfirm(!showKonfirm)}
                    >
                      <ShowPassword />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.actionPassword}
                      onPress={() => setShowKonfirm(!showKonfirm)}
                    >
                      <HidePassword />
                    </TouchableOpacity>
                  )}
                </Box>
              </VStack>
              <VStack
                space={5}
                alignItems="center"
                justifyContent="center"
                w="100%"
              >
                <TouchableOpacity style={styles.btnSignUp(dimensiWidth)}>
                  <Text
                    fontFamily={fonts.primary[700]}
                    color={colors.white}
                    fontSize="sm"
                    textAlign="center"
                  >
                    Buat Akun
                  </Text>
                </TouchableOpacity>
                <Text fontFamily={fonts.primary[700]} fontSize="xs">
                  Lupa kata sandi? Klik di sini
                </Text>
                <HStack space={6} alignItems="center" justifyContent="center">
                  <Divider bg={colors.gray[150]} thickness="4" width="1/3" />
                  <Text
                    fontFamily={fonts.primary[700]}
                    color={colors.gray[750]}
                    fontSize="xs"
                    textAlign="center"
                    width={dimensiWidth / 7}
                  >
                    atau
                  </Text>
                  <Divider bg={colors.gray[150]} thickness="4" width="1/3" />
                </HStack>
                <TouchableOpacity style={styles.btnSignIn(dimensiWidth)}>
                  <Text
                    fontFamily={fonts.primary[700]}
                    color={colors.black}
                    fontSize="sm"
                    textAlign="center"
                  >
                    Masuk
                  </Text>
                </TouchableOpacity>
              </VStack>
            </VStack>
          </Box>
        </Container>
      </Center>
    </ScrollView>
  );
};

export default BuatAkun;

const styles = StyleSheet.create({
  actionPassword: {
    position: 'absolute',
    right: 12,
    top: 15,
  },
  btnSignIn: (dimensiWidth) => ({
    width: dimensiWidth / 1.2,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
  }),
  btnSignUp: (dimensiWidth) => ({
    flex: 1 / 2,
    width: dimensiWidth / 1.2,
    backgroundColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
  }),
});
