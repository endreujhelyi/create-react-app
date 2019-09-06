import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';


const Company = styled.a`
	color: ${colors.white};
	font-size: 30px;
	font-weight: bold;
	text-decoration: none;
`;

const Container = styled.div`
	padding: 1rem;
	background-color: ${colors.black};
	border-bottom: 1px solid ${colors.black};
`;

export default function Nav() {
	return (
		<Container>
			<Company href="/">SCOUTBASE</Company>
		</Container>
	)
}