import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { HmContainer } from '../HmContainer'

const INSTAGRAM_API_URL =
  'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token='

const fetchInstagramImages = async (accessToken) => {
  try {
    const response = await axios.get(`${INSTAGRAM_API_URL}${accessToken}`)
    return response.data
  } catch (error) {
    console.error('Error fetching Instagram data:', error)
    return null
  }
}

const OurWork = () => {
  const [instagramData, setInstagramData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await fetchInstagramImages(process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN)
      setInstagramData(data?.data)
    }

    fetchData()
  }, [])

  if (!instagramData) {
    return null
  }

  console.log(instagramData)

  const instagramImages = instagramData?.slice(0, 6).map((media) => {
    return (
      <Box key={media.media_url} position='relative' width='100%' height='388px'>
        <Image src={media.media_url} alt='instagram post media' layout='fill' objectFit='cover' />
      </Box>
    )
  })

  return (
    <Box as='section' id='work-section'>
      <Box pt={16}>
        <HmContainer>
          <Box display='flex' justifyContent='space-between'>
            <Text className='title' mb={8}>
              Our Work
            </Text>
          </Box>
          <Box
            display='grid'
            gridTemplateColumns='repeat(auto-fit, minmax(min(288px, 100%), 1fr))'
            overflowX='hidden'
            gap='1px'
          >
            {instagramImages}
          </Box>
        </HmContainer>
      </Box>
    </Box>
  )
}

export { OurWork }
