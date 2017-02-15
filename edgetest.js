/**
 * Created by Administrator on 2017/2/8.
 */
var edge = require('edge');

var helloWorld = edge.func(`
    async (input) => { 
        return ".NET Welcomes " + input.ToString(); 
    }
`);

var add7 = edge.func(`
    async (input) => {
        return (int)input + 7;
    }
`);

var add8 = edge.func(require('path').join(__dirname, 'add7.csx'));

helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
});

add7(3,function (error, result) {
    if (error) throw error;
    console.log(result);
})
