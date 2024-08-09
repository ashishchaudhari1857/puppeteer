function extractData() {
  return {
    name: "Mr. Tata",
    personalityType: "Collaborative Go-Getter",
    valueStatement:"I excel through diligent precision and empathetic collaboration, ensuring reliable and thoughtful outcomes in all my endeavors.",
    summaryData: {
      superPowers: [
        "Promoting open communication",
        "Planning and executing",
        "Facilitating",
        "Bringing closure and completion to tasks",
        "Meticulous attention to detail",
        "Reliability & dependability when committed to something",
        "Collaboration and stakeholder management",
        "Empathetic and caring nature",
        "Building genuine partnerships",
        "Cooperation and approachability",
        "Keeping your ego in check",
      ],
      combatTerritories: [
        "Working at the extreme ends of the spectrum of",
        "Being overly pleasant at times and being overly rigid at times",
        "non-confrontational with some and aggressive with others",
        "Interacting outside of your comfort zone",
        "Seeming to be unapproachable by people you don't know",
        "Networking with new people",
      ],
      personalityWords: [
        "Achiever",
        "Empathetic",
        "Organizer",
        "Cooperative",
        "Planner",
        "Thoughtful",
        "Dependable",
        "Harmonizer",
        "Systematic",
        "Peace-maker",
        "Self-controlled",
      ],
      roles: [
        {
          "Project Management":
            "Overseeing projects with detailed planning and execution",
        },
        { "Team Coordination": "Facilitating teamwork and collaboration" },
        {
          "Quality Assurance":
            "Ensuring attention to detail and high standards",
        },
        {
          "Operations Management":
            "Managing tasks with timeliness and precision",
        },
        { "Customer Service": "Providing empathetic and reliable support" },
        {
          "Human Resources":
            "Working in roles that require collaboration and a democratic approach",
        },
        {
          "Event Planning":
            "Planning and executing events with a high degree of organization",
        },
      ],
    },
    roleDescription:"You excel in roles that require meticulous planning, seamless execution, and collaboration within a supportive and democratic environment.",

    scores: [45, 83, 82, 65, 32],
    skillsToInvest: {
      // technical: [
      //   {
      //     "Data Analysis":
      //       "Proficiency in data analysis tools (e.g., Excel, SQL, Tableau) to make informed decisions based on product performance and customer feedback.",
      //   },
      //   {
      //     "Project Management Software":
      //       "Familiarity with tools like Jira, Trello, or Asana to manage tasks and timelines effectively.",
      //   },
      //   {
      //     "Technical Writing":
      //       "Ability to create clear and concise documentation for product specifications, processes, and user manuals.",
      //   },
      //   {
      //     "Market Research":
      //       "Skills in conducting market research and competitor analysis to understand market needs and trends.",
      //   },
      //   {
      //     "Software Development Lifecycle (SDLC)":
      //       "Understanding of SDLC processes to effectively coordinate with development teams and ensure timely product releases.",
      //   },
      // ],
      behavioral: [
        {
          "Conflict Resolution":
            "Training in conflict resolution techniques to handle disagreements and tough negotiation situations more effectively.",
        },
        {
          "Assertiveness Training":
            "Developing assertiveness to balance agreeableness with the ability to stand firm when necessary.",
        },
        {
          "Emotional Intelligence":
            "Enhancing emotional intelligence to better manage personal emotions and understand others' emotions.",
        },
        {
          "Negotiation Skills":
            "Improving negotiation skills to handle difficult situations without compromising too much.",
        },
        {
          "Flexibility":
            "Learning to be more adaptable and less rigid when situations require a change in plans.",
        },
      ],
    },
    derailers: {
      technical: [
        {
          "Overly Detailed Focus":
            "May spend too much time on details, potentially delaying project timelines."
        },
        {
          "Difficulty in Prioritization":
            "Struggle to prioritize tasks effectively when faced with multiple commitments."
        },
        {
          "Inflexibility in Process":
            "Over-reliance on established processes, making it hard to adapt to new or unforeseen challenges."
        }
      ],
      behavioural: [
        {
          "People Pleasing":
            "May compromise too much to keep others happy, potentially leading to suboptimal decisions."
        },
        {
          "Avoidance of Conflict":
            "Non-confrontational nature may result in unresolved issues and lingering conflicts."
        },
        {
          "Over-Rigidity":
            "Being overly rigid can hinder creativity and adaptability in dynamic environments."
        },
        {
          "Aggressiveness Under Pressure":
            "Potential for aggressive behavior when under significant stress or when commitments are not met."
        },
        {
          "Underestimating Personal Needs":
            "Tendency to prioritize others' needs over personal well-being, leading to burnout."
        },
        {
          "Flexibility":
            "Learning to be more adaptable and less rigid when situations require a change in plans."
        }
      ]
    },
    recommendations: [
      {
        "Assertiveness Training":
          "Invest in assertiveness training to develop the ability to say no when necessary and stand firm in negotiations."
      },
      {
        "Conflict Management":
          "Learn conflict resolution techniques to address and resolve disputes effectively."
      },
      {
        "Time Management":
          "Utilize time management tools and techniques to prioritize tasks and balance attention to detail with overall progress."
      },
      {
        "Flexibility and Adaptability":
          "Practice being more flexible and open to change, especially in dynamic project environments."
      },
      {
        "Self-Care Practices":
          "Develop self-care routines to ensure personal well-being and prevent burnout."
      }
    ],
    Annexure: [
      {
        name: "Open-Minded",
        description:"Open-minded individuals embrace new experiences, creativity, and unconventional ideas. They are adaptable, curious, and willing to take risks.",
        keyTraits:
          "Creativity, curiosity, adaptability, and a preference for novelty and variety.",
      },
      {
        name: "Agreeable",
        description:
          "The tendency to be compassionate, cooperative, and eager to maintain social harmony.",
        keyTraits:
          "Trustworthiness, kindness, empathy, and a strong inclination towards helping others.",
      },
      {
        name: "Conscientious",
        description:
          "The inclination to be disciplined, organized, and goal-oriented.",
        keyTraits:
          "Reliability, attention to detail, perseverance, and a strong sense of duty.",
      },
      {
        name: "Extroversion",
        description: "The tendency to be outgoing, energetic, and sociable.",
        keyTraits:
          "Enthusiasm, assertiveness, talkativeness, and a preference for social interaction.",
      },
      {
        name: "Emotional Stability",
        description:
          "The ability to remain calm, composed, and resilient under stress.",
        keyTraits:
          "Consistency, self-confidence, low anxiety, and effective stress management.",
      },
    ],
  };
}

module.exports = extractData;
