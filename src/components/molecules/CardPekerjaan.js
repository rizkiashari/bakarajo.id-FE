import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Box, HStack, VStack } from 'native-base';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { SavedIcon } from '../../assets';

const CardPekerjaan = () => {
  return (
    <TouchableOpacity>
      <Box rounded="lg" p="4" bg="white" width="full">
        <VStack space={8}>
          <HStack justifyContent="space-between">
            <HStack space={3}>
              <Box bg="gray.300" width={12} height={12} rounded="full" />
              <VStack>
                <Text
                  fontFamily={fonts.primary[600]}
                  color={colors.primary}
                  fontSize={16}
                >
                  Jenis Pekerjaan
                </Text>
                <Text
                  fontFamily={fonts.primary[600]}
                  color={colors.gray[650]}
                  fontSize={12}
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
          <HStack justifyContent="space-between" alignItems="center">
            <Box
              bgColor="blueGray.200"
              px="3"
              py="1"
              rounded="full"
              fontSize={12}
              fontFamily={fonts.primary[600]}
            >
              Buruh Harian
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
      </Box>
    </TouchableOpacity>
  );
};

export default CardPekerjaan;
