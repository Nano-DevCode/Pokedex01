export const EnvConfig = () => ({
    eviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PROT || 3002,
    defaultLimit: process.env.DEFAULT_LIMIT || 7,
})