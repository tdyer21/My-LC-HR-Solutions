## Big O
> Big O time is the language and metric to describe algorithm efficiency. Master this concept.

### Time Complexity - Asymptotic runtime
Suppose you had to transfer a file, if the file is super large it might be more efficient to physically deliver it. 
- **Electronic Transfer**: O(s): "s" is the size of the file you're transferring: time to transfer the file increases linearly with the size of the file. 
- **Airplane Transfer**: O(1): with respect to the size of the file, as the size of the file increases, the time to execute remains constant. 

### Big O/Theta/Omega
#### O (big O):
Describes the upper bound on time, for example an algorithm that prints all the elements of an array might be described as O(n) where n is the length of the array, or O(n^2). This means that the algorithm is at least as fast of these - they denote the worst case runtime. A simple array traversal could also be described as O(n^3) and still be accurate technically, its like saying im at least 5 years old - accurate but not descriptive.
#### Omega(big Omega):
- Omega is the equivalent concept but for lower bound
#### Theta(big Theta):
- Combination of both, you know if an alg is both O(n) and Omega(n) then theta gives a tight bound on runtime. 

#### Disclaimer
- Industry tends to use O(n) to describe more of what theta actually describes. 

\
\

### Example - Quicksort
Quick sort picks a random array element as a **'pivot'** and then swaps elements in the array such that elements less than the pivot appear before elements greater than the pivot. Then recursively does this for the remaining sides.

- **Best Case run time**: If all elements are equal, quicksort will traverse through the array one time on average aka O(N) where N is the length of the array
- **Worst Case run time**: Each pivot chosen happens to be the biggest element in the array, this does not produce sorted subarrays, it just shrinks the subarray by one element and has O(N^2) runtime
- **Average Case run time**: O(NlogN)

> Best, worst, and average case scenarios describe the big O (theta) time for particular inputs (how bad can it be)

### Space Complexity
A parallel concept to time complexity, if we create an array of size n, we require O(n) space, 2d array O(N^2)

Example of O(n) space complexity:
>int sum(int n){
>   if(some condition){
>       return 0;
>   }
>   return n + sum(n-1);
>}

This produces n calls to sum on the stack, thus O(n) space complexity. 

##### If calls dont exist simultaneously on the call stack (not recursive), you only need O(1) space

### What do we not care about:
- It's ok to **drop constants**, don't count individual lines of code because we can't possibly determine execution time of everything, basically we're just counting loops and recursion.
- **Ignore non-dominant terms**, in the case of O(N^2 + N) the '+ N' can be ignored

#### Multi-part algorithms
- When should we add runtimes, and when should we multiply them? for example O(A + B) or O(A * B).
- **Nested loops = multiply**
- **Separate loops = add**

### Amortized Time
- **ArrayLists** are dynamically resizing arrays, we won't run out of space using them because we can simply append. They are implemented using arrays, and when a new element is needed they create a new array with 2x capacity and copy elements. 
- How can we describe the above runtime for adding elements? the array could be full aka O(N) time, or it could have space resulting in O(1) time.

> To account for both, we use **Amortized Time**, allowing us to describe that things balance out eventually, and it really only takes O(1) time to add. 

### Log(N) runtimes
Generally results from divide and conquer/binary search 
- Searching N elements, reduced to N/2 each step
- 16 - 8 - 4 - 2 - 1 = 2^4
- 2^4 = 16 --> log2(16) = 4
- **When the number of elements in the problem space gets halved each iteration, you're looking at O(log N)**

##### With recursive calls, runtime is often O(branches ^ depth) cfv
\
\
\
#### For practice examples of computing O(n) runtime see page 52.