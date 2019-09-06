import gql from 'graphql-tag';

export const GET_CODE = gql`
  	{
		countries {
			code
		}
  	}
`;