import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  Box,
  HStack,
  IconButton,
  Input,
  ScrollView,
  Select,
  VStack,
} from 'native-base';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { BackIcon, SearchGrey } from '../assets';
import { CardPekerjaan } from '../components';

const SearchPage = ({ navigation }) => {
  const widthDimensi = Dimensions.get('window').width;

  return (
    <View>
      <Box safeAreaTop bgColor={colors.white} width="full" px="16px" py="12px">
        <HStack alignItems="center" w="full">
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <BackIcon />
          </TouchableOpacity>
          <Input
            w="90%"
            px={5}
            py={4}
            borderRadius="xl"
            height="36px"
            bgColor="gray.100"
            focusOutlineColor={colors.primary[500]}
            InputRightElement={
              <IconButton color="black">
                <SearchGrey />
              </IconButton>
            }
            placeholder="Search"
            _input={styles.input}
          />
        </HStack>
      </Box>
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
        <VStack mb="1/3" px={4} space={5}>
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

const styles = StyleSheet.create({
  backBtn: {
    width: '10%',
  },
  input: {
    fontFamily: fonts.primary.normal,
    fontSize: 13,
    height: 20,
    paddingBottom: 3,
  },
});
