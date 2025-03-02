import Button from './Button/Button';
import './Header.scss'
import Title from './Title/Title';

const Header = () => {
    return (
        <header className="main-header">
            <Title />
            <Button />
        </header>
    );
}

export default Header;