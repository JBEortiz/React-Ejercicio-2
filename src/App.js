import logo from './logo.svg';
import './App.css';
import { ContactList } from './container/contact_list';

function App() {
  return (
    <div href="/components/">
      <header >
      <h1 style={{text:'center', fontSize:'30px',  padding:'10px'}}>Contacts</h1>
      <p style={{background:'rgb(144 173 177)', margin: 'auto', text:'center', border:'1px dotted #000', padding:'120px'}} >
          <ContactList></ContactList>
        </p>
      </header>
    </div>
  );
}

export default App;
