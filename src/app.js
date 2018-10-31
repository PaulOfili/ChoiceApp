class IndecisionApp extends React.Component {
   render() {
      const title = 'Choice'; 
      const subtitle = 'Let a machine dictate how you live!';
      const options = ['Thing One', 'Thing Two', 'Thing Three'];

      return (
         <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}/>
            <AddOptions />
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
         </div>
      );
   }
}

class Action extends React.Component {
   handlePick() {
      console.log('Clicked');
   }

   render() {
      return (
         <div>
            <button onClick={this.handlePick}>What should I do</button>
         </div>
      )
   }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }

   removeAll() {
      console.log(this.props.options);
   }

   render() {
      return (
         <div>
            <button onClick={this.removeAll}>Remove All</button>

            {this.props.options.map(option => <Option option={option} key={this.props.options.indexOf(option)}/>)}
         </div>
      )
   }
}

class Option extends React.Component {
   render() {
      return (
         <div>
           <p key={this.props.key}>{this.props.option}</p>
         </div>
      )
   }
}

class AddOptions extends React.Component {
   handleAddOption(e) {
      e.preventDefault();

      const val = e.target.elements.options.value.trim();

      if(val) {
         console.log(val);
      }

   }

   render() {
      return (
         <form onSubmit={this.handleAddOption}>
            <input type = "text" name = "options"/>
            <button>Submit</button>
         </form>
      )
   }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));