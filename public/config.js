// Change this file as you need it

const projectId = '1zoY8fVddS0ZCzGf8xMiCYjqVxh'
const projectSecret = '346542f39547fad839e255ba6e4c1e93'

const auth =  projectId + ':' + projectSecret;



const config = {
	port: 5001,
	gateway: 8080,

}

const node = {
	// default remote Node
	default: 'remote',
	remote: {
		address: 'ipfs.infura.io',
		...config,
		protocol: 'https',
		headers: {
			authorization: auth
		  }
	},

	// default local node
	local: {
		address: '127.0.0.1',
		...config,
		protocol: 'http'
	}
}
