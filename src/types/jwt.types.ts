import { Role, TokenType } from '@/constants/type'
// tạo 'union type' lấy ra các keys của đối tượng TokenType,RoleType
export type TokenTypeValue = (typeof TokenType)[keyof typeof TokenType] // Ex: type TokenTypeValue = "ForgotPasswordToken" | "AccessToken" | "RefreshToken" | "TableToken"
export type RoleType = (typeof Role)[keyof typeof Role] // Ex: type RoleType = "Owner" | "Employee" | "Guest"
export interface TokenPayload {
    userId: number
    role: RoleType
    tokenType: TokenTypeValue
    exp: number
    iat: number
}

export interface TableTokenPayload {
    iat: number
    number: number
    tokenType: (typeof TokenType)['TableToken']
}
