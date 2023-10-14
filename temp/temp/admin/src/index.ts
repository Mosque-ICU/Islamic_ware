// import { Elysia } from 'elysia';
// import {
// 	apollo,
// 	gql,
// } from '@elysiajs/apollo';
// import { prayers } from '../data/prayers';

// const app = new Elysia()
// 	.use(
// 		apollo({
// 			typeDefs: gql`
// 				type Prayer {
// 					title: String
// 					description: String
// 				}

// 				type Query {
// 					prayers: [Prayer]
// 				}
// 			`,
// 			resolvers: {
// 				Query: {
// 					prayers: () => {
// 						return prayers;
// 					},
// 				},
// 			},
// 		})
// 	)
// 	.listen(4000);

// // Accessing /graphql should show Apollo GraphQL playground work with.

import { Elysia } from 'elysia';
import {
	apollo,
	gql,
} from '@elysiajs/apollo';
import { prayers } from '../data/prayers';
import { events } from '../data/events'; // Import your events data
import { establishments } from '../data/establishments';

const app = new Elysia()
	.use(
		apollo({
			typeDefs: gql`
				# type Prayer {
				# 	title: String
				# 	description: String
				# }

				# type Event {
				# 	title: String
				# 	description: String
				# }

				# type Establishment {
				# 	name: String
				# }

				# type Query {
				# 	prayers: [Prayer]
				# 	events: [Event] # Add the events query
				# 	establishments: [Establishment]
				# }
				type Establishment {
					id: ID!
					type: String # Add the 'type' field here
					name: String
					prayers: [Prayer]
					events: [Event]
				}

				type Prayer {
					id: ID!
					title: String
					description: String
					establishmentId: ID
				}

				type Event {
					id: ID!
					title: String
					description: String
					establishmentId: ID
				}

				type Query {
					prayers: [Prayer]
					events: [Event]
					establishments: [Establishment]
					establishment(
						id: ID!
					): Establishment # Add this query with an ID argument
				}
			`,
			// resolvers: {
			// 	Query: {
			// 		prayers: () => {
			// 			return prayers;
			// 		},
			// 		events: () => {
			// 			return events; // Return your events data
			// 		},
			// 		establishments: () => {
			// 			return establishments; // Return your events data
			// 		},
			// 	},
			// },
			resolvers: {
				Query: {
					prayers: () => {
						return prayers;
					},
					events: () => {
						return events;
					},
					establishments: () => {
						return establishments;
					},
					establishment: (
						parent,
						args
					) => {
						const establishmentId =
							args.id;
						return establishments.find(
							(establishment) =>
								establishment.id ===
								establishmentId
						);
					},
				},
				Establishment: {
					prayers: (parent) => {
						const establishmentId =
							parent.id;
						return prayers.filter(
							(prayer) =>
								prayer.establishmentId ===
								establishmentId
						);
					},
					events: (parent) => {
						const establishmentId =
							parent.id;
						return events.filter(
							(event) =>
								event.establishmentId ===
								establishmentId
						);
					},
				},
			},
		})
	)
	.listen(4000);

// Accessing /graphql should now allow you to query for both prayers and events
