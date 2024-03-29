import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import { Text, Link } from '@chakra-ui/react'

import { HmContainer } from '../HmContainer'
// import { backupImages } from '../../public/our-work-backups'

import { HIDE_OUR_WORK_SECTION } from '../../utils/vars'

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
      const fetchedData = await fetchInstagramImages(process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN)
      setInstagramData(fetchedData?.data)
    }
    fetchData()
  }, [])

  if (!instagramData || HIDE_OUR_WORK_SECTION) {
    return null
  }

  const renderOurWorkImages = () => {
    // const isInstagramImages = instagramData.length > 0

    // if (!isInstagramImages) {
    //   return backupImages.map((media) => {
    //     return (
    //       <Box key={media.src} position='relative' width='100%' height='388px'>
    //         <Image src={media.src} alt='instagram post media' layout='fill' objectFit='cover' />
    //       </Box>
    //     )
    //   })
    // }

    return instagramData.slice(0, 6).map((media) => {
      return (
        <Box key={media.media_url} position='relative' width='100%' height='388px'>
          <Link href={media.permalink}>
            <Image src={media.media_url} alt='instagram post media' layout='fill' objectFit='cover' />
          </Link>
        </Box>
      )
    })
  }

  return (
    <Box as='section' id='work-section' paddingY='12%'>
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
          gap='4px'
          gridTemplateColumns='repeat(auto-fit, minmax(min(288px, 100%), 1fr))'
          overflowX='hidden'
          p='4px'
        >
          {renderOurWorkImages()}
        </Box>
      </Box>
    </Box>
  )
}

export { OurWork }
