import { registerAs } from '@nestjs/config'

export enum ConfigKeys {
    App = 'App',
    Db = 'Db'
}

const AppConfig = registerAs(ConfigKeys.App, () => ({
    PORT_SERVER: 8080,
    TOKEN_HASH: "$2a$12$jPJ2xNAsAS8BMRPNV.5y6e5n.Qz8NrhIWz6ehKOz9y81y6lSGWdxq",
    TOKEN_ACC: "$2a$12$n/MK5OUhC96CpoJp3/5JROGabMp4HkkGLpb662nC4t4gFxGOBiOT.",
    TOKEN_ACC_T: "1d",
    TOKEN_REF: "$2a$12$RQPsG2SslgOpXi7htxFeoOXBkgBNbmqAD2.IaB9ckvhjh.He026xO",
    TOKEN_REF_T: "3d",
}))

const DbConfig = registerAs(ConfigKeys.Db, () => ({
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Mehr@2003',
    database: 'anbar',
}))

export const configurations = [AppConfig, DbConfig]