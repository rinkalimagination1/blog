'use client'

import { useState } from 'react';
import {
  Container,
  Paper,
  Text,
  Button,
  useMantineTheme,
  Box,
  Group,
  SegmentedControl,
  Avatar,
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  NavLink,
  SimpleGrid,
  Card,
  Textarea, Input,
  NativeSelect,
  ScrollArea
} from '@mantine/core';
import { Slash } from 'tabler-icons-react';
import { IoTriangleSharp, IoSparklesSharp } from "react-icons/io5";
import { MdIosShare } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { BsChat, BsArrowRightCircle } from "react-icons/bs";
import { IconChevronDown } from '@tabler/icons-react';
import { RiShareBoxLine, RiOpenaiFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { AiOutlineHolder, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { LuListX } from "react-icons/lu";


export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);


  return (
    <main>

      <AppShell

        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        padding="md"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"

        /* Navbar */

        navbar={<Navbar
          p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} className='bg-gray-100'>
          <Button variant="default" leftIcon={<HiPlus />} className='pr-40 font-bold bg-white'>New Chat</Button>
          <Text className='pt-2 font-bold text-gray-500'>Previous 7 Days</Text>
          <NavLink label="hello" className='font-bold' icon={<BsChat size="1rem" stroke={1.5} />} />
        </Navbar>}

        /* Header */

        header={<Header height={{ base: 40, md: 60 }} p="sm">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <IoTriangleSharp color="black" size={15} />
            <Slash
              size={30}
              strokeWidth={1}
              color={'#D3D3D3'}
            />
            <IoSparklesSharp color="black" size={15} />
            <Text className='p-1 font-bold font-lg'>AI</Text>
            <SegmentedControl size='xs' className='font-bold'
              data={[
                { label: 'Chat', value: 'chat' },
                { label: 'Prompt', value: 'prpt' },
              ]}
            />
            <Text className='pl-2 font-bold text-gray-500'>Docs</Text>
            <div className="space-x-6 pl-[70%]">
              <Group className='w-x-full'>
                <Button variant="default" leftIcon={<MdIosShare />}>Share Chat</Button>
                <Avatar size="sm"
                  className='rounded' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
              </Group>
            </div>
          </div>

        </Header>}
      >

        {/* <Text>Your application here</Text> */}

        <div style={{ width: '100%', height: '100%', position: 'relative' }} className='grid grid-cols-2 space-x-[1px]'>
          <div>
            <Paper shadow="xs" p="xs" withBorder className='rounded-none'>
              <Container size="lg">
                <Box>
                  <Card>
                    <Card.Section inheritPadding py="xs">
                      <Group position="apart">
                        <Group>
                          <AiOutlineHolder color="black" size="1.5rem" />
                          <NativeSelect
                            icon={<RiOpenaiFill size="1.5rem" />}
                            data={['OpenAI / gpt-4']}
                            rightSection={<IconChevronDown size="1rem" />}
                            className='w-x-[80%]'
                          />
                        </Group>
                        <Group>
                          <LuListX color="dimmed" size="1rem" />
                          <AiOutlineMinusCircle color="dimmed" size="1rem" />
                          <AiOutlinePlusCircle color="dimmed" size="1rem" />
                          <HiOutlineCodeBracket color="dimmed" size="1rem" />
                          <FiSettings color="dimmed" size="1rem" />
                        </Group>
                      </Group>
                    </Card.Section>
                  </Card>
                </Box>
              </Container>
            </Paper>
            <ScrollArea h={500}>
              <Box className='h-[700px] pt-[80px] pb-[80px] border border-gray-200 rounded-none'
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
                  textAlign: 'center',
                  padding: theme.spacing.xl,
                  borderRadius: theme.radius.md,
                  cursor: 'pointer',

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                  },
                })}>

                <Card withBorder shadow="sm">
                  <Card.Section inheritPadding py="xs">
                    <Group position="left" className='gap-[0]'>
                      <RiOpenaiFill color="black" />
                      <Text weight={500} className='align-left text-gray-400 pl-[5px]'>Open AI /</Text>
                      <Text weight={500} className='align-left pl-[5px]'>gpt-4</Text>
                    </Group>
                  </Card.Section>

                  <Card.Section inheritPadding mt="sm" pb="xl">
                    <SimpleGrid>
                      <Input.Description className='text-justify'>GPT-4 from OpenAI has borad general knowledge and domain expertise allowing it to follow
                        complex instructions in natural language and solve difficult problems accurately.</Input.Description>
                      <br />
                    </SimpleGrid>
                  </Card.Section>
                  <SimpleGrid cols={2}>
                    <Text color="black" className='font-bold text-justify'>
                      Context
                    </Text>
                    <Text color="black" className='items-left pr-20 text-justify'>
                      8,192 tokens
                    </Text>
                  </SimpleGrid>
                  <Card.Section withBorder inheritPadding mt="sm" pb="xs" pt="xs">
                    <SimpleGrid cols={2}>
                      <Text color="black" className='font-bold text-justify'>
                        Input Pricing
                      </Text>
                      <Text color="black" className='items-left pr-15 text-justify'>
                        $30.00 / millions tokens
                      </Text>
                    </SimpleGrid>
                  </Card.Section>
                  <Card.Section inheritPadding mt="sm" pb="sm">
                    <SimpleGrid cols={2}>
                      <Text color="black" className='font-bold text-justify'>
                        Output Pricing
                      </Text>
                      <Text color="black" className='items-left pr-15 text-justify'>
                        $60.00 / millions tokens
                      </Text>
                    </SimpleGrid>
                  </Card.Section>
                  <br />
                  <br />
                  <br />
                  <Card.Section withBorder inheritPadding mt="[0]" className='bg-gray-200 pt-2 pb-2'>
                    <Group position="apart">
                      <Group >
                        <Button className='text-black'>Modal Page
                          <RiShareBoxLine color="black" />
                        </Button>
                        <Button className='text-black'>Pricing
                          <RiShareBoxLine color="black" />
                        </Button>
                      </Group>
                      <Group>
                        <Button className='text-black'>Website
                          <RiShareBoxLine color="black" />
                        </Button>
                      </Group>
                    </Group>
                  </Card.Section>
                </Card>

              </Box>
            </ScrollArea >
            <Paper shadow="xs" p="md" className='rounded-none'>
              <Container size="lg" className='h-[100%] w-[100%] px-[10.5px]'>

                <Textarea
                  className='w-full h-full-[100%]'
                  placeholder="send a message"
                  variant="filled"
                  withAsterisk
                  rightSection={
                    <>
                      <Button size="xs" rightIcon={<BsArrowRightCircle />} className="absolute top-7 right-3 px-2  py-1 bg-white text-gray-500 rounded">
                        Send
                      </Button>
                    </>
                  }
                />

              </Container>
            </Paper>
          </div>
          <div>
            <Paper shadow="xs" p="xs" withBorder className='rounded-none'>
              <Container size="lg">
                <Box>
                  <Card>
                    <Card.Section inheritPadding py="xs">
                      <Group position="apart">
                        <Group>
                          <AiOutlineHolder color="black" size="1.5rem" />
                          <NativeSelect
                            icon={<RiOpenaiFill size="1.5rem" color="Black" />}
                            data={['OpenAI / gpt-3.5-turbo']}
                            rightSection={<IconChevronDown size="1rem" />}
                            className='w-x-[80%]'
                          />
                        </Group>
                        <Group>
                          <LuListX color="dimmed" size="1rem" />
                          <AiOutlineMinusCircle color="dimmed" size="1rem" />
                          <AiOutlinePlusCircle color="dimmed" size="1rem" />
                          <HiOutlineCodeBracket color="dimmed" size="1rem" />
                          <FiSettings color="dimmed" size=" 1rem" />
                        </Group>
                      </Group>
                    </Card.Section>
                  </Card>
                </Box>
              </Container>
            </Paper>
            <ScrollArea h={500}>
              <Box className='h-[700px] pt-[80px] pb-[80px] border border-gray-200 rounded-none'
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
                  textAlign: 'center',
                  padding: theme.spacing.xl,
                  borderRadius: theme.radius.md,
                  cursor: 'pointer',

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                  },
                })}>


                <Card withBorder shadow="sm" radius="md">
                  <Card.Section inheritPadding py="xs">
                    <Group position="left" className='gap-[0]'>
                      <RiOpenaiFill color="black" />
                      <Text weight={500} className='align-left text-gray-400 pl-[5px]'>Open AI /</Text>
                      <Text weight={500} className='align-left pl-[5px]'>gpt-3.5-turbo</Text>
                    </Group>
                  </Card.Section>

                  <Card.Section inheritPadding mt="sm" pb="xs">
                    <SimpleGrid>
                      <Input.Description className='text-justify'>OpenAI's most capable and cost effective model in the GPT-3.5 family optimized for chat
                        purposes,but also works well for traditional complaints tasks.</Input.Description>
                      <br />
                    </SimpleGrid>
                  </Card.Section>
                  <SimpleGrid cols={2}>
                    <Text color="black" className='font-bold text-justify'>
                      Context
                    </Text>
                    <Text color="black" className='items-left pr-20 text-justify'>
                      4,096 tokens
                    </Text>
                  </SimpleGrid>
                  <Card.Section withBorder inheritPadding mt="sm" pb="xs" pt="xs">
                    <SimpleGrid cols={2}>
                      <Text color="black" className='font-bold text-justify'>
                        Input Pricing
                      </Text>
                      <Text color="black" className='items-left pr-15 text-justify'>
                        $1.50 / millions tokens
                      </Text>
                    </SimpleGrid>
                  </Card.Section>
                  <Card.Section inheritPadding mt="sm" pb="xl">
                    <SimpleGrid cols={2}>
                      <Text color="black" className='font-bold text-justify'>
                        Output Pricing
                      </Text>
                      <Text color="black" className='items-left pr-15 text-justify'>
                        $2.00 / millions tokens
                      </Text>
                    </SimpleGrid>
                  </Card.Section>
                  <br />
                  <br />
                  <br />
                  <Card.Section withBorder inheritPadding mt="[0]" className='bg-gray-200 pt-2 pb-2'>
                    <Group position="apart">
                      <Group >
                        <Button className='text-black'>Modal Page
                          <RiShareBoxLine color="black" />
                        </Button>
                        <Button className='text-black'>Pricing
                          <RiShareBoxLine color="black" />
                        </Button>
                      </Group>
                      <Group>
                        <Button className='text-black pl-[70px]'>Website
                          <RiShareBoxLine color="black" />
                        </Button>
                      </Group>
                    </Group>

                  </Card.Section>
                </Card>
              </Box>
            </ScrollArea>
            <Paper shadow="xs" p="md" className='rounded-none'>
              <Container size="lg" className='h-[100%] w-[100%] px-[10.5px]'>

                <Textarea
                  className='w-full h-full-[100%]'
                  placeholder="send a message"
                  variant="filled"
                  withAsterisk
                  autosize
                  minRows={2}
                  maxRows={4}
                  rightSection={
                    <>
                      <Button size="xs" rightIcon={<BsArrowRightCircle />} className="absolute top-7 right-3 px-2  py-1 bg-white text-gray-500 rounded">
                        Send
                      </Button>
                    </>
                  }
                />
              </Container>
            </Paper>
          </div>
        </div>

      </AppShell>

    </main>
  )
}
