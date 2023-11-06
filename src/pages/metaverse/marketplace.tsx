/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef, ReactNode, useState } from 'react';
import { styled } from '@mui/material/styles';
import MarketPlaceGridItem from 'src/components/metaverse/marketplace/MarketplaceGridItem';
import { Icon } from '@iconify/react';
import { Container, Typography, Stack, Button, Grid, InputAdornment, TextField } from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';


// components

const CustomText = styled('div')({
    color: 'white',
    fontSize: '12px'
})

const CategoryButton = styled('div')(({ ...props }) => {
    return {
        background: props.bg,
        color: props.color,
        borderRadius: '10px',
        padding: '8px 14px',
        width: '120px',
        textAlign: 'center',
        fontSize: '12px',
        '@media (max-width:700px)': {
            fontSize: '13px',
        },
    };
});

MetaverseMarketPlace.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------
const labels = [
    'All Categories',
    'Games',
    'Gambling',
    'Social',
    'Collectibles',
    'Marketplace',
    'Real Estate',
];

export default function MetaverseMarketPlace() {
    const [category, setCategory] = useState(0);
    return (
        <>
            <Head>
                <title> Metaverse Marketplace </title>
            </Head>
            <Stack sx={{
                width: '100%', boxShadow: '0px 6px 12px 0px #00000033',
                background: '#202324', padding: '0px 32px 32px 32px'
            }}>
                <Stack direction="column" gap={4}>
                    <Grid container spacing={2} style={{ position: 'relative', zIndex: '2', width: 'full' }}>
                        {labels.map((x, index) => (
                            <Grid item md={3} lg={1.5}>
                                <CategoryButton
                                    bg={`${category === index ? '#d96bff' : 'black'}`}
                                    color={`${category === index ? '#black' : 'white'}`}
                                >
                                    {x}
                                </CategoryButton>
                            </Grid>
                        ))}
                        <Grid item sm={1.5}>
                            <CategoryButton
                                bg={`black`}
                                color={'white'}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                More
                                <Icon icon="mingcute:down-line" color="white" />
                            </CategoryButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4} md={2}>
                            <TextField
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Icon icon="ion:filter" color="gray" />
                                        </InputAdornment>
                                    ),
                                    style: { color: 'white' },
                                }}
                                placeholder="Filter"
                                style={{
                                    color: 'white',
                                    borderRadius: '15px',
                                    padding: '5px 10px 5px 10px',
                                    background: '#191919',
                                    width: '100%',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <TextField
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Icon icon="iconamoon:search-light" color="gray" />
                                        </InputAdornment>
                                    ),
                                    style: { color: 'white' },
                                }}
                                placeholder="Search Metaverse"
                                style={{
                                    color: 'white',
                                    borderRadius: '15px',
                                    padding: '5px 10px 5px 10px',
                                    background: '#191919',
                                    width: '100%',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Icon icon="mingcute:down-fill" />
                                        </InputAdornment>
                                    ),
                                    style: { color: 'white' },
                                }}
                                placeholder="Newly Listed"
                                style={{
                                    color: 'white',
                                    borderRadius: '15px',
                                    padding: '5px 10px 5px 10px',
                                    background: '#191919',
                                    width: '100%',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Icon icon="mingcute:down-fill" />
                                        </InputAdornment>
                                    ),
                                    style: { color: 'white' },
                                }}
                                placeholder="All Chains"
                                style={{
                                    color: 'white',
                                    borderRadius: '15px',
                                    padding: '5px 10px 5px 10px',
                                    background: '#191919',
                                    width: '100%',
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Stack direction='row' flexWrap='wrap' justifyContent='space-between' alignItems='center' gap="36px">
                        <Stack direction='row' alignItems='center'>
                            <Icon icon="noto:fire" color="gray" width="24" height="24" />
                            <Typography color='white' fontSize={32} fontWeight={600}>Metaverse Marketplace</Typography>
                        </Stack>
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '32px', borderRadius: '18px',
                            border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 24px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', padding: '10px' }}>
                                <Icon icon="ep:refresh" color="#3dfff3" />
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <CustomText>1m</CustomText>
                                    <CustomText>5m</CustomText>
                                    <CustomText>15m</CustomText>
                                    <CustomText>30m</CustomText>
                                    <CustomText>1h</CustomText>
                                    <CustomText>12h</CustomText>
                                    <CustomText>1d</CustomText>
                                </div>
                            </div>
                        </div>
                    </Stack>
                    <Stack direction='row' color='white' justifyContent='space-evenly' flexWrap='wrap' gap='16px'>
                        <Stack direction='row' sx={{ padding: '24px', background: '#2B2E31', borderRadius: '16px', border: '1px #4A4D52 solid' }}>
                            <Stack direction='column'>
                                <Stack direction='row'>
                                    <Typography>Market Cap</Typography>
                                    <Icon icon="carbon:information" color="gray" width="16" height="16" />
                                </Stack>
                                <Typography>$346,789,356,231.00</Typography>
                                <Typography color='green'>+34%</Typography>
                            </Stack>
                            <Image src='/assets/images/metaverse/graph1.png' alt='graph1' width={180} height={80} />
                        </Stack>
                        <Stack direction='row' sx={{ padding: '24px', background: '#2B2E31', borderRadius: '16px', border: '1px #4A4D52 solid' }}>
                            <Stack direction='column'>
                                <Stack direction='row'>
                                    <Typography>Sales Volume</Typography>
                                    <Icon icon="carbon:information" color="gray" width="16" height="16" />
                                </Stack>
                                <Typography>$346,789,356,231.00</Typography>
                                <Typography color='green'>+34%</Typography>
                            </Stack>
                            <Image src='/assets/images/metaverse/graph1.png' alt='graph1' width={180} height={80} />
                        </Stack>
                        <Stack direction='row' sx={{ padding: '24px', background: '#2B2E31', borderRadius: '16px', border: '1px #4A4D52 solid' }}>
                            <Stack direction='column'>
                                <Stack direction='row'>
                                    <Typography>Total Sales</Typography>
                                    <Icon icon="carbon:information" color="gray" width="16" height="16" />
                                </Stack>
                                <Typography>$346,789,356,231.00</Typography>
                                <Typography color='red'>+34%</Typography>
                            </Stack>
                            <Image src='/assets/images/metaverse/graph2.png' alt='graph1' width={180} height={80} />
                        </Stack>
                    </Stack>
                    <MarketPlaceGridItem />
                </Stack>
            </Stack>
        </>)
}
