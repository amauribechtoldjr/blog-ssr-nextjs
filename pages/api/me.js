import auth0 from "@/helpers/utils/auth0";

export default async function login(req, res) {
  try {
    await auth0.handleProfile(req, res);
  } catch (e) {
    res.status(e.status || 400).json({ message: "Ocorreu um erro." });
  }
}
