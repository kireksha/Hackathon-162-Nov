import styled from 'styled-components';
import { XDropdown } from '../ui';
import { HeaderLink } from './components/HeaderLink';
const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<nav className="header-nav">
				<ul className="list-link">
					<XDropdown className="list-link" style={{ marginRight: '40px' }}>
						<p>dlkfhgdflkgjfdkgl</p>
					</XDropdown>
					<HeaderLink linkAddress="/">ГЛАВНАЯ</HeaderLink>
					<HeaderLink href="https://result.school/">САЙТ ШКОЛЫ</HeaderLink>
					<HeaderLink linkAddress="/favorites">ИЗБРАННЫЕ УЧАСТНИКИ</HeaderLink>
				</ul>
			</nav>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	padding: 50px 45px;
	background-color: rgba(117, 112, 255, 0.61);
	box-shadow: 15px 10px 10px 5px rgba(0, 0, 0, 0.75);

	& .list-link {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& li:not(:last-child) {
		margin-right: 40px;
	}
`;
