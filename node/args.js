var program_name = process.argv[0];
var script_name = process.argv[1];
var first_value = process.argv[2];
var second_value = process.argv[3];

if (first_value == second_value) {
  console.log("Values are same", first_value, second_value)
}
else {
  console.log("Values are NOT same:", first_value, second_value)
};
