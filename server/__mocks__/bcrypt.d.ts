/// <reference types="jest" />

declare module 'bcrypt' {
    export const hash: jest.Mock;
}