import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import './appHeader.scss';




const AppHeader = () => {

    return (
        <header className='app__header'>
            <div className='app__block'>
                <a href="#" className="app__logo">
                    <h1 className="app__title">Kinozed</h1>
                    <p className="app__caption">Фильмы онлайн</p>
                </a>
                <div className="app__search">
                    <form action="/">
                        <div className="search__box">
                            <input placeholder='Поиск...' type="text" />
                            <button type='submit' title='Найти'>
                                <FontAwesomeIcon  icon={faSearch} size='sm'/>
                                {/* <span className='search-icon'></span> */}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="app__btns">
                <a href="#" className="app__reg">Регистрация</a>
                <div className="button button__short">                  
                    <FontAwesomeIcon style={{'marginRight': '5px', 'height': '10px'}} icon={faUser} size='xs'/>
                    <span>Войти</span>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;