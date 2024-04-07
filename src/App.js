import './App.css';

export default function App() {
  return (
    <div>
      {/* 👇️ Disable autocomplete on input fields */}
      <input type="text" id="message" autoComplete="off" />

      <input
        type="password"
        id="password"
        autoComplete="new-password"
      />

      <hr />

      {/* 👇️ Disable autocomplete for entire form  */}
      <form autoComplete="off">
        <input type="text" id="first" />

        <input type="text" id="last" />
      </form>
    </div>
  );
}
