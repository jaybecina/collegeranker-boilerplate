export const generateRandomGrade = () => {
  const grades = ["A", "B", "C", "D"];
  const randomIndex = Math.floor(Math.random() * grades.length);
  return grades[randomIndex];
};
