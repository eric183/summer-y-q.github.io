/// <reference types="next-auth/react" />
export {};

declare global {
  interface Window {
    ethereum: any;
    camera: any;
    three: any;
  }
}
// {
//   "compilerOptions": {
//     "module": "commonjs",
//     "declaration": true,
//     "removeComments": true,
//     "emitDecoratorMetadata": true,
//     "experimentalDecorators": true,
//     "allowSyntheticDefaultImports": true,
//     "target": "es2017",
//     "sourceMap": true,
//     "outDir": "./dist",
//     "baseUrl": "./",
//     "incremental": true,
//     "skipLibCheck": true,
//     "strictNullChecks": false,
//     "noImplicitAny": false,
//     "strictBindCallApply": false,
//     "forceConsistentCasingInFileNames": false,
//     "noFallthroughCasesInSwitch": false
//   }
// }
