import { Container, Box, Heading, Image } from '@chakra-ui/react'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
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
        </Container>
    )
}

export default Page
