import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import useBombFinance from '../../../hooks/useBombFinance';
import styled from 'styled-components';
import DepositImage from '../../../assets/img/arrow-down-circle.svg';
import WithdrawImage from '../../../assets/img/arrow-up-circle.svg';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import useRedeemOnBoardroom from '../../../hooks/useRedeemOnBoardroom';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';
import useApprove, { ApprovalState } from '../../../hooks/useApprove'; //, {ApprovalState}
import useBombStats from '../../../hooks/useBombStats';
import useWithdrawCheck from '../../../hooks/boardroom/useWithdrawCheck';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import { roundAndFormatNumber } from '../../../0x';
import DiscordIcon from '../../../assets/img/discord.svg';
import DocIcon from '../../../assets/img/document.svg';
import BombImage from '../../../assets/img/bomb.png';
import BShareImage from '../../../assets/img/bshare-512.png';

const BoardroomNews: React.FC<any> = () => {
  // Stake share details stored in const
  const bombStats = useBombStats();
  const bombFinance = useBombFinance();
  const [boardroomTVL, setBoardroomTVL] = useState(0);
  useEffect(() => {
    const TVLcalc = async () => {
      const BSHAREPrice = (await bombFinance.getShareStat()).priceInDollars;
      const boardroomtShareBalanceOf = await bombFinance.BSHARE.balanceOf(bombFinance.currentBoardroom().address);
      setBoardroomTVL(
        Number(getDisplayBalance(boardroomtShareBalanceOf, bombFinance.BSHARE.decimal)) * Number(BSHAREPrice),
      );
    };
    TVLcalc();
  }, [bombFinance]);

  const stakedBalance = useStakedBalanceOnBoardroom();
  const totalStaked = useTotalStakedOnBoardroom();
  const earning = useEarningsOnBoardroom();
  const { onRedeem } = useRedeemOnBoardroom();
  const { onReward } = useHarvestFromBoardroom();
  const [approveStatus, approve] = useApprove(bombFinance.BSHARE, bombFinance.contracts.Boardroom.address);
  const tokenPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );

  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earning))).toFixed(2);

  //All values of Token stored
  const values = {
    heading: 'Boardroom',
    icon: 'BSHARE',
    message: 'Stake BSHARE and earn BOMB every epoch',
    bg: true,
    approve: approveStatus !== ApprovalState.NOT_APPROVED,
    tvl: roundAndFormatNumber(boardroomTVL, 2),
    totalstaked: getDisplayBalance(totalStaked),
    yourstakeInDollars: earnedInDollars,
    yourstake: getDisplayBalance(stakedBalance),
    returns: roundAndFormatNumber(useFetchBoardroomAPR() / 365, 2),
    earned: getDisplayBalance(earning),
    deposit: approve,
    withdraw: onRedeem,
    claimrewards: onReward,
  };

  const canWithdraw = useWithdrawCheck();
  const canClaimReward = useClaimRewardCheck();
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
                marginBottom: '17px',
                border: '2px solid',
              }}
            >
              <strong>Invest Now</strong>
            </Button>
            {/* discord button */}
            <Button
              href="https://discord.bomb.money"
              style={{ color: 'white', background: 'rgba(255, 255, 255, 0.5)', width: '45%', border: '1px solid', marginRight: '25px' }}
            >
              <img alt="discord icon" style={{ width: '20px', marginRight: '5px' }} src={DiscordIcon} />
              <strong>Chat on Discord</strong>
            </Button>
            {/* Docs button */}
            <Button
              href="https://docs.bomb.money/"
              style={{ color: 'white', background: 'rgba(255, 255, 255, 0.5)', width: '45%', border: '1px solid' , marginLeft: '25px' }}
            >
              <img alt="doc icon" style={{ width: '20px', marginRight: '5px' }} src={DocIcon} />
              <strong>Read Docs</strong>
            </Button>
          </Box>
            <Paper
            style={{
              background: 'rgba(30, 32, 60, 0.5)',
              height: '300px',
              borderRadius: 5,
              borderColor: '#728CDF',
              padding: 5,
            }}
            variant="outlined"
          >
              <Box p={4} style={{ textAlign: 'left' }}>
                <img alt="b share" style={{ width: '50px', float: 'left', marginRight: '10px' }} src={BShareImage} />
                <h3 style={{ color: 'white' }}>
                  BoardRoom
                  <span
                    style={{
                      color: 'white',
                      fontSize: '0.7rem',
                      padding: '3px',
                      borderRadius: '3px',
                      marginLeft: '20px',
                      verticalAlign: 'center',
                      backgroundColor: 'rgba(0, 232, 162, 0.5)',
                    }}
                  >
                    Recommended
                  </span>
                </h3>
                <p>
                  Stake BSHARE and earn BOMB every epoch
                  <span style={{ float: 'right' }}>
                    TVL: <strong>$ {values.tvl}</strong>
                  </span>
                </p>
                {/* Boardroom bshare details and deposit section */}
                <hr style={{ border: '0.5px solid rgba(199, 195, 200, 0.8)' }} />
                <p style={{ float: 'right' }}>
                  Total Staked:
                  <img alt="b share" style={{ width: '13px', margin: '0 5px' }} src={BShareImage} />
                  <strong>{values.totalstaked}</strong>
                </p>
              </Box>
              <Grid container spacing={4} style={{ textAlign: 'center' }}>
                <Grid item xs={3} style={{ padding: '0' }}>
                  Daily returns:
                  <Typography style={{ fontSize: '2rem' }}>{values.returns}%</Typography>{' '}
                </Grid>
                <Grid item xs={2} style={{ padding: '0', textAlign: 'left' }}>
                  Your Stake:
                  <p>
                    <img alt="b share" style={{ width: '20px' }} src={BShareImage} />
                    {values.yourstake}
                  </p>
                  <p>≈ ${values.yourstakeInDollars}</p>
                </Grid>
                <Grid item xs={2} style={{ padding: '0', textAlign: 'left' }}>
                  Earned:
                  <p>
                    <img alt="bomb" style={{ width: '20px' }} src={BombImage} />
                    {values.earned}
                  </p>
                  <p>≈ $ {values.earned}</p>
                </Grid>
                <Grid item xs={5} style={{ padding: '0' }}>
                  <Box style={{ textAlign: 'center', padding: '10px' }}>
                    <StyledButton
                      disabled={values.approve}
                      onClick={() => {
                        values.deposit();
                      }}
                      style={{ width: '45%', border: 'solid 2px', borderRadius: '20px', marginRight: '10px' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}
                      >
                        <div>Deposit</div>
                        <div>
                          <img alt="deposit icon" style={{ width: '20px' }} src={DepositImage} />
                        </div>
                      </div>
                    </StyledButton>

                    <StyledButton
                      disabled={Number(values.yourstake) === 0 || (!canWithdraw && !canClaimReward)}
                      onClick={() => {
                        values.withdraw();
                      }}
                      style={{ width: '45%', border: 'solid 2px', borderRadius: '20px', marginRight: '10px' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}
                      >
                        <div>Withdraw</div>
                        <div>
                          <img alt="Withdraw icon" style={{ width: '20px' }} src={WithdrawImage} />
                        </div>
                      </div>
                    </StyledButton>
                    <StyledButton
                      onClick={() => {
                        values.claimrewards();
                      }}
                      disabled={Number(values.earned) === 0 || !canClaimReward} // disable button if claim isn't possible
                      style={{
                        width: '90%',
                        border: 'solid 2px',
                        borderRadius: '20px',
                        marginTop: '10px',
                        marginRight: '10px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}
                      >
                        <div>Claim Rewards</div>
                        <div>
                          <img alt="b share" style={{ width: '20px' }} src={BShareImage} />
                        </div>
                      </div>
                    </StyledButton>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
        </Grid>
        {/* Latest News grid item*/}
        <Grid item xs={12} sm={4} style={{ marginBottom: '20px' }}>
          <Paper
            style={{
              background: 'rgba(30, 32, 60, 0.5)',
              height: '455px',
              borderRadius: 5,
              borderColor: '#728CDF',
              padding: 5,
            }}
            variant="outlined"
          >
            <Box p={4} style={{ textAlign: 'left' }}>
              {/* latest news items can be imported here and used using auto scroll */}
              <h3 style={{ color: 'white', textTransform: 'capitalize' }}>Latest News</h3>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
const StyledButton = styled.button`
  background: transparent;

  border: 2px solid currentColor;
  color: ${(p) => (p.disabled ? '#FFFFFF80' : '#FFFFFF')};
  border-radius: 15px;
  margin-right: 15px;
  padding: 5px;
  margin: 0 auto;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${(p) => (p.disabled ? 'transparent' : '#FFFFFF')};
    color: ${(p) => (p.disabled ? '#FFFFFF80' : 'black')};
  }
`;
export default BoardroomNews;
