// Project.js
import React from 'react';
import './Project.css';

function Project({ selectedProject }) {
    return (
        <>
            <h3 className="pro">
                <div className="top1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" fill="red" className="bi bi-list-ul ic" viewBox="0 2 20 20">
                        <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                </div>
                <p className="proj">Cross project function</p>
                <div className="arr">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                    </svg>
                </div>
                <div className="star">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                </div>
                <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    </svg>
                </div>
                <p className='states'> set states</p>
            </h3>
            <ul className="hor">
                <li>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 1 16 16">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                    </svg>
                    Overview
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-columns-reverse" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5zM4.5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5zM0 5.5A.5.5 0 0 1 .5 5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 5.5zM4.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm-4 5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm-4 5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    list
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5v.5h8V.5a.5.5 0 0 1 1 0v.5h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        <path d="M9 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V7zm1 0v5h3V7h-3zM4.5 8.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm-3 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    timeline
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                        <path d="M1 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg>
                    boards
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                        <path d="M.5 0A.5.5 0 0 1 1 .5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM3 13h3.5a.5.5 0 0 0 .5-.5V11H9v1.5a.5.5 0 0 0 .5.5H13v-4h2.5a.5.5 0 0 0 .5-.5V6H10.5a.5.5 0 0 0-.5.5V9H7V7.5a.5.5 0 0 0-.5-.5H3v6z"/>
                    </svg>
                    dashboard
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                        <path d="M8.146 0.146a.5.5 0 0 1 .708 0l7 7a.5.5 0 0 1 .146.353v7.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-7.5a.5.5 0 0 1 .146-.353l7-7zm6.854 7.207l-6-6-6 6V15h12V7.354zm-3 7.646h-2v-2h-2v2h-2V9.54l3-3 3 3V15z"/>
                    </svg>
                    collections
                </li>
            </ul>
            <p className="proj">{selectedProject}</p> {/* Display the selected project */}
        </>
    );
}

export default Project;
