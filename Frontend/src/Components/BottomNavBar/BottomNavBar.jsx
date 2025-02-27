import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export const BottomNavBar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const navigateTo = (path)=>{
        navigate(path)
    }

    return (
        <div style={{
            backgroundColor: '#252a30',
            position: 'fixed',
            bottom: '0',
            left: '0',
            zIndex: '1',
            width: '100%'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
                marginBottom:'1vh',
                marginTop:'1vh',
                fontFamily:'nunito',
                fontWeight:'bold'
            }}>
                {/* Home */}
                <div style={{textAlign:'center'}} onClick={()=>{navigateTo('')}}>
                    <img src={
                        location.pathname === '/feed' || 
                        location.pathname === '/emergency' ||
                        location.pathname === '/devices' ? "https://img.icons8.com/?size=40&id=6RlaHUy2CmGh&format=png&color=717171":"https://img.icons8.com/?size=40&id=jqVLTIkbz7hy&format=png&color=bbf348"}/>
                    <br />
                    <span style={
                        location.pathname === '/feed' ||
                        location.pathname === '/emergency' ||
                        location.pathname === '/devices' ? {color:'#777777'}:{color:'#bbf348'}}>Home</span>
                </div>

                {/* Feed */}
                <div style={{textAlign:'center'}} onClick={()=>{navigateTo('/feed')}}>
                    {/* <img src="https://img.icons8.com/?size=40&id=vWX24uAnTiKj&format=png&color=B5C8BF"/> */}
                    <img src={
                        location.pathname === '/' ||
                        location.pathname === '/emergency' ||
                        location.pathname === '/devices' ? "https://img.icons8.com/?size=40&id=vWX24uAnTiKj&format=png&color=B5C8BF":"https://img.icons8.com/?size=40&id=oCbuKbQQMrND&format=png&color=bbf348"}/>
                    <br />
                    <span style={
                        location.pathname === '/' ||
                        location.pathname === '/emergency' ||
                        location.pathname === '/devices' ? {color:'#777777'}:{color:'#bbf348'}}>Feed</span>
                </div>

                {/* Emergency */}
                <div style={{textAlign:'center'}} onClick={()=>{navigateTo('/emergency')}}>
                    <img src={
                        location.pathname === '/' || 
                        location.pathname === '/feed' ||
                        location.pathname === '/devices' ? "https://img.icons8.com/?size=40&id=5365&format=png&color=717171":"https://img.icons8.com/?size=40&id=8773&format=png&color=bbf348"}/>
                    <br />
                    <span style={
                        location.pathname === '/' ||
                        location.pathname === '/feed' ||
                        location.pathname === '/devices' ? {color:'#777777'}:{color:'#bbf348'}}>Emergency</span>
                </div>

                {/* Devices */}
                <div style={{textAlign:'center'}} onClick={()=>{navigateTo('/devices')}}>
                    {/* <img src="https://img.icons8.com/?size=40&id=6417&format=png&color=717171"/> */}
                    <img src={
                        location.pathname === '/' || 
                        location.pathname === '/feed' ||
                        location.pathname === '/emergency' ? "https://img.icons8.com/?size=40&id=6417&format=png&color=717171":"https://img.icons8.com/?size=40&id=10476&format=png&color=bbf348"}/>
                    <br />
                    <span style={
                        location.pathname === '/' ||
                        location.pathname === '/feed' ||
                        location.pathname === '/emergency' ? {color:'#777777'}:{color:'#bbf348'}}>Devices</span>
                </div>
            </div>
        </div>
    )
}
