const users= []

//addusers,removeuser,Getusers,getUsersinRoom
const addUser=({id,username,room})=>{
    //clean the data
    username=username.trim().toLowerCase()
    //valid the data
    if(!username||!room){
        return{
            error:'username or room are required!'
            
        }
    }

    //check for existing users
    const existingUser= users.find((user) =>{
        return user.room===room && user.username==username

    })
    if(existingUser){
        return{
            error:'username is already in use!'
            
        }
    }
    //storing user
    const user={id,username,room}
    users.push(user)
    return{user}
}
   const removeUser=(id)=>{
       const index=users.findIndex((user) => user.id===id)
       if (index!==-1){
           return users.splice(index,1)[0]
       }
   }
   const getUser=(id)=>{
       return users.find((user)=>user.id===id)
   }
   const getUsersinRoom=(room)=>{
       room=room.trim().toLowerCase()
       return users.filter((user)=>user.room===room)
   }
        module.exports={
            addUser,
            removeUser,
            getUser,
            getUsersinRoom
        }
