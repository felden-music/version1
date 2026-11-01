/*
  felden – Termine
  ----------------
  Für jeden Auftritt eine Zeile in die Liste unten eintragen.
  Vergangene Termine werden automatisch ausgeblendet.
  Ist die Liste leer, zeigt die Website einen Hinweis mit dem Link zum Benachrichtigungs-Formular.

  Aufbau einer Zeile (Komma am Ende nicht vergessen):
  { datum: "2026-11-21", uhrzeit: "20:00", ort: "Name der Location", stadt: "Stuttgart", link: "https://..." },

  datum   – Pflicht, Format JJJJ-MM-TT
  uhrzeit – optional, z. B. "20:00"
  ort     – Pflicht
  stadt   – optional
  link    – optional, z. B. Tickets oder Veranstaltungsseite
*/

window.FELDEN_TERMINE = [
  // { datum: "2026-11-21", uhrzeit: "20:00", ort: "Name der Location", stadt: "Stuttgart", link: "" },
  { datum: "2026-11-21", uhrzeit: "20:00", ort: "Cooler Ort", stadt: "Tübingen", link: "" },
];
