# Technical Questions

- Technical questions form the basis for how many companies interview. They can be intimidating, there are logic ways around them

## How to prepare: 
For each problem in CTCI do the following:
- Try to solve the problem on your own (hints in the back of the book) thinking about space and time efficiency
- Write code on paper
- Test code on paper (run through error cases)
- Type paper code into an interpreter


### Need to know: Data structures, Algorithms, Concepts
- **Data Structures**: Linked lists, Trees/tries/graphs, Stacks & Queues, Heaps, Vectors/Arraylists, **Hash tables**
- **Algorithms**: Breadth first search, Depth first search, Binary search, Merge sort, Quick sort.
- **Concepts**: Bit manipulation, memory (stack vs. heap), recursion, dynamic programming, Big O time and space. 


## Walking through a problem
1. **Listen** - any and all information in the problem description is likely relavant for an optimal algorithm
2. **Example** - Debug the given example
3. **Brute Force** - Come up with a brute force solution, state it and its runtime and move from there. 
4. **Optimize** - BUD Optimization (look for unused info, reverse engineer thought process, solve it incorrectly, time/space tradeoff)
5. **Walk through** - Walk through the approach in detail, understanding each detail before you code. 
6. **Implement** - Write **Beautiful** code, modularize code from the beginning and refactor to clean up.
7. **Test** - Concept test (walk through) - Unusual or non standard code - hot spots - small test cases - special cases and edge cases

**Bud Optimization** = Bottlenecks, Unnecessary work, Duplicated work


#### Step 1 - Listen
- Note any unique or obscure information. If it is specified that an array is sorted, that is likely important for achieving optimal runtime. 

#### Step 2 - Draw an example
- Immediately draw, use real examples and non-balanced trees, and large examples.

#### Step 3 - State a brute force algorithm
- Its ok for your first algorithm to not be super optimal, its not assumed that you know the easy answer, some people might not
- Exaplain space/time complexity of your solution and improve from there. 

#### Step 4 - Optimize
Optimize your brute force algorithm.
- Look for unused information. Were you told that the array was sorted? How can we leverage that?
- Use a fresh example
- Solve 'incorrectly' 
- Time/space tradeoff, often adding more state can help reduce runtime
- Precompute information
- Use a hash table - should be at the top of your mind. 
- Think about the best conceivable runtime. 

#### Step 5 - Walkthrough
- Dont dive into code yet, walk through your algorithm
- 'Perfect' it before you type

#### Step 6 - Implement
- Write code on the whiteboard


#### Step 7 - Test
- 1: Concept test (does the code do what it should be doing when you describe it out loud)
- 2: Weird looking code (length - 2) etc, is it really necessary?
- 3: Hot spots, Base cases in recursive code, integer division, null nodes etc. 
- 4: Small test cases


### Optimize and Solve Technique 1 - BUD
**BUD**
**B**ottlenecks
**U**nnecessary work
**D**uplicated work

The three most common things that an algorithm wastes time doing. 

- **Bottlenecks**: If we have one component of our solution that takes O(N*logN) and another that takes O(N), you should focus on improving the NlogN component, as the N is irrelevant in relation. 
- **Unnecessary Work**: If you have already found a solution and keep iterating for whatever reason its unnecessary. 

### Optimize and Solve Technique 2 - DIY
- When given a sorted array, it isnt instinct to use binary search without previous knowledge, but given a phone book and a name - you generally pick a spot in the middle and go from there, naturally binary searching
- If its easier to solve a certain way in your brain, its likely easier to solve that way for the computer. 

### Optimize and Solve Technique 3 - Simplify and Generalize
