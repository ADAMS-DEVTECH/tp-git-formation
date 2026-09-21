function login(u, p) {
  if (!u || !p) {
    return "Identifiants manquants";
  }
  console.log("Connexion de : " + u);
  return true;
}

module.exports = login;