### What did you accomplish in this phase? Why is using "use strict"; considered a “safety net” for developers?
I created a function that takes in some value and cross checks the value in my function to match and printing something out based on if they math or not. Using strict is considered a safety net because it can ensure that javascript throws errors if something is not working verses how javascript usually behaves for a large portion or errors which is to bypass them and continue to run.

### What is the difference between returning a value (like "Access Denied") and throwing an error? Why would a developer prefer throwing a custom error class over a generic Error?

Throwing a custom error especially if your error describes what went wrong or where it went wrong can make it easier to identify compared to just being able to see where the error is.

### How does the finally block behave differently than the catch block? Describe a real-world scenario where a finally block would be critical for a program’s stability.

the finally block runs no matter if the catch block runs or not. The catch block only runs if something is wrong with the try block but finally runs no matter what. Finally may be important for a programs stability if you need something to send somewhere even if there is an error or not. right now all my finally if doing is printing something out but you can also do things with your data after the try catch block using finally.

### PROBLEMS OCCURED DURING THIS PHASE
for some reason their is an extra error message and extra completed message at the beginning. I don't know why this is but because it is not causing problems for my current code i'm going to move on.