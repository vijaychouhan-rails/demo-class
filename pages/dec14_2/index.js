import { useInternetStatus } from "@/hooks/useInternetStatus";
import { Button } from "react-bootstrap";

export default function Dec14_2() {
  const isOnline = useInternetStatus();

  return (
    <div>
      <h1>{isOnline ? "✅ User is Online" : "❌ User is Offline"}</h1>
      <Button disabled={!isOnline}>Submit</Button>
    </div>
  );
}
