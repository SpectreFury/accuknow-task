import { Flex, Text, Button } from "@chakra-ui/react";
import { Plus } from 'lucide-react'
import DashboardCard from "./DashboardCard";
import CwppCard from "./CwppCard";
import RegistryScanCard from "./RegistryScanCard";

const Dashboard = () => {
    const cwppData = [{
        title: 'Top 5 Namespace Specific Alerts',
        image: 'image url goes here now'
    },
    { title: "Workload Alerts", image: "image url goes here now" }]

    const registryScanData = [{
        title: 'Image Risk Assessment',
        graphData: {
            labels: ["Critical", "High", "Mild", "Okayish", "Working"],
            datasets: [{
                label: 'Risk levels',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
    }, {
        title: 'Image Risk Assessment',
        graphData: {
            labels: ["Critical", "High", "Mild", "Okayish", "Working"],
            datasets: [{
                label: 'Risk levels',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
    }]

    const jsonData = [{
        title: "Cloud Accounts",
        details: [
            { name: "Connected", value: 2 },
            { name: "Not Connected", value: 2 }
        ],
        doughnutData: {
            datasets: [{
                label: 'My First Dataset',
                data: [2, 2],
                backgroundColor: [
                    'rgb(50,255, 255)',
                    'rgb(54, 162, 235)',
                ],
            }]
        }
    },
    {
        title: "Cloud Account Risk Assessment",
        details: [
            { name: "Failed", value: 1689 },
            { name: "Warning", value: 681 },
            { name: "Not Available", value: 36 },
            { name: "Passed", value: 7253 }
        ],
        doughnutData: {
            datasets: [{
                label: 'My First Dataset',
                data: [1689, 681, 36, 7253],
                backgroundColor: [
                    'rgb(255,100, 100)',
                    'rgb(255,255, 100)',
                    'rgb(150, 150, 150)',
                    'rgb(150, 255, 100)',
                ],
            }]
        }

    }
    ]

    return <Flex bgColor={"blue.50"} padding={10} direction="column">

        <Flex width="full" direction={"row"} align={"center"} justify={"space-between"}>
            <Text fontSize={"lg"} fontWeight={700}>CNAPP Dashboard</Text>
            <Button variant="solid" >Add Widget <Plus /></Button>
        </Flex>

        <Flex mt={10} gap={5}>
            {jsonData.map((data) =>
                <DashboardCard title={data.title} details={data.details} doughnutData={data.doughnutData} />
            )}
        </Flex>

        <Text fontSize={"lg"} fontWeight={700} mt={5}>CWPP Dashboard</Text>
        <Flex mt={10} my={10} gap={5}>
            {cwppData.map((data) =>
                <CwppCard title={data.title} image={data.image} />
            )}
        </Flex>
        <Text fontSize={"lg"} fontWeight={700} mt={5}>Registry Scan</Text>
        <Flex mt={10} my={10} gap={5}>
            {registryScanData.map((data) =>
                <RegistryScanCard title={data.title} graphData={data.graphData} />
            )}
        </Flex>
    </Flex>
}

export default Dashboard;