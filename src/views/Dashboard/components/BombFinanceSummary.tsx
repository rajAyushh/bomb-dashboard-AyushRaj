import React, { useMemo } from 'react';
import styled from 'styled-components';
import MetamaskFox from '../../../assets/img/metamask-fox.svg';
import { roundAndFormatNumber } from '../../../0x';
import BombImage from '../../../assets/img/bomb.png';
import BShareImage from '../../../assets/img/bshare-512.png';
import Bbond from '../../../assets/img/bbond-512.png';
import { Box, Button, Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';

const BombFinanceSummary: React.FC<any> = ({ bombFinance, details }) => {

  const { bomb, bshare, bbond } = details;
  //all details for subtable 1
  return (
    <>
        <Grid xs={12} style={{ marginBottom: '12px' }}>
          <Paper style={{ background: 'rgba(30, 32, 60, 0.5)', height: '400px', borderRadius: '2px' }}>
            {/* start of BombFinanceSummary table */}
            <div style={{ textAlign: 'center', paddingTop: '2px' }}>
              <p>Bomb Finance Summary</p>
              <hr style={{ border: '0.5px solid rgba(199, 195, 200, 0.75)', width: '95%' }} />
            </div>
            <Grid container spacing={2} style={{ textAlign: 'center', paddingTop: '15px' }}>
              <Grid item xs={5} style={{ textAlign: 'center', paddingLeft: '10px' }}>
                <Grid container style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={2}>
                    <span>Current Supply</span>
                  </Grid>
                  <Grid item xs={2}>
                    <span>Total Supply</span>
                  </Grid>
                  <Grid item xs={3}>
                    <span>Price</span>
                  </Grid>
                </Grid>
                <hr style={{ border: '0.5px solid rgba(195, 197, 203, 0.75)', marginLeft: '70px' }} />
                <Grid container style={{ textAlign: 'center' }}>
                  <Grid item xs={3}>
                    <img
                      alt="bomb"
                      style={{ width: '20px', float: 'left', marginRight: '3px', marginLeft: '10px' }}
                      src={BombImage}
                    />
                    $ BOMB
                  </Grid>
                  <Grid item xs={2}>
                    {roundAndFormatNumber(bomb.currentSupply/1000000, 2)}M
                  </Grid>
                  <Grid item xs={2}>
                    {roundAndFormatNumber(bomb.totalSupply/1000, 2)}k
                  </Grid>
                  <Grid item xs={4}>
                    <p style={{ padding: '0', margin: '0' }}>
                      ${roundAndFormatNumber(bomb.price.indollar, 2)}
                      <img
                        onClick={() => {
                          bombFinance.watchAssetInMetamask('BOMB');
                        }}
                        alt="metamaskFox"
                        style={{ width: '30px', float: 'right', paddingTop: '10px', cursor: 'pointer' }}
                        src={MetamaskFox}
                      />
                    </p>
                    <p style={{ padding: '0' }}>{roundAndFormatNumber(bomb.price.inbnb, 2)}BTCB</p>
                  </Grid>
                </Grid>
                <hr style={{ border: '0.5px solid rgba(195, 197, 203, 0.75)', marginLeft: '50px' }} />
                <Grid container style={{ textAlign: 'center' }}>
                  <Grid item xs={3}>
                    <img
                      alt="b share"
                      style={{ width: '20px', float: 'left', marginRight: '3px', marginLeft: '10px' }}
                      src={BShareImage}
                    />
                    $ BSHARE
                  </Grid>

                  <Grid item xs={2}>
                    {roundAndFormatNumber(bshare.currentSupply/1000, 2)}K
                  </Grid>
                  <Grid item xs={2}>
                    {roundAndFormatNumber(bshare.totalSupply/1000, 2)}m
                  </Grid>
                  <Grid item xs={4}>
                    <p style={{ padding: '0', margin: '0' }}>
                      ${roundAndFormatNumber(bshare.price.indollar, 2)}
                      <img
                        onClick={() => {
                          bombFinance.watchAssetInMetamask('BSHARE');
                        }}
                        alt="b share"
                        style={{ width: '30px', float: 'right', paddingTop: '10px', cursor: 'pointer' }}
                        src={MetamaskFox}
                      />
                    </p>
                    <p style={{ padding: '0' }}>{roundAndFormatNumber(bshare.price.inbnb, 2)}BTCB</p>
                  </Grid>
                </Grid>
                <hr style={{ border: '0.5px solid rgba(195, 197, 203, 0.75)', marginLeft: '50px' }} />
                <Grid container style={{ textAlign: 'center' }}>
                  <Grid item xs={3}>
                    <img
                      alt="b bond"
                      style={{ width: '20px', float: 'left', marginRight: '3px', marginLeft: '10px' }}
                      src={Bbond}
                    />
                    $ BBOND
                  </Grid>
                  <Grid item xs={2}>
                    {roundAndFormatNumber(bbond.currentSupply/1000, 2)}K
                  </Grid>
                  <Grid item xs={2}>
                    {roundAndFormatNumber(bbond.totalSupply/1000, 2)}k
                  </Grid>
                  <Grid item xs={4}>
                    <p style={{ padding: '0', margin: '0' }}>
                      ${roundAndFormatNumber(bbond.price.indollar, 2)}
                      <img
                        onClick={() => {
                          bombFinance.watchAssetInMetamask('BBOND');
                        }}
                        alt="metamask fox"
                        style={{ width: '30px', float: 'right', paddingTop: '10px', cursor: 'pointer' }}
                        src={MetamaskFox}
                      />
                    </p>
                    <p style={{ padding: '0' }}>{roundAndFormatNumber(bbond.price.inbnb, 2)}BTCB</p>
                  </Grid>
                </Grid>
                <hr style={{ border: '0.5px solid rgba(195, 197, 203, 0.75)', marginLeft: '50px' }} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    </>
  );
};
export default BombFinanceSummary;
