import useAuth from "./hooks/useAuth";
import AppRouter from "./routes/AppRouter";


function App() {
  const {loading} = useAuth()

  if(loading) {

      <div className="loading-container">
        <span className="loading loading-spinner loading-xs"></span>
        <p className="loading-text text-4xl text-primary">Loading..</p>
      </div>
  }

  return (
    <div className="min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;
