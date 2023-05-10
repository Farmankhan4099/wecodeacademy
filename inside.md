## 1 JavaScript engine kya hai. Most famous JavaScript engine ki list btao.

```
 javascript me ek engine chalta h jo ki kisi code ko chalane and execute karne me kam aata h javascript engine
      kisi bhi code ko machine language me convert karta h javascript engine code ko line by line run karta h
  (1) v8
  (2) javascriptCore


```

## this keyword ka use btao. This keyword ke different uses hai unhe explain kro with example

```

   this keywords-  this keywords ka use ham kisi bhi object me se value nikalne ke liye use karte h

    exaple- let obj = {
        Name: "farman",
        age : 21,
        fullName= function(){
           console.log(this.name)
        }
       }
     obj.fullName()



```

## 3 Difference between Json and XML

```
 json- (javascript object natation) ! json javascript ko support karti h json ko ham object ki tarah key and value
       ki form me likh te h

example-: let json{
          "name":"farman khan"
          "address" : "jhotwara"
          "mobile" :9116934980
   }

 xml-  (Extensible Markup Language) xml ka use kisi bhi type ke data ko transfer karne ke liye use me
       liya jata h xml markup language ko support karti h

 example-  ye html ki tarah kam me li jati h

```

## 4 In memories ke bare me btao

```
       heap-   heap memory me jo object hota h unka data heap memory me save hota h!

       stack-  stack memory me jab bhi ko functions call hote h to wo stack memory me ak ke bad ak save hote jate h aur jab
               functions excute hote h to jo function sabse last me save hua tha wo sabse pahle nikalta h

       ram -  ram ek memory hi hoti h but ram aur memory se fast kam karti h! kisi bhi device me ham koi bhi application ya
              video image etc. chalate h to unka sabse pahle data ram memory me store hota h phir hum uske bad hi us
              data kom dekh sakte h

      cache-  cache computer me ek memory hoti h jo cpu ko fast chalane me help karti h ! cache memory aur memory se fast
              kam karti h ! cache memory ki help se data ko kam time me ecsess kiya jata h


```

## 5 Write difference between compiler and interpreter with example

```

      compiler- compiler kisi bhi code ka pahle file bnata h phir usko machine language me convert karta h phir uske
                code run hota h

      interpreter- interpreter code ko line by line run karta hai

   example- let x=10
            let y=20
            console.log(x+y)


```

## 6 Write difference between creation phase and code phase

```
      creation phase - creation phase me jab koi bhi application banate h to sabse pahle hum ye
                      batayenge ki application ka design kese ready karna h aur application me kya
                      kya add karna h phir uske according hi application ready kiya jata h


      code phase-     code phase me ham  jo bhi code likhte h usko check karenge ki ye code javascript
                      language ke order me likha h ya nhi


```

## 7 Primitive and non primitive data types me difference btao and memory me kaise save hoti hai ye data types vo b btao

```

     primitive data type- Primitive data type me ham kisi variable me ak hi value store karwa sakte h aur us value ko
                          change nhi kar sakte

      example - string,number,boolean,null,undefind

     let str-"hello world"



   non-primitive data type= non-primitive data type me object and array aate h object and array me kai value
                            store karwa sakte h


     example-
              let obj{
             name:"farman khan"
             address : "jhotwara"
             mobile :9116934980
    }


```

## 8 Shallow copy vs deep copy me difference likho with example

```

    shallow copy= jab ham kisi array ya object ko copy karte h aur hum unme change karte h to dono me change hota h
                  tab ham sallow copy ka use karte h sallow copy use karne se ham jisme change karte h usme hi
                  change hota h lekin agar array ke andar array ya object ke under object ho aur unme hum change karte
                  h to unme change nhi hota h

    example-
             let arr=[1,2,3,4,5]
             let arr1=[...arr]

              let arr[1]=10 // [1,10,2,3,4,5]
              arr1=[1,2,3,4,5]


deep copy-  agar array ke under array and object ke under object ho to hum dono me chnge karne ke liye deep copy
           ka use karenge because nested array and nested object me deep copy ki help se hi change kar sakte h


```

### 9 What is scope chain ? Explain all type of scopes with example.

```

   Scope Chain -  scope chain btati h hamre code me functions, variable kis kis jagah pe use hua h

  type -: (1) global   - hamne function ke under koi varaible nhi diya ho aur koi
                       condition nhi di ho aur variable bahar bna diya ho to wo global scope chain me aata h

           exaple=
                   let num=10
                   function check(a){
                     console.log(a)
                 }
                 check(num)


          (2) function  - isme function ke under jo variable bnaye h wo hi function scope chain me aate h

                    function test() {
                                var a = 2;
                                console.log(a);
                                }


                               test()




    (3)  block scope=  block scope ka matlab h ki koi variable {} ke under



    exaple= {

     let a=10
     let b=20

      }



```

## 10

```
   jit (just in time)

     jit me pahle code line by line check hogo uske bad ak new file banegi aur phir code machine language me convert hoga



```
