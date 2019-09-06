import React from 'react';
import { Query } from 'react-apollo';

import client from '../client';
import { GET_CODE } from '../graphql';

export default function Main() {
	return (
		<div>
			<a href="/countries">COUNTRIES</a>

			<div>
				<Query query={GET_CODE} client={client}>
					{({ loading, error, data }) => {
						if (loading) {
							return <p>Loading...</p>;
						}

						if (error) {
							return <p>{error.message}</p>;
						}

						return (
							<div>
								{data.countries.map(country => {
									return <a key={country.code} href={`/countries/${country.code}`}>{country.code}</a>;
								})}
							</div>
						);
					}}
				</Query>
			</div>
		</div>
	);
}