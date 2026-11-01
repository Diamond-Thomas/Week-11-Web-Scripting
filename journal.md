### What did you accomplish in this phase? Why is using "use strict"; considered a “safety net” for developers?
I created a function that takes in some value and cross checks the value in my function to match and printing something out based on if they math or not. Using strict is considered a safety net because it can ensure that javascript throws errors if something is not working verses how javascript usually behaves for a large portion or errors which is to bypass them and continue to run.

### What is the difference between returning a value (like "Access Denied") and throwing an error? Why would a developer prefer throwing a custom error class over a generic Error?

Throwing a custom error especially if your error describes what went wrong or where it went wrong can make it easier to identify compared to just being able to see where the error is.