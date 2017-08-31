const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');
const wreck = require('wreck');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
});

server.connection({ port: 9002 });
server.register(Inert, () => {});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});

server.route({
	config: {
		cors: {
			origin: ['*'],
			additionalHeaders: ['cache-control', 'x-requested-with']
		}
	},
	method: 'GET',
	path: '/api/nozomi-instagram',
	handler: (request, reply) => {
		const weatherquery = 'https://www.instagram.com/harponon/media/';

		wreck.get(weatherquery, { json: true }, (error, response, payload) => {
			if (error) {
				reply(error);
				return;
			}

			reply(payload);

			// const items = [];
			// payload.items.forEach((item) => {
			// 	items.push({
			// 		thumbnail: {
			// 			url: item.images.thumbnail.url
			// 		}
			// 	});
			// });

			// reply({ items });
			});
		}
  });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
