const { exception } = require("console");
const functions = require("./functions.js");

//function findLongestString
//check if function returns the longest string in array
test("returned string contains the 'welcome'", () => {
    const arr = ['welcome', 'hey', 'hello'];
    expect(functions.findLongestString(arr)).toContain("welcome");
});

//check if function returns the 'only strings are allowed as input' if array containts something instead strings
test("returned string contains the 'only strings are allowed as input'", () => {
    const arr = ['welcome', 123, 'hello'];
    expect(functions.findLongestString(arr)).toContain("only strings are allowed as input");
});


//function checkTheEnding
test("returned true if string 'welcome' ends with 'ome'", () => {
    expect(functions.checkTheEnding('welcome', 'ome')).toBe(true);
});

test("returned false if string 'welcome' ends with 'end'", () => {
    expect(functions.checkTheEnding('welcome', 'end')).toBe(false);
});

test("returned 'both strings are required' if one of the strings is empty", () => {
    expect(functions.checkTheEnding('welcome', '')).toContain("both strings are required");
});

test("fetched user's name should be Clementine Bauch", async () => {
    expect.assertions(1);
    const userId = 3;
    const data = await functions.getUsernameByID(userId);
    expect(data.name).toEqual("Clementine Bauch");
});

test("returned 'error' if no userId provided", async () => {
    expect(functions.getUsernameByID()).toContain("error");
    expect(functions.getUsernameByID(null)).toContain("error");
});



