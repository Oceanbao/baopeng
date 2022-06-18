import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Flex, Img, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionImg = motion(Img)

export default function Card({ post, onImageClick, width, height }) {
  const cardColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box
      backgroundColor={cardColor}
      borderRadius={['md', null, 'lg']}
      overflow="hidden"
    //   width={width}
    //   height={height}
    >
      <Box
        onClick={() => onImageClick(post)}
        cursor="pointer"
        h={height}
        w={width}
        position="relative"
        overflow="hidden"
      >
        <MotionImg
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.5 }}
          w="100%"
          h="100%"
          objectFit="cover"
          src={post.src}
        />
      </Box>
      {/* <Flex px="4" py="2" align="center" justify="space-between" w="100%">
              <Text fontSize={['xs', null, 'sm']}>
                  Posted by bao peng
              </Text>
              <Flex align="center">
                  <ArrowUpIcon />
                  <Text ml={1} fontSize={['xs', null, 'sm']}>
                      some text...
                  </Text>
              </Flex>
          </Flex> */}
    </Box>
  )
}
