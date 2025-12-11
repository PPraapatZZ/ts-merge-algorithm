# TypeScript Merge Algorithm

A TypeScript implementation of a three-way merge algorithm that combines three sorted arrays into a single sorted array in ascending order **without using any sort function**.

## Problem Statement

Implement a function with the following interface:

```typescript
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

**Constraints:**
- `collection_1` is sorted from min to max (ascending)
- `collection_2` is sorted from min to max (ascending)
- `collection_3` is sorted from max to min (descending)
- The result must be sorted in ascending order
- **No sort function is allowed**

## Algorithm

The implementation uses a **three-way merge algorithm** with the following approach:

1. **Reverse reading of collection_3**: Since `collection_3` is sorted in descending order, we read it from the end (backwards) to treat it as ascending.

2. **Three-pointer technique**: We maintain three pointers:
   - `i` for `collection_1` (starts at 0)
   - `j` for `collection_2` (starts at 0)
   - `k` for `collection_3` (starts at the last index)

3. **Iterative merging**: At each step, we compare the current elements from all three arrays and add the smallest one to the result.

4. **Handle remaining elements**: After one or more arrays are exhausted, we continue merging the remaining arrays using two-way merge, then one-way append.

**Time Complexity**: O(n + m + p) where n, m, p are the lengths of the three arrays  
**Space Complexity**: O(n + m + p) for the result array

## Project Structure

```
ts-merge-algorithm/
├── src/
│   ├── index.ts           # Main export file
│   ├── merge.ts           # Merge algorithm implementation
│   ├── merge.test.ts      # Unit tests
│   └── example.ts         # Example usage demonstrations
├── dist/                  # Compiled JavaScript output (generated)
├── coverage/              # Test coverage reports (generated)
├── node_modules/          # Dependencies (generated)
├── .gitignore
├── jest.config.js         # Jest configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── QUICKSTART.md          # Quick start guide
└── README.md              # This file
```

## Prerequisites

- **Node.js** (version 16 or higher recommended)
- **npm** (comes with Node.js)

## Setup Instructions

### 1. Clone or Download the Repository

If you're using Git:
```bash
git clone <repository-url>
cd ts-merge-algorithm
```

Or if you downloaded the project, navigate to the project directory:
```bash
cd ts-merge-algorithm
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

This will install:
- TypeScript
- Jest (testing framework)
- ts-jest (TypeScript preprocessor for Jest)
- Type definitions for Node.js and Jest

## Usage

### Build the Project

Compile TypeScript to JavaScript:

```bash
npm run build
```

This creates the `dist/` directory with compiled JavaScript files.

### Run the Example

To see the merge function in action with various examples:

```bash
npm run example
```

This will compile and run the example file demonstrating different use cases.

### Run Unit Tests

Execute all tests:

```bash
npm test
```

Run tests in watch mode (auto-rerun on file changes):

```bash
npm run test:watch
```

Generate test coverage report:

```bash
npm run test:coverage
```

### Use in Code

After building, you can import and use the merge function:

```typescript
import { merge } from './src/merge';

const collection_1 = [1, 3, 5, 7];
const collection_2 = [2, 4, 6, 8];
const collection_3 = [9, 5, 1];  // Note: sorted from max to min

const result = merge(collection_1, collection_2, collection_3);
console.log(result);  // Output: [1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9]
```

## Example

```typescript
// Example 1: Basic merge
merge([1, 3, 5], [2, 4, 6], [9, 7, 1])
// Result: [1, 1, 2, 3, 4, 5, 6, 7, 9]

// Example 2: With negative numbers
merge([-5, -3, -1], [-4, -2, 0], [2, 0, -2])
// Result: [-5, -4, -3, -2, -2, -1, 0, 0, 2]

// Example 3: With duplicates
merge([1, 2, 3], [2, 3, 4], [5, 3, 2])
// Result: [1, 2, 2, 2, 3, 3, 3, 4, 5]

// Example 4: Empty arrays
merge([], [1, 2], [3, 2])
// Result: [1, 2, 2, 3]
```

## Test Coverage

The project includes comprehensive unit tests covering:

✅ Basic functionality with typical inputs  
✅ Edge cases (empty arrays, single elements)  
✅ Duplicate values across arrays  
✅ Negative numbers and mixed positive/negative  
✅ Arrays of different lengths  
✅ Extreme values (very large numbers, zero)  
✅ Verification that output is properly sorted  
✅ Real-world scenarios (sensor data, timestamps)

Run `npm run test:coverage` to see detailed coverage metrics.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run example` | Build and run example demonstrations |
| `npm test` | Run all unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |

## Dependencies

### Production Dependencies
None - this is a pure algorithm implementation with no runtime dependencies.

### Development Dependencies
- `typescript` - TypeScript compiler
- `jest` - Testing framework
- `ts-jest` - TypeScript preprocessor for Jest
- `@types/jest` - Type definitions for Jest
- `@types/node` - Type definitions for Node.js

## Notes

- This implementation does **not** use any built-in sort functions (`.sort()`, etc.)
- The algorithm efficiently merges three arrays in a single pass
- All arrays are processed exactly once (optimal performance)