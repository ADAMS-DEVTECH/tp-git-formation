function login(username, password) {
  if (!username || !password) {
    return "Identifiants manquants";
  }
  console.log("Connexion de : " + username);
  return true;
}
 
module.exports = login;