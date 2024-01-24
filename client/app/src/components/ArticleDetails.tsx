// ArticleDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Article } from "../types/Article";

const getArticleById = (id: string): Article | undefined => {
  const articles: Article[] = [
    {
      id: "1",
      title: "Article 1",
      contentWithImages:
        "When Capt. Amit Busi gets a chance to sleep, she does so with her boots on — and in a shared tent in an improvised Israeli military post in northern Gaza.There she commands a company of 83 soldiers, nearly half of them men. It is one of several mixed-gender units fighting in Gaza, where female combat soldiers and officers are serving on the front line for the first time since the war surrounding the establishment of Israel in 1948.[img]https://static01.nyt.com/images/2024/01/16/multimedia/16israel-women-soldiers-06-wjtq/16israel-women-soldiers-06-wjtq-jumbo.jpg?quality=75&auto=webp[/img] turned Gaza into a war zone.Captain Busi is responsible not just for the lives of her subordinates — search-and-rescue engineers whose specialized training and tools help infantry troops enter damaged and booby-trapped buildings at risk of collapse — but also for the wounded soldiers they help evacuate from the battlefield. She and her soldiers also help scour the area for fighters, weapons and rocket launchers and are responsible for guarding the camp.It can be easy to forget Captain Busi is only 23, given the respect she has clearly earned from her subordinates — among them Jews, Druse and Bedouin Muslim men.[img]https://static01.nyt.com/images/2024/01/16/multimedia/16israel-women-soldiers-04-wjtq/16israel-women-soldiers-04-wjtq-jumbo.jpg?quality=75&auto=webp[/img] The borders have been blurred,” Captain Busi said of the decades-long limits on the roles of female combat troops in Israel. The military, she said, “needs us, so we are here.”Since Israeli ground forces entered Gaza in late October, women have been there fighting. Their inclusion has helped bolster the image of the army domestically after the intelligence and military failures of Oct. 7, and amid global scrutiny of the campaign’s high civilian death toll. More than 24,000 Palestinians, many of them women and children, have been killed since the start of the war, according to Gaza health officials. ",
    },
    {
      id: "2",
      title: "Article 2",
      contentWithImages:
      "Former President Donald Trump took a huge step toward winning a third consecutive Republican presidential nomination Tuesday, winning the New Hampshire primary in a one-on-one matchup with his last challenger standing, former South Carolina Gov. Nikki Haley.Haley vowed to remain in the Republican race, saying she’ll now focus on the February 24 primary in her home state of South Carolina.But she’ll be battling history: In modern presidential campaign history, no non-incumbent has won the Iowa caucuses and New Hampshire primary without going on to win his party’s nomination.Trump, who took the stage shortly after Haley spoke, seethed over her decision to continue her campaign.“She had to win,” the former president said. “She failed badly.”As Haley seeks to prove she remains a viable contender, President Joe Biden began preparations for a general election rematch with Trump — dispatching senior White House staffers to work on his campaign and holding an event in Virginia where he hammered Trump on abortion rights.Here are five takeaways from the New Hampshire primaries:"
    }
  ];

  return articles.find((article) => article.id === id);
};

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const article = getArticleById(id || "");

  if (!article) {
    return <h2>Article number {id} not found</h2>;
  }

  const parseContentWithImages = (content: string) => {
    const sections = content.split(/\[img\](.*?)\[\/img\]/);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "100%",
        }}
        >
        {sections.map((section, index) =>
          index % 2 === 0 ? (
            <p key={index}>{section}</p>
          ) : (
            <img
              key={index}
              src={section}
              alt={`Image ${index}`}
              style={{ maxWidth: "100%", maxHeight: "300px", margin: "10px 0" }}
            />
          )
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <h2>{article.title}</h2>
      {parseContentWithImages(article.contentWithImages)}
    </div>
  );
};

export default ArticleDetails;
