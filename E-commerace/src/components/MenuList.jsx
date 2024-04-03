import { Menu } from 'antd'
import {HomeTwoTone,SafetyCertificateTwoTone, BookTwoTone, MobileTwoTone , PhoneTwoTone,IdcardTwoTone,  CameraTwoTone,LaptopOutlined ,SettingTwoTone ,ShoppingTwoTone,PieChartTwoTone  }  from '@ant-design/icons';

const MenuList = ({ darkTheme  }) => {
  return (
    <Menu theme={darkTheme ?'dark' :'light'}>
         <Menu.Item key="home" icon={<HomeTwoTone />} >   Home  </Menu.Item>
  

        <Menu.SubMenu key="Laptop" icon={<LaptopOutlined />} title="Laptop">  
          <Menu.Item key="dell" icon>DELL</Menu.Item>
          <Menu.Item key="samsung" icon>Samsung</Menu.Item>
          <Menu.Item key="hp" icon>HP</Menu.Item>
          <Menu.Item key="fujisto" icon>FUJISTOO</Menu.Item>
          <Menu.Item key="accer" icon>ACCER</Menu.Item>
      

        </Menu.SubMenu>

        <Menu.SubMenu key="mobile" icon={<MobileTwoTone />} title="Mobiles">  
          <Menu.Item key="nokia" icon>Nokia</Menu.Item>
          <Menu.Item key="Samsung" icon>Samsung</Menu.Item>
          <Menu.Item key="Oppo" icon>Oppo</Menu.Item>
          <Menu.Item key="Real me" icon>Real me</Menu.Item>
          <Menu.Item key="I Phone" icon>I Phone</Menu.Item>
          <Menu.Item key="Infinix" icon>Infinix</Menu.Item>

        </Menu.SubMenu>
<Menu.SubMenu key="camera" icon={<CameraTwoTone />} title="Camera ">  
          <Menu.Item key="Canon" icon>Canon</Menu.Item>
          <Menu.Item key="Panasonic" icon>Panasonic</Menu.Item>
          <Menu.Item key="Fujifilm" icon>Fujifilm</Menu.Item>
          <Menu.Item key=" Leica" icon>Leica</Menu.Item>
          <Menu.Item key="Sony" icon>Sony</Menu.Item>
          <Menu.Item key="Hasselblad" icon>Hasselblad</Menu.Item>

        </Menu.SubMenu>


        

    
       
        <Menu.Item key="cart" icon={<ShoppingTwoTone />}> Cart    </Menu.Item>
       
        <Menu.Item key="about" icon={<IdcardTwoTone />}>   About     </Menu.Item>
        <Menu.Item key="Setting" icon={<SettingTwoTone />}>  Setting   </Menu.Item>
        <Menu.Item key="Progress" icon={<PieChartTwoTone />}> Progress    </Menu.Item>
        <Menu.Item key="contact" icon={<PhoneTwoTone />}>   Contact us     </Menu.Item>
      
        <Menu.Item key="privacy" icon={<SafetyCertificateTwoTone />}>   Privacy policy     </Menu.Item>
   
        <Menu.Item key="terms" icon={<BookTwoTone />}>   Term and conditions     </Menu.Item>
        <br />
        <br />
        <Menu.Item key="logout" icon={<SettingTwoTone />} className='logout' >  Logout   </Menu.Item>
        </Menu>
  )
}

export default MenuList