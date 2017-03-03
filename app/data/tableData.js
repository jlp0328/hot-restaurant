// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [{
  name: "Mike Michaelson",
  phone: "555-867-5309",
  email: test@test.com,
  uniqueID: mikeyM
}, {
  name: "Jack Johnson",
  phone: "555-867-5309",
  email: test1@test.com,
  uniqueID: jackJ
}, {
  name: "Jimmy Jameson",
  phone: "555-867-5309",
  email: test2@test.com,
  uniqueID: jimmyJ
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
