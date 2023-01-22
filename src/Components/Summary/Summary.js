import React from 'react'
import { Card, Col,Row } from 'react-bootstrap'
import './style.css'
import Table from 'react-bootstrap/Table';
import Image from "react-bootstrap/Image";
import Bomb from './bomb.png'
import Bshare from './bshares.png'
import fox from './fox.png'
const data=[
    {
        avatar: <Image style={{height:"28px", borderRadius:"50%", backgroundColor:"grey"}} src={Bomb} />,
        name:"$BOMB",
        currSupply:"8.66M",
        TotalSupply:"60.9K",
        Price:"$0.24 1.05BTCB",
        metamask:<Image style={{height:"28px"}} src={fox}/>

    },
    {
        avatar: <Image style={{height:"28px", borderRadius:"50%", backgroundColor:"grey"}} src={Bshare}/>,
        name:"$BSHARE",
        currSupply:"11.43K",
        TotalSupply:"8.46M",
        Price:"$300 13000BTCB",
        metamask:<Image style={{height:"28px"}} src={fox}/>
    },
    {
        avatar: <Image style={{height:"28px", borderRadius:"50%", backgroundColor:"grey"}} src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"/>,
        name:"$BBOND",
        currSupply:"20.00K",
        TotalSupply:"175K",
        Price:"$0.28 1.15BTCB",
        metamask:<Image style={{height:"28px"}} src={fox}/>
    }
]

function Summary() {
  return (
    <Card className="main">
        <h4 className='title'>Bomb Finance Summary</h4>
        <hr/>
        <Row>
            <Col>
            <Table  className='table'>
                <thead>
                    <tr>
                    <th>    </th>
                    <th>Current Supply</th>
                    <th>Total Supply</th>
                    <th>Price</th>
                    <th>     </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(info=>{
                        return(
                            <tr>
                                <td>{info.avatar} {info.name}</td>
                                <td>{info.currSupply}</td>
                                <td>{info.TotalSupply}</td>
                                <td>{info.Price}</td>
                                <td>{info.metamask}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            </Col>
            <Col>
                <Row>
                    <Col></Col>
                    <Col className='leftcol'>
                        <p className='epoch'>
                            Current Epoch
                            <span> <h3>258</h3></span>
                            <hr/>
                        </p>
                        <p className='epoch2'>
                            
                            <span>03:38:36</span><br/>
                            Next epoch in
                            <hr/>
                        </p>
                        <p className='epoch3'>
                            Live TWAP : <span>1.17</span> <br/> 
                            TVL : <span>$5,002,412</span> <br/> 
                            Last Epoch TWAP: <span>1.22</span> <br/> 
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Card>
  )
}

export default Summary