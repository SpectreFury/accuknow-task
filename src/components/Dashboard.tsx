//@ts-nocheck

import { useState } from 'react'
import { Flex, Text, Button, Drawer, Tabs, Checkbox } from "@chakra-ui/react";
import { Plus } from 'lucide-react'
import DashboardCard from "./DashboardCard";
import CwppCard from "./CwppCard";
import RegistryScanCard from "./RegistryScanCard";

const Dashboard = ({ searchInput }) => {
    const [open, setOpen] = useState(false);

    const [cwppData, setCwppData] = useState(
        [{
            isVisible: true,
            title: 'Top 5 Namespace Specific Alerts',
            image: 'image url goes here now'
        },
        { isVisible: true, title: "Workload Alerts", image: "image url goes here now" }]

    )

    const [registryScanData, setRegistryScanData] = useState(
        [{
            isVisible: true,
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
            isVisible: true,
            title: 'Image Security Issues',
            graphData: {
                labels: ["Critical", "High", "Mild", "Okayish", "Working"],
                datasets: [{
                    label: 'Risk levels',
                    data: [100, 51, 32, 10, 50, 103, 10],
                    fill: true,
                    borderColor: 'rgb(100, 100, 255)',
                    tension: 0.1
                }]
            },
        }]

    )

    const [cnappData, setCnappData] = useState(
        [{
            isVisible: true,
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
            isVisible: true,
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
    )

    const filteredCnapp = cnappData.filter((data) => data.title.toLowerCase().includes(searchInput.toLowerCase()))
    const filteredCwpp = cwppData.filter((data) => data.title.toLowerCase().includes(searchInput.toLowerCase()))
    const filteredRegistry = registryScanData.filter((data) => data.title.toLowerCase().includes(searchInput.toLowerCase()))


    function handleCnappCheckChange(e: any, data: any) {
        setCnappData((prev) =>
            prev.map((item) => item.title === data.title ? { ...item, isVisible: e.checked } : { ...item }))

    }
    function handleCwppCheckChange(e: any, data: any) {
        setCwppData((prev) =>
            prev.map((item) => item.title === data.title ? { ...item, isVisible: e.checked } : { ...item }))

    }
    function handleRegistryChange(e: any, data: any) {
        setRegistryScanData((prev) =>
            prev.map((item) => item.title === data.title ? { ...item, isVisible: e.checked } : { ...item }))

    }
    return <Flex bgColor={"blue.50"} padding={10} direction="column">

        <Flex width="full" direction={"row"} align={"center"} justify={"space-between"}>
            <Text fontSize={"lg"} fontWeight={700}>CNAPP Dashboard</Text>
            <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
                <Drawer.Backdrop />
                <Drawer.Trigger asChild >
                    <Button variant="solid" >Add Widget <Plus /></Button>
                </Drawer.Trigger>
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>Add Widget</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Text>Personalize your dashboard by adding the following</Text>
                            <Tabs.Root defaultValue="cspm" variant="line" mt={5}>
                                <Tabs.List bg="bg.muted" rounded="l3" p="1">
                                    <Tabs.Trigger value="cspm">
                                        CSPM
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="cwpp">
                                        CWPP
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="image">
                                        Image
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="ticket">
                                        Ticket
                                    </Tabs.Trigger>
                                </Tabs.List>
                                {cnappData.map((data) =>
                                    <Tabs.Content value="cspm">
                                        <Checkbox.Root checked={data.isVisible} onCheckedChange={(e) => handleCnappCheckChange(e, data)}>
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Control />
                                            <Checkbox.Label>{data.title}</Checkbox.Label>
                                        </Checkbox.Root>
                                    </Tabs.Content>
                                )}
                                {cwppData.map((data) =>
                                    <Tabs.Content value="cwpp">
                                        <Checkbox.Root checked={data.isVisible} onCheckedChange={(e) => handleCwppCheckChange(e, data)}>
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Control />
                                            <Checkbox.Label>{data.title}</Checkbox.Label>
                                        </Checkbox.Root>
                                    </Tabs.Content>
                                )}
                                {registryScanData.map((data) =>
                                    <Tabs.Content value="image">
                                        <Checkbox.Root checked={data.isVisible} onCheckedChange={(e) => handleRegistryChange(e, data)}>
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Control />
                                            <Checkbox.Label>{data.title}</Checkbox.Label>
                                        </Checkbox.Root>
                                    </Tabs.Content>
                                )}
                                <Tabs.Content value="ticket">
                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control />
                                        <Checkbox.Label>Cloud Accounts</Checkbox.Label>
                                    </Checkbox.Root>
                                </Tabs.Content>
                            </Tabs.Root>
                        </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Drawer.Root>
        </Flex>

        <Flex mt={10} gap={5}>
            {filteredCnapp.map((data) =>
                <DashboardCard isVisible={data.isVisible} title={data.title} details={data.details} doughnutData={data.doughnutData} />
            )}
        </Flex>

        <Text fontSize={"lg"} fontWeight={700} mt={5}>CWPP Dashboard</Text>
        <Flex mt={10} my={10} gap={5}>
            {filteredCwpp.map((data) =>
                <CwppCard isVisible={data.isVisible} title={data.title} image={data.image} />
            )}
        </Flex>
        <Text fontSize={"lg"} fontWeight={700} mt={5}>Registry Scan</Text>
        <Flex mt={10} my={10} gap={5}>
            {filteredRegistry.map((data) =>
                <RegistryScanCard isVisible={data.isVisible} title={data.title} graphData={data.graphData} />
            )}
        </Flex>
    </Flex >
}

export default Dashboard;