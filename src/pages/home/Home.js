import React from 'react'
import { Card, Col, Row, Timeline } from 'antd';

import './Home.css';


function Home() {
  return (
    <div className={'home-body'}>
      <div style={{ height: '65vh' }}>
        <div className={'container'}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Orgagrowth token: the only way to prevent dumping</p>
          </div>
        </div>
      </div>
      <div style={{ minHeight: '65vh', backgroundColor: 'white', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 -3px 6px rgba(0,0,0,0.23)' }}>
        <div className={'container'}>
          <div style={{ width: '100%', height: '100%', padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>TOKENOMICS</h1>
            <div style={{ marginTop: '50px' }}>
              <Row gutter={16}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ margin: '10px 0' }}>
                  <Card title="Total supply" style={{ height: '100%' }}>
                    Volume de token XX% Burnt
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ margin: '10px 0' }}>
                  <Card title="LP Burn" style={{ height: '100%' }}>
                    Volume de token XX% Burnt
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ margin: '10px 0' }}>
                  <Card title="Autostacking" style={{ height: '100%' }}>
                    4% REDISTRIBUTED TO ALL HOLDERS
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ margin: '10px 0' }}>
                  <Card title="REINVESTED" style={{ height: '100%' }}>
                    2% reinvested for founding team and marketing
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div style={{ minHeight: '65vh' }}>
        <div className={'container'}>
          <div style={{ width: '100%', height: '100%', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', color: 'white' }}>Roadmap</h1>
            <div style={{ marginTop: '50px' }}>
              <Row gutter={16}>
                <Col xs={12} sm={12} md={8} lg={8} xl={8} style={{ margin: '10px 0' }}>
                  <Card title="Meristematic phase" style={{ height: '100%' }}>
                    <Timeline>
                      <Timeline.Item>Contract creation</Timeline.Item>
                      <Timeline.Item>Website launch</Timeline.Item>
                      <Timeline.Item>Pancake swap listing</Timeline.Item>
                      <Timeline.Item>Community building</Timeline.Item>
                      <Timeline.Item>Initial marketing campaign</Timeline.Item>
                      <Timeline.Item>Coingecko listing</Timeline.Item>
                      <Timeline.Item>Coinmarketcap listing</Timeline.Item>
                      <Timeline.Item>First audit by techrate.org</Timeline.Item>
                      <Timeline.Item>Community building</Timeline.Item>
                    </Timeline>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} xl={8} style={{ margin: '10px 0' }}>
                  <Card title="Elongation phase" style={{ height: '100%' }}>
                    <Timeline>
                      <Timeline.Item>Hotbit listing</Timeline.Item>
                      <Timeline.Item>Giveaways / NFT airdrop</Timeline.Item>
                      <Timeline.Item>AMA's</Timeline.Item>
                      <Timeline.Item>Increase marketing</Timeline.Item>
                      <Timeline.Item>Gate I.O listing</Timeline.Item>
                      <Timeline.Item>Blockfolio listing</Timeline.Item>
                      <Timeline.Item>Second audit by solidity</Timeline.Item>
                      <Timeline.Item>Creating rare NFT's</Timeline.Item>
                    </Timeline>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} xl={8} style={{ margin: '10px 0' }}>
                  <Card title="Maturation" style={{ height: '100%' }}>
                    <Timeline>
                      <Timeline.Item>Partnership</Timeline.Item>
                      <Timeline.Item>Merch</Timeline.Item>
                      <Timeline.Item>Charity events</Timeline.Item>
                      <Timeline.Item>New exchange listing</Timeline.Item>
                      <Timeline.Item>Further development</Timeline.Item>
                    </Timeline>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div style={{ minHeight: '65vh', backgroundColor: 'white', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 -3px 6px rgba(0,0,0,0.23)' }}>
        <div className={'container'}>
          <div style={{ width: '100%', height: '100%', padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>White paper</h1>
            <div style={{ marginTop: '50px' }}>
              <p>After several attempts to understand how to avoid whales, we definitely conclude that having a token with an Organic Growth was the solution. Indeed, Organic Growth is typically marked by an increase in output, greater efficiency and improved cash flow. It is critical for the success of a token project Primary Strategies for OrgaGrowth Token $OGT There are three primary strategies that OrgaGrowth Token $OGT will pursue in order to facilitate organic growth: 1. Continual optimization of services and marketing during the Meristematic phase 2. Reallocating funds into activities – marketing - collaborations - advertisements - during the Elongation phase 3. Developing new models for creating and developing new services during the ultimate Maturation phase Most Token chooses to focus on one of the core strategies mentioned above to fuel organic growth, as pursuing more than one can make it less clear what actions within a strategy are working and which aren’t. Also, as growth typically requires significant expenditures, it may be difficult for a team to fund more than one growth strategy at a time. That's why we decided to dedicate a wallet for those actions The core strategic concept behind OrgaGrowth is pretty straight forward, the $OGT will create optimal growth by taking 3% of the 6% redistribution (reflection) and funneling it to the locked wallet. This wallet will be able to receive funds and reflection, but withdrawals cannot be taken during the lock period (to be defined). The goal is to prevent short selling for individual owners, to force savings, and to pass the wallets on to the next generation (seedling). The lock can be renewed at the end of every term. This locked wallet use will not be available until $OGT has entered an Elongation phase. Elongation will be established after a successful launch, stable Meristematic phase, and enough capital is generated to execute the use. A well-rounded token like OrgaGrowth Token $OGT will likely adopt or practice all the strategies at some point. This will help us, the seedling, to be able to have more resources at our disposal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
