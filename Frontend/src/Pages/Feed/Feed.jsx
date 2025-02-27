import React from 'react'

export const Feed = () => {
    return (
        <div>
            <div>
                <span style={{
                    color: '#dfdfdf',
                    fontWeight: 'bold',
                    fontFamily: 'nunito',
                    fontSize: '3vh'
                }}>Today</span>
            </div>
            <div style={{ backgroundColor: '#1f272a', borderRadius:'2vh', display:'flex'}}>
                <img style={{
                    width: '50%',
                    borderRadius: '2vh',
                    top: '50%',
                    display:'flex',
                    padding:'1vh 0 1vh 1vh'
                }} src="https://cdn.shopify.com/s/files/1/1100/5760/files/8ff26c96-c0ec-40e6-a3a5-6401d38a957a_480x480.png?v=1695263601" />
                <span style={{paddingLeft:'2vh'}}>TEST</span>
            </div>
            <br />
            <div style={{ backgroundColor: '#1f272a', borderRadius:'2vh', display:'flex'}}>
                <img style={{
                    width: '50%',
                    borderRadius: '2vh',
                    top: '50%',
                    display:'flex',
                    padding:'1vh 0 1vh 1vh'
                }} src="https://cdn.shopify.com/s/files/1/1100/5760/files/8ff26c96-c0ec-40e6-a3a5-6401d38a957a_480x480.png?v=1695263601" />
                <span style={{paddingLeft:'2vh'}}>TEST</span>
            </div>
        </div>
    )
}
