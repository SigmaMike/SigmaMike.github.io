
    <h1>Du har loggat ut.</h1>


<a href="Hemsida"> Tillbaka till huvudhemsidan</a>


<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      localStorage.removeItem('loggedInUser');
      localStorage.removeItem('trainingProgram');
    });
  </script>
  
 