import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function About({ isOpen, onClose }) {
  const size = useBreakpointValue({ base: 'full', md: '4xl' })

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
        <ModalHeader>About Bao Peng</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            // boxSize="200px"
            src="/baopeng.jpg"
            alt="Dan Abramov"
          />
          <Text mt={3} fontSize="lg" fontWeight="semibold">
            Description...
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
