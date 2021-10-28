import React, {useState} from 'react'
import { Route, Link } from "react-router-dom";

//Components
import AllTasks from '../View/AllTasks';
import AddItems from '../View/AddItems';
import ToComplete from '../View/ToComplete';
import Completed from '../View/Completed';
import Bin from '../View/Bin';

// Ant-Design
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BarsOutlined,
  AlertOutlined,
  CarryOutOutlined,
  DeleteOutlined,

} from '@ant-design/icons';
import 'antd/dist/antd.css';

//CSS
import "./LayoutContext.style.css"

const { Content, Footer, Sider } = Layout;


//useContext





const LayoutContext = ({children}) => {

    const [collapsed, setCollapsed] = useState(true)
    
    const onCollapse = () => {
        setCollapsed(!collapsed);
    }

    
    return (
        <>
          <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width="300">
            <div className="logo">

              <p className="title-logo">JUST DO IT!!</p>
  
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
              
              
                <Menu.Item key="1" icon={<BarsOutlined />}>
                  <Link to="/">
                    All Tasks
                  </Link>
                </Menu.Item>
              

              
                <Menu.Item key="2" icon={<AlertOutlined />}>
                  <Link to="/ToComplete">
                    To Complete
                  </Link>
                </Menu.Item>
              

              
                <Menu.Item key="3" icon={<CarryOutOutlined />}>
                  <Link to="/Completed">
                    Completed
                  </Link>
                </Menu.Item>
              

             
                <Menu.Item key="4" icon={<DeleteOutlined />}>
                  <Link to="Bin">
                    Bin
                  </Link>
                </Menu.Item>
              

            </Menu>
          </Sider>
          <Layout className="site-layout">
            
            
            
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><AddItems /></Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                
                
                  

                    <Route path="/" exact>
                      <AllTasks />
                    </Route>

                    <Route path="/ToComplete" exact>
                      <ToComplete />
                    </Route>

                    <Route path="/Completed" exact>
                      <Completed />
                    </Route>

                    <Route path="/Bin" exact>
                      <Bin />
                    </Route>

                  
                

              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Sebastian Zuluaga Design</Footer>
          </Layout>
        </Layout>
        {children}
      </>
    )
}

export default LayoutContext
