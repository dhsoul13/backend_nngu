const mode = process.env.MODE;
if(mode === "dev"){
    console.log(mode)
}
let  userName = process.argv[2];
let  userAge = process.argv[3];
if (userName){
    console.log(`Hello, ${userName}. Your age is ${userAge || "not"}`)
    process.exit(1);
} else {
    console.log(`Hello, Node js`)
}
process.exit(0);