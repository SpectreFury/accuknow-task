import 'chart.js/auto'
import { Flex, Text } from "@chakra-ui/react";
import { Card } from "@mui/material";
import { Doughnut } from "react-chartjs-2";

const DashboardCard = ({ title, details, doughnutData, isVisible }: { title: string, details: any, doughnutData: any, isVisible: boolean }) => {
    if (isVisible) {
        return <Card sx={{ padding: 2, width: 550, maxWidth: 550 }}>
            <Text fontSize={"lg"} fontWeight={500}>{title}</Text>
            <Flex align="center" gap={2}>
                <Flex>
                    <Doughnut data={doughnutData} />
                </Flex>
                <Flex direction="column">
                    {details.map((detail: any) =>
                        <Text fontWeight={500}>{`${detail.name} (${detail.value})`}</Text>
                    )}
                </Flex>
            </Flex>
        </Card>

    }

}

export default DashboardCard;