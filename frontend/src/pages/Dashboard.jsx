import Navbar from "../components/Navbar";
import SubjectCard from "../components/SubjectCard";

export default function Dashboard() {

  const subjects = [
    {
      id: 1,
      name: "Deep Learning",
      streak: 14,
      completed: true,
    },
    {
      id: 2,
      name: "GATE Maths",
      streak: 5,
      completed: true,
    },
    {
      id: 3,
      name: "ML Programming",
      streak: 6,
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-4">

        <h2 className="text-lg font-bold mb-4">
          Today's Subjects
        </h2>

        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            name={subject.name}
            streak={subject.streak}
            completed={subject.completed}
          />
        ))}

      </div>

    </div>
  );
}