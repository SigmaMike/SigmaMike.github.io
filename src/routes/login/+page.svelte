<script>
    function handleSubmit() {
    // Perform form submission logic here
    console.log("Hello"+ " "+ Email + " "+ "welcome back") 
    
    }
    let Email="";
    let Password="";
</script>




<h1>Login</h1>
<form on:submit|preventDefault={handleSubmit} >
    
    <label for="Email"> Email:</label>
    <input bind:value={Email} id="Email"
    type="text"/>
    <label for="Password"> Password:</label>
    <input id="Password"
    type="text"/>
    
    <button type="submit">Logga in</button>



</form>

<style>

form{ display:grid;
    grid-auto-flow: repeat(1,minmax(200px,1fr));
    max-width: 500px;
    min-width: 300px;
    margin: auto;
}
</style>

<p>Har du inget konto? <a

    href="/register">Registrera</a>></p>