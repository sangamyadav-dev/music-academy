"use client";
import Link from "next/link";
import CourseData from "../data/music-course.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export function FeatureSection() {
  const FeatureSection = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-800">
      <div>
        <div className="text-center">
          <h2 className="text-2xl text-teal-400 font-extrabold tracking-wide uppercase">
            FEATURED COURSE
          </h2>
          <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            Learn With The Best Course
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {FeatureSection.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <p className="ml-3 text-sm leading-5 font-medium text-gray-100">
                          {course.instructor}
                        </p>
                      </div>
                      <div className="mr-3 text-sm leading-5 font-medium text-gray-100">
                        ${course.price}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 mb-6 text-center">
                    <Link href={`/courses/${course.slug}`} legacyBehavior>
                      <a className="px-6 py-2 rounded border border-neutral-400 text-neutral-900 bg-white hover:bg-gray-100 transition duration-200">
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-10 text-center">
          <Link href="/courses" legacyBehavior>
            <a className="text-lg leading-6 font-medium text-teal-400 hover:text-teal-500 transition duration-150 ease-in-out">
              View All Courses
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
