// Notes App in React (Class Component)
class Notes extends React.Component {
  constructor(props) {
    super(props);

    // Initial state: notes array & input text
    this.state = {
      notes: [],
      input: ""
    };

    // Bind methods to use 'this' correctly
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  // Add the current input to the notes array
  addNote() {
    if (this.state.input.trim() === "") return; // Ignore empty input

    this.setState(prevState => ({
      notes: [...prevState.notes, prevState.input],
      input: "" // Clear input after adding
    }));
  }

  // Delete a note by its index
  deleteNote(index) {
    this.setState(prevState => ({
      notes: prevState.notes.filter((_, i) => i !== index)
    }));
  }

  render() {
    return (
      <div>
        <h1>My Notes App</h1>

        {/* Input field and Add Note button */}
        <div className="note-input">
          <input
            type="text"
            placeholder="Write something here..."
            value={this.state.input} // Controlled input
            onChange={(e) => this.setState({ input: e.target.value })} // Update state on typing
          />
          <button onClick={this.addNote}>Add Note</button>
        </div>

        {/* Notes list */}
        <ul className="note-list">
          {this.state.notes.map((note, index) => (
            <li key={index} className="note-item">
              {note} 
              <button onClick={() => this.deleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Render Notes App into root div
ReactDOM.render(<Notes />, document.getElementById("root"));
