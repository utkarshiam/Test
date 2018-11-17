process.stdout.write("Server started....\n");

process.stdin.on("data", (data)=> {

      //console.log(data);
      process.stdout.write(data);
      if(data.toString().trim()==="exit"){
        process.exit();
      }
})
process.on("exit", ()=>{

        process.stdout.write("Server Shutting down....\n");
})
