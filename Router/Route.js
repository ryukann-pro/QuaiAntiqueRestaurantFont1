export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[]->Tout le monde peut y acceder
[disconnected]->Seulement les utilisateurs non connectés peuvent y acceder
["client"]->Seulement les utilisateurs avec le role client peuvent y acceder
["admin"]->Seulement les utilisateurs avec le role admin peuvent y acceder
["client","admin"]->Tout les utilisateurs connectés peuvent y acceder
*/