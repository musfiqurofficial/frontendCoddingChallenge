import { BackToHome } from "@/components/backToHome/backToHome";
import { headers } from "next/headers";

const UserAgent = async () => {
  const userAgent = typeof window === "undefined" ? headers().get("user-agent") : "No user agent";

  return (
    <div>
      <BackToHome />
      
      {userAgent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">User Agent</div>
          <div className="border p-2">{userAgent}</div>
        </div>
      )}

      {!userAgent && <div>No user agent</div>}
    </div>
  );
};

export default UserAgent;
