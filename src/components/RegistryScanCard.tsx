import 'chart.js/auto'
import { Flex, Text } from "@chakra-ui/react";
import { Card } from "@mui/material";
import { Line } from 'react-chartjs-2';

const RegistryScanCard = ({ isVisible, title, graphData }: { title: any, graphData: any, isVisible: true }) => {
    if (isVisible) {
        return <Card sx={{ padding: 2, maxWidth: 550, width: 550 }}>
            <Text fontSize={"lg"} fontWeight={500}>{title}</Text>
            <Line data={graphData}></Line>
        </Card>

    }

}

export default RegistryScanCard;