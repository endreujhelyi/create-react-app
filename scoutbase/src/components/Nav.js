import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';


const Company = styled.a`
	color: ${colors.white};
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none;
`;

const Wrapper = styled.div`
	max-width: 1400px;
	margin: 0 auto;
`;

const Container = styled.div`
	padding: 1rem;
	background-color: ${colors.black};
	border-bottom: 1px solid ${colors.black};
`;

export default function Nav() {
	return (
		<Container>
			<Wrapper>
				<Company href="/">SCOUTBASE</Company>
			</Wrapper>
		</Container>
	)
}