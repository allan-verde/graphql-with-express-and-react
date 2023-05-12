import { GraphQLInputObjectType, GraphQLString } from 'graphql'

export default new GraphQLInputObjectType({
  name: 'PersonInput',
  fields: () => ({
    name: { type: GraphQLString }
    // list_example: { type: GraphQLList(PersonObject) }
  })
})
