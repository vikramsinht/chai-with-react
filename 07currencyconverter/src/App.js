import useFetch from "./hooks/useFetch";
import useOnlineStatus from "./hooks/useOnlineStatus";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/5');
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;




  return (
    <>

      <SaveButton />
      <StatusBar />
      <h1>Data : </h1>
      <p>{JSON.stringify(data,null,2,0)}</p>

    </>
  );
}
