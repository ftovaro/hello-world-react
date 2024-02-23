import React, {useState, useEffect} from "react";

const Hello = ({name: FirstName}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      const data = await response.json()
      console.log(data)
    }

    fetchData()


    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    // .then((response) => {
    //   return response.json()
    // })
    // .then((data) => {
    //   console.log(data);
    // })
  }, [count])

  const styles = {
    display: "flex",
    flexDirection: "column"
  }

  const increaseButton = (acc) => { setCount(count + acc) }

  const div = <div style={styles}>
    <p>My name is {FirstName}</p>
    <p>Count: {count}</p>
    <button onClick={() => {increaseButton(2)}}>Increase</button>
  </div>
  return FirstName && div
}

export default Hello