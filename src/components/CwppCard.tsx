import 'chart.js/auto'
import { Flex, Text } from "@chakra-ui/react";
import { Card } from "@mui/material";

const CwppCard = ({ title, image }: { title: any, image: any }) => {
    return <Card sx={{ padding: 2 }}>
        <Text fontSize={"lg"} fontWeight={500}>{title}</Text>
        <Flex align="center" gap={2}>
            {image}
        </Flex>
    </Card>

}

export default CwppCard;