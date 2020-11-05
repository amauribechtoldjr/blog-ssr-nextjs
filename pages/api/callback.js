import auth0 from "@/helpers/utils/auth0";

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, {
      redirecTo: "/",
    });
  } catch (e) {
    res.status(e.status || 400).json({ message: "Ocorreu um erro." });
  }
}
