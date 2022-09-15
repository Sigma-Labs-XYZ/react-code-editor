const challenges = [
  {
    id: 1,
    title: "Sigma Labs: Overview",
    showEditor: false,
    showRun: false,
    showInstructions: true,
    instructions: `# Welcome to your Stage 3 Technical Assessment!

**Please read all of this document before starting.**

## Structure

This assessment is split into two halves

1. 30 minutes of solo-coding
2. 30 minutes of code review and pair programming. 

## Your Aims

Your goal is to make it as far through these exercises as you can. If you get stuck - that's fine - all that means is that you will work through what you're stuck on with a coach. **Getting stuck does not mean you are failing the assessment.**

It is also worth nothing - **there is far too much work here** to get done in the time we've given you. You aim is not to complete everything here. We will continue to work on the challenges here in your interview.

## What we're looking for

The qualities we are search for in this process are 

- Problem solving
	- Can you solve problems using code?
- Self-driven learning
	- Do you want drive yourself towards full understanding?
- Code Sequencing
	- Do you understand how code fits together?
- Abstraction
	- Do you understand how to reuse code?
- Pleasant
	- Are you nice to work with?

## Guidelines

- When working with a coach, ask for help whenever you need it. 
- Your interviewer is there to help you work out the solutions to the problems.
- Verbalise your thinking. Try to think out loud about what you're doing - this is the easiest way for your interviewer to be able to help you.
	  
## Rules

1. You **are** allowed to use Google to help you to research JavaScript syntax and functions.
   - e.g. "Is there a JavaScript function that reverses a string?"
   - e.g. "How do I write a for loop?"
   - e.g. "What is the syntax for a function?" 
2. You are **not** allow to use Google to search for answers to the problems. You will be tested on the code you wrote in your interview. It will be very clear if you have used Google to help you.
   - e.g. "Sigma Labs Interview Stage 3 Solution"
   - e.g. "How to reverse a string in JavaScript?"
3. You are allowed to use any notes you have made from what you have learnt so far.
    `,
    code: ``,
  },
  {
    id: 2,
    title: "Task 1: Using Functions",
    showEditor: true,
    showRun: true,
    showInstructions: true,
    instructions: `
Lets get started with a couple of simple console.logs.

When you run 'node 01_logging.js' in the shell you should see 

      Hello Chris!
      Hello Sonali!

Run this command now and check you have the right outcome.

---

However, when we write code we should stick to the DRY principle - Don't Repeat Yourself. If we look at the code above we are repeating the words 'Hello' in both lines - this isn't ideal.

Let's write a new function to help us with that - **greetingFor()**

---

### Your Task

Edit Lines 6 and 7 so that instead of having to write the word "Hello" twice, you use the function instead. 

Do not edit the greetingFor() function


`,
    code: `
function greetingFor(myName) {
   return "Hello " + myName + "!";
}

console.log("Hello Chris!");
console.log("Hello Sonali!");
`,
  },
  {
    id: 3,
    title: "Task 2: Using Arrays",
    showEditor: true,
    showRun: true,
    showInstructions: true,
    instructions: `
Now for something a little more complex involving arrays.

I've created an array called 'names' below that contains a few names. 

### Your Task

Write some code that will print each of the names preceded by 'Hello'. The expected outcome should be

      Hello Chris!
      Hello Daniela!
      Hello Matthew!

It's worth thinking about:

- What happens if the length of the array changes? Will you have write more lines of code?
- What happens if the array is 1000 element long? Will you code cope with that?


`,
    code: `
function greetingFor(myName) {
  return "Hello " + myName + "!";
}

const names = ["Chris", "Daniela", "Matthew"];
`,
  },
];

export default challenges;
