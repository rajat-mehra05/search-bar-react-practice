import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/SearchBar";
import "./styles.css";
import { posts } from "./components/posts";
import { useState } from "react";

export default function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    } else {
      return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
      });
    }
  };

  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <Router>
      <div className="App">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </div>
    </Router>
  );
}
