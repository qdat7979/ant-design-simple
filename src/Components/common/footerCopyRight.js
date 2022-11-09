import React from 'react'
import payment from '../../assets/images/payment.png';
import { BackTop } from 'antd';
import Icon, { UpCircleOutlined } from '@ant-design/icons';


function FooterCopyRight() {

    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    };

  return (
    <div className='footerCopyright'>
        <div className='container'>
            <div className='copyright'>Created by DC Capital Companys</div>
            <div className='toTop'><img src={payment} alt="payment"/></div>
        </div>
        <BackTop>
            <div style={style}>
                <UpCircleOutlined/>
            </div>
        </BackTop>
    </div>
  )
}

export default FooterCopyRight