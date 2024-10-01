import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Tsec1() {



  useGSAP(() => {


    const ts1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".tsec1",
            start: "top 90%",
            end: "bottom",
            scrub: 3,
            markers:true,
        }
    })


    ts1.from(".tsec1 .toppp",{
      y:20,
      opacity:0,
      stagger:0.2,
      
    })

    ts1.from(".bit",{
      y:20,
      opacity:0,
      
    })

    ts1.from(".tsec1 li",{
      y:20,
      opacity:0,
      stagger:0.2,
      
    })






})


  return (
    <div className='tsec1'>
        <h1 className='toppp'>ZONEIS Gym Training Regimen</h1>
        <p className='toppp'>At ZONEIS, we focus on a balanced and personalized approach to fitness, combining strength training, cardio, flexibility, and mobility exercises to ensure complete physical conditioning. The training regimen is designed for all fitness levels, from beginners to advanced athletes.</p>

        <h1 className='bit'>Core Training Programs:</h1>

        <h2>Strength & Hypertrophy:</h2>
        <li>Focus: Building muscle strength and size.</li>
        <li>Key Exercises: Squats, Deadlifts, Bench Press, Pull-ups, Shoulder Press.</li>
        <li>Program: 4–5 sets of 8–12 reps, focusing on progressive overload.</li>
        <li>Training Days: 4 days a week with targeted muscle group splits (Upper/Lower).</li>

        <h2>Functional Fitness:</h2>
        <li>Focus: Enhancing overall physical functionality through compound movements.</li>
        <li>Key Exercises: Kettlebell Swings, Box Jumps, Burpees, TRX Rows, Battle Ropes.</li>
        <li>Program: 3 sets of 10–15 reps, circuit-based for high intensity.</li>
        <li>Training Days: 3 days a week with varied workouts every session.</li>

        <h2>Cardio & Conditioning:</h2>
        <li>Focus: Improving cardiovascular endurance and fat burning.</li>
        <li>Key Workouts: HIIT, Treadmill Sprints, Cycling, Rowing, Jump Rope.</li>
        <li>Program: Intervals of high-intensity work for 20–30 seconds, followed by rest.</li>
        <li>Training Days: 3–4 days a week, often paired with lighter strength sessions.</li>

        <h2>Flexibility & Mobility:</h2>
        <li>Focus: Tailored programs for athletes looking to improve performance in their respective sports.</li>
        <li>Key Workouts: Agility Drills, Plyometrics, Speed Work, Powerlifting.</li>
        <li>Program: Custom workouts based on the sport and athlete's needs, focusing on skill development and injury prevention.</li>

        <hr />

        <h1>Weekly Training Schedule:</h1>
        <ol>
            <li>Monday: Upper Body Strength (Push & Pull Movements)</li>
            <li>Tuesday: Lower Body Strength (Squats, Deadlifts, Lunges)</li>
            <li>Wednesday: Cardio & Conditioning (HIIT or Steady State)</li>
            <li>Thursday: Active Rest (Mobility & Flexibility Training)</li>
            <li>Friday: Functional Fitness (Circuit Training)</li>
            <li>Saturday: Full Body Strength (Compound Lifts, Core Work)</li>
            <li>Sunday: Rest or Light Yoga/Stretching</li>
        </ol>

        <hr />

        <h1>Special Programs:</h1>

        <ol>
            <li>ZONEIS Challenges: 30-day transformation challenges designed for body recomposition and fitness improvements, including diet plans and personal coaching.</li>
            <li>Personal Training: One-on-one sessions tailored to individual fitness goals.</li>
            <li>Group Classes: Dynamic group workouts like Zumba, Spin, and Bootcamps.</li>
        </ol>

        <p>ZONEIS Gym is committed to helping members achieve their fitness goals through structured, motivating, and personalized training programs that suit everyone’s needs.</p>
    </div>


  )
}

export default Tsec1