import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
   <>
    <StatusBar barStyle="light-content" backgroundColor="#0D0E0E" />
    <Routes />
   </>
  )
}