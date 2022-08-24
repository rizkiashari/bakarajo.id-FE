import { Dimensions, View } from 'react-native';
import React from 'react';
import { Box, HStack, ScrollView, Select, VStack } from 'native-base';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { CardPekerjaan, Header } from '../components';

const SearchPage = ({ navigation }) => {
  const widthDimensi = Dimensions.get('window').width;

  return (
    <View>
      <Header navigation={navigation} type="search" />
      <Box bgColor={colors.white} safeArea px="16px" mt={4} py="12px">
        <HStack space={3}>
          <Select
            minWidth={widthDimensi / 3 - 19}
            accessibilityLabel="Masa kontrak"
            placeholder="Masa kontrak"
            _text={colors.black}
            fontFamily={fonts.primary[700]}
            backgroundColor={colors.gray[100]}
            fontSize={10}
            borderRadius="lg"
            borderWidth={0}
            height={36}
            mt={1}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
          </Select>
          <Select
            minWidth={widthDimensi / 3 - 20}
            accessibilityLabel="Domisili"
            placeholder="Domisili"
            _text={colors.black}
            fontFamily={fonts.primary[700]}
            backgroundColor={colors.gray[100]}
            fontSize={10}
            borderRadius="lg"
            borderWidth={0}
            height={36}
            mt={1}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
          </Select>
          <Select
            minWidth={widthDimensi / 3 - 20}
            accessibilityLabel="Rentang gaji"
            placeholder="Rentang gaji"
            _text={colors.black}
            fontFamily={fonts.primary[700]}
            backgroundColor={colors.gray[100]}
            fontSize={10}
            borderRadius="lg"
            borderWidth={0}
            height={36}
            mt={1}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
          </Select>
        </HStack>
      </Box>
      <ScrollView width="full" pt={5} showsVerticalScrollIndicator={false}>
        <VStack mb="1/2" px={4} space={5}>
          <CardPekerjaan />
          <CardPekerjaan />
          <CardPekerjaan />
          <CardPekerjaan />
          <CardPekerjaan />
          <CardPekerjaan />
        </VStack>
      </ScrollView>
    </View>
  );
};

export default SearchPage;
