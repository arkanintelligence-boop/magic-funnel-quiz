import { useState } from "react";
import { QuizData, initialQuizData, quizSteps } from "@/data/quizData";
import { StepAge } from "./steps/StepAge";
import { StepWeightToLose } from "./steps/StepWeightToLose";
import { StepBodyType } from "./steps/StepBodyType";
import { StepTargetArea } from "./steps/StepTargetArea";
import { StepName } from "./steps/StepName";
import { StepWeightImpact } from "./steps/StepWeightImpact";
import { StepHappyWithAppearance } from "./steps/StepHappyWithAppearance";
import { StepObstacle } from "./steps/StepObstacle";
import { StepHowItWorks } from "./steps/StepHowItWorks";
import { StepBenefits } from "./steps/StepBenefits";
import { StepTestimonial } from "./steps/StepTestimonial";
import { StepCurrentWeight } from "./steps/StepCurrentWeight";
import { StepHeight } from "./steps/StepHeight";
import { StepTargetWeight } from "./steps/StepTargetWeight";
import { StepRoutine } from "./steps/StepRoutine";
import { StepSleepHours } from "./steps/StepSleepHours";
import { StepWaterIntake } from "./steps/StepWaterIntake";
import { StepLoading } from "./steps/StepLoading";
import { StepResult } from "./steps/StepResult";
import { StepDreamBody } from "./steps/StepDreamBody";
import { StepOffer } from "./steps/StepOffer";

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuizData>(initialQuizData);

  const nextStep = () => setStep(prev => prev + 1);
  const progress = quizSteps[step]?.progress || 0;

  const updateData = (field: keyof QuizData, value: string | string[]) => {
    setData(prev => ({ ...prev, [field]: value }));
    nextStep();
  };

  const steps = [
    <StepAge key="age" data={data} onNext={(v) => updateData("age", v)} />,
    <StepWeightToLose key="weight" data={data} onNext={(v) => updateData("weightToLose", v)} progress={progress} />,
    <StepBodyType key="body" data={data} onNext={(v) => updateData("bodyType", v)} progress={progress} />,
    <StepTargetArea key="target" data={data} onNext={(v) => updateData("targetArea", v)} progress={progress} />,
    <StepName key="name" data={data} onNext={(v) => updateData("name", v)} progress={progress} />,
    <StepWeightImpact key="impact" data={data} onNext={(v) => updateData("weightImpact", v)} progress={progress} />,
    <StepHappyWithAppearance key="happy" data={data} onNext={(v) => updateData("happyWithAppearance", v)} progress={progress} />,
    <StepObstacle key="obstacle" data={data} onNext={(v) => updateData("obstacle", v)} progress={progress} />,
    <StepHowItWorks key="how" data={data} onNext={nextStep} progress={progress} />,
    <StepBenefits key="benefits" data={data} onNext={(v) => updateData("benefits", v)} progress={progress} />,
    <StepTestimonial key="testimonial" data={data} onNext={nextStep} progress={progress} />,
    <StepCurrentWeight key="currentWeight" data={data} onNext={(v) => updateData("currentWeight", v)} progress={progress} />,
    <StepHeight key="height" data={data} onNext={(v) => updateData("height", v)} progress={progress} />,
    <StepTargetWeight key="targetWeight" data={data} onNext={(v) => updateData("targetWeight", v)} progress={progress} />,
    <StepRoutine key="routine" data={data} onNext={(v) => updateData("routine", v)} progress={progress} />,
    <StepSleepHours key="sleep" data={data} onNext={(v) => updateData("sleepHours", v)} progress={progress} />,
    <StepWaterIntake key="water" data={data} onNext={(v) => updateData("waterIntake", v)} progress={progress} />,
    <StepLoading key="loading" data={data} onNext={nextStep} progress={progress} />,
    <StepResult key="result" data={data} onNext={nextStep} progress={progress} />,
    <StepDreamBody key="dream" data={data} onNext={(v) => updateData("dreamBody", v)} progress={progress} />,
    <StepOffer key="offer" data={data} />,
  ];

  return <>{steps[step] || steps[0]}</>;
};
