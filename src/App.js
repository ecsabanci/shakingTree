import './scss/styles.scss';
import Tree  from "./components/Tree";

import AppleBasket from './components/AppleBasket';

function App() {

  // console.log(document.querySelector(".Tree"))
  // const apples = document.querySelector(".Tree").childNodes
  // const [head, ...tail] = apples;
  // console.log(head)
  // console.log(tail);

  let state = {
    apples: [
        {
            id: 1,
            name: "apple-1"
        },
        {
            id: 2,
            name: "apple-2"
        },
        {
            id: 3,
            name: "apple-3"
        },
        {
            id: 4,
            name: "apple-4"
        }
    ]
}



  return (
    <div className="container">
      {console.log(state.isShaked)}
      <Tree apples={state.apples} />
      <AppleBasket />
    </div>
  );
}

export default App;
