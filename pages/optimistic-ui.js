import useSWR, { mutate, trigger } from 'swr'
import fetch from '../libs/fetch'

const uuidv1 = require('uuid/v1');

const query = {
  'query': 'query { users(limit: 10, order_by: {created_at: desc}) { id name } }'
};

const getData = async(...args) => {
  return await fetch(query);
};

export default () => {
  const [text, setText] = React.useState('');
  const { data } = useSWR(query, getData)

  async function handleSubmit(event) {
    event.preventDefault()
    // mutate current data to optimistically update the UI
    mutate(query, {users: [...data.users, {id: uuidv1(), name: text}]}, false)
    // send text to the API
    const mutation = {
      'query': 'mutation users($name: String!) { insert_users(objects: [{name: $name}]) { affected_rows } }',
      'variables': { name: text}
    };
    await fetch(mutation);
    // revalidate
    trigger(mutation);
    setText('')
  }

  return <div>
    <h1>Insert a new user</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={event => setText(event.target.value)}
        value={text}
      />
      <button>Create</button>
    </form>
    <ul>
      {data ? data.users.map(user => <li key={user.id}>{user.name}</li>) : 'loading...'}
    </ul>
  </div>
}
