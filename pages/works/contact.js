import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="contact">
        <Container>
            <Title>
                contact <Badge>2023</Badge>
            </Title>
            <P>
                A minimalistic CRM/ERM system created as part of a course in the design of information systems and multimedia applications.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Flask, MongoDB, HTML, CSS, JS</span>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/uglysatoshi/contact">
                        Latest
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Last update</Meta>
                    <span>23/12/2023</span>
                </ListItem>
                <ListItem>
                    <Meta>Manual</Meta>
                    <Link href="https://github.com/uglysatoshi/contact/blob/master/README.md">Project Build</Link>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={20} my={6}>
                <Center>Some layouts</Center>
            </Heading>
                <WorkImage src="../images/works/contact_1.jpg" alt="contact" />
                <WorkImage src="../images/works/contact_2.jpg" alt="contact" />
        </Container>
    </Layout>
)

export default Work
