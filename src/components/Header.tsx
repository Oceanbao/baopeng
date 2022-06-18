import { HamburgerIcon, MoonIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';

import { LightBulbIcon } from '../styles/icon';

import About from '../components/About'

export default function Header() {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('#ebe9e3', '#011627');
    const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
        <About isOpen={isOpen} onClose={onClose} />
        <Box position="fixed" w="100%" zIndex={1} backgroundColor={{ base: "transparent", md: bgColor }}>
            <Container
                maxW="6xl"
                py={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Button variant="ghost" fontSize="xl" onClick={scrollToTop}>
                    bao peng
                </Button>
                <Box>
                    <Menu closeOnSelect={true}>
                        <MenuButton
                            as={IconButton}
                            variant="ghost"
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                        />
                        <MenuList>
                            <MenuItem justifyContent="center" onClick={onOpen}>About</MenuItem>
                            <MenuItem justifyContent="center">Reviews (tbc)</MenuItem>
                        </MenuList>
                    </Menu>
                    <IconButton
                        ml={1}
                        onClick={toggleColorMode}
                        variant="ghost"
                        aria-label="Toggle theme"
                        icon={themeIcon}
                    />
                </Box>
            </Container>
        </Box>
        </>
    );
}