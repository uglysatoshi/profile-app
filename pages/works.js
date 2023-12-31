import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbContact from '../public/images/works/contact_thumb.jpg'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem id="contact" title="Contact" thumbnail={thumbContact}>
                            Minimalistic CRM-system
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Divider my={6} />
            </Container>
        </Layout>
    )
}

export default Works