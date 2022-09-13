// Change this file as you need it

const projectId = '1zoY8fVddS0ZCzGf8xMiCYjqVxh'
const projectSecret = '346542f39547fad839e255ba6e4c1e93'

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


const config = {
	port: 5001,
	gateway: 8080,
	headers: {
		authorization: auth
	  }
}

const node = {
	// default remote Node
	default: 'remote',
	remote: {
		address: 'ipfs.infura.io',
		...config,
		protocol: 'https'
	},

	// default local node
	local: {
		address: '127.0.0.1',
		...config,
		protocol: 'http'
	}
}
