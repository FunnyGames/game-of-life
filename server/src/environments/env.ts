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
    port: parseInt(process.env.PORT) || 8080,

    boardWidth: 50,
    boardHeight: 50,

    origins: /^(http?:\/\/(?:.+\.)?(dima-game-of-life.netlify.app|localhost)(?::\d{1,5})?)$/,
};

let env = dev;

if (process.env.NODE_ENV === 'production') env = prod;

export default env;