import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    useColorModeValue,
    Link,
    Button,
    List,
    ListItem, Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Image from 'next/image'
import profilePicturePath from '../public/images/satoshi.png'
import {
    BsTelegram,
    BsGithub,
    BsLinkedin
} from 'react-icons/bs'

const Page = () => {
    return (
        <Layout title="Homepage">
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a beginner full-stack developer based in Russia!
                </Box>
                <Box display={{ md: 'flex' }} alignItems="center">
                    <Box flexGrow={1}>
                        <Heading
                            as="h2"
                            variant="page-title"
                        >
                            Koltyga Valery
                        </Heading>
                        <p> Student of SUITD / Full-stack Developer </p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{base: 4, md: 0}}
                        ml={{md: 6}}
                        align="center"
                    >
                        <Image
                            className="profile-picture"
                            src={profilePicturePath}
                            alt="Profile image"
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        An enthusiast in the field of web programming and freelancing in the same field. I also study at St. Petersburg State University of Industrial Technologies and Design.
                    </Paragraph>
                    <Paragraph>
                        I’m trying to improve my skills in algorithms and data structures and am actively looking for my first job in IT.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Link as={NextLink} href="/works" >
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="blue">
                                My Portfolio
                            </Button>
                        </Link>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            2003
                        </BioYear>
                        Born in Nizhnevartovsk, Russia.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2021
                        </BioYear>
                        Moved to St. Petersburg
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2021 to present
                        </BioYear>
                        Studying at the St. Petersburg State University of Industrial Technologies and Design, majoring in Informatics and Computer Engineering
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Art, Music,{' '}
                        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">
                            Coding
                        </Link>
                        , Hiking
                    </Paragraph>
                </Section>

                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        Find me
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/uglysatoshi" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="blue"
                                    leftIcon={<BsGithub/>}
                                >
                                    @uglysatoshi
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://t.me/uglysatoshi" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="blue"
                                    leftIcon={<BsTelegram/>}
                                >
                                    @uglysatoshi
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/valery-koltyga" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="blue"
                                    leftIcon={<BsLinkedin/>}
                                >
                                    Valery Koltyga
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
                <Divider my={6} />
            </Container>
        </Layout>
    )
}

export default Page
