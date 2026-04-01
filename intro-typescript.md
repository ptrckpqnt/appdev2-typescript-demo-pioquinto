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

## 06-alternative-to-enum.ts
Sa part na ito, gumamit tayo ng literal types bilang kapalit ng enum. 
Mas direct siya gamitin at pwede mong i-limit ang values ng variable sa specific choices lang tulad ng roles.

## 07-custom-type-role.ts
Dito naman, gumawa tayo ng sariling types gamit ang `type`. 
Nakatulong ito para mas malinaw at reusable ang structure ng data, lalo na sa paggawa ng User object na may role at permissions.

## 08-functions.ts
Sa file na ito, sinubukan natin iba’t ibang paraan ng paggamit ng functions sa TypeScript. 
May return types, special types tulad ng `void` at `never`, at pati pag-pass ng function bilang argument.

## 09-special-types.ts
Dito, pinaglaruan natin ang `null` at `undefined`. 
Makikita kung kailan sila pwede gamitin at paano sila pagsamahin sa ibang types para mas flexible ang variables.

## 10-form.html & 10-type-narrowing.ts
Sa section na ito, gumamit tayo ng simpleng form para ipakita ang type narrowing. 
Bago gamitin ang input element, chineck muna kung existing ito para maiwasan ang runtime error.

## 11-optional.ts
Dito, tinest natin ang optional values sa parameters at objects gamit ang `?`. 
Kasama rin ang paggamit ng `??` at `||` para makita ang difference nila sa pag-handle ng default values.