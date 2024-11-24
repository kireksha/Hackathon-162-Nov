import styled from 'styled-components';
import { useEffect } from 'react';
import { requestGetAllCoders } from './request-get-all-coders/request-get-all-coders';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SelectCoders } from '../../selectors';
import { SearchSort } from './components';

const MainPageContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 50px 0 50px 0;
	text-align: center;
	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 20px;
	}
	img {
		width: 50%;
		height: 60%;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 15px 10px 10px 5px rgba(0, 0, 0, 0.75);
	}
	p {
		font-size: 25px;
	}
	a:hover {
		box-shadow: 15px 10px 10px 10px rgba(0, 0, 0, 0.75);
		border-radius: 15px;
	}
`;
export const MainPage = () => {
	const coders = useSelector(SelectCoders);
	const dispatch = useDispatch();

	useEffect(() => {
		requestGetAllCoders().then((data) =>
			dispatch({ type: 'SET_CODERS', payload: data }),
		);
	}, [dispatch]);
	return (
		<>
			<SearchSort />
			<MainPageContainer>
				<h2>162 - ГРУППА БУДУЩИХ ВЫПУСКНИКОВ RESULT UNIVERSITY!</h2>
				<p>
					Здесь Вы можете познакомиться с участниками
					<br /> Хакатона №2 курса "Junior Fronted-разработчик"
				</p>
				{coders.length > 0 ? (
					<div>
						{coders.map((coder) => (
							<Link to={`/coders/${coder.id}`} key={coder.id}>
								<img src={coder.avatar} alt={coder.name} />
								<p>{coder.name}</p>
							</Link>
						))}
					</div>
				) : (
					<h2>По вашему запросу ничего не нашлось</h2>
				)}
			</MainPageContainer>
		</>
	);
};
