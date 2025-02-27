import React, { useEffect, useRef, useState } from 'react'

export const MainPage = () => {

    const [imageURL, setImageURL] = useState('')
    const imgRef = useRef(null)
    const streamURL = 'http://192.168.0.15:81/stream'

    const updateStream = () => {
        if (imgRef.current) {
            const timestamp = new Date().getTime()
            imgRef.current.src = `${streamURL}?t=${timestamp}`
        }
    }

    useEffect(() => {
        const interval = setInterval(updateStream, 100)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src="https://img.icons8.com/?size=70&id=2zQuuMM0XuM9&format=png&color=000000" />
                <div style={{ paddingLeft: '1vh' }}>
                    <div style={{
                        color: '#dfdfdf',
                        paddingTop: '1vh',
                        fontWeight: 'bold',
                        fontFamily: 'nunito',
                        fontSize: '3vh'
                    }}>Yerick Aguilar</div>

                    <div style={{
                        color: '#a9a9a9',
                        fontFamily: 'nunito'
                    }}>Guatemala</div>
                </div>
            </div>
            <br />
            <div style={{
                fontFamily: 'nunito',
                color: '#dfdfdf',
                fontSize: '3vh'
            }}>
                Camera
            </div>
            <div>
                {/* <img src="https://cdn.shopify.com/s/files/1/1100/5760/files/8ff26c96-c0ec-40e6-a3a5-6401d38a957a_480x480.png?v=1695263601" style={{
                    width: '100%',
                    borderRadius:'3vh'
                }} /> */}


                <figure>
                    <div>
                        <img
                            id='stream'
                            src="http://192.168.50.136:81/stream"
                        />
                    </div>
                </figure>

            </div>
        </>
    )
}
