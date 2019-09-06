import React from 'react';
import { Query } from 'react-apollo';
import { cloneDeep } from 'lodash';
import styled from 'styled-components';

import { Error, Loading } from './Main';
import client from '../client';
import { GET_COUNTRY } from '../graphql';



const Name = styled.h1`
	font-size: 1.8rem;
`;

const DataTitle = styled.span`
	font-weight: bold;
`;

const Data = styled.div`
	display: inline;
	font-size: 1.2rem;

	&:not(:last-of-type) {
		margin-right: 1rem;
	}
`;

const Wrapper = styled.div``;

export default function Country({ match }) {
	return (
		<Query query={GET_COUNTRY} client={client} variables={{ code: match.params.code }}>
			{({ loading, error, data }) => {
				if (loading) {
					return <Loading>Loading...</Loading>;
				}

				if (error) {
					return <Error>{error.message}</Error>;
				}
				
				const { currency, name, phone } = data.country;
				return (
					<div>
						<Name>{name}</Name>
						<Wrapper>
							<Data><DataTitle>Currency:</DataTitle> {currency || 'n/a'}</Data>
							<Data><DataTitle>Code:</DataTitle> {phone}</Data>
						</Wrapper>
					</div>
				);
			}}
		</Query>
	)
}