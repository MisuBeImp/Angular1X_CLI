module.exports.createModule = createModule;
var fileSystem = require('fs');
function createModule() {
    var option = process.argv[2];
    var moduleName = process.argv[3];
    if (option) {
        console.log(option);
        if (moduleName) {
            console.log(moduleName);
            console.log("command accepted");
            if (option === '-c') {
                createController(moduleName);
            } else if (option === '-d') {
                createDirective(moduleName);
            } else if (option === '-f') {
                createFactory(moduleName);
            } else if (option === '-s') {
                createService(moduleName);
            } else if (option === '-v') {

            }
        } else {
            console.log("must have the option");
        }
    } else {
        console.log("must have the module name");
    }
}


function createDirective(name) {
    fileSystem.readFile('template/directive.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(__dirname + '/'+ name.toLowerCase() + '.directive.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, name) {
            name = name.toLowerCase();
            var updatedList = data.replace(/directiveName/g, name);
            return updatedList;
        }
    }
}

function createController(name) {
    fileSystem.readFile('template/controller.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(__dirname + '/'+ name.toLowerCase() + '.controller.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }

        function getUpdateData(data, name) {
            name = name.toLowerCase();
            var updatedList = data.replace(/controllerName/g, name + 'Controller');
            return updatedList;
        }
    }
}
function createService(name) {
    fileSystem.readFile('template/service.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(__dirname + '/'+ name.toLowerCase() + '.service.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
        function getUpdateData(data, name) {
            name = name.toLowerCase();
            var updatedList = data.replace(/serviceName/g, name + 'Service');
            return updatedList;
        }
    }
}
function createFactory(name) {
    fileSystem.readFile('template/factory.txt', 'utf8', readData);
    function readData(error, data) {
        if (error) {
            return console.log(error);
        }
        var updatedDate = getUpdateData(data, name);
        fileSystem.writeFile(__dirname + '/'+ name.toLowerCase() + '.factory.js', updatedDate, 'utf8', writeData);
        function writeData(error) {
            if (error) {
                return console.log(error);
            }
        }
        function getUpdateData(data, name) {
            name = name.toLowerCase();
            var updatedList = data.replace(/factoryName/g, name + 'Factory');
            return updatedList;
        }
    }
}