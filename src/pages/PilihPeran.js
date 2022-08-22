import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box, HStack, Text, VStack } from 'native-base';
import { fonts } from '../utils/fonts';
import { colors } from '../utils/colors';

const PilihPeran = () => {
  const [statusPeran, setStatusPeran] = useState('-');

  return (
    <Box pt="12" px="6" pb="5" h="full" maxHeight="full">
      <Text
        fontFamily={fonts.primary[700]}
        mb="48px"
        textAlign="center"
        fontSize="xl"
      >
        Pilih Peran Anda
      </Text>
      <VStack space={8} mb="52px">
        <Box height={32}>
          <TouchableOpacity onPress={() => setStatusPeran('PencariKerja')}>
            <HStack
              space={4}
              bgColor={
                statusPeran === 'PencariKerja' ? colors.black : colors.white
              }
              rounded="8"
              padding="16px"
              height={32}
              alignContent="center"
            >
              <Box h="full" width="1/3" p="4" rounded="md" bg="gray.200" />
              <VStack
                width="2/3"
                justifyContent="center"
                space="1.5"
                height="full"
              >
                <Text
                  fontFamily={fonts.primary[400]}
                  fontSize="xs"
                  color={
                    statusPeran === 'PencariKerja'
                      ? colors.white
                      : colors.gray[650]
                  }
                >
                  Pencari Kerja
                </Text>
                <Text
                  fontFamily={fonts.primary[400]}
                  fontSize="xs"
                  color={
                    statusPeran === 'PencariKerja'
                      ? colors.white
                      : colors.gray[650]
                  }
                >
                  Mencari Pekerjaan
                </Text>
              </VStack>
            </HStack>
          </TouchableOpacity>
        </Box>
        <Box height={32}>
          <TouchableOpacity onPress={() => setStatusPeran('PenyediaKerja')}>
            <HStack
              space={4}
              bgColor={
                statusPeran === 'PenyediaKerja' ? colors.black : colors.white
              }
              rounded="8"
              height={32}
              padding="16px"
              alignContent="center"
            >
              <Box w="1/3" h="full" p="4" rounded="md" bg="gray.200" />
              <VStack
                justifyContent="center"
                width="2/3"
                space="1.5"
                height="full"
              >
                <Text
                  fontFamily={fonts.primary[400]}
                  fontSize="xs"
                  color={
                    statusPeran === 'PenyediaKerja'
                      ? colors.white
                      : colors.gray[650]
                  }
                >
                  Penyedia Kerja
                </Text>
                <Text
                  fontFamily={fonts.primary[400]}
                  fontSize="xs"
                  color={
                    statusPeran === 'PenyediaKerja'
                      ? colors.white
                      : colors.gray[650]
                  }
                >
                  Mencari Pekerja
                </Text>
              </VStack>
            </HStack>
          </TouchableOpacity>
        </Box>
      </VStack>
      <HStack space={2} justifyContent="center" alignItems="center">
        <TouchableOpacity style={styles.backBtn}>
          <Text
            fontFamily={fonts.primary[700]}
            color={colors.black}
            fontSize="sm"
            textAlign="center"
          >
            Kembali
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextBtn(statusPeran)}
          disabled={statusPeran === '-' ? true : false}
        >
          <Text
            fontFamily={fonts.primary[700]}
            color={colors.white}
            fontSize="sm"
            textAlign="center"
          >
            Selanjutnya
          </Text>
        </TouchableOpacity>
      </HStack>
    </Box>
  );
};

export default PilihPeran;

const styles = StyleSheet.create({
  backBtn: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: '50%',
  },
  nextBtn: (statusPeran) => ({
    backgroundColor: statusPeran === '-' ? colors.gray[650] : colors.black,
    borderRadius: 8,
    padding: 10,
    width: '50%',
  }),
});
