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
E. student.courseLoad[0]\
