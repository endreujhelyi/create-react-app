import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import client from '../client';
import { GET_CODE } from '../graphql';
import colors from '../style/colors';


export const Loading = styled.p`
	font-size: 2rem;
	font-weight: bold;
`;

export const Error = styled.p`
	font-size: 1.5rem;
	color: ${colors.red};
`;

const Countries = styled.div`
	display: inline;
	padding: 1rem;
	font-size: 1.6rem;
	font-weight: bold;
	background-color: ${colors.brown};
	border-radius: 4px;
	
	a {		
		color: ${colors.black};
		text-decoration: none;
	}

	&:hover {
		box-shadow: 2px 2px 4px ${colors.black};
	}

	&:active {
		box-shadow: 1px 1px 2px ${colors.black};
	}
`;

const Code = styled.a`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	margin: 4px;
	text-decoration: none;
	color: ${colors.black};
	background-color: ${colors.green};
	border-radius: 4px;

	&:hover {
		box-shadow: 2px 2px 4px ${colors.black};
	}

	&:active {
		box-shadow: 1px 1px 2px ${colors.black};
	}
`;

const Codes = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 4rem 0 2rem;
`;

const Container = styled.div`
	padding-top: 2rem;
`;

export default function Main() {
	return (
		<Container>
			<Countries>
				<a href="/countries">COUNTRIES</a>
			</Countries>

			<Codes>
				<Query query={GET_CODE} client={client}>
					{({ loading, error, data }) => {
						if (loading) {
							return <Loading>Loading...</Loading>;
						}

						if (error) {
							return <Error>{error.message}</Error>;
						}

						return (
							<div>
								{data.countries.map(country => {
									return <Code key={country.code} href={`/countries/${country.code}`}>{country.code}</Code>;
								})}
							</div>
						);
					}}
				</Query>
			</Codes>
		</Container>
	);
}