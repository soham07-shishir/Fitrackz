import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getSession() {
  try {
    const session = await getKindeServerSession();
    const user = await session.getUser();
    const isUserAuthenticated = await session.isAuthenticated();
    return { isUserAuthenticated, user };
  } catch (error) {
    console.error("Failed to get session:", error);
    return { isUserAuthenticated: false, user: null };
  }
}
