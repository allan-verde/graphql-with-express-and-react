import PersonInput from './inputs/person'
import Person from '../../models/Person'
import PersonObject from '../objects/person'

export default {
  type: PersonObject,
  args: {
    person: { type: PersonInput }
  },
  resolve: async (root, args) => {
    const person = await Person.create({
      name: args.person.name
    })
    return person
  }
}