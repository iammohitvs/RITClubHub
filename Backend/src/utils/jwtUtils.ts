import { SignJWT, jwtVerify, JWTPayload } from 'jose';

// Use a strong secret key stored in an environment variable for security
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

// Define the structure of the payload that will be included in the token
interface CustomJWTPayload extends JWTPayload {
  userId: number;   // Unique identifier for the user (from the Account model)
  type: string;      // User role, e.g., 'club' for club accounts or 'student'
  clubId?: number;   // Optional: the ID of the club the user is associated with (if applicable)
}

// Generate a JWT token for the user
export async function generateToken(payload: CustomJWTPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })    // Signing algorithm (HS256)
    .setIssuedAt()                            // Issued at claim ('iat')
    .setExpirationTime('1h')                  // Token expiration (1 hour)
    .sign(SECRET);                            // Signing the token with the secret
}

// Verify the JWT token to authenticate the user
export async function verifyToken(token: string): Promise<CustomJWTPayload> {
  const { payload } = await jwtVerify(token, SECRET);
  return payload as CustomJWTPayload;  // Ensure the decoded payload matches the CustomJWTPayload type
}
