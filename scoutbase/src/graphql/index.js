import gql from 'graphql-tag';

export const GET_CODE = gql`
  	{
		countries {
			code
		}
  	}
`;

export const GET_COUNTRIES = gql`
	{
		countries {
			continent {
				name
			}
			name
			native
			languages {
				name
			}
		}
		languages {
			name
			native
		}
	}
`;

export const GET_COUNTRY = gql`
	  query country($code: String!) {
		country(code: $code) {
			name
			phone
			currency
		  }
	  }
`;