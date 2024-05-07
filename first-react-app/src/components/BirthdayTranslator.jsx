import { useState } from "react";

const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Feliz Cumpleaños"],
  ["french", "Bon anniversaire"],
  ["italian", "Buon compleanno"],
  ["portuguese", "Feliz aniversário"],
  ["swedish", "Grattis på födelsedagen"],
  ["dutch", "Gefeliciteerd"],
  ["norwegian", "Gratulerer med dagen"],
  ["turkish", "Doğum günün kutlu olsun"],
  ["polish", "Sto lat"],
  ["danish", "Tillykke med fødselsdagen"],
  ["russian", "С Днём рождения"],
  ["japanese (casual)", "お誕生日おめでとう (otanjoubi omedetou)"],
  ["chinese", "生日快乐 (shēngrì kuàilè)"],
]);

function BirthdayTranslator() {
  const [currentLanguage, setCurrentLanguage] = useState("english");

  const handleChangeLanguage = (newlang) => {
    setCurrentLanguage(newlang);
  };

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrases.get(currentLanguage)}! ({currentLanguage})
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>

      <button onClick={() => handleChangeLanguage("german")}>German</button>

      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>

      <button onClick={() => handleChangeLanguage("french")}>French</button>

      <button onClick={() => handleChangeLanguage("italian")}>Italian</button>

      <button onClick={() => handleChangeLanguage("portuguese")}>
        Portuguese
      </button>

      <button onClick={() => handleChangeLanguage("swedish")}>Swedish</button>

      <button onClick={() => handleChangeLanguage("dutch")}>Dutch</button>

      <button onClick={() => handleChangeLanguage("norwegian")}>
        Norwegian
      </button>

      <button onClick={() => handleChangeLanguage("turkish")}>Turkish</button>

      <button onClick={() => handleChangeLanguage("polish")}>Polish</button>

      <button onClick={() => handleChangeLanguage("danish")}>Danish</button>

      <button onClick={() => handleChangeLanguage("russian")}>Russian</button>

      <button onClick={() => handleChangeLanguage("japanese (casual)")}>
        Japanese (casual)
      </button>

      <button onClick={() => handleChangeLanguage("chinese")}>Chinese</button>
    </div>
  );
}

export default BirthdayTranslator;
