import { comonText } from "../common/constant";
import Footer from "../components/footer";
import Header from "../components/header";
import "../style/App.scss";
export default function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="about">
          <h2>{comonText.aboutUs}</h2>
          <p>{comonText.loremIpsum}</p>
        </section>

        <section id="services">
          <h2>{comonText.ourServices}</h2>
          <ul>
            <li>{comonText.service1}</li>
            <li>{comonText.service2}</li>
            <li>{comonText.service3}</li>
          </ul>
        </section>

        <section id="contact">
          <h2>{comonText.contactUs}</h2>
          <form>
            <label htmlFor="name">{comonText.name}</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">{comonText.email}</label>
            <input type="email" id="email" name="email" required />

            <input type="submit" value="Submit" />
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
