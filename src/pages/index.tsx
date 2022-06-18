import { promises as fs } from 'fs'
import path from 'path'

import { RepeatIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Skeleton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'

import Card from '../components/Card'
import Header from '../components/Header'
import PreviewImage from '../components/PreviewImage'

import { GetStaticProps } from 'next'

export default function Home({ galleryData }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedPost, setSelectedPost] = useState(null)
  
  const posts = []
  galleryData.forEach((elem, idx) => {
    posts.push({
        id: idx,
        src: `/gallery/${elem.filename}`,
        isGallery: false,
        title: 'this is art',
        author: 'baopeng',
        permalink: 'baopeng.com',
        width: elem.width,
        height: elem.height,
    })
  })

  const view = (post) => {
    setSelectedPost(post)
    onOpen()
  }

  return (
    <Box minHeight="100vh" display="flex" flexDir="column">
      <Header />
      <Container maxW="6xl" mt={200} flex={1}>
        <Box textAlign="center">
          <Heading as="h1" size="4xl">
            Montage of Work
          </Heading>
          <Text fontSize="lg" fontWeight="semibold" mt={5}>
            Bao Peng is an artist residing in Málaga of Spain.
          </Text>
        </Box>
        <SimpleGrid autoFlow="dense" spacing={10} mt={20}>
          {posts.map((p) => (
            <Card key={p.id} post={p} onImageClick={view} width={p.width} height={p.height} />
          ))}

          {/* {(isLoadingInitialData || isLoadingMore) &&
            [...Array(PAGE_LIMIT).keys()].map((item) => (
              <Skeleton
                borderRadius={['sm', null, 'md']}
                key={item}
                height="275px"
              />
            ))} */}
        </SimpleGrid>

        {/* {!isReachingEnd && (
          <Box textAlign="center" mt={8}>
            <Button
              leftIcon={<RepeatIcon />}
              onClick={() => setSize(size + 1)}
              isLoading={isLoadingMore}
            >
              Load More
            </Button>
          </Box>
        )} */}
      </Container>
      {selectedPost && (
        <PreviewImage isOpen={isOpen} onClose={onClose} post={selectedPost} />
      )}
      <Container as="footer" maxW="xl" textAlign="center" py={10}>
        <Text>
          Fait avec{' '}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>{' '}
          par mon fils,{' '}
          <Link href="http://oceanbao.github.io/" isExternal>
            Ocean
          </Link>
        </Text>
      </Container>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const galleryDataFile = path.join(process.cwd(), 'public/paintingData.json')
    const galleryData = await fs.readFile(galleryDataFile, 'utf8')

    return {
        props: {
           galleryData: JSON.parse(galleryData) 
        }
    }
}