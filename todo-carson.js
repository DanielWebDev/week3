(function(){
  "use strict";

  const prompt = require('prompt');

  const todoObj = {
    todos: ['Buy a car'],
    promptUser: function(){
      console.log(`What do you want to do?\nCREATE: create an item\nREAD: read all items\nCOMPLETE: complete an item\nQUIT: exit the app`);
      prompt.get('action', (err,res) => {
        if (err) todoObj.quit();
        else {
          switch(res.action.toUpperCase()){
            case "CREATE":
              todoObj.createTodo();
              break;
            case "READ":
              todoObj.readTodos();
              break;
            case "COMPLETE":
              todoObj.deleteTodo();
              break;
            case "QUIT":
              todoObj.quit('Exiting');
              break;
            default:
              console.log(`I don't know what that means.`);
              todoObj.promptUser();
              break;
          }
        }
      });
    },
    createTodo: function(){
      prompt.start();
      prompt.get('todo', (err, res) => {
        if (err) todoObj.quit(err);
        else {
          todoObj.todos.push(res.todo);
          todoObj.promptUser();
        }
      });
    },
    readTodos: function(){
      console.log("TODOS==========");
      for(var i = 0; i < todoObj.todos.length; i++){
        console.log(`${i+1}: ${this.todos[i]}`);
      }
      console.log("===============");
      setTimeout(todoObj.promptUser, 2000);
    },
    deleteTodo: function(){
      prompt.start();
      prompt.get('toDelete', function(err,res){
        if (err) todoObj.quit(err);
        else {
          todoObj.todos.splice(Number(res.toDelete) - 1, 1);
          todoObj.promptUser();
        }
      });
    },
    quit: function(err){
      console.log(err);
    },
    init: function(){
      prompt.start();
      todoObj.promptUser();
    }
  }

  todoObj.init();
})();