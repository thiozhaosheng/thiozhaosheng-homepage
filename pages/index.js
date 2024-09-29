import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { BioYear, BioSection } from '../components/bio.js'
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        I'm a aspiring DevOps Engineer based in the little red dot, Singapore!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Travis Thio
          </Heading>
          <p>( IT Engineer / System Integrator / Developer)</p>
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
            display="inline-block"
            borderRadius="full"
            src="/images/traviscropped.jpg"
            alt="Profile Pic"
            height="200"
            width="200"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" textDecoration="none">
          Greetings from the crossroads of history and innovation!
        </Heading>
        <Paragraph>
          I’m Travis (he/him), a Singaporean IT engineer working on system
          implementation and administration. <br />
          <br />
          I started off studying Computer Network and Systems at Singapore
          Polytechnic, and now I’m diving into full-stack development at Ngee
          Ann Polytechnic. <br />
          <br />
          These days, I’m at Pro-Datech System Pte Ltd, where I spend my time
          supporting users and putting together implementation plans for my
          clients. <br />
          <br />
          Though I’m based in Singapore, I love traveling back and forth to
          Thailand. <br />
          I’m really into Thai culture and history, and I’m learning the
          language so that I can hopefully make the move there someday. <br />
          <br />
          One thing about me—I can lose myself in museums for hours, reading
          every little plaque. <br />
          <br />
          I also get super excited about new, groundbreaking tech. <br />
          And if I’m not doing either of those, you’ll probably find me by the
          sea, relaxing with a good book that challenges how I see things.{' '}
          <br />
          <br />
          If you want to chat or connect, just hit me up on LinkedIn!
        </Paragraph>
      </Section>
    </Container>
  )
}
export default Page
