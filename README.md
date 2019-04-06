# A Really stupid Apache Sling URL Parser

This is a stupid implementation to parse [Apache Sling Url](https://sling.apache.org/documentation/the-sling-engine/url-decomposition.html) in JS. **You shoukd really use [Sluri](https://github.com/nateyolles/sluri)**.

I built this for fun. It only supports Modern browsers (Sorry not sorry IE) and NodeJs 10+. Also, it is EXTREMELY small! ~1KB minified. Sluri is 6.5 KB minified but has a lot more functionality.

## Usage

```js
const slingUrl = new SlingUrl('/a/b.s1.html/c/d');


console.log(slingUrl.resourcePath) // returns: "/a/b"
console.log(slingUrl.selectors)    // returns ["s1"]
console.log(slingUrl.extension)    // returns "html"
console.log(slingUrl.suffix)       // returns "/c/d"

// if any of the properties above does not exist, null is returned.
```