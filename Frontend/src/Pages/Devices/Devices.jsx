import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { insertTest } from '../../Services/api'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const Devices = () => {

    //# Voice Recognition
    const{
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    }=useSpeechRecognition()

    if (!('webkitSpeechRecognition' in window)) {
        return <span>Tu navegador no soporta reconocimiento de voz.</span>
      }

    if(!browserSupportsSpeechRecognition){
        return <span>Tu navegador no soporta reconocimiento por voz</span>
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    //# Add TEST

    const [formData, setFormData] = useState({
        nombre: '',
        carrera: ''
    })

    const addTest = async () => {
        try {
            const response = await insertTest(formData)
            console.log(response)
        } catch (err) {
            console.error('Error Registering Data: ', err)
        }
    }

    return (
        <div>
            <span style={{
                color: '#dfdfdf',
                fontWeight: 'bold',
                fontFamily: 'nunito',
                fontSize: '3vh'
            }}>Devices</span>

            {/* CARDS */}
            <div style={{ width: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', justifyItems: 'center' }}>
                <Card style={{ width: '10rem' }}>
                    <Card.Title style={{ textAlign: 'center', paddingTop: '1vh' }}>CAMERA 1</Card.Title>
                    <Card.Img variant='top' src='https://cdn.shopify.com/s/files/1/1100/5760/files/8ff26c96-c0ec-40e6-a3a5-6401d38a957a_480x480.png?v=1695263601' />
                    <Card.Body>
                        <Card.Text>Editar</Card.Text>
                        <Card.Text>Eliminar</Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '10rem' }}>
                    <Card.Title style={{ textAlign: 'center', paddingTop: '1vh' }}>CAMERA 2</Card.Title>
                    <Card.Img variant='top' src='https://cdn.shopify.com/s/files/1/1100/5760/files/8ff26c96-c0ec-40e6-a3a5-6401d38a957a_480x480.png?v=1695263601' />
                    <Card.Body>
                        <Card.Text>Editar</Card.Text>
                        <Card.Text>Eliminar</Card.Text>
                    </Card.Body>
                </Card>
                
                <Button style={{width:'10rem', marginTop:'3vh'}}>
                    <span>
                        <img src="https://img.icons8.com/?size=30&id=37784&format=png&color=FFFFFF"/>
                    </span>
                </Button>
            </div>

            <br />
            <span style={{ color: 'white' }}>Test DB Connection</span>
            <div>
                <span style={{ color: 'white' }}>Nombre</span>
                <input type="text" name='nombre' value={formData.nombre} onChange={handleInputChange} />
                <br />
                <span style={{ color: 'white' }}>Carrera</span>
                <input type="text" name='carrera' value={formData.carrera} onChange={handleInputChange} />
                <br />
                <button onClick={addTest}>Agregar</button>
            </div>

            <div style={{color:'white', display:'flex'}}>
                <p>Microfono PEEEEZ:{listening ? 'on':'off'}</p>
                <button onClick={SpeechRecognition.startListening}>Encender</button>
                <button onClick={SpeechRecognition.stopListening}>Apagar</button>
                <button onClick={resetTranscript}>Resetear</button>
                <p>{transcript}</p>
            </div>
        </div>
    )
}
