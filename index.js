console.log('my old friends are going trip ');
console.log('lets go to we are also for trip friends');



const deletepost=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('delete things');
            reject('thing deleted success');
        },2000);
    });
}
const Goatrip = async () => {
    try{
    await deletepost();
    const promisetofriendsiwillcome = new Promise((resolve, reject) => {
        setTimeout(() => resolve('money'), 3000);
    });

    const gani = new Promise((resolve, reject) => resolve(`cloths`));

    const rani = new Promise((resolve, reject) => resolve(`food`));
    const prathap = new Promise((resolve, reject) => resolve(`laptop`));
    const harsha = new Promise((resolve, reject) => resolve(`bike`));
    const pranav = new Promise((resolve, reject) => resolve(`petrol`));

   
    
    let money = await promisetofriendsiwillcome;



    let [cloths,food,laptop,bike,petrol]=await Promise.all([gani,rani,prathap,harsha,pranav]);

    console.log(`${cloths},${food},${laptop},${bike},${petrol}`);
    return money;
}
catch(err){
    console.log('error showing');
}
};
Goatrip().then((rupees)=>console.log(`${rupees}`));
