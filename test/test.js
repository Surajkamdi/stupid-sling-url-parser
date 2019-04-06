var assert = require("assert");
var SlingUrl = require("../src/SlingUrl");
const expectedData = [
  {
    URI: "/a/b",
    "Resource Path": "/a/b",
    Selectors: null,
    Extension: null,
    Suffix: null,
    "Resource Found": "yes"
  },
  {
    URI: "/a/b.html",
    "Resource Path": "/a/b",
    Selectors: null,
    Extension: "html",
    Suffix: null,
    "Resource Found": "yes"
  },
  {
    URI: "/a/b.s1.html",
    "Resource Path": "/a/b",
    Selectors: ["s1"],
    Extension: "html",
    Suffix: null,
    "Resource Found": "yes"
  },
  {
    URI: "/a/b.s1.s2.html",
    "Resource Path": "/a/b",
    Selectors: ["s1", "s2"],
    Extension: "html",
    Suffix: null,
    "Resource Found": "yes"
  },
  {
    URI: "/a/b/c/d",
    "Resource Path": "/a/b/c/d",
    Selectors: null,
    Extension: null,
    Suffix: null,
    "Resource Found": "no!"
  },
  {
    URI: "/a/c.html/s.txt",
    "Resource Path": "/a/c",
    Selectors: null,
    Extension: "html",
    Suffix: "/s.txt",
    "Resource Found": "no!"
  },
  {
    URI: "/a/b./c/d",
    "Resource Path": "/a/b",
    Selectors: null,
    Extension: null,
    Suffix: "/c/d",
    "Resource Found": "yes"
  },
  {
    URI: "/a/b.html/c/d",
    "Resource Path": "/a/b",
    Selectors: null,
    Extension: "html",
    Suffix: "/c/d",
    "Resource Found": "yes"
  },
  {
    URI: "/a/b.s1.html/c/d",
    "Resource Path": "/a/b",
    Selectors: ["s1"],
    Extension: "html",
    Suffix: "/c/d",
    "Resource Found": "yes"
  },
  {
    URI: "/a/b.s1.s2.html/c/d",
    "Resource Path": "/a/b",
    Selectors: ["s1", "s2"],
    Extension: "html",
    Suffix: "/c/d",
    "Resource Found": "yes"
  },
  {
    URI: "/a/b/c/d.s.txt",
    "Resource Path": "/a/b/c/d",
    Selectors: ["s"],
    Extension: "txt",
    Suffix: null,
    "Resource Found": "no!"
  },
  {
    URI: "/a/b.html/c/d.s.txt",
    "Resource Path": "/a/b",
    Selectors: null,
    Extension: "html",
    Suffix: "/c/d.s.txt",
    "Resource Found": "yes"
  },
  {
    URI: "/a/b.s1.html/c/d.s.txt",
    "Resource Path": "/a/b",
    Selectors: ["s1"],
    Extension: "html",
    Suffix: "/c/d.s.txt",
    "Resource Found": "yes"
  },
  {
    URI: "/a/b.s1.s2.html/c/d.s.txt",
    "Resource Path": "/a/b",
    Selectors: ["s1", "s2"],
    Extension: "html",
    Suffix: "/c/d.s.txt",
    "Resource Found": "yes"
  }
];

describe("SlingUrl", function() {
  describe("#resourcePath", function() {
    expectedData.forEach(expected => {
      var expectedPath = expected["Resource Path"];
      it(`should return ${expectedPath} from URL: ${expected.URI}`, function() {
        u = new SlingUrl(expected.URI);
        assert.equal(expectedPath, u.resourcePath);
      });
    });
  });
  describe("#extension", function() {
    expectedData.forEach(expected => {
      var expectedExtension = expected["Extension"];
      it(`should return ${expectedExtension} from URL: ${
        expected.URI
      }`, function() {
        u = new SlingUrl(expected.URI);
        assert.equal(expectedExtension, u.extension);
      });
    });
  });

  describe("#selectors", function() {
    expectedData.forEach(expected => {
      var expectedSelectors = expected["Selectors"];
      it(`should return ${expectedSelectors} from URL: ${
        expected.URI
      }`, function() {
        u = new SlingUrl(expected.URI);
        assert.deepEqual(expectedSelectors, u.selectors);
      });
    });
  });

  describe("#suffix", function() {
    expectedData.forEach(expected => {
      var expectedSuffix = expected["Suffix"];
      it(`should return ${expectedSuffix} from URL: ${
        expected.URI
      }`, function() {
        u = new SlingUrl(expected.URI);
        assert.equal(expectedSuffix, u.suffix);
      });
    });
  });
});
