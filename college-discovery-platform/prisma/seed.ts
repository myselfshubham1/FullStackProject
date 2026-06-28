import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.savedCollege.deleteMany();

  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      // --- IITs ---
      {
        name: "Indian Institute of Technology (IIT) Bombay",
        city: "Mumbai",
        type: "IIT",
        fees: 220000,
        rating: 4.9,
        placements: 96,
        description: "A premier public technical and research university located in Powai, Mumbai. Renowned globally for its engineering programs, cutting-edge research, and vibrant entrepreneurship ecosystem."
      },
      {
        name: "Indian Institute of Technology (IIT) Delhi",
        city: "New Delhi",
        type: "IIT",
        fees: 225000,
        rating: 4.9,
        placements: 95,
        description: "Located in the capital city, IIT Delhi is a center of excellence for training, research, and development in science, engineering, and technology."
      },

      // --- NITs & IIITs ---
      {
        name: "National Institute of Technology (NIT) Trichy",
        city: "Tiruchirappalli",
        type: "NIT",
        fees: 150000,
        rating: 4.6,
        placements: 92,
        description: "Consistently ranked as the top NIT in India, offering top-tier engineering education with a highly competitive student peer group."
      },
      {
        name: "National Institute of Technology (NIT) Surathkal",
        city: "Mangaluru",
        type: "NIT",
        fees: 145000,
        rating: 4.5,
        placements: 90,
        description: "Located right on the Arabian Sea coast, this NIT boasts excellent research infrastructure and a stellar track record in tech placementss."
      },
      {
        name: "Indian Institute of Information Technology (IIIT) Hyderabad",
        city: "Hyderabad",
        type: "IIIT",
        fees: 360000,
        rating: 4.8,
        placements: 98,
        description: "A premier private-public partnership institute focused heavily on Computer Science, AI, and research. Famous for its competitive programming culture."
      },

      // --- MEDICAL ---
      {
        name: "All India Institute of Medical Sciences (AIIMS)",
        city: "New Delhi",
        type: "Medical",
        fees: 5000,
        rating: 4.9,
        placements: 100,
        description: "The apex medical college and research public university in India, offering world-class medical education and healthcare services at nominal costs."
      },
      {
        name: "Christian Medical College (CMC)",
        city: "Vellore",
        type: "Medical",
        fees: 45000,
        rating: 4.8,
        placements: 99,
        description: "An internationally renowned medical destination and college, known for high-quality medical research and an emphasis on community healthcare."
      },
      {
        name: "Maulana Azad Medical College (MAMC)",
        city: "New Delhi",
        type: "Medical",
        fees: 12000,
        rating: 4.7,
        placements: 100,
        description: "A world-class government medical college in the heart of Delhi, drawing extreme patient volume which provides unmatched clinical exposure."
      },
      {
        name: "King George's Medical University (KGMU)",
        city: "Lucknow",
        type: "Medical",
        fees: 55000,
        rating: 4.6,
        placements: 98,
        description: "One of the oldest and most prestigious state medical universities in northern India, featuring incredible surgical training facilities."
      },

      // --- LAW ---
      {
        name: "National Law School of India University (NLSIU)",
        city: "Bengaluru",
        type: "Law",
        fees: 350000,
        rating: 4.8,
        placements: 98,
        description: "The premier institution for legal education in India, known for its intense academic curriculum and outstanding moot court record."
      },

      // --- PRIVATE ---
      {
        name: "Birla Institute of Technology and Science (BITS) Pilani",
        city: "Pilani",
        type: "Private",
        fees: 550000,
        rating: 4.7,
        placements: 94,
        description: "A leading private deemed university known for its flexible academic structure, 'No Reservation' policy, and robust Practice School (internship) program."
      },
      {
        name: "Vellore Institute of Technology (VIT)",
        city: "Vellore",
        type: "Private",
        fees: 198000,
        rating: 4.2,
        placements: 85,
        description: "A massive, high-tech private university campus known for its flexible credit system, diverse student crowd, and vast record-breaking placements drives."
      },
      {
        name: "Thapar Institute of Engineering and Technology",
        city: "Patiala",
        type: "Private",
        fees: 420000,
        rating: 4.1,
        placements: 84,
        description: "One of western India's oldest and finest private engineering institutions, featuring deep industry ties and excellent campus amenities."
      },
      {
        name: "Manipal Academy of Higher Education",
        city: "Manipal",
        type: "Private",
        fees: 460000,
        rating: 4.3,
        placements: 86,
        description: "A world-class private university town offering excellent medical, engineering, and media programs with superior infrastructure."
      },
      {
        name: "SRM Institute of Science and Technology",
        city: "Chennai",
        type: "Private",
        fees: 250000,
        rating: 4.0,
        placements: 82,
        description: "A large-scale private institution offering state-of-the-art labs, international collaborations, and expansive career placements services."
      },
      {
        name: "Amity University",
        city: "Noida",
        type: "Private",
        fees: 320000,
        rating: 3.9,
        placements: 78,
        description: "A modern, sprawling private university campus featuring diverse multi-disciplinary programs, global study options, and corporate corporate linkages."
      },
      {
        name: "Christ University",
        city: "Bengaluru",
        type: "Private",
        fees: 180000,
        rating: 4.3,
        placements: 85,
        description: "Highly reputable private university famed for its commerce, business management, and humanities courses, alongside strict holistic discipline."
      },
      {
        name: "Symbiosis International University",
        city: "Pune",
        type: "Private",
        fees: 400000,
        rating: 4.4,
        placements: 88,
        description: "A prominent multi-campus private university specializing heavily in law, management, design, and media communications."
      },
      {
        name: "Kalinga Institute of Industrial Technology (KIIT)",
        city: "Bhubaneswar",
        type: "Private",
        fees: 350000,
        rating: 4.1,
        placements: 88,
        description: "A rapidly growing private university in eastern India, praised for its vast campus facilities, sports infrastructure, and consistent tech placementss."
      },
      {
        name: "Nirma University",
        city: "Ahmedabad",
        type: "Private",
        fees: 220000,
        rating: 4.1,
        placements: 80,
        description: "A well-regarded private university in Gujarat offering quality professional courses in engineering, pharmacy, and management."
      },
      {
        name: "RV College of Engineering (RVCE)",
        city: "Bengaluru",
        type: "Private",
        fees: 250000,
        rating: 4.3,
        placements: 89,
        description: "One of Bengaluru's most sought-after private engineering colleges, utilizing its prime location to source incredible IT and core job placementss."
      },
      {
        name: "BMS College of Engineering",
        city: "Bengaluru",
        type: "Private",
        fees: 240000,
        rating: 4.2,
        placements: 85,
        description: "The first private engineering college in India, maintaining a legacy of deep engineering foundations and robust alumni outreach."
      },
      {
        name: "ITM University Gwalior",
        city: "Gwalior",
        type: "Private",
        fees: 150000,
        rating: 4.0,
        placements: 76,
        description: "A prominent private university in Madhya Pradesh known for its massive green campus, skill-based technical education, and active student project workshops."
      },
      {
        name: "Lovely Professional University (LPU)",
        city: "Phagwara",
        type: "Private",
        fees: 240000,
        rating: 3.8,
        placements: 75,
        description: "One of the largest single-campus private universities in India, hosting a highly international student base and varied multi-disciplinary streams."
      },
      {
        name: "Chandigarh University",
        city: "Mohali",
        type: "Private",
        fees: 200000,
        rating: 4.0,
        placements: 80,
        description: "A rapidly advancing private institution known for widespread corporate partnerships, high-volume placementss, and energetic media marketing."
      },
      {
        name: "Chitkara University",
        city: "Rajpura",
        type: "Private",
        fees: 180000,
        rating: 3.9,
        placements: 78,
        description: "A well-organized private university in the Punjab/Chandigarh region, appreciated for clean campus life, coding bootcamps, and industrial internships."
      },
      {
        name: "GLA University",
        city: "Mathura",
        type: "Private",
        fees: 160000,
        rating: 3.8,
        placements: 74,
        description: "A vast private university setup in Uttar Pradesh focused heavily on practical engineering labs, business management, and competitive job preparation."
      },
      {
        name: "Galgotias University",
        city: "Greater Noida",
        type: "Private",
        fees: 170000,
        rating: 3.7,
        placements: 75,
        description: "Strategically located in the NCR region, this private university draws a massive student population due to its energetic campus culture and IT industry links."
      },
      {
        name: "Techno India University",
        city: "Kolkata",
        type: "Private",
        fees: 110000,
        rating: 3.6,
        placements: 70,
        description: "A noticeable private university hub in West Bengal providing structured professional tracks in tech, management, and basic sciences."
      },
      {
        name: "Symbiosis Institute of Design (SID)",
        city: "Pune",
        type: "Private",
        fees: 420000,
        rating: 4.1,
        placements: 82,
        description: "A private design school offering highly structured tracks in graphic design, fashion layout, and interior architecture inside an upbeat city ecosystem."
      },

      // --- UNIVERSITIES (Public / State / Central) ---
      {
        name: "Indian Institute of Management (IIM) Ahmedabad",
        city: "Ahmedabad",
        type: "University",
        fees: 1250000,
        rating: 4.9,
        placements: 100,
        description: "India's top-ranked business school, famous for its rigorous case-study pedagogy, global alumni network, and exceptional management programs."
      },
      {
        name: "Indian Institute of Science (IISc)",
        city: "Bengaluru",
        type: "University",
        fees: 50000,
        rating: 4.9,
        placements: 92,
        description: "A premier institute for advanced scientific and technological research and education, consistently ranked as India's top research university."
      },
      {
        name: "Delhi Technological University (DTU)",
        city: "New Delhi",
        type: "University",
        fees: 210000,
        rating: 4.5,
        placements: 88,
        description: "Formerly known as Delhi College of Engineering, it has a rich legacy of producing top-tier tech talent and hosting massive campus placements drives."
      },
      {
        name: "Anna University",
        city: "Chennai",
        type: "University",
        fees: 60000,
        rating: 4.3,
        placements: 82,
        description: "A premier state university in Tamil Nadu, offering highly respected programs in engineering, technology, and applied sciences."
      },
      {
        name: "Jadavpur University",
        city: "Kolkata",
        type: "University",
        fees: 10000,
        rating: 4.6,
        placements: 86,
        description: "Famous for its incredibly low fee structure, high return on investment (ROI), stellar research output, and active student culture."
      },
      {
        name: "Savitribai Phule Pune University",
        city: "Pune",
        type: "University",
        fees: 45000,
        rating: 4.2,
        placements: 75,
        description: "Known as the 'Oxford of the East', this university houses exceptional departments in sciences, languages, and management studies."
      },
      {
        name: "University of Delhi (DU)",
        city: "New Delhi",
        type: "University",
        fees: 20000,
        rating: 4.5,
        placements: 80,
        description: "One of India's largest and most prestigious central universities, iconic for its arts, commerce, and science undergraduate colleges."
      },
      {
        name: "PSG College of Technology",
        city: "Coimbatore",
        type: "University",
        fees: 120000,
        rating: 4.4,
        placements: 87,
        description: "An industry-supported government-aided private college highly respected for its core engineering branches and strong textile/manufacturing research."
      },
      {
        name: "College of Engineering, Pune (COEP)",
        city: "Pune",
        type: "University",
        fees: 90000,
        rating: 4.5,
        placements: 88,
        description: "An iconic unitary university of the Government of Maharashtra, standing as the third oldest engineering college in Asia."
      },
      {
        name: "VJTI Mumbai",
        city: "Mumbai",
        type: "University",
        fees: 85000,
        rating: 4.4,
        placements: 90,
        description: "Veermata Jijabai Technological Institute is a historic state-aided college in Mumbai known for high academic cut-offs and superb tech hiring."
      },
      {
        name: "Madhav Institute of Technology and Science (MITS)",
        city: "Gwalior",
        type: "University",
        fees: 85000,
        rating: 3.9,
        placements: 72,
        description: "A historic government-aided autonomous engineering college in MP, offering solid technical fundamentals and stable regional hiring."
      },
      {
        name: "Institute of Engineering and Technology (IET)",
        city: "Lucknow",
        type: "University",
        fees: 90000,
        rating: 4.0,
        placements: 76,
        description: "The premier state-governed engineering college under AKTU, attracting top-rankers from across Uttar Pradesh."
      },
      {
        name: "National Institute of Design (NID)",
        city: "Ahmedabad",
        type: "University",
        fees: 380000,
        rating: 4.8,
        placements: 90,
        description: "The absolute gold standard for industrial, communication, and product design education in India, boasting globally recognized alumni."
      },
      {
        name: "National Institute of Fashion Technology (NIFT)",
        city: "New Delhi",
        type: "University",
        fees: 290000,
        rating: 4.6,
        placements: 88,
        description: "The pioneering institute of fashion education in India, anchoring apparel design, luxury management, and tech-driven fashion design."
      },
      {
        name: "Shri Ram College of Commerce (SRCC)",
        city: "New Delhi",
        type: "University",
        fees: 30000,
        rating: 4.8,
        placements: 94,
        description: "The premier college for commerce and economics education in India, famous for near-perfect entry cutoffs and elite investment banking recruitments."
      }
    ]
  });

  const count = await prisma.college.count();

  console.log("College Count:", count);
}



main()
  .then(() => {
    console.log("Seed completed");
  })
  .catch((err) => {
    console.error("SEED ERROR:");
    console.error(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }
  );