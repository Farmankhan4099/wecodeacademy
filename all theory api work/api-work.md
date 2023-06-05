## what is ajax

```
Ajax= Asynchronous javascript and xml

ajax ki help se dynamically webpage ko update kiya ja sakta h aur  pag bar bar refresh bhi nhi karna padhta
 iska use javascript html css etc. ke sath kiya ja sakta h

```

## XMLHttpRequest

```

  xmlhttprequest ki help se ham kisi bhi api se data nikal sakte h isme hamko ek api hit karani
  padhti h aur phir uske data ko 'onload' function ki help se nikal sakte h
  example:-


      let httprequest=new xmlhttprequest()
      httprequest.open("get","https://restcountries.com/v3.1/name/japan")

      httprequest.onload=function((res)=>{
        console.log(res)
      })

      httprequest.send()

```

## What is an API ?

```
Api= Application Programming Interface

Api se ham apne code ko dusre software ya websites se connect kar sakte hain.
agar hame kisi country ka data nikalna h to ham api ke help se nikal sakte
JavaScript me, hum fetch() function ka use kar API se data fetch kar sakte hain.

let fetch=fetch(api)
fetch.then((res)=>{
   res.json().then((response)=>{
       console.log(response)
   })
})


```

## Promise and Fetch API

```
promise= prommise ek javascript object h isme ham 2 function de sakte h(success,reject)
promise hame kisi bhi tarah ke response ki gurranty deta h isme ham callback function
ka use kar sakte h

Example:-
   let prom=new Promise((resolve,reject)=>{
    if(2 >1){
        resolve()
    } else{
        reject()
    }
})

prom.them(()=>{
    console.log("resolve)
}).catch(()=>{
    console.log("reject)
})


fetch= fetch ki help se ham kisi bhi api se data nikal sakte  h
       fetch khud ak promise return karta h aur ham promise me se .json lagake data nikal sakte h

       let fetch=fetch(https://restcountries.com/v3.1/name/japan)
       fetch.than((res)=>{
        res.json().then((response)=>{
            console.log(response)
        })
       })


```

## callback

```
callback function ka use ham kisi dusre function ko call karne ke liye use me lete h
callback function ko hum promise me function ko call karne ke liye kam me lete h

Exaple:-

        let prom=new Promise((resolve,reject)=>{
    if(2 >1){
        resolve()
    } else{
        reject()
    }
})

prom.them(()=>{
    console.log("resolve)
}).catch(()=>{
    console.log("reject)
})


```

## Consuming Promises .then

```
kisi bhi promis me agar hamko data nikalna h to ham .then lagake data nikal sakte h

Exaple:-

   let prom=new Promise((resolve,reject)=>{
        resolve()

})

prom.them(()=>{
    console.log("resolve)
})



```

## Chaining Promises .then .then .then .catch .catch

```

 promise ya fetch me ham data ko chaining karke bhi nikal sakte h

 Exaple:-

       let fetch=fetch(https://restcountries.com/v3.1/name/japan)
       fetch.than((res)
          return  res.json()
       ).then((response)=>{
        return response[0]
       }).then((resp)=>{
        console.log(resp.capital[0])
       }).catch((){
             console.log("Error)
       })

```

## Consuming Promise using Async/Await

```

ham fetch ko data nikalne ke liye use me lete h but isme ak reason h ki agar
hamne 2 api hit karayi h to  usme jis api ka data pahle chalta h wo pahle hit hota h
 iske liye ham //async await// function use karte h

Example:-

            async function getData() {
                let fetch5 = await fetch("https://restcountries.com/v3.1/name/india");
                 console.log(await fetch5.json());

                   let fetch6 = await fetch("https://restcountries.com/v3.1/name/japan");
                    console.log(await fetch6.json());
}

getData();


```

## Error Handling

```

Error handling ka use ham error ko handle karne ke liye use me lete h

Exaple:-

let fetch1 = fetch("https://restcountries.com/v3.1/name/india");

fetch1
  .then(
    () => {
      throw new Error();
    },
    () => {
      console.log("js");
    }
  )
  .catch(() => {
    console.log("weCode");
  });

```

## Try catch finally

```

  try catch ka matlab h ki agar hamare code me error aa gya ho ya esa lagta ho ki is code
   me error aa sakta h to us error ko  handle karne ke liye try catch ka use karte h

   Example:-
         try{
         let x=10
         console.log(x.ToLaowerCase())

         } catch(error){
            console.log(error)
         } finally{
            console.log("finally Error)
         }


        try{
            throw new Error(20)
        } catch(value){
             console.log(value.message)
        }


```

## How the web works

```
 Client:-
          Client ka matlab hota hai wo hissa jise hum user ke browser mein use karte hain. Jab kabhi koi user server se webpage request karta hai toh server usko HTML, CSS aur JavaScript files bhejta hai. Fir client un files ko use karke webpage ko render karta hai.

  server:-
           javascript me server ek computer hota h jo desre computer ko data bhejta h
           server ki help se ham api ko chalana, application bnana etc. work kar sakte h

  request:-
            javascript me ham request ke liye xmlhttprequest ya fetch ka use kar sakte h
            inki help se ham server ko request bhej sekte h aur unse data le sakte h


  response:-
              javascript me ham jo fetch ya xmlhttprequest ke help se ham jo data bhejte h
              aur unse jo data milta h usko ham response bolte h


```
