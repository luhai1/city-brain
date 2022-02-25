import React, { useState } from 'react'
import styles from './index.module.less'
import { Avatar, Menu } from 'antd';
import { UserOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const NavBar = () => {

    const [current, setCurrent] = useState('mail')

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <div className={styles.navBar}>
            <div className={styles.navBarTitle}>自然资源调查检测管理和决策分析智库</div>
            <div className={styles.navBarMenu}>
                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
                    <Menu.Item key="mail">
                        首页
                    </Menu.Item>
                    <Menu.Item key="app" >
                        成果页面
                    </Menu.Item>
                    <Menu.Item key="bb">
                    调查检测管理
                    </Menu.Item>
                    <Menu.Item key="alipay">
                        共享应用
                    </Menu.Item>
                    <Menu.Item key="cc">
                        政策知识库存
                    </Menu.Item>
                </Menu>
            </div>
            <div><Avatar style={{ backgroundColor: '#87d068' }} size={28}  icon={<UserOutlined />} /> 张三，欢迎您！</div>
        </div>
    )
}

export default NavBar