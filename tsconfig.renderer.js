// tsconfig.renderer.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["vite/client", "node"]
  },
  "include": ["src/renderer"]
}
