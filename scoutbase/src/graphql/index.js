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