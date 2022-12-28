import "./styles.css";
import { ResourceContainer } from "./ResourceContainer";
import { Users } from "./Users";
import { Posts } from "./Posts";

export default function App() {
  return (
    <div className="App">
      <ResourceContainer
        resourceName="users"
        resourceUrl="https://jsonplaceholder.typicode.com/users"
      >
        <Users />
      </ResourceContainer>

      <ResourceContainer
        resourceName="posts"
        resourceUrl="https://jsonplaceholder.typicode.com/posts"
      >
        <Posts />
      </ResourceContainer>
    </div>
  );
}
