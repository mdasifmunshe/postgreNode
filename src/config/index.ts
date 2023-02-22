import merge from 'lodash.merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const stage = process.env.STAGE || 'local';
let envConfig;

if (stage === 'production') {
	envConfig = require('./prod').default;
} else if (stage === 'staging') {
	envConfig = require('./staging').default;
} else {
	envConfig = require('./local').default;
}

export default merge(
	{
		stage,
		dbUrl: process.env.DATABASE_URL,
		jwtSecret: process.env.JWT_SECRET,
		port: process.env.PORT || 8080,
		logging: false,
	},
	envConfig
);
