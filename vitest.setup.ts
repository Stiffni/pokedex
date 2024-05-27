import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { type Mock, vi, afterEach } from "vitest";

global.fetch = vi.fn() as Mock;

afterEach(() => {
  cleanup();
});
