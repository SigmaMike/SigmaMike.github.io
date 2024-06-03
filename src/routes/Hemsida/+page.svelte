<script> 
  import { onMount } from "svelte";

  let loggedInUser;

  onMount(() => {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
  });
</script>

<h1>Välkommen {loggedInUser ? loggedInUser : ""}! </h1>

<div>
  {#if loggedInUser}
    <a href="Loggaut">Logga ut</a>
  {:else}
    <a href="/Loggain">Logga in</a>
  {/if}
  <a href="/Övningar">Övningar</a>
  <a href="/registrera-mig">Registrera mig</a>
  <a href="/MittProgram">Mitt Program</a>
</div>

<img src="gym.jpg" alt="Stor bild" style="display:flex; margin-top: 20px; width:vw; height:auto;">