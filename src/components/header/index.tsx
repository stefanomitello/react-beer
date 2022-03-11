import React from 'react';
import { Box, Flex, Heading } from "@chakra-ui/react";




const Header = () => {
    return (
        <Flex as='header' bg='tomato' w='100%' p={4} color='white' pos="fixed" top="0" left="0" zIndex={2}>
            <Box p='2'>
                <Heading size='md'>Beer</Heading>
            </Box>
        </Flex>
    );
}

export default Header;