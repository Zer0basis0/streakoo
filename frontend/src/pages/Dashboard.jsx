import Navbar from "../components/Navbar";
import SubjectCard from "../components/SubjectCard";
import MetricCard from "../components/MetricCard";

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

      <div className="max-w-6xl mx-auto p-4">

        <h2 className="text-lg font-bold mb-4">
        <div className="grid grid-cols-3 gap-3 mb-6">

  <MetricCard
    value="6"
    label="Active Subjects"
    color="#111827"
  />

  <MetricCard
    value="14"
    label="Best Streak"
    color="#f59e0b"
  />

  <MetricCard
    value="4/6"
    label="Done Today"
    color="#10b981"
  />

</div>
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