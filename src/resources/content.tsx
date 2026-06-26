import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ashmit",
  lastName: "Patra",
  name: `Ashmit Patra`,
  role: "Backend Engineer",
  avatar: "/images/avatar.jpg",
  email: "me@ashmitpatra.in",
  location: "Asia/Kolkata", // IANA time zone identifier
  languages: ["English", "Hindi", "Odia"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Thoughts on backend engineering, DevOps, and learning in public.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ashmit1795",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ashmit1116/",
    essential: true,
  },
  {
    name: "Hashnode",
    icon: "hashnode",
    link: "https://ashmitcodes.hashnode.dev/",
    essential: true,
  },
  {
    name: "Linktree",
    icon: "linktree",
    link: "https://linktr.ee/ashmitpatra",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Backend Engineer`,
  description: `Portfolio of Ashmit Patra — a backend engineer who enjoys building systems, learning in public, and understanding software from the inside out.`,
  headline: <>Building systems that work, understanding ones that don't</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">अवSaar</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Ongoing Project
        </Text>
      </Row>
    ),
    href: "/work/avsaar",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} currently studying CS at{" "}
      <Text as="span" size="xl" weight="strong">KIIT University</Text>. I spend my time
      building backend systems, poking around cloud infrastructure, and writing about what I
      learn along the way.
    </>
  ),
};

const about: About = {
	path: "/about",
	label: "About",
	title: `About — ${person.name}`,
	description: `Get to know ${person.name} — a backend engineer from Bhubaneswar building real software and learning in public.`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: true,
		link: "https://cal.com/ashmit-patra", // Replace with your Calendly/Cal.com link
	},
	intro: {
		display: true,
		title: "Introduction",
		description: (
			<>
				I'm a CS student at KIIT University who got into programming because I couldn't stop wondering how things work under the hood. What
				happens after you click that button? Where does the data go? How do thousands of people use the same app simultaneously without it
				falling apart?
				<br />
				<br />
				Those questions pushed me toward backend engineering — and eventually toward DevOps, cloud infrastructure, and distributed systems.
				I'm not trying to collect technologies. I'm trying to understand the fundamentals well enough to pick up any tool I need.
				<br />
				<br />
				Right now I'm a CS student by day and a backend builder by night. I've shipped real projects, done a production internship, and I
				write about everything I'm figuring out along the way.
			</>
		),
	},
	work: {
		display: true,
		title: "Work Experience",
		experiences: [
			{
				company: "Nurdd",
				timeframe: "Aug 2025 – May 2026",
				role: "Backend Developer Intern",
				achievements: [
					<>
						Worked on production backend APIs and third-party integrations — my first real exposure to writing code that users actually
						depend on, not just demo code.
					</>,
					<>
						Built and maintained background job pipelines, AI-powered chatbot infrastructure, and large-scale data processing workflows
						using AWS services.
					</>,
					<>
						Learned that engineering is mostly about trade-offs — between performance and simplicity, speed and correctness, and what to
						build now versus later.
					</>,
				],
				images: [],
			},
		],
	},
	studies: {
		display: true,
		title: "Education",
		institutions: [
			{
				name: "KIIT University, Bhubaneswar",
				description: (
					<>B.Tech in Computer Science Engineering — 2023 to Present. Learning algorithms by day, building backend systems by night.</>
				),
			},
		],
	},
	technical: {
		display: true,
		title: "Technical Skills",
		skills: [
			{
				title: "Backend Engineering",
				description: (
					<>
						Designing and building REST APIs, authentication systems, authorization layers, background jobs, and scalable application
						architecture. Comfortable with the full request-response lifecycle and what happens outside of it.
					</>
				),
				tags: [
					{ name: "Node.js", icon: "nodejs" },
					{ name: "Express.js", icon: "express" },
					{ name: "TypeScript", icon: "typescript" },
					{ name: "JavaScript", icon: "javascript" },
					{ name: "REST APIs", icon: "rocket" },
				],
				images: [],
			},
			{
				title: "Databases & Data Layer",
				description: (
					<>
						Working with both relational and document databases — schema design, indexing, transactions, and query optimization.
						ORM-comfortable but SQL-literate. I care about getting the data model right before writing a single route.
					</>
				),
				tags: [
					{ name: "MongoDB", icon: "mongodb" },
					{ name: "PostgreSQL", icon: "postgresql" },
					{ name: "Prisma", icon: "prisma" },
					{ name: "Redis", icon: "redis" },
				],
				images: [],
			},
			{
				title: "Cloud & Infrastructure",
				description: (
					<>
						Deploying applications on Linux servers, setting up NGINX as a reverse proxy, managing processes with PM2, and working with
						AWS EC2. Currently going deep on Docker, CI/CD pipelines, and understanding production systems end-to-end.
					</>
				),
				tags: [
					{ name: "Linux", icon: "linux" },
					{ name: "AWS EC2", icon: "aws" },
					{ name: "NGINX", icon: "nginx" },
					{ name: "Docker", icon: "docker" },
					{ name: "Git", icon: "git" },
				],
				images: [],
			},
			{
				title: "AI Engineering",
				description: (
					<>
						Exploring practical applications of LLMs and generative AI — less interested in the hype, more interested in what's actually
						useful in production. Have worked on AI-powered chatbot infrastructure during my internship.
					</>
				),
				tags: [
					{ name: "GenAI", icon: "rocket" },
					{ name: "LLMs", icon: "document" },
					{ name: "AI SDKs", icon: "globe" },
				],
				images: [],
			},
		],
	},
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "The Commit Log",
  description: `Engineering notes, debugging stories, and things ${person.name} is figuring out — written from the perspective of someone learning, not teaching from a pedestal.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // Also published on Hashnode at https://ashmitcodes.hashnode.dev/
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects — ${person.name}`,
  description: `Real projects built by ${person.name} — backend systems, full-stack products, and everything in between.`,
  // Create new project pages by adding a new .mdx file to app/work/projects
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery — ${person.name}`,
  description: `A collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
