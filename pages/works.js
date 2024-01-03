import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbContact from '../public/images/works/tba.png'


const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                    <WorkGridItem id="contact" title="Something" thumbnail={thumbContact}>
                        Something
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="contact" title="Something" thumbnail={thumbContact}>
                        Something
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="contact" title="Something" thumbnail={thumbContact}>
                        Something
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="contact" title="Something" thumbnail={thumbContact}>
                        Something
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem id="contact" title="Something" thumbnail={thumbContact}>
                        Something
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="contact" title="Something" thumbnail={thumbContact}>
                        Something
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="contact" title="Something" thumbnail={thumbContact}>
                        Something
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="contact" title="Something" thumbnail={thumbContact}>
                        Something
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Divider my={6} />
        </Container>
    )
}

export default Works