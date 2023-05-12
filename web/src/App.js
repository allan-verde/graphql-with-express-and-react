import { useQuery, gql, useMutation } from '@apollo/client'
import { useState } from 'react'

const FIND_PEOPLE = gql`
{
  people {
    id
    name
  }
}
`

const CREATE_PERSON = gql`
mutation($person: PersonInput) {
  createPerson(person: $person) {
    id
    name
  }
}
`

function App() {
  const { loading, error, data, refetch } = useQuery(FIND_PEOPLE)
  const [person, setPerson] = useState({ person: { name: 'Jonh Doe 1' } })
  const [createPerson] = useMutation(CREATE_PERSON)

  const onChange = (e) => {
    setPerson({ person: { name: e.target.value } })
  }

  const onClick = async () => {
    await createPerson({ variables: person })

    refetch()
  }

  return (
    <div className="App">
      <input type="text" value={person.name} onChange={onChange} />
      <button onClick={onClick}>Enviar</button>
      {
        loading
          ? <p>Carregando...</p> 
          : error
            ? <p>Erro: {error.message}</p>
            : (
                <ul>
                  {data.people.map(person => <li key={person.id}>{person.name}</li>)}
                </ul>
              )
      }
    </div>
  )
}

export default App
