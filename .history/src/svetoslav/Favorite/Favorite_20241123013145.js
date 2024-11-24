import styled from "styled-components";

const FavoriteContainer = ({ className, someId, isFavorite, setIsFavorite }) => {
	return (
		<>
			<div className={className}>
				Add to Favorite
				{someId}
			</div>
		</>
	)
}

export const Favorite = styled(FavoriteContainer)`
	color: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`