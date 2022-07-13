const InputBox = () => {
  return (
    <div>
      <label for="inputbox" > Search by Genre: </label >
      <input type="text" id="inputbox" placeholder="Place Genre Here"></input>
      <button id="btn" type='submit'>Submit</button>
    </div>
  )
}

export default InputBox