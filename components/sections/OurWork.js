import React from 'react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { HmContainer } from '../HmContainer'
import { theme } from '../../styles/theme'
import { IG_URL } from '../../data/igUrl'

// const IgBox = () => (
//   <Box w='288px' h='288px' p='20px' display='grid' placeItems='center' backgroundColor={theme.colors.brand.midGrey}>
//     <ExternalLinkIcon w={12} h={12} color='white' />
//   </Box>
// )

const fetchIg = async () => {
  try {
    return await fetch(IG_URL).then((resp) => resp.json())
  } catch (err) {
    console.error(err)
  }
}

const OurWork = () => {
  const [igData, setIgData] = useState()

  useEffect(() => {
    const getIgData = async () => {
      const { data } = await fetchIg()
      setIgData(data)
    }
    getIgData()
  }, [])

  console.log(igData)

  const igImages = igData?.slice(0, 6).map((media, idx) => {
    return <Image src={media.media_url} alt='instagram post media' key={media.media_url} width='388px' height='388px' />
  })

  return (
    <Box as='section' className='our-team-section'>
      <Box pt={16}>
        <HmContainer>
          <Box display='flex' justifyContent='space-between'>
            <Text className='title' mb={8}>
              Our Work
            </Text>
          </Box>
        </HmContainer>
        <Box display='flex' justifyContent='center' overflowX='hidden' gap='1px'>
          {igImages}
        </Box>
      </Box>
    </Box>
  )
}

export { OurWork }
