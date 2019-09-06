import React from 'react';
import { Query } from 'react-apollo';
import { cloneDeep } from 'lodash';

import client from '../client';
import { GET_COUNTRIES } from '../graphql';

export default function Main() {
	return (
		<Query query={GET_COUNTRIES} client={client}>
			{({ loading, error, data }) => {
				if (loading) {
					return <p>Loading...</p>;
				}

				if (error) {
					return <p>{error.message}</p>;
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

					country.languages = languages[0];
					return country;
				});

				return (
					<div>
						{countriesWithLanguages.map(country => {
							return (
								<div key={country.name}>
									<span>{country.name}</span>
									<span>{country.native}</span>
									{country.languages &&
										<div>
											<span>{country.languages.name}</span>
											<span>{country.languages.native}</span>
										</div>
									}
									<span>{country.continent.name}</span>
								</div>
							)
						})}
					</div>
				);
			}}
		</Query>
	);
}