import { Flex, VStack, Heading } from "@chakra-ui/react";

import Header from "./Header";

function App() {
  return (
    <VStack>
      <Flex h="100vh" py={20}>
        <Header />
      </Flex>
    </VStack>
  );
}

export default App;
