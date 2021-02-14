const axios = require('axios');
const functions = {

    findLongestString: (arr) => {

        if (!arr.every(i => (typeof i === "string"))) {
            return "only strings are allowed as input"
        }

        const longest = arr.reduce(
            function (a, b) {
                return a.length > b.length ? a : b;
            }
        )
        return longest;
    },

    checkTheEnding: (str, subStr) => {
        return str.length > 0 && subStr.length > 0 ? str.endsWith(subStr) : "both strings are required"
    },
    getUsernameByID: (userId) => {

        if (!userId) {
            return "error";
        }

        return axios
            .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.data);
    }
};

module.exports = functions; 