<template>
 
  <div
  class="fixed-top d-flex align-items-center justify-content-center"
  style="bottom: 0; overflow-y: auto"
>

 
  <b-card  style="max-width: 400px;">
    <b-container>
      <b-row align-h="start">
        <b-button pill class="backHome">Back to home</b-button>
      </b-row>
    </b-container>
   
    <form class="register">
      
      <h6><span><img src="../assets/Anachak_logo.svg" alt=""></span> BE PART OF ANACHAK GAME</h6>
      <b-form-group
      label="USER NAME"
      label-for="username"
      label-align-sm="left"
      label-color="white"
    >
      <b-form-input class="input" trim id="username" type="text" placeholder="ENTER YOUR NAME"></b-form-input>
    </b-form-group>
	<b-form-group
      label="EMAIL"
      label-for="email"
      label-align-sm="left"
      label-color="white"
    >
      <b-form-input class="input" trim id="email" type="email" placeholder="ENTER YOUR EMAIL"></b-form-input>
    </b-form-group>
    <b-form-group
      label="PASSWORD"
      label-for="input-1"
      label-align-sm="left"
      label-color="white"
    >
      <b-form-input class="input" trim id="password" type="password" placeholder="ENTER YOUR PASSWORD"></b-form-input>
    </b-form-group>
	<b-form-group
      label="COMFIRMED PASSWORD"
      label-for="comfirmedPassword"
      label-align-sm="left"
      label-color="white"
    >
      <b-form-input class="input" trim id="confirmedPassword" type="password" placeholder="ENTER YOUR CONFIRMED PASSWORD"></b-form-input>
    </b-form-group>
    <b-container>
      <b-row   align-h="end">
        <b-button class="registerButton" pill>Register</b-button>
      </b-row>
      <b-row align-h="end">
        <a href="">Already have account?</a>
      </b-row>
    </b-container>
	<b-container>
		<b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and conditions
    </b-form-checkbox>
	</b-container>
    
    
    </form>
  </b-card>
</div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
  *{
    font-family: 'Ubuntu', sans-serif;
  }
  img{
    width: 10%;
  }
  .registerButton{
    color:white;
    background-color:#D72323;
  }
  .register{
    border: 1px solid red;
    padding: 5%;
    color: white;
    background-color: #303841;
    border-radius: 10px;
  }
  .d-flex{
    background-color: #303841;
  }
  .input{
    border-radius: 12px;
  }
  .backHome{
    margin-bottom: 5%;
    border: 1px solid red;
    background: none;
  }
  div.card-body{
    background-color: #303841;
  }
  div.card{
    background-color: #303841;
    border: none;
  }
</style>