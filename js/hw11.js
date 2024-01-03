/*
class TodoList {
  constructor() {
    this.notes = [];
  }

  addNote(note) {
    if (note.trim() !== "") {
      this.notes.push({ text: note, completed: false });
      console.log("Added:", note);
    } else {
      console.log("no note");
    }
  }

  deleteNote(index) {
    if (index >= 0 && index < this.notes.length) {
      const deletedNote = this.notes.splice(index, 1);
      console.log("Deleted:", deletedNote[0].text);
    } else {
      console.log("no note");
    }
  }

  editNote(index, newText) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].text = newText;
      console.log("Edited:", newText);
    } else {
      console.log("no note");
    }
  }

  noteInfo(index) {
    if (index >= 0 && index < this.notes.length) {
      const note = this.notes[index];
      console.log(`Info (${index}):`, note);
    } else {
      console.log("no note");
    }
  }

  allNotes() {
    console.log("List all notes:");
    this.notes.forEach((note, index) => {
      console.log(
        `${index}: ${note.text} - ${note.completed ? "done" : "not done"}`
      );
    });
  }

  completed(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].completed = true;
    } else {
      console.log("no note");
    }
  }

  stats() {
    const totalNotes = this.notes.length;
    const completedNotes = this.notes.filter((note) => note.completed).length;
    const remainingNotes = totalNotes - completedNotes;

    console.log(`Total notes: ${totalNotes}`);
    console.log(`Done: ${completedNotes}`);
    console.log(`Rest: ${remainingNotes}`);
  }
}

const myTodoList = new TodoList();

myTodoList.addNote("Cooking");
myTodoList.addNote("Shopping");
myTodoList.addNote("Reading");
myTodoList.addNote("Cleaning");
myTodoList.addNote("Washing");
myTodoList.editNote(0, "Watching TV");
myTodoList.completed(1);
myTodoList.completed(3);
myTodoList.completed(4);
myTodoList.deleteNote(2);

myTodoList.allNotes();
myTodoList.stats();
myTodoList.noteInfo(2);
*/

/*
class TodoList {
  constructor() {
    this.notes = [];
  }

  addNote(note) {
    if (note.trim() !== '') {
      this.notes.push({ text: note, completed: false });
      console.log('Added:', note);
    } else {
      console.log('no note');
    }
  }

  deleteNote(index) {
    if (index >= 0 && index < this.notes.length) {
      const deletedNote = this.notes.splice(index, 1);
      console.log('Deleted:', deletedNote[0].text);
    } else {
      console.log('no note');
    }
  }

  editNote(index, newText) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].text = newText;
      console.log('Edited:', newText);
    } else {
      console.log('no note');
    }
  }

  noteInfo(index) {
    if (index >= 0 && index < this.notes.length) {
      const note = this.notes[index];
      console.log(`Info (${index}):`, note);
    } else {
      console.log('no note');
    }
  }

  allNotes() {
    console.log('List all notes:');
    this.notes.forEach((note, index) => {
      console.log(`${index}: ${note.text} - ${note.completed ? 'done' : 'not done'}`);
    });
  }

  completed(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].completed = true;
    } else {
      console.log('no note');
    }
  }

  stats() {
    const totalNotes = this.notes.length;
    const completedNotes = this.notes.filter(note => note.completed).length;
    const remainingNotes = totalNotes - completedNotes;

    console.log(`Total notes: ${totalNotes}`);
    console.log(`Done: ${completedNotes}`);
    console.log(`Rest: ${remainingNotes}`);
  }
  searchByName(name) {
    const foundNotes = this.notes.filter(note => note.text.toLowerCase().includes(name.toLowerCase()));
    if (foundNotes.length > 0) {
      console.log(`Find "${name}":`);
      foundNotes.forEach((note, index) => {
        console.log(`${index}: ${note.text} - ${note.completed ? 'Done' : 'Not done'}`);
      });
    } else {
      console.log(`Note "${name}" not find`);
    }
  }

  sortStatus() {
    this.notes.sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return b.completed ? 1 : -1;
    });
  }
}

const myTodoList = new TodoList();

myTodoList.addNote('Cooking');
myTodoList.addNote('Shopping');
myTodoList.addNote('Reading');
myTodoList.addNote('Cleaning');
myTodoList.addNote('Washing');
myTodoList.addNote('Walking');
myTodoList.editNote(0, 'Watching TV');
myTodoList.completed(1);
myTodoList.completed(3);
myTodoList.completed(4);
myTodoList.deleteNote(2);

myTodoList.allNotes();
myTodoList.stats();

myTodoList.searchByName('C');
myTodoList.sortStatus();
myTodoList.allNotes();
*/

/*
class TodoList {
  constructor() {
    this.notes = [];
  }

  addNote(note) {
    if (note.trim() !== "") {
      const currentDate = this.date();
      this.notes.push({
        text: note,
        completed: false,
        createdDate: currentDate,
        modifiedDate: currentDate,
      });
      console.log("Added:", note);
    } else {
      console.log("no note");
    }
  }

  editNote(index, newText) {
    if (index >= 0 && index < this.notes.length) {
      const currentDate = this.date();
      this.notes[index].text = newText;
      this.notes[index].modifiedDate = currentDate;
      console.log("Edited:", newText);
    } else {
      console.log("no note");
    }
  }
  deleteNote(index) {
    if (index >= 0 && index < this.notes.length) {
      const deletedNote = this.notes.splice(index, 1);
      console.log("Deleted:", deletedNote[0].text);
    } else {
      console.log("no note");
    }
  }

  getNoteInfo(index) {
    if (index >= 0 && index < this.notes.length) {
      const note = this.notes[index];
      console.log(`Info (${index}):`, note);
    } else {
      console.log("no note");
    }
  }

  allNotes() {
    console.log("List all notes:");
    this.notes.forEach((note, index) => {
      console.log(
        `${index}: ${note.text} - ${note.completed ? "done" : "not done"}`
      );
    });
  }

  completed(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].completed = true;
    } else {
      console.log("no note");
    }
  }

  stats() {
    const totalNotes = this.notes.length;
    const completedNotes = this.notes.filter((note) => note.completed).length;
    const remainingNotes = totalNotes - completedNotes;

    console.log(`Total notes: ${totalNotes}`);
    console.log(`Done: ${completedNotes}`);
    console.log(`Rest: ${remainingNotes}`);
  }
  searchByName(name) {
    const foundNotes = this.notes.filter((note) =>
      note.text.toLowerCase().includes(name.toLowerCase())
    );
    if (foundNotes.length > 0) {
      console.log(`Find "${name}":`);
      foundNotes.forEach((note, index) => {
        console.log(
          `${index}: ${note.text} - ${note.completed ? "Done" : "Not done"}`
        );
      });
    } else {
      console.log(`Note "${name}" not find`);
    }
  }

  status() {
    this.notes.sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return b.completed ? 1 : -1;
    });
  }
  date() {
    return new Date().toLocaleString();
  }

  searchByDate(date) {
    const foundNotes = this.notes.filter(
      (note) =>
        note.createdDate.includes(date) || note.modifiedDate.includes(date)
    );
    if (foundNotes.length > 0) {
      console.log(`Find "${date}":`);
      foundNotes.forEach((note, index) => {
        console.log(
          `${index}: ${note.text} - Made: ${note.createdDate}, Edited: ${note.modifiedDate}`
        );
      });
    } else {
      console.log(`"${date}" not found.`);
    }
  }

  sortByDate(ascending = true) {
    this.notes.sort((a, b) => {
      const order = ascending ? 1 : -1;
      const dateA = new Date(a.modifiedDate);
      const dateB = new Date(b.modifiedDate);
      return order * (dateA - dateB);
    });

    const sortOrder = ascending ? "by growth" : "by decline";
    console.log(`Sorted by date ${sortOrder}.`);
  }
}

const myTodoList = new TodoList();

myTodoList.addNote("Cooking");
myTodoList.addNote("Shopping");
myTodoList.addNote("Reading");
myTodoList.addNote("Cleaning");
myTodoList.addNote("Washing");
myTodoList.addNote("Walking");
myTodoList.editNote(0, "Watching TV");
myTodoList.completed(1);
myTodoList.completed(3);
myTodoList.completed(4);
myTodoList.deleteNote(2);

myTodoList.allNotes();
myTodoList.stats();

myTodoList.searchByName("C");
myTodoList.status();
myTodoList.allNotes();

myTodoList.sortByDate();
myTodoList.searchByDate("03.01.2024");
*/
