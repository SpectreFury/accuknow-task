import { Flex, Text, InputGroup, Input } from "@chakra-ui/react";
import { ArrowRight, LucideSearch } from 'lucide-react'

const Navbar = () => {
    return <Flex paddingY={2} justify="space-between" align={"center"}>
        <Flex flex={1} direction={"row"} align={"center"} gap={2}>
            <Text fontWeight={500} color={"gray.400"}>Home</Text>
            <ArrowRight size={16} />
            <Text color={"blue.600"} fontWeight={500}>Dashboard</Text>
        </Flex>

        <Flex flex={1} align={"center"} justify={"space-between"}>
            <InputGroup maxW={700} startElement={<LucideSearch />}>
                <Input placeholder="Search anything" />
            </InputGroup>

            <Text>User Name</Text>

        </Flex>
    </Flex >
}

export default Navbar;