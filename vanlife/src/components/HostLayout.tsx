import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HostLayout() {
    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color:'#161616'
    }

    return (
        <>
            <nav className='host-view'>
                <NavLink 
                    to='.'
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Dashbord
                </NavLink>

                
                <NavLink 
                    to='income'
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Income
                </NavLink>

                <NavLink 
                    to='vans'
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Vans
                </NavLink>

                <NavLink 
                    to='reviews'
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Reviews
                </NavLink>


            </nav>
            <Outlet />
        
        </>
    )
}