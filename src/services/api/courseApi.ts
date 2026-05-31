import { Course } from "../../types/course";
import { batchClient } from "./batchClient";
import { fetchWithSWR, invalidateCache } from "./cache";

const COURSES_KEY = "courses:list";
const courseKey = (id: string) => `courses:${id}`;

// 2 min fresh, 10 min stale window
const TTL = 2 * 60_000;
const STALE_TTL = 10 * 60_000;

export const courseApi = {
  getCourses(): Promise<Course[]> {
    return fetchWithSWR(
      COURSES_KEY,
      () => batchClient.get("/courses"),
      TTL,
      STALE_TTL,
    );
  },

  getCourse(id: string): Promise<Course> {
    return fetchWithSWR(
      courseKey(id),
      () => batchClient.get(`/courses/${id}`),
      TTL,
      STALE_TTL,
    );
  },

  invalidateCourses(): void {
    invalidateCache(COURSES_KEY);
  },

  invalidateCourse(id: string): void {
    invalidateCache(courseKey(id));
  },
};
