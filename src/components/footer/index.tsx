import React from 'react';
import { Box, Flex, Heading } from "@chakra-ui/react";




const Footer = () => {
    return (
        <Flex as='footer' bottom="0" left="0" bg='tomato' w='100%' p={4} color='white' pos="fixed" zIndex={2}>
            Footer
        </Flex>
    );
}

export default Footer;