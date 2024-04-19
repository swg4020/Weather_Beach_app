import { useQuery } from "@tanstack/react-query";
import { getBeachW } from "./api";

function App() {
  const beach = useQuery({
    queryKey: ["getTideInfoBeach"],
    queryFn: getBeachW,
  });
  console.log(beach);
  return <div>home</div>;
}

export default App;
