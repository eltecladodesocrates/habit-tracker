import React from 'react';
import ReactDOM from 'react-dom';

class HabitTrackerApp extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddHabit = this.handleAddHabit.bind(this)
    this.state = {
      habits: []
    }
  }

  handleAddHabit(habit) {
    this.setState((prevState) => ({ habits: prevState.habits.concat(habit) }))
  }

  render() {
    return (
      <div>
        <Header />
        <Habits habits={this.state.habits} />
        <AddHabit
          handleAddHabit={this.handleAddHabit}
        />
      </div>
    )
  }
}

const Header = () => (
  <div>
    <h1>Habit Tracker</h1>
  </div>
)

const Habits = (props) => (
  <div>
    {props.habits.map((habit) => <Habit key={habit} habiText={habit}></Habit>)}
  </div>
)

const Habit = (props) => (
  <div>
    {props.habiText}
    <input type="checkbox" />
    <input type="checkbox" />
    <input type="checkbox" />
    <button>R</button>
  </div>
)

class AddHabit extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddHabit = this.handleAddHabit.bind(this)
  }

  handleAddHabit(e) {
    e.preventDefault()
    const newHabit = e.target.elements.habit.value
    this.props.handleAddHabit(newHabit)
    e.target.elements.habit.value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleAddHabit}>
        <input type="text" name='habit' autoComplete='off' />
        <button>Add Habit</button>
      </form>
    )
  }
}


ReactDOM.render(<HabitTrackerApp />, document.getElementById('root'))