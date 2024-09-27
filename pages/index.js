import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm a aspiring Sysadmin based in the little red dot, Singapore!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Travis Thio
          </Heading>
          <p>( IT Engineer / System Integrator / Developer)</p>
        </Box>
      </Box>
    </Container>
  )
}
export default Page
