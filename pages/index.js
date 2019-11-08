import fetch from '../libs/fetch';

import useSWR from 'swr'

const query = {
  'query': 'query { users(limit:10, order_by:{created_at: desc}) { id name } }'
};

const getData = async(...args) => {
  return await fetch(query);
};

export default () => {
  const { data, error } = useSWR(query, getData);
  if(error) {
    return <div>Error...</div>
  }
  if(!data) {
    return <div>Loading...</div>
  }

  return ( 
    <div style={{ textAlign: 'center' }}>
      <h1>Users from database</h1>
      <div>
      {
        data.users.map(user => 
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        )
      }
      </div>
    </div>
  )
}
