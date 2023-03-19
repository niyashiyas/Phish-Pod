import React from "react";
import {useState} from "react";
import "./Glossary.css";
export default function Glossary() {
  const [cards] = useState([
    {
      title: "Phishing",
      data: "Phishing is when a bad guy pretends to be someone else, like a teacher or a parent, and tries to trick you into giving them your personal information like your name, address, or password",
    },
    {
      title: "http and https",
      data: "HTTP is like talking on a regular phone, where anyone can listen to the conversation. HTTPS is like talking on a secret phone where only you and your friend can hear what you're saying.",
    },
    {
      title: "Pharming",
      data: "Pharming is when bad guys try to trick your computer so that when you type in a website address, like www.google.com your computer goes to a fake website instead of the real one",
    },
    {
      title: "ddos",
      data: "DDoS stands for Distributed Denial of Service, which is like a really big group of robots that try to visit a website all at the same time",
    },
    {
      title: "Encryption",
      data: "Encryption is like a secret code that keeps your messages safe from bad guys who might try to read them",
    },
    {
      title: "Clickjacking",
      data: "It's like if someone put a picture of a toy on top of a button that said Buy Now, and you accidentally clicked the button when you really just wanted to look at the toy",
    },
  ]);
  const [query, setQuery] = useState("");

  return (
    <div>
      <section>
        <div className="container">
          <h1 className="glossary-heading">Glossary</h1>
          <div className="search-bar">
            <input
              className="search"
              placeholder="Search..."
              type="text"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <br></br>
          <div className="cards">
            {cards
              .filter((c) => c.title.includes(query))
              .map((card, i) => (
                <div key={i} className="card">
                  <h3>{card.title}</h3>
                  <p className="glossary-p">{card.data}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
