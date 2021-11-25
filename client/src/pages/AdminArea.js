import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBikes } from '../redux/actions/bikeActions'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  CloudOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

function AdminArea() {
    
    const { SubMenu } = Menu;
    const { Content, Sider } = Layout;

    const { bikes } = useSelector(state=>state.bikesReducer)
    const { loading } = useSelector(state=>state.alertsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBikes())
    }, [])

      return (
        <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo">
          <h1 className="logoText pt-4 ml-2">
                <Link to='/'style={{color:'white'}}>
                Go-Bikefy 
                </Link>
                </h1>   
  
          </div>
          <Link to='/admin'>
          <small style={{color:'white', fontSize:'12px'}}>Admin Panel</small>
        </Link>
          <Menu theme="dark" mode="inline" >
          <SubMenu key="sub1" icon={<CloudOutlined />} title="Catalogue">
            <Menu.Item key="2"><Link to='/admin'>Show all</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/admin/addbike'>Add new Bike</Link></Menu.Item>
            </SubMenu>
        
            <SubMenu key="sub3"  icon={<AppstoreOutlined />} title="Customers">
            <Menu.Item key="7">Points bonus</Menu.Item>
            <Menu.Item key="5"><Link to='/'>Shop</Link></Menu.Item> 
            <Menu.Item key="6" onClick={()=>{
              window.location.href='/login'
          }}>
           Logout
          </Menu.Item>
          </SubMenu>
  
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 180 }}>
          <Content style={{ overflow: 'initial' }}>
            <div className="site-layout-background" style={{ textAlign: 'center' }}>
              
            {loading == true && (<Spinner />)}

                <Row justify='center' gutter={6} className='mt-4  mb-4'>
                    {bikes.map(bike=>{
                        return <Col lg={5} sm={24} xs={24}>
                            <div className="bike p-1 bs1 mt-2">
                                <img src={bike.image} style={{ height:140}} alt="bike for rent"/>
                            </div>
                            <div className="bike-content d-flex align-items-center justify-content-between">

                                <div>
                                    <p className="name">{bike.name}</p>
                                    <p className="type">{bike.type}</p> 
                                </div>
                                <div className="mr-2">
                                    <p className="price">€{bike.rentPerDay}</p>
                                    <div>

                                    <Link to={`/editbike/${bike._id}`}>
                                    <EditOutlined className="mr-2" style={{color:'green', cursor:'pointer'}}/>
                                    </Link>

                                    <DeleteOutlined style={{color:'red', cursor:'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    })}
                </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
}

export default AdminArea