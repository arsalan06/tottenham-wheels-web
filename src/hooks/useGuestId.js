import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useGuestId(user) {
  const [customerId, setCustomerId] = useState(null);

  useEffect(() => {
    if (user) {
      // Logged-in user → use uid
      setCustomerId(user.uid);
    } else {
      // Guest user
      let guest = localStorage.getItem("guestId");

      if (!guest) {
        guest = "guest_" + uuidv4();
        localStorage.setItem("guestId", guest);
      }

      setCustomerId(guest);
    }
  }, [user]);

  return customerId;
}
