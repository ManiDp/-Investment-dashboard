import React from 'react'
import { Button, Row,Col ,Image} from 'react-bootstrap'
import discord from './discord.jpg'
import docs from './docs.jpg'
import bshares from './bshares.png'
import './style.css'
function Strategy() {
  return (
    <div className='main3'>
        <div className='instruction'>
            Read Investment strategy{' >'} 
        </div>
        <div className='d-grid gap-2'>
            <Button  className='button'>Invest Now</Button>
        </div>
        <Row>
            <Col>
            <div className='d-grid gap-2'>
                <Button  className='chatbutton'>
                <Image style={{height:"28px",margin:"0px 5px", borderRadius:"50%", backgroundColor:"white"}} src={discord} />
                    Chat on Discord
                </Button>
            </div>
            </Col>
            <Col>
            <div className='d-grid gap-2'>
                <Button  className='chatbutton'>
                <Image style={{height:"28px",margin:"0px 5px", objectFit:"fit", borderRadius:"50%", backgroundColor:"white"}} src={docs} />
                    Read Docs
                </Button>
            </div>
            </Col>
        </Row>
        <div className='card'>
            <Row>
                <Col xs={1}>
                <img style={{height:"50px", borderRadius:"50%" }} src={bshares} />
                </Col>
                <Col xs={7}>
                        <div className='boardroom'>BoardRoom</div>
                        <div className='stake'>Stake BSHARE and earn BOMB everywhere</div>
                </Col>
                <Col xs={4} className='totalstakes'>
                    <div></div><br/>
                    <div className='tvl'>TVL : $1,008,430</div>
                </Col>
            </Row>
            <hr style={{margin:"10px"}}/>
            <Row className='totalstakes'>
            <div className='tvl'>Total Staked : {<img style={{height:"16px", borderRadius:"50%" }} src={bshares} />}7232</div>
            </Row>
            <Row style={{margin:"20px 0px"}}>
                <Col xs={3}>
                    <div className="heading">Daily returns</div>
                    <div className='value'>2%</div>
                </Col>
                <Col xs={2}>
                    <div className="heading">Your stake</div>
                    <div className='value2'>{<img style={{height:"16px", borderRadius:"50%" }} src={bshares} />}124.21</div>
                    <div className='value2'>≈1171.62</div>
                </Col>
                <Col xs={2}>
                    <div className="heading">Earned</div>
                    <div className='value2'>{<img style={{height:"16px", borderRadius:"50%" }} src={bshares} />}124.21</div>
                    <div className='value2'>≈1171.62</div>
                </Col>
                <Col xs={5} style={{textAlign:"end"}}>
                    <Button className='button2' >Deposit  
                        {
                         <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                         <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/></svg>
                        }
                    </Button>
                    <Button className='button2'>Withdraw
                    {
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    }
                    </Button>
                    <Button className='button2'>Clain Rewards {<Image style={{height:"18px", borderRadius:"50%", backgroundColor:"grey"}} src={bshares}/>}</Button>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Strategy