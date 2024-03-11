<script>
    function handleSubmit() {
    // Perform form submission logic here
    console.log("Välkommen hit"+" " + firstName + " "+ "Du har nu skapat ett konto:)") 
    
    }
    let firstName= "";
    let lastname="";
    let Email="";
    let Password="";
</script>

<h1> Hej {firstName} !</h1>


<h1>Fyll i formuläret för att skapa ett konto.</h1>
<form on:submit|preventDefault={handleSubmit} >
    <label for="firstName">First Name:</label>
    <input  bind:value={firstName} id="firstName"
    type="text"/>
    <label for="lastname"> Last Name:</label>
    <input bind:value= {lastname} id="lastname"
    type="text"/>
    <label for="Email"> Email:</label>
    <input bind:value={Email} id="Email"
    type="text"/>
    <label for="Password"> Password:</label>
    <input id="Password"
    type="text"/>
    
    <button type="submit">Register</button>



</form>

<style>

form{ display:grid;
    grid-auto-flow: repeat(1,minmax(200px,1fr));
    max-width: 500px;
    min-width: 300px;
    margin: auto;
}
</style>

<p>Har du ett konto? <a

    href="/login">Log in</a>></p>