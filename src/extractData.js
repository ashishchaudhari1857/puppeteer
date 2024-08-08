function extractData() {
  return {
    name: "Mr. Tata",
    personalityType: "Collaborative Go-Getter",
    Data: {
      SUPERPOWERS: [
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
      COMBAT_TERRITORIES: [
        "Working at the extreme ends of the spectrum of",
        "Being overly pleasant at times and being overly rigid at times",
        "non-confrontational with some and aggressive with others",
        "Interacting outside of your comfort zone",
        "Seeming to be unapproachable by people you don't know",
        "Networking with new people",
      ],
      PERSONALITY_WORDS: [
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
      ROLES: [
        "High degree of planning",
        "Seamless execution",
        "Attention to detail",
        "Facilitation",
        "Collaboration",
        "Team work",
      ],
      STRENGTHS: [
        "Achiever",
        "Organizer",
        "Planner",
        "Dependable",
        "Systematic",
        "Self-controlled",
        "Planner",
        "Dependable",
        "Systematic",
        "Self-controlled",
        "Planner",
        "Dependable",
        "Systematic",
        "Self-controlled",
      ],
    },
    
    scores : [45, 83, 82, 65, 32],
    skills: {
      technical: [
        {
          "Data Analysis": "Proficiency in data analysis tools (e.g., Excel, SQL, Tableau) to make informed decisions based on product performance and customer feedback."
        },
        {
          "Project Management Software": "Familiarity with tools like Jira, Trello, or Asana to manage tasks and timelines effectively."
        },
        {
          "Technical Writing": "Ability to create clear and concise documentation for product specifications, processes, and user manuals."
        },
        {
          "Market Research": "Skills in conducting market research and competitor analysis to understand market needs and trends."
        },
        {
          "Software Development Lifecycle (SDLC)": "Understanding of SDLC processes to effectively coordinate with development teams and ensure timely product releases."
        }
      ],
      behavioral: [
        {
          "Conflict Resolution": "Training in conflict resolution techniques to handle disagreements and tough negotiation situations more effectively."
        },
        {
          "Assertiveness Training": "Developing assertiveness to balance agreeableness with the ability to stand firm when necessary."
        },
        {
          "Emotional Intelligence": "Enhancing emotional intelligence to better manage personal emotions and understand others' emotions."
        },
        {
          "Negotiation Skills": "Improving negotiation skills to handle difficult situations without compromising too much."
        },
        {
          "Flexibility": "Learning to be more adaptable and less rigid when situations require a change in plans."
        }
      ]
    },
    derailers :{
      technical: [
        {
          key: "Overly Detailed Focus",
          value: "May spend too much time on details, potentially delaying project timelines."
        },
        {
          key: "Difficulty in Prioritization",
          value: "Struggle to prioritize tasks effectively when faced with multiple commitments."
        },
        {
          key: "Inflexibility in Process",
          value: "Over-reliance on established processes, making it hard to adapt to new or unforeseen challenges."
        }
      ],
      behavioural: [
        {
          key: "People Pleasing",
          value: "May compromise too much to keep others happy, potentially leading to suboptimal decisions."
        },
        {
          key: "Avoidance of Conflict",
          value: "Non-confrontational nature may result in unresolved issues and lingering conflicts."
        },
        {
          key: "Over-Rigidity",
          value: "Being overly rigid can hinder creativity and adaptability in dynamic environments."
        },
        {
          key: "Aggressiveness Under Pressure",
          value: "Potential for aggressive behavior when under significant stress or when commitments are not met."
        },
        {
          key: "Underestimating Personal Needs",
          value: "Tendency to prioritize others' needs over personal well-being, leading to burnout."
        }
      ]
    },
    recommendations: [
      {
        "key": "Assertiveness Training",
        "value": "Invest in assertiveness training to develop the ability to say no when necessary and stand firm in negotiations."
      },
      {
        "key": "Conflict Management",
        "value": "Learn conflict resolution techniques to address and resolve disputes effectively."
      },
      {
        "key": "Time Management",
        "value": "Utilize time management tools and techniques to prioritize tasks and balance attention to detail with overall progress."
      },
      {
        "key": "Flexibility and Adaptability",
        "value": "Practice being more flexible and open to change, especially in dynamic project environments."
      },
      {
        "key": "Self-Care Practices",
        "value": "Develop self-care routines to ensure personal well-being and prevent burnout."
      }
    ],
    Annexture : [
      {
        name: "Open-Minded",
        description: "Open-minded individuals embrace new experiences, creativity, and unconventional ideas. They are adaptable, curious, and willing to take risks.",
        keyTraits: "Creativity, curiosity, adaptability, and a preference for novelty and variety."
      },
      {
        name: "Agreeable",
        description: "The tendency to be compassionate, cooperative, and eager to maintain social harmony.",
        keyTraits: "Trustworthiness, kindness, empathy, and a strong inclination towards helping others."
      },
      {
        name: "Conscientious",
        description: "The inclination to be disciplined, organized, and goal-oriented.",
        keyTraits: "Reliability, attention to detail, perseverance, and a strong sense of duty."
      },
      {
        name: "Extroversion",
        description: "The tendency to be outgoing, energetic, and sociable.",
        keyTraits: "Enthusiasm, assertiveness, talkativeness, and a preference for social interaction."
      },
      {
        name: "Emotional Stability",
        description: "The ability to remain calm, composed, and resilient under stress.",
        keyTraits: "Consistency, self-confidence, low anxiety, and effective stress management."
      }
    ],
    
  };
}

module.exports = extractData;
