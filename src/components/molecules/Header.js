import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Box, HStack, IconButton, Input, Text } from 'native-base';
import { BackIcon, Notification, SearchBlack, SearchGrey } from '../../assets';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const Header = ({ navigation, type, isProfile, title }) => {
  if (type === 'search') {
    return (
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
            height="40px"
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
    );
  }

  return (
    <Box safeAreaTop bgColor={colors.white} width="full" px="16px" py="12px">
      <HStack justifyContent="space-between" alignItems="center">
        <HStack space={4} alignItems="center" width="2/3">
          {isProfile && (
            <Box
              bgColor={colors.gray[655]}
              width={10}
              height={10}
              rounded="full"
            />
          )}
          <Text
            fontFamily={fonts.primary[700]}
            color={colors.black}
            fontSize={16}
          >
            {title}
          </Text>
        </HStack>
        <HStack space={4} justifyContent="flex-end" alignItems="center">
          <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
            <SearchBlack />
          </TouchableOpacity>
          <TouchableOpacity>
            <Notification />
          </TouchableOpacity>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;

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
