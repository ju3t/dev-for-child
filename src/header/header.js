import React from 'react'
import './header.css';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Math</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Главная<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Математика</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Задачи</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Чтение</a>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
