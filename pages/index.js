import NextLink from "next/link";
import { Container, Box, Heading, Image, useColorModeValue, Link } from '@chakra-ui/react'
import Section from "../components/section"
import Paragraph from "../components/paragraph";
const Page = () => {
    return (
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
                    <Image userSelect="none" borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="images/satoshi.gif" alt="Profile Picture"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sagittis quam, nec bibendum ex consequat vitae. Nam tincidunt leo mi, nec elementum sem sodales eget. Maecenas mollis consequat lorem eget mollis. Fusce vehicula tempor erat vel varius. Nulla vitae nulla dignissim, viverra purus quis, consectetur lacus.
                    {' '}
                    <Link as={NextLink} href="https://github.com" passHref scroll={false}>Quisque</Link> {' '}
                    feugiat bibendum sodales. Donec in leo justo. Nullam convallis est sed felis consectetur, sed porttitor enim tempus. Cras ut risus tristique, eleifend justo eget, luctus mauris. Duis a pellentesque quam, nec cursus elit. Vivamus ac quam lobortis diam aliquam scelerisque id vel ligula. Nam sed dolor euismod, pretium neque ultricies, dapibus lectus.
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
