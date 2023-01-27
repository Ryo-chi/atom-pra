import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "ryo",
  image: "https://source.unsplash.com/nwe2qgAhT4k",
  email: "12345.example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com/"
};

export default function App() {
  return <Router />;
}
