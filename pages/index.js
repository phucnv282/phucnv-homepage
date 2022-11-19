import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius={'lg'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a Site Reliability Engineer based in Vietnam!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant="page-title">
              Phuc Nguyen
            </Heading>
            <p>Nomad Guy ( Developer / SREr )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/takuya.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant={'section-title'}>
            Work
          </Heading>
          <Paragraph>
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his camera. Currently, he is
            living off of his own product called{' '}
            <NextLink href={'/works/inkdrop'}>
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href={'/works'}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as={'h3'} variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Bac Ninh, Vietnam.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Bachelor&apos;s Program in the Information Technology
            at University of Engineering and Technology - VNU
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked at Revotech International
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked as a Research Assistant at ORLab, Phenikaa University
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Working as a Site Reliability Engineer at Teko
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as={'h3'} variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Art, Science, Music, Computer</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
