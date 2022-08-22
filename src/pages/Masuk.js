import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Box,
  Divider,
  Center,
  HStack,
  Input,
  ScrollView,
  Text,
  VStack,
  Container,
} from 'native-base';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { HidePassword, ShowPassword } from '../assets';

const Masuk = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dimensiWidth = Dimensions.get('window').width;
  // const dimensiHeight = Dimensions.get('window').height;

  return (
    <ScrollView>
      <Center>
        <Container centerContent={true}>
          <Box pt="12" pb="5" h="100%" width="full" maxHeight="full">
            <VStack space={6}>
              <VStack space={5} justifyContent="center" alignItems="center">
                <Center w="64" h="48" bg="gray.200" rounded="md" shadow={3} />
                <Text
                  fontFamily={fonts.primary[700]}
                  color={colors.black}
                  fontSize="2xl"
                >
                  Masuk
                </Text>
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
        </Container>
      </Center>
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
  actionPassword: {
    position: 'absolute',
    right: 12,
    top: 15,
  },
});
