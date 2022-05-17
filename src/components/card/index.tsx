import React from 'react';
import './style.css'

import { Box, Image } from "@chakra-ui/react";

type Beer = {
    title: string;
    tagline: string;
    imageUrl: string;

    year_brewed: string;
    month_brewed: string;
}

const Card = ({ title, tagline, imageUrl, year_brewed, month_brewed }: Beer) => {

    return (


        <Box textAlign='center' maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden' m={15} className='card' w={{ base: "95%", md: "40%", lg: "45%" }}>
            <Image src={imageUrl} alt={title} p={15} />

            <Box p='6' as='span' textAlign='start'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {title}
                </Box>

                <Box>
                    {tagline}

                    <li>Prodotto il: {month_brewed} / {year_brewed}</li>
                </Box>
            </Box>
        </Box>
    )
}


export default Card;