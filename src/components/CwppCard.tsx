import 'chart.js/auto'
import { Flex, Text } from "@chakra-ui/react";
import { Card } from "@mui/material";
import GraphImage from '../assets/graph-image.jpg'

const CwppCard = ({ title, image }: { title: any, image: any }) => {
    return <Card sx={{ padding: 2, width: 550, maxWidth: 550 }}>
        <Text fontSize={"lg"} fontWeight={500}>{title}</Text>
        <Flex align="center" gap={2}>
            <img src={GraphImage} />
        </Flex>
    </Card>

}

export default CwppCard;