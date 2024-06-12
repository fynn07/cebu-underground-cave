import Adspace from "./components/Adspace"
import Content from "./components/Content"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <div className="h-screen bg-background px-8 pt-4 flex flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-y-hidden">
            <Sidebar />
          <div className="flex-[3] overflow-y-auto">
            <Content />
          </div>
          <div className="flex-1">
            <Adspace />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
