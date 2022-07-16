import React from 'react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { HmContainer } from '../HmContainer'
import { IG_URL } from '../../data/igUrl'

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

  if (!igData) {
    return null
  }

  const igImages = igData?.slice(0, 6).map((media) => {
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
        <Box
          display='grid'
          gridTemplateColumns='repeat(auto-fit, minmax(min(288px, 100%), 1fr))'
          overflowX='hidden'
          gap='1px'
        >
          {igImages}
        </Box>
      </Box>
    </Box>
  )
}

export { OurWork }
