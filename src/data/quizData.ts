export interface QuizData {
  age: string;
  weightToLose: string;
  bodyType: string;
  targetArea: string;
  name: string;
  weightImpact: string;
  happyWithAppearance: string;
  obstacle: string;
  benefits: string[];
  currentWeight: string;
  height: string;
  targetWeight: string;
  routine: string;
  sleepHours: string;
  waterIntake: string;
  dreamBody: string;
}

export const initialQuizData: QuizData = {
  age: "",
  weightToLose: "",
  bodyType: "",
  targetArea: "",
  name: "",
  weightImpact: "",
  happyWithAppearance: "",
  obstacle: "",
  benefits: [],
  currentWeight: "",
  height: "",
  targetWeight: "",
  routine: "",
  sleepHours: "",
  waterIntake: "",
  dreamBody: "",
};

export const quizSteps = [
  { id: "age", progress: 0 },
  { id: "weightToLose", progress: 5 },
  { id: "bodyType", progress: 10 },
  { id: "targetArea", progress: 15 },
  { id: "name", progress: 20 },
  { id: "weightImpact", progress: 25 },
  { id: "happyWithAppearance", progress: 30 },
  { id: "obstacle", progress: 35 },
  { id: "howItWorks", progress: 40 },
  { id: "benefits", progress: 45 },
  { id: "testimonial", progress: 50 },
  { id: "currentWeight", progress: 55 },
  { id: "height", progress: 60 },
  { id: "targetWeight", progress: 65 },
  { id: "routine", progress: 70 },
  { id: "sleepHours", progress: 75 },
  { id: "waterIntake", progress: 80 },
  { id: "loading", progress: 90 },
  { id: "result", progress: 95 },
  { id: "dreamBody", progress: 98 },
  { id: "offer", progress: 100 },
];
