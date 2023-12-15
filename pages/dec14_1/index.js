import { useInternetStatus } from "@/hooks/useInternetStatus";
import { Button } from "react-bootstrap";

export default function Dec14_1() {
  //   const [isOnline, setIsOnline] = useState(true);
  const isOnline = useInternetStatus();

  //   useEffect(() => {
  //     function handleOnline() {
  //       setIsOnline(true);
  //     }

  //     function handleOffline() {
  //       setIsOnline(false);
  //     }

  //     window.addEventListener("online", handleOnline);
  //     window.addEventListener("offline", handleOffline);

  //     return () => {
  //       window.removeEventListener("online", handleOnline);
  //       window.removeEventListener("offline", handleOffline);
  //     };
  //   }, []);

  return (
    <div>
      <h1>{isOnline ? "✅ Online" : "❌ Offline"}</h1>
      <Button disabled={!isOnline}>Submit</Button>
    </div>
  );
}
