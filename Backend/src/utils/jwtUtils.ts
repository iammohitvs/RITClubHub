import { SignJWT, jwtVerify, JWTPayload } from 'jose';


const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);


interface CustomJWTPayload extends JWTPayload {
  userId: number;   
  type: string;      
  clubId?: number;   
}


export async function generateToken(payload: CustomJWTPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })    
    .setIssuedAt()                            
    .setExpirationTime('1h')                  
    .sign(SECRET);                            
}


export async function verifyToken(token: string): Promise<CustomJWTPayload> {
  const { payload } = await jwtVerify(token, SECRET);
  return payload as CustomJWTPayload;  
}
