<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let users = {};
  let username = '';
  let password = '';
  let errorMessage = '';
  let successMessage = '';

  onMount(() => {
    users = JSON.parse(localStorage.getItem('users')) || {};
  });

  function register() {
    if (username && password) {
      if (!users[username]) {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        successMessage = 'Konto skapat! Du kan nu logga in.';
        errorMessage = '';
        setTimeout(() => {
          goto('/Loggain');
        }, 2000);
      } else {
        errorMessage = 'Användarnamet är upptaget';
        successMessage = '';
      }
    } else {
      errorMessage = 'Skriv in korrekt användarnamn och lösenord';
      successMessage = '';
    }
  }
</script>

{#if successMessage}
  <p class="success">{successMessage}</p>
{:else}
  <div class="auth">
    <h1>Registrera</h1>
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
    <button on:click={register}>Register</button>
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

  .success {
    color: green;
    text-align: center;
    margin-top: 2rem;
  }
</style>