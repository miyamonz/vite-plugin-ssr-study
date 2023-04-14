import { Box, Grid, GridItem, Stack, Button } from "@chakra-ui/react";
import { BasicUsage } from "./BasicUsage";

export function Page() {
  return (
    <>
      <h1>chakra</h1>
      <Box bg="tomato" w="100%" p={4} color="white">
        Hello World!
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
      <BasicUsage />
    </>
  );
}
