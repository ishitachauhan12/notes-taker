const fs=require('fs')
const chalk= require('chalk')

const getNotes= () => ('your notes ...')

const addNotes=(title,body) => {
const notes= loadNotes()
// const duplicateNotes= notes.filter((notes) => notes.title===title)

const duplicateNote=notes.find((notes) => notes.title===title)

if(!duplicateNote)                     //(duplicateNote===undefined)
{
    notes.push({
    title: title,
    body: body
})
saveNotes(notes);
console.log(chalk.green.bold('yeah! A new note added'))
}

else
console.log(chalk.red.bold("error: title already taken"))
}


const removeNotes=(title)=>{
    const notes= loadNotes()
    const notesToKeep=notes.filter((notes)=>notes.title!==title)
    if(notes.length!==notesToKeep.length)
    console.log(chalk.red.inverse("note removed"))
    else
    console.log(chalk.yellow.inverse("no such note title exists"))
    saveNotes(notesToKeep)
}

const listNotes=() => {
const notes=loadNotes()
console.log(chalk.bold.magentaBright("YOUR NOTES!! \n"))
notes.forEach((note) => {
    console.log(chalk.bold.cyan(note.title))
})
}

const readNotes=(title) => {
    const notes=loadNotes()
    const find= notes.find((notes) => notes.title===title)

    if(find){
        console.log(chalk.bold.underline.yellow(find.title+"\n"))
        console.log(chalk.cyan(find.body+"\n"))
        
    }
    else
    console.log(chalk.bold.red("error: type a valid note title"))
}
// for(i=0;i<notes.length;i++){
//     console.log(chalk.bold.yellowBright(notes[i].title) +"\n"+ chalk.italic.cyan(notes[i].body+"\n"))
// }

const saveNotes=(notes)=>{
    const noteJSON =JSON.stringify(notes)
    fs.writeFileSync('notes.json',noteJSON)
    
    }
    
const loadNotes= ()=>{
        try{
            const dataBuffer= fs.readFileSync('notes.json')
            const dataJSON= dataBuffer.toString()
            return JSON.parse(dataJSON)
            
        
        }catch(e){
            return []
        }
    }
    
module.exports= {
                getNotes:getNotes,
                addNotes:addNotes,
                removeNotes:removeNotes,
                listNotes:listNotes,
                readNotes:readNotes
                }
                