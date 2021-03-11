import { Switch, Route, Redirect } from "react-router";
import "./App.css";
import CreateNewBlog from "./components/createNewBlog";
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import BlogDetail from "./components/blogDetail.jsx";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{ minHeight: "50vh" }}>
        <Switch>
          <Route exact path="/blog/edit/:id" component={CreateNewBlog} />
          <Route exact path="/blog/create" component={CreateNewBlog} />
          <Route exact path="/blog/:id" component={BlogDetail} />
          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
