/* eslint-disable @typescript-eslint/no-explicit-any */

const SkillCard = ({ title, skills, icon }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-2">{icon}</span>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill: any, i: number) => (
        <li key={i} className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillCard;
