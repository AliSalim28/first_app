import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
  // query = "react" [query:string] : react string
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filterQuestion = questions.filter((questions) =>
    questions.title.toLowerCase().includes(query?.toLowerCase())
  );
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 "
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          imgsrc="/icons/search.svg"
          placeholder="Search questions..."
          route="/"
        />
      </section>
      {/* HOME FILTER */}
      <div className="mt-10 flex w-full gap-6 flex-col">
        {filterQuestion.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
