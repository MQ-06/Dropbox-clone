import React from "react";

const Industries = () => {
  const industries = [
    {
      title: "Construction",
      img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/construction/construction-hero@2x.jpg?id=dbfc08de-234c-40af-949d-7e176ad7d582&width=1920&output_type=jpg",
      description:
        "With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.",
      link: "/business/solutions/construction",
    },
    {
      title: "Technology",
      img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/technology/GettyImages-1139238082.jpg?id=7e97fb44-2356-46b7-8f3d-621a5f98072e&width=3840&output_type=jpg",
      description:
        "Product ideation to development, streamline technology workflows so you can focus on turning great ideas into products people love.",
      link: "/business/solutions/technology",
    },
    {
      title: "Manufacturing",
      img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/manufacturing/GettyImages-900253108.jpg?id=560cbf20-b4fc-4ec9-8769-8a5e9ad1b223&width=3840&output_type=jpg",
      description:
        "Design and engineering teams easily collaborate, managing complex reviews and sharing large files seamlessly.",
      link: "/business/solutions/manufacturing",
    },
    {
      title: "Media",
      img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/creative-tools/The-Luupe-Genya-Oneall.jpg?id=bc0d3114-b68a-41e7-837b-262d86f2d472&output_type=jpg",
      description:
        "Create a flexible media workspace that connects your teams, content, and tools together.",
      link: "/business/solutions/media",
    },
    {
      title: "Professional Services",
      img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/professional-services/etgcNMmB.jpeg?id=e7016484-98bf-4757-acad-25618e33788e&width=3840&output_type=jpg",
      description:
        "Make clients happier with easy collaboration, boosted productivity, and one organized place to get things done.",
      link: "/business/solutions/professional-services",
    },
    {
      title: "Education",
      img: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/education/education-hero@2x.jpg?id=40129999-5c0d-45fc-800e-134eecfd175e&width=1920&output_type=jpg",
      description:
        "Power student learning, faculty research, and staff operations on Dropbox Education’s secure cloud collaboration platform.",
      link: "/education",
    },
  ];

  return (
    <div className="industries-section bg-white">
      <h2>Dropbox empowers across industries</h2>

      <div className="container">
        {industries.map((industry, index) => (
          <div className="card" key={index}>
            <img src={industry.img} alt={industry.title} />
            <div className="card-content">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <a href={industry.link} className="learn-more">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
