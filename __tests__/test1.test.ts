// app.test.ts
import request from "supertest";
import app from "../src/app";
import { expect, it, describe } from '@jest/globals';

describe('Test de las rutas', () => {
  it('resultado 2', () => {
    const result = 1 + 1;
    expect(result).toBe(2);
  });
  
});
