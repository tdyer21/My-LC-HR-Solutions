# Cracking the Coding Interview
The following document is going to serve as my note taking method for 
_Cracking the Coding Interview_ by Gayle Laakmann Mcdowell

## Firstly, markdown notes.
- Use double asterisk to make text bold **Like this** 
- Use single asterisk or underscore to make text italicized

> An example of a block quote
> and multiline
> > and nested
> end of block quote

`
for(let i = 0; i < len; i++) {
    console.log('Testing embedded code');
}
`

## The Interview Process
- The majority of the interview process is likely algorithm/coding
- Verbalize your thought process when tackling problems
- Will generally be assessed on the following:
1. __Analytical skills__: did you need help, how optimal was the solution, etc
2. __Coding skills__: able to successfully translate your algorithm to reasonable code?
3. __Technical knowledge__: Do you have a strong foundation in cs/related tech?
4. __Experience__: Have you made good technical decisions in the past, or built challenging projects?
5. __Culture fit/communication skills__: Do your personality and values fit with the company?

#### Where do the Questions come from?
- Generally interviewers select their own questions
- There is not such thing as a 'Google' interview question, its all contingent on the interviewer
- It's all relative, dont panic if you get a hard question, everyone else thinks its hard aswell.

#### Interview Structure
- Generally 2-3 Phone screenings, and 3-6 on site interviews. 
- Always ask if phone screening interviews will include technical questions
  

### Important Questions to prep:
- _Why do you want to work at x company?_: Prove that you're passionate about the companyn  
   
   
   
   
## Before an Interview
> "Few things are as impressive to an interviewer as a candidate who built something just for fun."

### Writing a good resume
- Adding less relevant stuff just distracts from the impressive parts of a resume.
- All that matters and all that you have to prove is that you're smart, and you can code.

#### Add a projects section to my actual resume **flag**
- Include 2 - 4 most significant projects. State what the project was and what technologies and languages it employed. Whether or not the project was individual. Independant projects > course projects as they show more initiative.

#### What languages should you list?
- Anything on your resume is considered fair game - caveat is whether or not you list your skill set with the given language. 
  

### Track Misztakes
- Keep a log of the questions you tend to miss when trying practice questions so you know what to go back to later on. 
\
\
## Behavioral Questions
\
\
Make an interview Prep Grid.(page 32)
- Have a story prepped for "Tell me about yourself"
(I have experiences all across the map with different frameworks and languages, and pride myself in my ability to learn quickly.) Additionally, tie your answer into why you should be considered for the role and casually drop in some self plugs like things you accomplished. (because of my ability to adapt quickly I feel like I would thrive in this small team environment).

### General tips
- When asked your greatest weakness: actually give one, otherwise you sound arrogant.
- When describing your technical projects, focus your individual contributions instead of going on at length about the group, use I instead of we.

### Structuring an answer
"Tell me about a time you had to persuade a group of people to make a big change. 
- first provide a nugget, or interesting piece of information "Sure, let me explain how I convinced my school to let undergrads teach courses."

#### Know your technical projects
- Deeply understand what you're going to say about each technical project you've worked on, why you had a large part in the project's success and what components were difficult.

#### Questions to ask
- **Genuine Questions**: What is the interaction like between teams here? What brought you to this company?
- **Insightful Questions**: Why does your software do X instead of Y?
- **Passion Questions**: Will I have the ability to be a part of other teams and learn skills outside my job description?

\
\
\
\

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
Omega is the equivalent concept but for lower bound
#### Theta(big Theta):
Combination of both, you know if an alg is both O(n) and Omega(n) then theta gives a tight bound on runtime. 

#### Disclaimer
Industry tends to use O(n) to describe more of what theta actually describes. 

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
