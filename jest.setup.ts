import "@testing-library/jest-dom";
import { deserialize, serialize } from "node:v8";

if (!globalThis.structuredClone) {
  const clone = <T>(value: T): T => deserialize(serialize(value)) as T;
  globalThis.structuredClone = clone;
  window.structuredClone = clone;
}

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
