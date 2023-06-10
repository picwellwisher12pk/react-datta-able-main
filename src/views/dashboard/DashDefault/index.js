import React,{useEffect,useState} from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AmChartEarnings from './chart/AmChartEarnings';
import AmChartStatistics6 from './chart/AmChartStatistics6';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';



const ListItem = (item) => {
    console.log(item);

    return (
        <tr className="unread">
            <td>{item.img}</td>
            <td>
                <h5 className="mb-1">{item.shopId}</h5>
                <p className="m-0">{item.shopName}</p>
                <p className="m-0">{item.latitude}</p>
            </td>
            <td>
                <Link to={`/audit/${item.shopId}`} className="label theme-bg text-white f-12">
                    view
                </Link>
            </td>
        </tr>
    );
};



const DashDefault = () => {
    const [json, setJson] = useState(0);
   let jsonItems = {
        "shopsList" : [
          {
            "shopId":"1",
            "shopName":"ToyLand",
            "latitude":"25.5677",
            "longitude":"77.2234"
          },
          {
            "shopId":"1",
            "shopName":"ToyLand",
            "latitude":"25.5677",
            "longitude":"77.2234"
          },
        ]
      };

    useEffect(() => {
        setJson(jsonItems);

    },[]);
    
    let shopList = [];
    if (Array.isArray(json.shopsList)) {
        let shops = json.shopsList;
        shops.forEach((shop) => {
            // shop.img = <FaBuilding className="f-30 text-c-blue"></FaBuilding>;
            shop.img= <img src={avatar1} className="img-radius w-25" alt="User Profile" />
            shopList.push(<ListItem {...shop} />);
        });
       
    }

    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={4}>
                     <Card>
                        <Card.Body>
                            <h6 className="mb-4">Daily Sales</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> $249.95
                                    </h3>
                                </div>

                                <div className="col-3 text-right">
                                    <p className="m-b-0">50%</p>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{ height: '7px' }}>
                                <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: '50%' }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className="mb-4">Monthly Sales</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <i className="feather icon-arrow-down text-c-red f-30 m-r-5" /> $2.942.32
                                    </h3>
                                </div>

                                <div className="col-3 text-right">
                                    <p className="m-b-0">36%</p>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{ height: '7px' }}>
                                <div
                                    className="progress-bar progress-c-theme2"
                                    role="progressbar"
                                    style={{ width: '35%' }}
                                    aria-valuenow="35"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className="mb-4">Yearly Sales</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> $8.638.32
                                    </h3>
                                </div>

                                <div className="col-3 text-right">
                                    <p className="m-b-0">70%</p>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{ height: '7px' }}>
                                <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: '70%' }}
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={12} xl={12}>
                {shopList && (
                            <Card className="Recent-Users">
                                <Card.Header>
                                    <Card.Title as="h5">Shops</Card.Title>
                                </Card.Header>
                                <Card.Body className="px-0 py-2">
                                    <Table responsive hover>
                                        <tbody>{shopList}</tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        )}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DashDefault;
