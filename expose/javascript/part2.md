1. line 12 prints "2". Since i is a global variable with a final value of 2.
2. Line 13 prints "150". Since discountedPrice is a global variable with a final value of 150.
3. Line 14 prints "150". Since finalPrice is a global variable with a final value of 150.
4. The function returns an array [50, 100, 150]. For each for loop, the calculated final price is pushed into the array
5. It returns an error as i is not defined locally. The previous i is only visible within the for loop.
6. It returns an error as discountedPrice is not defined locally. The previous discountedPrice is only visible within the for loop.
7.  Line 14 prints "150". Since finalPrice is a variable visible to the entire function with a final value of 150.
8.  The function returns an array [50, 100, 150]. For each for loop, the calculated final price is pushed into the array
9.  It returns an error as i is not defined locally. The previous i is only visible within the for loop.
10.  It prints "2" since length is accessible and its value is unchanged.
11.  The function returns an array [50, 100, 150]. For each for loop, the calculated final price is pushed into the array. Discounted is not reassigned.
12.  A. student.name\
B. student['Grad Year']\
C. student.greeting()\
D. student['Favorite Teacher'].name\
E. student.courseLoad[0]
13. A. '32', 2 is converted into string\
B. 1, 3 is converted to number\
C. 3, null converts to 0\
D. '3null', null becomes 'null'\
E. 4, true maps to 1\
F. 0, false and null map to 0\
G. '3undefined', undefined becomes 'undefined'\
H. NaN, undefined is converted as NaN in numeric value
14. A. true, string 2 becomes number 2\
B. false, through string comparison of the first character, '2' > '1'\
C. true, '2' is converted to 2\
D. false, string and number are different types\
E. false, true converts to 1 in number\
F. true, Boolean(2) is true, which strictly equals to true
15. === does not convert values of comparison as == does. If two values are of different types, === directly results in false, while == firstly converts one value to the same type of the other.
17. The result is [2,4,6]. When running each loop of the for loop of function ModifyArray, the code calls the doSomething function and multiply the value from input array by 2 and push it into the newArr.
19. 1432
