import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

 function Dashboard() {


    return (
        <div>
            {/* Votre JSX pour le composant Dashboard */}
            <section id="sidebar">
                <Link to={'/dashboard'} className="brand">
                    <i className='bx bxs-smile'></i>
                    <span className="text">Admin Dashboard</span>
                </Link>
                <ul className="side-menu top">
                    <li className="">
                        <Link to={'/'}>
                            <i className='bx bxs-dashboard' ></i>
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/employee'}>
                            <i className='bx bx-group'></i>
                            <span className="text">Employées</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/role'}>
                            <i className='bx bxs-doughnut-chart' ></i>
                            <span className="text">Role et Permissions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/chat'}>
                            <i className='bx bxs-message-dots' ></i>
                            <span className="text">Messages</span>
                        </Link>
                    </li>
                  
                </ul>
                <ul className="side-menu">
                    <li>
                        <Link to={'/note'}>
                            <i className='bx bx-notepad' ></i>
                            <span className="text">Notes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/calendrier'}>
                            <i className='bx bx-calendar' ></i>
                            <span className="text">Calendrier</span>
                        </Link>
                    </li>
                </ul>
            </section>
             

            
            <div id="content">
                <Navigation/>
                <main>
                    {/* Contenu du tableau de bord */}
                </main>
            </div>

                
        </div>
    );
}
export default Dashboard;
