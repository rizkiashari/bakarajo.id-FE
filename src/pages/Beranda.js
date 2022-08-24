import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, HStack, Text, VStack, ScrollView } from 'native-base';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { SavedIcon } from '../assets';
import { CardPekerjaan, Header } from '../components';

const Beranda = ({ navigation }) => {
  const widthDimensii = Dimensions.get('window').width;

  return (
    <>
      <Header navigation={navigation} isProfile title="Nama" />
      <ScrollView width="full" showsVerticalScrollIndicator={false}>
        <Box px={4} mt={2} mb={4}>
          <Text
            fontFamily={fonts.primary[800]}
            fontSize={16}
            color={colors.black}
          >
            Rekomendasi
          </Text>
        </Box>
        <ScrollView horizontal pl={4} showsHorizontalScrollIndicator={false}>
          <HStack space={5} pr={8}>
            <TouchableOpacity>
              <Box
                rounded="lg"
                p="4"
                bg="white"
                width={(widthDimensii / 3) * 2.1}
              >
                <VStack space={8}>
                  <HStack justifyContent="space-between">
                    <HStack space={3} alignItems="center">
                      <Box
                        bg="gray.300"
                        width={12}
                        height={12}
                        rounded="full"
                      />
                      <VStack>
                        <Text
                          fontFamily={fonts.primary[600]}
                          color={colors.primary}
                          fontSize={16}
                        >
                          Company
                        </Text>
                        <Text
                          fontFamily={fonts.primary[600]}
                          color={colors.gray[650]}
                          fontSize={12}
                        >
                          Jakarta, Indonesia
                        </Text>
                      </VStack>
                    </HStack>
                    <TouchableOpacity>
                      <SavedIcon width="26" />
                    </TouchableOpacity>
                  </HStack>
                  <VStack space={2}>
                    <Text
                      fontFamily={fonts.primary[600]}
                      color={colors.primary}
                      fontSize={16}
                    >
                      Jenis Pekerjaan
                    </Text>
                    <HStack justifyContent="space-between" alignItems="center">
                      <Box
                        bgColor="blueGray.200"
                        px="3"
                        py="1"
                        rounded="full"
                        fontSize={12}
                        fontFamily={fonts.primary[600]}
                      >
                        RP 1.000.000/bulan
                      </Box>
                      <Text
                        color={colors.primary}
                        fontSize={14}
                        fontFamily={fonts.primary.normal}
                      >
                        5 min ago
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity>
              <Box
                rounded="lg"
                p="4"
                bg="white"
                width={(widthDimensii / 3) * 2}
              >
                <VStack space={8}>
                  <HStack justifyContent="space-between">
                    <HStack space={3} alignItems="center">
                      <Box
                        bg="gray.300"
                        width={12}
                        height={12}
                        rounded="full"
                      />
                      <VStack>
                        <Text
                          fontFamily={fonts.primary[600]}
                          color={colors.primary}
                          fontSize={16}
                        >
                          Company
                        </Text>
                        <Text
                          fontFamily={fonts.primary[600]}
                          color={colors.gray[650]}
                          fontSize={12}
                        >
                          Jakarta, Indonesia
                        </Text>
                      </VStack>
                    </HStack>
                    <TouchableOpacity>
                      <SavedIcon width="30" />
                    </TouchableOpacity>
                  </HStack>
                  <VStack space={2}>
                    <Text
                      fontFamily={fonts.primary[600]}
                      color={colors.primary}
                      fontSize={16}
                    >
                      Jenis Pekerjaan
                    </Text>
                    <HStack justifyContent="space-between" alignItems="center">
                      <Box
                        bgColor="blueGray.200"
                        px="3"
                        py="1"
                        rounded="full"
                        fontSize={12}
                        fontFamily={fonts.primary[600]}
                      >
                        RP 1.000.000/bulan
                      </Box>
                      <Text
                        color={colors.primary}
                        fontSize={14}
                        fontFamily={fonts.primary.normal}
                      >
                        5 min ago
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            </TouchableOpacity>
          </HStack>
        </ScrollView>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          my={4}
          px={4}
        >
          <Text
            fontFamily={fonts.primary[800]}
            fontSize={16}
            color={colors.black}
          >
            List Pekerjaan
          </Text>
          <TouchableOpacity>
            <Text
              fontFamily={fonts.primary.normal}
              fontSize={12}
              color={colors.black}
              underline
            >
              Lihat semua
            </Text>
          </TouchableOpacity>
        </HStack>
        <VStack mb={4} px={4} space={5}>
          <CardPekerjaan />
          <CardPekerjaan />
          <CardPekerjaan />
          <CardPekerjaan />
        </VStack>
      </ScrollView>
    </>
  );
};

export default Beranda;

const styles = StyleSheet.create({});
