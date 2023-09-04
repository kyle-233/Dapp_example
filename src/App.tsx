import { Nav, Theme } from "components"



const App = () => {

  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <main className="flex-1 flex justify-center items-center">
        <Theme />
      </main>
    </div>
  )
}

export default App
