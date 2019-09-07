import React from 'react';
import { Query } from 'react-apollo';
import { cloneDeep } from 'lodash';
import styled from 'styled-components';

import { Error, Loading } from './Main';
import client from '../client';
import { GET_COUNTRIES } from '../graphql';
import colors from '../style/colors';


const Title = styled.h1`
	color: ${colors.black};
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;

const CountryTitle = styled.span`
	font-weight: bold;
`;

const Row = styled.p`
	font-size: 1rem;
	margin: 0;

	i {
		font-size: 0.8rem;
	}
`;

const Wrapper = styled.div`
	padding: 0.5rem;
	background-color: ${colors.green};
	border-radius: 4px;

	&:not(:last-of-type) {
		margin-bottom: 0.5rem;
	}
`;

export default function Countries() {
	return (
		<Query query={GET_COUNTRIES} client={client}>
			{({ loading, error, data }) => {
				if (loading) {
					return <Loading>Loading...</Loading>;
				}

				if (error) {
					return <Error>{error.message}</Error>;
				}

				// clone data.countries object to avoid mutating
				const clonedCountries = cloneDeep(data.countries);
				const countriesWithLanguages = clonedCountries.map((country) => {
					const languages = data.languages.reduce((acc, curr) => {
						const containsCurrentLanguage = country.languages.some(lang => {
							return lang.name === curr.name;
						});

						if (containsCurrentLanguage) {
							acc.push(curr);
							return acc;
						}
						return acc;
					}, [])

					country.languages = languages;
					return country;
				});

				return (
					<React.Fragment>
						<Title>Countries</Title>
						{countriesWithLanguages.map(country => {
							return (
								<Wrapper key={country.name}>
									<Row><CountryTitle>Name:</CountryTitle> {country.name} <i>{`(${country.native})`}</i></Row>
									{country.languages && country.languages.length
										? <Row>
											<CountryTitle>Language: </CountryTitle>
											{country.languages.map((lang, index) => {
												return (
													<React.Fragment>
														{lang.name} <i>{`(${lang.native})`}</i>{index < country.languages.length - 1 ? ' • ' : ''}
													</React.Fragment>
												)
											})}
										</Row>
										: <Row><CountryTitle>Language: </CountryTitle>n/a</Row>
									}
									<Row><CountryTitle>Continent:</CountryTitle> {country.continent.name}</Row>
								</Wrapper>
							)
						})}
					</React.Fragment>
				);
			}}
		</Query>
	);
}