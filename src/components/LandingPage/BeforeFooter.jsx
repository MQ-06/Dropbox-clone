import React from "react";

const BeforeFooter = () => {
  const cards = [
    {
      title:
        "Study: Here’s how many hours we lose to distraction—and how to get our focus back",
      img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-Distraction-Article.png?id=13349693-d080-4ae6-8498-7b58b46dfeb9&output_type=png",
      description:
        " For our study, Economist Impact included knowledge workers globally—and found that, no matter where people work, there’s a significant cost to lost focus around the world.",
      link: "https://blog.dropbox.com/topics/work-culture/economist-impact-cost-of-lost-focus-research-study-2023",
      alt: "Distraction study",
    },
    {
      title:
        "Dropbox teams up with McLaren Racing as an Official Technology Partner of McLaren Formula 1 Team",
      img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-McLaren-Article.png?id=eb21f94b-ce63-462f-928a-e30761ba9321&output_type=png",
      description:
        " Dropbox brings simplified sharing, collaboration, and organization to the McLaren Formula 1 Team.",
      link: "https://www.dropbox.com/mclaren-f1",
      alt: "McLaren Racing Partnership",
    },
    {
      title: "The best way to share photos with family and friends",
      img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-Photo-Sharing-Article.png?id=3d76b7bb-6145-4f8d-87cf-d156eff5de2d&output_type=png",
      description:
        " Don’t lose precious photos. Save them and share them with loved ones—for free. Here’s an easy-to-follow guide to sharing and storing photos with Dropbox.",
      link: "https://experience.dropbox.com/get-organized/best-way-to-share-photos",
      alt: "Photo Sharing Guide",
    },
  ];

  return (
    <div className="before-footer-section">
      <h2 className="main-heading">Discover, learn, thrive with Dropbox</h2>

      <div className="article-container">
        {cards.map((card, index) => (
          <div className="article-card" key={index}>
            <img src={card.img} alt={card.alt} />
            <div className="article-content">
              <h3 className="article-type">Article</h3>
              <h3 className="article-title text-[16px]">{card.title}</h3>
              <p className="article-description">{card.description}</p>
              <a
                href={card.link}
                className="read-article mt-10 underline text-sm font-bold"
              >
                Read article
              </a>
            </div>
          </div>
        ))}
      </div>

      <a href="https://experience.dropbox.com/" className="more-resources">
        View more resources
      </a>
    </div>
  );
};

export default BeforeFooter;
