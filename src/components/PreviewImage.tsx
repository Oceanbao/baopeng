import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  HStack,
//   Image,
  Img,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'

export default function PreviewImage({ isOpen, onClose, post }) {
  const size = useBreakpointValue({ base: 'md', md: '2xl' })
//   const imageMarginTop = !post.awards.length ? 3 : 0
  const imageMarginTop = 1

  return (
    <Modal
      isCentered
      scrollBehavior="inside"
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          HEADING...
          {/* <HStack spacing={2}>
            {post.awards.map((award, index) => {
              return (
                <Tooltip
                  key={index}
                  label={award.description}
                  aria-label="Award tooltip"
                >
                  <Flex>
                    <MotionImage
                      whileHover={{ rotate: [0, 10, -10, 0] }}
                      src={award.src}
                    />
                    {award.count > 1 && (
                      <Text ml="2px" fontSize="xs">
                        3
                      </Text>
                    )}
                  </Flex>
                </Tooltip>
              )
            })}
          </HStack> */}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {post.isGallery ? (
            <Box w="100%" mt={imageMarginTop}>
              <Carousel showThumbs={false} dynamicHeight useKeyboardArrows>
                {post.gallery.map((src) => (
                  <Img key={src} src={src} />
                ))}
              </Carousel>
            </Box>
          ) : (
            <Img mt={imageMarginTop} src={post.src} />
          )}
          <Text mt={3} fontSize="lg" fontWeight="semibold">
            {post.title}
          </Text>
          <Text fontSize="xs" mt={2}>
            Posted by <Link>u/{post.author}</Link> {post.createdAt}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          {/* <Button
            ml={3}
            variant="ghost"
            as="a"
            rightIcon={<ExternalLinkIcon />}
            href={post.permalink}
            target="_blank"
            mr={3}
          >
            Open in Reddit
          </Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
