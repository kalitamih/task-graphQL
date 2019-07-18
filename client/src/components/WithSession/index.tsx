import React from 'react';

import { Query, QueryResult } from 'react-apollo';
import { GET_USER_INFO } from '../../queries';

const withSession = (Component: React.FC) => (props: any) => (
  <Query query={GET_USER_INFO}>
    {({ data, loading, refetch }: QueryResult) => {
      if (loading) {
        return null;
      }
      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);

export default withSession;
