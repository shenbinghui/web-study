import {GraphQLString,GraphQLObjectType,GraphQLSchema} from 'graphql';

const HelloWorldType = new GraphQLObjectType({
	name:'HelloWorldType',
	fields:()=>({
		hello:{
            type:GraphQLString,
            resolve(){
            	return 'world'
            }
		}
	})
});

const schema = new GraphQLSchema({
	query:HelloWorldType
})
// type HelloWorld {
//     hello: String
// }
