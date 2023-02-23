import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import { ArrowUpwardSharp, ArrowDownwardSharp, ShoppingCart } from '@material-ui/icons';
import styled from 'styled-components';
import DiscordIcon from '../../../assets/img/discord.svg';
import DocIcon from '../../../assets/img/document.svg';

const BoardroomNews: React.FC<any> = () => {
  return (
    <>
      <Grid container spacing={3} style={{ padding: '20px 8% 40px 8%' }}>
        <Grid item xs={12} sm={8} style={{ marginBottom: '20px' }}>
          <Box p={2} style={{ textAlign: 'center' }}>
            <a
              href="https://docs.bomb.money/"
              style={{ float: 'right', color: '#9EE6FF', textDecoration: 'underline', marginBottom: '10px' }}
            >
              Read Investement Strategy &gt;
            </a>
            {/* Read Investement Strategy button */}
            <Button
              href="https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0x531780FAcE85306877D7e1F05d713D1B50a37F7A"
              style={{
                color: 'white',
                background:
                  'radial-gradient(59345.13% 4094144349.28% at 39511.5% -2722397851.45%, rgba(27, 32, 56, 255) 0%, rgba(0, 180, 240, 0.5) 100%)',
                width: '100%',
                marginBottom: '17px'
                ,border: '2px solid'
              }}
            >
              <strong>Invest Now</strong>
            </Button>
            {/* discord button */}
            <Button
              href="https://discord.bomb.money"
              style={{color: 'black',background: 'rgba(255, 255, 255, 0.5)',width: '45%',marginRight: '2%',border: '2px solid'}}
            >
              <img alt="discord icon" style={{ width: '20px', marginRight: '5px' }} src={DiscordIcon} />
              <strong>Chat on Discord</strong>
            </Button>
            {/* Docs button */}
            <Button
              href="https://docs.bomb.money/"
              style={{ color: 'black', background: 'rgba(255, 255, 255, 0.5)', width: '45%',border: '2px solid' }}
            >
              <img alt="doc icon" style={{ width: '20px', marginRight: '5px' }} src={DocIcon} />
              <strong>Read Docs</strong>
            </Button>
          </Box>
        </Grid>
        {/* Latest News grid item*/}
        <Grid item xs={12} sm={4} style={{ marginBottom: '20px' }}>
          <Paper style={{ background: 'rgba(30, 32, 60, 0.5)', height: '420px', borderRadius: 5, borderColor: "#728CDF", padding: 5}} variant="outlined">
            <Box p={4} style={{ textAlign: 'left' }}>
              {/* latest news items can be imported here and used using auto scroll */}
              <h3 style={{ color: 'white', textTransform: 'capitalize'}}>Latest News</h3>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}; 
export default BoardroomNews;
