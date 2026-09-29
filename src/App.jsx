import CounterProvider from "./Components/CounterProvider";
import Counter from "./Components/Counterr";
import CounterButtons from "./Components/CounterButtons";
export default function App() {
  return (
    <CounterProvider>
      <div className="app">
        <Counter />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
}
