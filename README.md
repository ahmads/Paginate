#Paginate

##A Simple JavaScript utility to provide pagination for Arrays.

* `Paginate` - Creates a new `Paginate` form a givin `Array`,
optionally with a specific `Number` of items per page.

    * `page(pageNum)` - Returns the specified page as Array.

    * `next()` - Returns the next page as Array.

    * `prev()` - Returns the previous page as Array.

    * `hasNext()` - Checks if there is a next page as Array.


##Example:

```js
// create some fake data
var fakeData = new Array(32)
	
// create a Paginate object
var pager = new Paginate(fakeData)
	
// print all the pages
while(pager.hasNext())
	console.log(pager.next())
		
// get page 1
console.log(pager.page(1))
	
//then
console.log(pager.next()) // this will print page 2
```

## License 

(The MIT License)

Copyright (c) 2012 Ahmad Salman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
		