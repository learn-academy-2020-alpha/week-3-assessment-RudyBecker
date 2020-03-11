// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. This part of the code initializes the class component. The original state with no user input is set to an empty string.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. This is what is used to update the state of userInput. Whatever text is typed in by using is being instructed to be routed to this.state.userInput.
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3.this is deconstructing the javascript value of userInput from this.state
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. This is taking the text written by the user and placing it into this.state.userInput */} 
          onChange={ this.robot }
          {/* 5. This is displaying what the user typed specifically*/}
          value={ userInput }
        />

        <div>
          {/* 6. This is a class component of Good Robot that will take the text inputted and do something with it*/}
          <GoodRobot
            {/* 7. This will take the text and pass it to the component Good Robot as props*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.It is necessary to have one  and only on div in each class based component.
      <div>
        <h3>Good Robot</h3>
        {/* 9.This is displaying the text and following the assigned rules of how the text should finally look as taken in by the Good Robot class compoenent */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. This is necessary to pass the GoodRobot component to App.js
export default GoodRobot
