console.log(`Loading ${process.env.NODE_ENV} environment`);

const dev = {
    env: 'dev',
    port: 8080,

    boardWidth: 50,
    boardHeight: 50,

    origins: /^(http?:\/\/(?:.+\.)?localhost(?::\d{1,5})?)$/,
};

const prod = {
    env: 'prod',
    port: 8080,

    boardWidth: 50,
    boardHeight: 50,

    origins: /^(http?:\/\/(?:.+\.)?localhost(?::\d{1,5})?)$/,
};

let env = dev;

if (process.env.NODE_ENV === 'prod') env = prod;

export default env;