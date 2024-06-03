<script>
  import { goto } from '$app/navigation';
  import { onMount } from "svelte";

  let users;
  let loggedInUser;
  let program;

  onMount(() => {
    users = JSON.parse(localStorage.getItem('users')) || {};
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    program = loggedInUser ? (JSON.parse(localStorage.getItem(`program_${loggedInUser}`)) || []) : [];
  });

  const chestExercises = [
    { id: 1, name: 'Kryssdrag', image: 'kryssdrag.JPG', sets: 3, reps: 10 },
    { id: 2, name: 'Hantelpress', image: 'hantel.JPG', sets: 3, reps: 10 },
    { id: 3, name: 'Lutande Bänkpress', image: 'lutande.JPG', sets: 3, reps: 10 },
    { id: 4, name: 'Pec Deck', image: 'pecdeck.JPG', sets: 3, reps: 10 },
  ];

  const backExercises = [
    { id: 5, name: 'Skivstångsrodd', image: 'rodd.JPG', sets: 3, reps: 10 },
    { id: 6, name: 'Latsdrag', image: 'lat.JPG', sets: 3, reps: 10 },
    { id: 7, name: 'Hantelrodd', image: 'hantrod.JPG', sets: 3, reps: 10 },
    { id: 8, name: 'Sittande kabelrodd', image: 'oa.JPG', sets: 3, reps: 10 }
  ];

  const legExercises = [
    { id: 9, name: 'Bulgarian Split Squat', image: 'bulgari.JPG', sets: 3, reps: 10 },
    { id: 10, name: 'Benspark', image: 'benspark.JPG', sets: 3, reps: 10 },
    { id: 11, name: 'Benpress', image: 'press.JPG', sets: 3, reps: 10 },
    { id: 12, name: 'Liggande Lårcurl', image: 'lår.JPG', sets: 3, reps: 10 },
  ];

  const armExercises = [
    { id: 13, name: 'Triceps pushdown', image: 'tri.JPG', sets: 3, reps: 10 },
    { id: 14, name: 'Triceps press sittandes med hantel', image: 'öl.JPG', sets: 3, reps: 10 },
    { id: 15, name: 'Skivstångscurl', image: 'på.JPG', sets: 3, reps: 10 },
    { id: 16, name: 'Koncentrationscurl', image: 'konce.JPG', sets: 3, reps: 10 },
  ];

  function addToProgram(exercise) {
    program = [...program, exercise];
    localStorage.setItem(`program_${loggedInUser}`, JSON.stringify(program));
  }

  function removeFromProgram(id) {
    program = program.filter(item => item.id !== id);
    localStorage.setItem(`program_${loggedInUser}`, JSON.stringify(program)); 
  }

  function updateSetsReps(id, sets, reps) {
    program = program.map(item => {
      if (item.id === id) {
        return { ...item, sets, reps };
      }
      return item;
    });
    localStorage.setItem(`program_${loggedInUser}`, JSON.stringify(program)); 
  }
</script>

<h1>Övningar</h1>
<h6>  <a href="Hemsida">Tillbaka till hemsidan</a></h6>

{#if loggedInUser}
  <h2>Bröstövningar</h2>
  {#each chestExercises as { id, name, image, sets, reps }}
    <div class="exercise">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div>
        <label for={`setsInput_${id}`}>Sets:</label>
        <input type="number" id={`setsInput_${id}`} bind:value={sets} min="1" max="10" on:change={() => updateSetsReps(id, sets, reps)} />
      </div>
      <div>
        <label for={`repsInput_${id}`}>Reps:</label>
        <input type="number" id={`repsInput_${id}`} bind:value={reps} min="1" max="50" on:change={() => updateSetsReps(id, sets, reps)} />
      </div>
      <button on:click={() => addToProgram({ id, name, sets, reps })}>Lägg till i mitt program</button>
    </div>
  {/each}

  <h2>Ryggövningar</h2>
  {#each backExercises as { id, name, image, sets, reps }}
    <div class="exercise">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div>
        <label for={`setsInput_${id}`}>Sets:</label>
        <input type="number" id={`setsInput_${id}`} bind:value={sets} min="1" max="10" on:change={() => updateSetsReps(id, sets, reps)} />
      </div>
      <div>
        <label for={`repsInput_${id}`}>Reps:</label>
        <input type="number" id={`repsInput_${id}`} bind:value={reps} min="1" max="50" on:change={() => updateSetsReps(id, sets, reps)} />
      </div>
      <button on:click={() => addToProgram({ id, name, sets, reps })}>Lägg till i mitt program</button>
    </div>
  {/each}

  <h2>Benövningar</h2>
  {#each legExercises as { id, name, image, sets, reps }}
    <div class="exercise">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div>
        <label for={`setsInput_${id}`}>Sets:</label>
        <input type="number" id={`setsInput_${id}`} bind:value={sets} min="1" max="10" on:change={() => updateSetsReps(id, sets, reps)} />
      </div>
      <div>
        <label for={`repsInput_${id}`}>Reps:</label>
        <input type="number" id={`repsInput_${id}`} bind:value={reps} min="1" max="50" on:change={() => updateSetsReps(id, sets, reps)} />
      </div>
      <button on:click={() => addToProgram({ id, name, sets, reps })}>Lägg till i mitt program</button>
    </div>
  {/each}

  <h2>Armövningar</h2>
  {#each armExercises as { id, name, image, sets, reps }}
    <div class="exercise">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div>
        <label for={`setsInput_${id}`}>Sets:</label>
        <input type="number" id={`setsInput_${id}`} bind:value={sets} min="1" max="10" on:change={() => updateSetsReps(id, sets, reps)} />
      </div>
      <div>
        <label for={`repsInput_${id}`}>Reps:</label>
        <input type="number" id={`repsInput_${id}`} bind:value={reps} min="1" max="50" on:change={() => updateSetsReps(id, sets, reps)} />
      </div>
      <button on:click={() => addToProgram({ id, name, sets, reps })}>Lägg till i mitt program</button>
    </div>
  {/each}

  <div class="program">
    <h2>Mitt träningsprogram</h2>
    <ul>
      {#each program as { id, name, sets, reps }}
        <li>
          {name} - Sets: {sets} Reps: {reps}
          <button class="remove-button" on:click={() => removeFromProgram(id)}>Ta bort</button>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .exercise {
    margin-bottom: 2vh;
    position: relative;
  }

  h3 {
    font-size: 2vw;
    margin-bottom: 1vh;
  }

  img {
    max-width: 100%;
    margin-top: 2vh;
  }

  button {
    margin-top: 2vh;
    padding: 1vh 2vw;
  }

  .program {
    position: fixed;
    top: 2vh;
    right: 2vw;
    width: 40vw;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 2vh;
    border: 1px solid #ccc;
    overflow-y: auto;
  }

  .program ul {
    list-style-type: none;
    padding: 0;
  }

  .program ul li {
    font-size: 2vh;
    margin-bottom: 6vh;
    position: relative;
  }

  .remove-button {
    position: absolute;
    top: 0;
    right: 0;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  input[type="number"] {
    width: 4rem;
    margin-right: 0.5rem;
  }
</style>