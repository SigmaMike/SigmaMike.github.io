<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let loggedInUser = null;
  let program = [];

  function loadProgram() {
    if (!loggedInUser) {
      goto('/Loggain');
    } else {
      program = JSON.parse(localStorage.getItem(`program_${loggedInUser}`)) || [];
    }
  }

  onMount(() => {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    loadProgram();
  });
</script>

{#if loggedInUser}
  <div class="program-list">
    <h1>Mitt Träningsprogram</h1>
    {#if program.length === 0}
      <p>Du har inga övningar i ditt program ännu. <a href="/Övningar">Lägg till övningar här</a></p>
    {:else}
      <ul>
        {#each program as exercise}
          <li>{exercise.name}</li>
        {/each}
      </ul>
      <a href="/Övningar">Lägg till fler övningar</a>
    {/if}
  </div>
{:else}
  <p>Vänligen logga in för att se ditt träningsprogram.</p>
{/if}

<style>
  .program-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .program-list h1 {
    text-align: center;
  }

  .program-list ul {
    list-style-type: none;
    padding: 0;
  }

  .program-list li {
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
  }

  .program-list a {
    display: block;
    text-align: center;
    margin-top: 1rem;
    color: blue;
    text-decoration: none;
  }
</style>