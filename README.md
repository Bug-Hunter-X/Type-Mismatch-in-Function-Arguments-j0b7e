# Type Mismatch in Function Arguments

This example demonstrates a common error in TypeScript where a function is called with arguments of incorrect types.  The `add` function is defined to take two numbers, but the code attempts to call it with a string and a number, causing a type error.

## Solution

The solution involves ensuring the function receives the correct types of arguments. The solution file (`bugSolution.ts`) provides a fix by either explicitly checking types before performing addition or using a type guard.