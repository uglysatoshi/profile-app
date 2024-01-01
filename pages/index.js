import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
                Hello, I&apos;m a beginner full-stack developer based in Russia
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Koltyga Valery
                    </Heading>
                    <p> Student of SUITD / Full-stack Developer </p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page