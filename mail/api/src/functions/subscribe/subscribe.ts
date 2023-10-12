import { APIGatewayEvent, Context } from 'aws-lambda';
import { db } from 'src/lib/db';
import { logger } from 'src/lib/logger';

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: subscribe function`);

  try {
    // Replace these with the actual values you want to create in the database
  const { pathParameters } = event;

    const newSubscriber = await db.subscriber.create({
      data: {
        email :pathParameters.email,
      },
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: newSubscriber, // You may want to return the created subscriber
      }),
    };
  } catch (error) {
    // Handle any potential errors
    return {
      statusCode: 500, // or an appropriate error code
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
