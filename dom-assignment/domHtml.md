```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>assignment</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form>
      <div class="input-main">
        <label for="" class="d-block">First Name</label>
        <input
          type="text"
          onkeyup="fun()"
          id="First"
          placeholder="Enter Your First Name"
        />

        <!-- <span class="pb-2" id="span">error! please required fill</span> -->
      </div>

      <div class="input-main">
        <label for="" class="d-block">Last Name</label>
        <input type="text"   placeholder="Enter Your last Name" />
      </div>
      <div class="input-main">
        <label for="" class="d-block">Father Name</label>
        <input type="text" placeholder="Enter Your Father Name" />
      </div>

      <div class="input-main">
        <label for="" class="d-block">Dob</label>
        <input type="date" id="Dob" />
      </div>

      <div class="input-main mt-3">
        <label for="" class="d-block">Mobile nomber</label>
        <input type="number" id="mobile" placeholder="Enter Your number" />
      </div>

      <div class="input-main mt-3">
        <label for="" class="d-block">Email Id</label>
        <input type="email" id="email" placeholder="Enter Your Email id." />
      </div>

      <div class="input-main mt-3 d-flex align-items-baseline">
        <label for="" class="d-block">Gender</label>
        <input type="radio" name="gender" class="radio-btn ml-3" />male
        <input type="radio" name="gender" class="radio-btn ml-3" />female
        <label for="" class="d-block">course</label>
        <select name="" id="" class="d-block ml-3">
          <option value="" class="">javascript</option>
          <option value="" class="">designing</option>
          <option value="" class="">photoshop</option>
        </select>
      </div>

      <div class="input-main mt-2">
        <button type="submit" class="submit-btn" onclick="fn1()">submit</button>
      </div>
    </form>

    <!-- list -->

    <div class="container">
      <div class="div-2">
        <div class="back d-flex align-items-center">
          <input
            type="text"
            value=""
            class="d-inline-block ml-3 input-1"
            id="input-id"
            placeholder="task to be done"
          />

          <a href="javascript:void(0)" class="btn-1" onclick="fn2()">Add</a>
        </div>

        <ul id="ul" class="back-1 mt-3 py-4 px-3"></ul>
      </div>

      <!-- calculater -->



      <div class="back-3">
        <input class="inp" type="text" id="input" />
        <div class="d-flex flex-wrap">
          <a class="span-1" href="javascript:void(0)" onclick="clears()">c</a>
          <a class="span-2" href="javascript:void(0)"><i class="fa-solid fa-xmark"></i></a>
          <a class="span-3" href="javascript:void(0)" onclick="plus('%')">/</a>
          <a class="span-4" href="javascript:void(0)" onclick="plus('*')">*</a>
          <a class="span-5" href="javascript:void(0)" onclick="plus('9')">9</a>
          <a class="span-5" href="javascript:void(0)" onclick="plus('8')">8</a>
          <a class="span-5" href="javascript:void(0)" onclick="plus('7')">7</a>
          <a class="span-4" href="javascript:void(0)" onclick="plus('-')">-</a>
          <a class="span-5" href="javascript:void(0)" onclick="plus('6')">6</a>
          <a class="span-5" href="javascript:void(0)"  onclick="plus('5')">5</a>
          <a class="span-5" href="javascript:void(0)" onclick="plus('4')">4</a>
          <a class="span-4" href="javascript:void(0)"  onclick="plus('+')">+</a>
          <a class="span-5" href="javascript:void(0)" onclick="plus('3')">3</a>
          <a class="span-5" href="javascript:void(0)"  onclick="plus('2')">2</i></a>
          <a class="span-5" href="javascript:void(0)"  onclick="plus('1')">1</a>
          <a class="span-6" href="javascript:void(0)"  onclick="calculate()">=</a>
          <a class="span-7" href="javascript:void(0)"  onclick="plus('0')">0</a>
          <a class="span-9"  href="javascript:void(0)" onclick="plus('.')">.</a>
          <a class="span-8" href="javascript:void(0)" ></a>
        </div>
      </div>
    </div>



    <script src="script.js"></script>

  </body>
</html>

```
