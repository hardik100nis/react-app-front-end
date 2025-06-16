import './Waifnomics.scss'
import { Container, Image } from 'react-bootstrap'
import WaifunomicsCoinImg from "assets/images/waifunomicscoin.png"
import TeacherImg from 'assets/images/Teacher.png'
import CoinsBottomImg from 'assets/images/CoinsBottom.png'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import Deco1Img from "assets/images/deco1.png"
import ChartMarketingImg from "assets/images/ChartMarketing.png"
import ChartTeamImg from "assets/images/ChartTeam.png"
import ChartPresaleImg from "assets/images/ChartPresale.png"
import ChartStakingImg from "assets/images/ChartStaking.png"
import ChartLpImg from "assets/images/ChartLp.png"
import Line1 from "assets/images/line1.png"
import Line2 from "assets/images/line2.png"
import Line3 from "assets/images/line3.png"
import WhalesImg from "assets/images/whale.png"
import { useMediaQuery } from '@uidotdev/usehooks'

const TokenInfoTable = () => {
  const tokenInfo = [{ h: 'name', d: 'hashlordz' }, { h: 'ticker', d: '$hashlordz' }, { h: 'token chain', d: 'sonic' }, { h: 'total supply', d: '1 billion' }, { h: 'team', d: 'hashlordz, sonic' }]
  return (
    <table className="token-info-table">
      <tbody>
        {
          tokenInfo.map(info => (
            <tr key={info.h}>
              <th>{info.h}</th>
              <td>{info.d}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

const SupplyDistributtion = () => {
  const isMobile = useMediaQuery("only screen and (max-width: 480px)");
  const data = [
    { title: 'Presale', value: 30, color: '#f30076' },
    { title: 'LP', value: 30, color: '#ff2f92' },
    { title: 'NFT staking', value: 10, color: '#ff6db3' },
    { title: 'Marketing', value: 15, color: '#ffa3cf' },
    { title: 'Team', value: 15, color: '#ffd1e7' },
  ]

  const TeamComp = () => {
    return (
      <div className="chart-comp-container team">
        <div className="team-comp">
          <p className="locked">Locked for a period of 3 months</p>
          <Image src={Deco1Img} id="deco" />
          <div className="info">
            <p>team</p>
            <p>15%</p>
          </div>
          <Image src={ChartTeamImg} className="line" />
        </div>
      </div>
    )
  }

  const PresaleComp = () => {
    return (
      <div className="chart-comp-container presale">
        <div className="presale-comps">
          <Image src={ChartPresaleImg} className="line" />
          <div className="info">
            <p>presale</p>
            <p>30%</p>
          </div>
        </div>
      </div>
    )
  }

  const LPComp = () => {
    return (
      <div className="chart-comp-container lp">
        <div className="lp-comps">
          <Image src={ChartLpImg} className="line" />
          <div className="info">
            <p>LP</p>
            <p>30%</p>
          </div>
        </div>
      </div>
    )
  }

  const StakingComp = () => {
    return (
      <div className="chart-comp-container staking">
        <div className="staking-comp">
          <div className="info">
            <p>nft staking</p>
            <p>10%</p>
          </div>
          <Image src={ChartStakingImg} className="line" />
        </div>
      </div>
    )
  }

  const MarketingComp = () => {
    return (
      <div className="chart-comp-container marketing">
        <div className="marketing-comp">
          <div className="info">
            <p>marketing</p>
            <p>15%</p>
          </div>
          <Image src={ChartMarketingImg} className="line" />
        </div>
      </div>
    )
  }

  return (
    <div className='supply-distribution'>
      <h3>$hashlordz supply distribution</h3>
      <div className='chart-container'>
        {
          isMobile ? null :
            <>
              <TeamComp />
              <PresaleComp />
              <LPComp />
              <StakingComp />
              <MarketingComp />
            </>
        }
        <Doughnut
          data={{
            datasets: [{
              data: data.map(d => d.value),
              backgroundColor: data.map(d => d.color)
            }],
            labels: isMobile ? data.map(d => `${d.title} ${d.value}%`) : null,
          }}
          options={{
            elements: {
              arc: {
                borderColor: '#000',
                borderWidth: 4
              },

            },
            plugins: {
              tooltip: {
                enabled: false
              },
              legend: {
                labels: {
                  color: 'white'
                }
              }
            }
          }}
          className="piechart"
        />
      </div>
      {
        isMobile ?
          <h6>The 15% team supply is locked for a period of 3 months with monthly redemptions</h6>
          :
          null
      }
    </div>
  )
}

const Presale = () => {
  const tokenInfo = [
    { h: 'TOKEN PRE-SALE POOL (%)', d: '3BN (30%)' },
    { h: 'INITIAL OFFERING MARKET CAP', d: 'BASED ON DEMAND' },
    { h: 'MIN $CRO INVESTMENT', d: '200 $CRO' },
    { h: 'MAX $CRO PER WALLET', d: 'USD 20K (IN $CRO EQUIVALENT)' },
    { h: 'START DATE', d: 'Nov 20th, 3:00PM CET' },
    { h: 'END DATE', d: 'Nov 22nd, 3:00PM CET' },
    { h: 'CLAIM DATE', d: 'Nov 22nd, 4:00PM CET' },
    { h: 'USE OF PROCEEDS', d: '60% LIQUIDITY POOL, 20% MARKETING, 20% TEAM' }
  ]

  return (
    <table className="token-info-table">
      <tbody>
        {
          tokenInfo.map(info => (
            <tr key={info.h}>
              <th>{info.h}</th>
              <td>{info.d}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

const Earn = () => {
  const tokenInfo = [
    { h: 'HOW TO EARN $HASHLORDZ', d: "STAKE ELIGIBLE NFTS (CHECK ELIGIBLE COLLECTIONS <a href='https://hashlordz.com/earn' target='_self'>here</a>)" },
    { h: 'TOKEN STAKING POOL (%)', d: '$1BN (10%)' },
    { h: 'DAILY DISTRIBUTION TO THE NFT POOL', d: '2,739,726 $ HASHLORDZ EACH DAY' },
    { h: 'STAKING OPENING', d: 'ONE WEEK FROM THE PRE-SALE DATE' }
  ];

  return (
    <table className="token-info-table">
      <tbody>
        {
          tokenInfo.map(info => (
            <tr key={info.h}>
              <th>{info.h}</th>
              <td>
                <div
                  dangerouslySetInnerHTML={{ __html: info.d }}
                />
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

const TaxStructure = () => {
  return (
    <div className='tax-structure'>
      <table>
        <tbody>
          <tr>
            <th rowSpan={3}><span>3%</span><br />tax</th>
            <td><div>* Liquidity Pool (LP) Contribution: <span>1%</span> per transaction
              <Image src={Line1} /></div></td>
          </tr>
          <tr>
            <td><div>* Deflationary Burn Contribution: <span>1%</span> per transaction is sent to an orphan wallet, decreasing the circulating supply on each tx
              <Image src={Line2} /></div>
            </td>
          </tr>
          <tr>
            <td><div>* Marketing Fee: <span>1%</span> per transaction is allocated to a host wallet for marketing purposes
              <Image src={Line3} /></div>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className='note'>NOTE: tax fees are collected before purchases (front-run) to avoid negative market impact. Collected fees are automatically converted to $CRO for direct marketing expenditures.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const AntiWhales = () => {
  return (
    <>
      <div className='anti-whales'>
        <Image src={WhalesImg} alt="whale" id="whale" />
        <div className="contents">
          <div className="paragraph">
            <p className="text"><span>BUY Limits:</span> a single "BUY" transaction cannot exceed <span>5.0%</span> of the total supply</p>
            <Image src={Line1} alt="line" />
          </div>
          <div className="paragraph">
            <p className="text"><span>SELL Limits:</span> a single "SELL" transaction cannot exceed <span>2.0%</span> of the total supply</p>
            <Image src={Line2} alt="line" />
          </div>
          <div className="paragraph">
            <p className="text"><span>MAX wallet Size:</span> the holding amount of any wallet cannot exceed <span>7.5%</span> of the total supply</p>
            <Image src={Line3} alt="line" />
          </div>
        </div>
      </div>
      <div className='anti-whales-note'>
          Note: the above safeguard measures apply only on secondary trading (post presale). During presale, a cap per wallet of USD 20K (in $CRO equivalent) will apply
      </div>
    </>
  )
}

export default function Waifunomics() {

  const tabs = [
    { text: 'token info', value: 'info' },
    { text: 'supply allocation', value: 'supply' },
    { text: 'presale', value: 'presale' },
    { text: 'earn $hashlordz', value: 'earn' },
    { text: 'tax structure', value: 'tax' },
    { text: 'anti-whales measures', value: 'antiwhales' }
  ]

  const [tabIndex, setTabIndex] = useState('info')
  return (
    <div className="waifunomics">
      <Container>
        <Image src={WaifunomicsCoinImg} className='coin' />
        <h2><span>HASHLORDZ</span>NOMICS</h2>
        <div className="tabs-container">
          <div className="tabs">
            {
              tabs.map(tab => (
                <button
                  className={tab.value === tabIndex ? 'active' : ''}
                  onClick={() => setTabIndex(tab.value)}
                  key={tab.value}
                >
                  {tab.text}
                </button>
              ))
            }
          </div>
          <Image src={TeacherImg} className="teacher" />
        </div>
        {
          tabIndex === 'info' &&
          <TokenInfoTable />
        }
        {
          tabIndex === 'supply' &&
          <SupplyDistributtion />
        }
        {
          tabIndex === 'presale' &&
          <Presale />
        }
        {
          tabIndex === 'earn' &&
          <Earn />
        }
        {
          tabIndex === 'tax' &&
          <TaxStructure />
        }
        {
          tabIndex === 'antiwhales' &&
          <AntiWhales />
        }
      </Container>
      <Image src={CoinsBottomImg} className='coins-bottom' />
    </div>
  )
}
