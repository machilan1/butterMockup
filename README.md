# Review

## Workspace

* node_modules should be excluded in your version control. A file named ".gitigonre" should be added
* Folder "style" should be named in plural form, since most of the time you'll have many different style sheets rather than a single file
* Folder "script" should be named in plural form
* Folder "asset" shold be named in plural form
* Some files have never been used, better delete them

## CSS

* px unit should be avoided most of the time, em & rem are preferred
* header@desktop - overlapped content
* Responsive design should be adjusted in CSS not js for readability & performance
* "transform: translate()" should be avoided if other layout properties like padding & margin can do the job
* "transition: ..." should specify target properties, e.g. "transition: transform .4s"
* Should include some kind of "reset.css" to remove default styles of different browsers on all elements

## js

* If same element will be used several times, better assign it to a variable for better readability & performance
* Take a look at ES6 new features for better & easier array manipulation
* Use arrow function instead of anonymous function, e.g. () => {} instead of function() {}
* If multiple call back functions act in the same manner, better wrap the logic in a seperate function and just call it

## html

* Make use of sementic html elements for better SEO & readability
