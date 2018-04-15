var program = require('commander');
var colors = require('colors');

program
    .version('0.0.1')
    .usage('[options] [value ...]')
    .option('-u, --url <string>', 'Add url')
    .option('-s, --send <string>', 'Add send cmd')
    .parse(process.argv);

function make_red(txt) {
    return colors.red(txt); //display the help text in red on the console
}

if (!process.argv.slice(2).length) {
    program.outputHelp(make_red);
}
//添加额外的文档描述
program.on('--help', function() {
    console.log('   Examples:')
    console.log('')
    console.log('       -u ws://example.com:12345 -s ping')
    console.log('       ')
});
console.log("ad")
if (!program.url)
{
    return ;
}
console.log(' --url %s',program.url);
if (!program.send)
{
    return;
}
console.log('  --send %s',program.send);

var ws = require('./wsclient')
ws.ws(program.url,program.send)