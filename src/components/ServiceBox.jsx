"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ServiceBox = ({ service, bgColor }) => {
  return (
    <motion.div 
      className={`rounded-3xl p-8 md:p-10 lg:p-12 w-full md:w-4/5 mx-auto shadow-sm hover:shadow-md transition-shadow mb-6 ${bgColor}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row lg:gap-12">
        {/* Left section with icon, title and description */}
        <div className="flex flex-col items-start w-full lg:w-2/5 mb-8 lg:mb-0">
          <div className="text-teal-500 mb-6">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {service.icon}
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h2>
          <p className="text-gray-700 text-lg">
            {service.description}
          </p>
        </div>
        
        {/* Right section with Q&A content */}
        <div className="w-full lg:w-3/5">
          <div className="space-y-8">
            {service.sections.map((section, index) => (
              <div key={index} className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 text-teal-500 w-8 h-8 rounded-full flex items-center justify-center text-lg font-medium">{index + 1}</div>
                  <h4 className="text-xl font-bold text-gray-800">{section.question}</h4>
                </div>
                {Array.isArray(section.answer) ? (
                  section.answer.map((paragraph, i) => (
                    <p key={i} className="text-gray-700 pl-11 mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-700 pl-11">{section.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceBoxes = () => {
  const services = [
    {
      title: "Applied Behavior Analysis (ABA)",
      description: "ABA is the gold-standard of treatment that has been clinically proven to be effective in helping children with autism. You and your child deserve an intervention that works.",
      icon: (
        <>
          <path d="M32 20C32 22.1217 31.1571 24.1566 29.6569 25.6569C28.1566 27.1571 26.1217 28 24 28C21.8783 28 19.8434 27.1571 18.3431 25.6569C16.8429 24.1566 16 22.1217 16 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 28V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M18 38H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12C25.1046 12 26 11.1046 26 10C26 8.89543 25.1046 8 24 8C22.8954 8 22 8.89543 22 10C22 11.1046 22.8954 12 24 12Z" fill="currentColor"/>
          <path d="M36 14C37.1046 14 38 13.1046 38 12C38 10.8954 37.1046 10 36 10C34.8954 10 34 10.8954 34 12C34 13.1046 34.8954 14 36 14Z" fill="currentColor"/>
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
        </>
      ),
      sections: [
        {
          question: "What is Applied Behavior Analysis (ABA)?",
          answer: "ABA is focused on improving specific behaviors through a structured observation and analysis. ABA is particularly known for its effectiveness in treating ASD, focusing on skills like communication, social skills, and expression."
        },
        {
          question: "How does Mayur Child Care Center use ABA?",
          answer: [
            "As parents, it's our goal to prepare our children for life.",
            "We want to give them the skills and abilities they need to succeed, build relationships, and grow independence. We're here to partner with you in that goal.",
            "ABA is particularly known for its effectiveness in treating ASD, focusing on skills like communication, social skills, and expression."
          ]
        }
      ]
    },
    {
      title: "Speech Therapy",
      description: "Enriching your child's world with words, and helping your child express themselves. All children communicate in some form, even if nonverbal. It's our job to help them communicate their wants and needs in a way that is understood by others. This ranges from developing oral motor control to making sounds to using words to create meaningful relationships.",
      icon: (
        <>
          <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 30V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M12 24H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 24H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M19 19L24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 24L29 29" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M19 29L24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 24L29 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      sections: [
        {
          question: "What is Speech Therapy?",
          answer: "With pediatric speech therapy, our Speech & Language Pathologists (SLPs) work with children and adults who have difficulty with communication. Pediatric speech therapy addresses the way that a child verbally communicates including: Receptive language (processing language), Expressive language (both verbal/nonverbal communication), Articulation (speech sound production), and Oral motor (use of sound)."
        },
        {
          question: "What skills does Mayur Child Care Center treat in Speech Therapy",
          answer: [
            "Mayur Child Care Center's pediatric speech therapy addresses these main focal areas to help your child thrive.",
            "‍Articulation refers to how speech sounds are made. A child with an articulation disorder could have difficulty with producing one particular sound or several sounds in error.",
            "Voice refers to the way sounds are produced using vocal cords. Children with voice disorders could sound very 'raspy' or 'harsh' or they may have difficulty with using an appropriate speaking volume.",
            "Fluency refers to the forward-flowing movement of speech. Children with fluency disorders or 'stutters' might repeat whole words or just a part of the word.",
            "Language is a shared communication system and refers to both receptive language and expressive language. Children with language disorders can show a variety of symptoms from mild to severe that could include difficulty with: listening and following directions, using age-appropriate vocabulary, communicating socially with peers and adults."
          ]
        }
      ]
    },
    {
      title: "Occupational Therapy",
      description: "Occupational therapy helps children strengthen the skills that are needed for everyday life.",
      icon: (
        <>
          <path d="M24 12V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M36 24H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 18L18 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 30L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12L36 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12L12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 36L36 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 36L12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      sections: [
        {
          question: "What is Occupational Therapy (OT)?",
          answer: "Mayur Child Care Center uses occupational therapy play techniques to build a child's foundation in sensory processing, self-care, fine motor development, and self-regulation. Build skills for life."
        },
        {
          question: "How does Mayur Child Care Center use OT?",
          answer: [
            "Mayur Child Care Center includes self-care skills, social interaction with peers, fine motor skills for completion of age-appropriate craft or school skills, strength, and endurance to be able to participate in age-appropriate motor activities.",
            "At Mayur Child Care Center, we use occupational therapy to improve every day skills like: Sensory Processing Difficulties, Cognition and Perception Challenges, and Motor Skills.",
            "This allows children with neurodevelopmental differences to become more independent and participate in desired activities."
          ]
        }
      ]
    },
    {
      title: "Physical Therapy",
      description: "Mayur Child Care Center fun and supportive environments to address sensory, cognitive, perceptual and fine motor skills, including self-care and handwriting.",
      icon: (
        <>
          <path d="M24 12V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M36 24H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 12L18 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M18 12L30 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12L36 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12L12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 36L36 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 36L12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      sections: [
        {
          question: "What is Physical Therapy (PT)?",
          answer: "Physical Therapy (PT) helps infants, children and adolescents improve their overall function and gross motor skills. It also helps children and adolescents with orthopedic injuries reduce pain. The goals are individualized to meet each child's unique needs and can encompass a variety of domains. We serve children who have difficulties with balance, coordination, strength, endurance, motor planning, and more!"
        },
        {
          question: "How does Mayur Child Care Center use PT?",
          answer: [
            "Mayur Child Care Center's pediatric physical therapy uses activities and exercise to improve gross motor skills and large-scale movements of the arms, legs, and torso, to build strength, balance, coordination, functional mobility, and endurance.",
            "Some common conditions we treat are: developmental delay, cerebral palsy, muscular dystrophy, spina bifida, genetic diagnoses, neurological diagnoses, orthopedic injuries, pain, torticollis, Down Syndrome, and more!",
            "Our physical therapy focuses on improving many skills in children, including: Motor Skills, Balance and Coordination, Strength and Endurance, and Cognitive and Sensory."
          ]
        }
      ]
    },
    {
      title: "Specialty Programs and Services",
      description: "We're reshaping the way healthcare is delivered, ensuring every child gets the care they deserve, anytime and anywhere.",
      icon: (
        <>
          <path d="M24 12V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M36 24H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 18L18 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 30L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12L36 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12L12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 36L36 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 36L12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      sections: [
        {
          question: "What specialty programs are available at Mayur Child Care Center?",
          answer: [
            "Feeding Program: You and your child can enjoy mealtimes again with the benefit of Feeding Therapy. We understand mealtimes can be one of the most stressful parts of the day when a feeding or eating difficulty is at play. With these difficulties, it goes beyond preferential or picky eating. Our feeding therapy helps both children and parents navigate and overcome the difficulties that can come with mealtimes.",
            "Vision Program: The Mayur Child Care Center vision program focuses on understanding and addressing the unique visual needs and challenges children might face. Addressing visual issues can have a profound impact on a child's ability to learn, interact, and navigate the world around them.",
            "Animal Assisted Therapy (AAT): Animal-assisted therapy (AAT) is utilized by medical practitioners across the country to help patients of all ages and backgrounds reach their full potential. AAT is an effective way for individuals to engage in challenging therapy tasks with renewed motivation, reduced anxiety, and improved-self concept. Some common benefits for pediatric diagnoses include"
          ]
        }
      ]
    },
    {
      title: "Aquatic Therapy",
      description: "We're reshaping the way healthcare is delivered, ensuring every child gets the care they deserve, anytime and anywhere.",
      icon: (
        <>
          <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 30V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M12 24H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 24H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M19 19L24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 24L29 29" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M19 29L24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 24L29 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      sections: [
        {
          question: "Why Choose Mayur Child Care Center Aquatic Therapy?",
          answer: "Water can be very intriguing to children with special needs, participating in Aquatic therapy can support confidence and safety within this environment. Your child does not need to know how to swim in order to participate in aquatic therapy however if they do, we will use those skills to support goal areas."
        },
        {
          question: "What are the goals of Mayur Child Care Center Aquatic Therapy?",
          answer: [
            "Aquatic therapy is focused on utilizing the water properties to support the following areas:",
            "Increased strength and range of motion",
            "Improved breath control and respiration",
            "Reach developmental milestones.",
            "Improved social skills and self-confidence",
            "Pain Management",
            "Sensory support",
            "Seen as a fun and safe environment for therapy sessions",
            "We offer Pediatric aquatic therapy as a great support to land therapy to help children meet a variety of goals."
          ]
        }
      ]
    }
  ];

  // Array of background color classes
  const bgColors = [
    "bg-[#F1FBF9]", // Original teal-50
    "bg-[#F9F1FB]", // Light purple
    "bg-[#FBF9F1]", // Light yellow
    "bg-[#F1F8FB]", // Light blue
    "bg-[#FBF1F1]", // Light red
    "bg-[#F1FBF5]"  // Light mint
  ];

  return (
    <div className="container mx-auto px-4 bg-white py-12">
      <div className="flex flex-col gap-8">
        {services.map((service, index) => (
          <ServiceBox 
            key={index} 
            service={service} 
            bgColor={bgColors[index % bgColors.length]} // Cycle through colors
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceBoxes;