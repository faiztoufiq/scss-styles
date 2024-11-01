import { comonText } from "../common/constant";

export default function Header() {
  return (
    <div>
      <header>
        <h1>{comonText.welcometoMyOnePageWebsite}</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">{comonText.about}</a>
            </li>
            <li>
              <a href="#services">{comonText.services}</a>
            </li>
            <li>
              <a href="#contact">{comonText.contact}</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
