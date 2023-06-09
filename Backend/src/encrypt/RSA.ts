import * as jose from 'node-jose';

export async function generarLlavesRSA(): Promise<{ llavePublica: jose.JSONWebKey, llavePrivada: jose.JSONWebKey }> {
    // Crea un nuevo KeyStore
    const keystore = jose.JWK.createKeyStore();
  
    // Genera las llaves RSA de 2048 bits
    const llaves = await keystore.generate('RSA', 2048, { alg: 'RSA-OAEP-256' });
    llaves
    // Obtén las llaves en formato JWK
    const llavePublica = keystore.get({ use: 'enc' });
    const llavePrivada = keystore.get({ use: 'dec' });
  
    // Retorna las llaves generadas
    return {
      llavePublica,
      llavePrivada
    };
  }