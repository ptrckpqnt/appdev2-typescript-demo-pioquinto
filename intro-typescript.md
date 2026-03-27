# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Basic TypeScript. 
Nakita natin paano magdeclare ng variable na may type at anong mangyayari kapag maling type ang na-assign.

## 02-vanilla-js-types.js
Dito, nag-experiment tayo gamit ang `typeof` para malaman ang type ng variable habang tumatakbo ang code. 
Parang sa JavaScript lang pero makikita ang kaibahan sa TS.

## 03-flexible-types.ts
Makikita dito yung `any` type, kasi puwede mong palitan ang variable sa kahit anong type. 
Super flexible pero may risks rin kasi nawawala yung type safety, ganon.

## 04-arrays-objects.ts
Dito, pinakita kung paano gumawa ng arrays na may iba’t ibang types, objects na may nested properties, at flexible objects gamit ang `Record` type.

## 05-enum.ts
Dito pinakita kung paano ginagamit ang enum or sa madaling salita ay enumeration ng group ng constant variables gamit ang isang class na sa example dito ay `Role`.