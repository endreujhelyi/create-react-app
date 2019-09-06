import React from 'react';
import { Query } from 'react-apollo';
import { cloneDeep } from 'lodash';

import client from '../client';
import { GET_COUNTRY } from '../graphql';


export default function Country({ match }) {
	return (
		<Query query={GET_COUNTRY} client={client} variables={{ code: match.params.code }}>
			{({ loading, error, data }) => {
				if (loading) {
					return <p>Loading...</p>;
				}

				if (error) {
					return <p>{error.message}</p>;
				}
				
				const { currency, name, phone } = data.country;
				return (
					<div>
						<p>{name}</p>
						<p>{currency}</p>
						<p>{phone}</p>
					</div>
				);
			}}
		</Query>
	)
}