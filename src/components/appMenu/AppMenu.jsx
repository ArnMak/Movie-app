import '../appMenu/appMenu.scss';




const AppMenu = () => {

    return (
        <>
            <ul className="app__menu">
                <li className="app__menu_item">
                    <a href="#">Новинки 2023</a>
                </li>
                <li className="app__menu_item">
                    <a href="#">Сериалы</a>
                </li>
                <li className="app__menu_item">
                    <a href="#">Топ 100</a>
                </li>
                <li className="app__menu_item">
                    <a href="#">Фильмы по странам</a>
                </li>
            </ul>
        </>
    )
}

export default AppMenu;