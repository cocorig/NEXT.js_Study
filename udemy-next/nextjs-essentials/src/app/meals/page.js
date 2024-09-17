import Link from "next/link";
import { Suspense } from "react";

import { getMeals } from "@/lib/meals";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import MealsLoadingPage from "./loading-out";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
