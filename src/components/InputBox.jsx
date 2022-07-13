const InputBox = () => {
  const handleClick = () => {
    const submit = document.getElementById('inputbox').value
    console.log(submit)
  }

  return (
    <div>
      <label for="inputbox" > Search by Genre: </label >
      <input type="text" id="inputbox" placeholder="Place Genre Here"></input>
      <button id="btn" type='submit'>Submit</button>
    </div>
  )
}

export default InputBox