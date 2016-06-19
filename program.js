var data = process.argv;
var total = 0;

for (var i = 2; i < data.length; i++)
{
  total += Number(data[i]);
}
console.log(total);
