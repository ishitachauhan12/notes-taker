const notes = require('./notes.js')
const yargs=require('yargs')
const chalk= require('chalk');

//adding a note
yargs.command({
    command:'add',
    describe:'adds a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:'true',
            type:'string',
        },
        body:{
            decription:"this is the body",
            demandOption:true,
            type:'string,'
        }
    },
    handler(argv){
        notes.getNotes();
        notes.addNotes(argv.title,argv.body);
      
    }
})

//removes a note
yargs.command({
    command:'remove',
    describe:'removes a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:'true',
            type:'string',
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//listing a note
yargs.command({
    command:'list',
    describe:'listing notes',
    handler(){
        notes.listNotes()
    }
})

//reading a note
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'read notes',
            demandOption:'true',
            type:'string',
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

yargs.parse();