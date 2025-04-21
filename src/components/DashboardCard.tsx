import 'chart.js/auto'
import { Flex, Tag, Text } from "@chakra-ui/react";
import { Card } from "@mui/material";
import { Doughnut } from "react-chartjs-2";

const DashboardCard = ({ title, details, doughnutData, isVisible }: { title: string, details: any, doughnutData: any, isVisible: boolean }) => {
    if (isVisible) {
        return <Card sx={{ padding: 2, width: 650, maxWidth: 650 }}>
            <Text fontSize={"lg"} fontWeight={500}>{title}</Text>
            <Flex align="center" gap={2} justify="space-around">
                <Flex>
                    <Doughnut data={doughnutData} />
                </Flex>
                <Flex direction="column" gap={2}>
                    {details.map((detail: any) =>
                        <Flex gap={2} >
                            <Tag.Root variant="solid" bgColor={`${detail.color}`}>
                                <Tag.Label></Tag.Label>
                            </Tag.Root>
                            <Text fontWeight={500}>{`${detail.name} (${detail.value})`}</Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Card>

    }

}

export default DashboardCard;