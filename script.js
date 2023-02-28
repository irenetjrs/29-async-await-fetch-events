// task 1

function getData (url){
   let result = fetch(url);
   let title = [];
   result.then(response => {
            if(response.ok){
               return response.json();
            }
            throw new Error(`Error: ${response.status}`);
         })
         .then((data) => {
         for(let item of data){
            if(item.title[0]==='a'){
               title.push(item);
            }
         }
      });
      console.log(title);
   };
getData('https://jsonplaceholder.typicode.com/todos');

// task 2
