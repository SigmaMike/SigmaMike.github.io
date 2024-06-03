<script>
  import { goto } from '$app/navigation';
  import {onMount} from "svelte"

  let users
  let loggedInUser 
  let program 
onMount(()=>{
  users = JSON.parse(localStorage.getItem('users')) || {};
  loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
  program = loggedInUser ? (JSON.parse(localStorage.getItem(`program_${loggedInUser}`)) || []) : [];


})


  let username = '';
  let password = '';
  let errorMessage = '';

  function login() {
    if (users[username] && users[username] === password) {
      loggedInUser = username;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      program = JSON.parse(localStorage.getItem(`program_${loggedInUser}`)) || [];
      errorMessage = '';
      goto('/Hemsida');  
    } else {
      errorMessage = 'Invalid username or password.';
    }
  }
</script>

{#if !loggedInUser}
  <div class="auth">
    <h1>Logga in</h1>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" bind:value={username} />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} />
    </div>
    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}
    <button on:click={login}>Login</button>
    <p>Har du inget konto? <a href="/registrera-mig">Registrera dig här</a></p>
  </div>
{/if}

<style>
  .auth {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .auth div {
    margin-bottom: 1rem;
  }

  .auth label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .auth input {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  .auth button {
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
  }

  .auth .error {
    color: red;
    margin-bottom: 1rem;
  }

  .auth a {
    color: blue;
    text-decoration: none;
    cursor: pointer;
  }
</style>